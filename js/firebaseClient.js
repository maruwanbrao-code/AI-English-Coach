/* ============================================================
   AppDB — data layer for AI English Coach (Firebase edition)
   ------------------------------------------------------------
   Works with ZERO setup: everything is cached in localStorage,
   so the app is fully usable the moment you open index.html.

   Optionally, paste your Firebase web-app config into
   FIREBASE_CONFIG below to also back up progress to Cloud Firestore
   (see firebase/firestore.rules and README.md for the one-time setup).

   Why Firebase instead of Supabase: Supabase's free plan pauses a
   project after ~1 week without activity; Firebase's free Spark plan
   does not pause projects for inactivity.

   No login screen is needed — the app signs each browser in with
   Firebase *Anonymous Auth* in the background. Every browser gets its
   own Firebase uid, and the security rules only let that uid read or
   write its own documents under  students/{uid}/...
   ============================================================ */

const FIREBASE_CONFIG = {
  // Paste the values from Firebase console → Project settings →
  // "Your apps" → Web app → SDK setup and configuration → Config.
  // Leave apiKey/projectId blank to run in local-only mode.
  apiKey: "AIzaSyCOnIXN5gmRN1iJjZ6Jm8FJZ955wNMBygo",
  authDomain: "my-english-practic.firebaseapp.com",
  projectId: "my-english-practic",
  storageBucket: "my-english-practic.firebasestorage.app",
  messagingSenderId: "101525453554",
  appId: "1:101525453554:web:dc4cd7f29c26608f4d2e6b"
};

const AppDB = (function () {
  const LS_KEYS = {
    studentId: "eac_student_id",
    state: "eac_state", // { placement, progress, placementHistory }
    syncedPrefix: "eac_fb_synced_" // + uid → "1" once local data was pushed
  };

  // status: "off" | "connecting" | "on" | "error"
  let status = "off";
  let statusListeners = [];
  let db = null;
  let uid = null;
  let authReady = null; // Promise<boolean>

  function setStatus(next, detail) {
    status = next;
    statusListeners.forEach(function (cb) {
      try { cb(status, detail); } catch (e) { /* ignore listener errors */ }
    });
  }

  function hasConfig() {
    return !!(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);
  }

  // Firestore rejects `undefined` values — strip them by a JSON round-trip.
  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function tryInitFirebase() {
    if (!hasConfig()) return false;
    if (!window.firebase || typeof window.firebase.initializeApp !== "function") {
      console.warn("[AppDB] Firebase SDK not loaded, continuing in local-only mode.");
      setStatus("error", "sdk");
      return false;
    }
    try {
      const app = window.firebase.apps && window.firebase.apps.length
        ? window.firebase.app()
        : window.firebase.initializeApp(FIREBASE_CONFIG);
      db = app.firestore();
      setStatus("connecting");
      authReady = app.auth().signInAnonymously()
        .then(function (cred) {
          uid = cred.user.uid;
          setStatus("on");
          pushLocalStateOnce();
          return true;
        })
        .catch(function (err) {
          console.warn("[AppDB] Anonymous sign-in failed — is Anonymous auth enabled in Firebase console? Continuing offline.", err);
          setStatus("error", err && err.code);
          return false;
        });
      return true;
    } catch (err) {
      console.warn("[AppDB] Firebase init failed, continuing in local-only mode.", err);
      setStatus("error", "init");
      return false;
    }
  }

  function uuidv4() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function getStudentId() {
    let id = localStorage.getItem(LS_KEYS.studentId);
    if (!id) {
      id = uuidv4();
      localStorage.setItem(LS_KEYS.studentId, id);
    }
    return id;
  }

  function getLocalState() {
    try {
      const raw = localStorage.getItem(LS_KEYS.state);
      return raw ? JSON.parse(raw) : defaultState();
    } catch (err) {
      console.warn("[AppDB] Failed to parse local state, resetting.", err);
      return defaultState();
    }
  }

  function defaultState() {
    return {
      placement: null, // { level, trackId, startWeek, score, totalQuestions, byLevel, takenAt }
      progress: {},     // { [trackId]: { [weekNumber]: { status, bestScore, attempts, lastAttemptAt } } }
      placementHistory: [] // array of past placement results, newest first
    };
  }

  function setLocalState(state) {
    localStorage.setItem(LS_KEYS.state, JSON.stringify(state));
  }

  // ---- Firestore document helpers ----
  function studentDoc() {
    return db.collection("students").doc(uid);
  }

  // Deterministic IDs so re-sending the same record never creates duplicates.
  function placementDocId(result) {
    return String(result.takenAt || Date.now()).replace(/[^0-9A-Za-z_-]/g, "_");
  }
  function progressDocId(trackId, week) {
    return trackId + "_w" + week;
  }

  function profileData(state) {
    return {
      studentId: getStudentId(),
      currentTrack: state.placement ? state.placement.trackId : null,
      currentLevel: state.placement ? state.placement.level : null,
      updatedAt: new Date().toISOString()
    };
  }
  function placementData(result) {
    return clean({
      levelAwarded: result.level,
      trackId: result.trackId,
      startWeek: result.startWeek,
      score: result.score,
      totalQuestions: result.totalQuestions,
      byLevel: result.byLevel || null,
      takenAt: result.takenAt || new Date().toISOString()
    });
  }
  function progressData(trackId, week, entry) {
    return clean({
      trackId: trackId,
      weekNumber: Number(week),
      status: entry.status,
      bestScore: entry.bestScore === undefined ? null : entry.bestScore,
      attempts: entry.attempts || 0,
      lastAttemptAt: entry.lastAttemptAt || null,
      skippedByPlacement: !!entry.skippedByPlacement
    });
  }

  // Runs a cloud write after anonymous sign-in finishes. Never throws,
  // never blocks the UI — localStorage is always the source of truth.
  function whenCloudReady(label, fn) {
    if (!authReady) return;
    authReady.then(function (ok) {
      if (!ok) return;
      return fn();
    }).catch(function (err) {
      console.warn("[AppDB] " + label + " failed (continuing offline).", err);
    });
  }

  // First time this browser connects to Firebase, upload everything that
  // is already in localStorage (e.g. progress made while Supabase was down).
  function pushLocalStateOnce() {
    const flagKey = LS_KEYS.syncedPrefix + uid;
    if (localStorage.getItem(flagKey) === "1") return;
    const state = getLocalState();
    const batch = db.batch();
    batch.set(studentDoc(), profileData(state), { merge: true });
    (state.placementHistory || []).slice(0, 50).forEach(function (r) {
      batch.set(studentDoc().collection("testResults").doc(placementDocId(r)), placementData(r));
    });
    let ops = 1 + Math.min((state.placementHistory || []).length, 50);
    Object.keys(state.progress || {}).forEach(function (trackId) {
      Object.keys(state.progress[trackId] || {}).forEach(function (week) {
        if (ops >= 450) return; // Firestore batch limit is 500 writes
        batch.set(
          studentDoc().collection("progress").doc(progressDocId(trackId, week)),
          progressData(trackId, week, state.progress[trackId][week])
        );
        ops++;
      });
    });
    batch.commit()
      .then(function () { localStorage.setItem(flagKey, "1"); })
      .catch(function (err) { console.warn("[AppDB] initial sync failed (will retry next visit).", err); });
  }

  // ---- Cloud sync (best-effort) ----
  function cloudUpsertProfile(state) {
    whenCloudReady("cloudUpsertProfile", function () {
      return studentDoc().set(profileData(state), { merge: true });
    });
  }

  function cloudSavePlacement(result) {
    whenCloudReady("cloudSavePlacement", function () {
      return studentDoc().collection("testResults").doc(placementDocId(result)).set(placementData(result));
    });
  }

  function cloudSaveWeekProgress(trackId, week, entry) {
    whenCloudReady("cloudSaveWeekProgress", function () {
      return studentDoc().collection("progress").doc(progressDocId(trackId, week))
        .set(progressData(trackId, week, entry));
    });
  }

  function cloudSaveTrackProgress(trackId, trackProgress) {
    whenCloudReady("cloudSaveTrackProgress", function () {
      const batch = db.batch();
      Object.keys(trackProgress).forEach(function (week) {
        batch.set(
          studentDoc().collection("progress").doc(progressDocId(trackId, week)),
          progressData(trackId, week, trackProgress[week])
        );
      });
      return batch.commit();
    });
  }

  // ---- Public API (same shape as the old Supabase version) ----
  function init() {
    const cloudEnabled = tryInitFirebase();
    return { cloudEnabled: cloudEnabled };
  }

  function loadState() {
    return getLocalState();
  }

  function savePlacement(result) {
    const state = getLocalState();
    state.placement = result;
    state.placementHistory = state.placementHistory || [];
    state.placementHistory.unshift(result);
    setLocalState(state);
    cloudUpsertProfile(state);
    cloudSavePlacement(result);
    return state;
  }

  function initProgressForTrack(trackId, startWeek, totalWeeks) {
    const state = getLocalState();
    state.progress = state.progress || {};
    const trackProgress = {};
    for (let w = 1; w <= totalWeeks; w++) {
      if (w < startWeek) {
        trackProgress[w] = { status: "passed", bestScore: null, attempts: 0, lastAttemptAt: null, skippedByPlacement: true };
      } else if (w === startWeek) {
        trackProgress[w] = { status: "unlocked", bestScore: null, attempts: 0, lastAttemptAt: null };
      } else {
        trackProgress[w] = { status: "locked", bestScore: null, attempts: 0, lastAttemptAt: null };
      }
    }
    state.progress[trackId] = trackProgress;
    setLocalState(state);
    cloudSaveTrackProgress(trackId, trackProgress);
    return state;
  }

  function recordQuizAttempt(trackId, week, scorePercent, passed, totalWeeksInTrack) {
    const state = getLocalState();
    state.progress = state.progress || {};
    state.progress[trackId] = state.progress[trackId] || {};
    const cur = state.progress[trackId][week] || { status: "unlocked", bestScore: null, attempts: 0 };
    cur.attempts = (cur.attempts || 0) + 1;
    cur.bestScore = cur.bestScore === null || cur.bestScore === undefined ? scorePercent : Math.max(cur.bestScore, scorePercent);
    cur.lastAttemptAt = new Date().toISOString();
    let next = null;
    const nextWeek = week + 1;
    if (passed) {
      cur.status = "passed";
      if (nextWeek <= totalWeeksInTrack) {
        next = state.progress[trackId][nextWeek] || { status: "locked", bestScore: null, attempts: 0, lastAttemptAt: null };
        if (next.status === "locked") next.status = "unlocked";
        state.progress[trackId][nextWeek] = next;
      }
    }
    state.progress[trackId][week] = cur;
    setLocalState(state);
    cloudSaveWeekProgress(trackId, week, cur);
    if (next) cloudSaveWeekProgress(trackId, nextWeek, next);
    return state;
  }

  function resetAll() {
    setLocalState(defaultState());
  }

  function onStatusChange(cb) {
    if (typeof cb !== "function") return;
    statusListeners.push(cb);
    cb(status);
  }

  return {
    init,
    getStudentId,
    loadState,
    savePlacement,
    initProgressForTrack,
    recordQuizAttempt,
    resetAll,
    onStatusChange,
    getCloudStatus: function () { return status; },
    isCloudEnabled: function () { return status === "on" || status === "connecting"; }
  };
})();
