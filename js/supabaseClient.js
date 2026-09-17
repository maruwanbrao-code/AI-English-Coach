/* ============================================================
   AppDB — data layer for AI English Coach
   ------------------------------------------------------------
   Works with ZERO setup: everything is cached in localStorage,
   so the app is fully usable the moment you open index.html.

   Optionally, fill in SUPABASE_URL / SUPABASE_ANON_KEY below to
   also back up progress to a Supabase project (see supabase/schema.sql
   and README.md for the one-time setup). No login is required —
   each browser gets a random "studentId" (a UUID stored locally)
   that is used as the row key in Supabase, so progress is tied to
   this browser/device unless you note the ID down yourself.
   ============================================================ */

const SUPABASE_CONFIG = {
  // Paste your Supabase project values here to enable cloud backup.
  // Leave both as-is (or blank) to run in local-only mode.
  url: "https://qfmdmdvebozamueadmxq.supabase.co",      // e.g. "https://xxxxxxxxxxxx.supabase.co"
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWRtZHZlYm96YW11ZWFkbXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2MzAzNDUsImV4cCI6MjEwNTIwNjM0NX0.9-cokfctTKx14cVcO1m_6GMcC08INZHOle2C38L97LA"   // e.g. "eyJhbGciOi..."
};

const AppDB = (function () {
  const LS_KEYS = {
    studentId: "eac_student_id",
    state: "eac_state" // { placement, progress, history }
  };

  let sbClient = null;
  let cloudEnabled = false;

  function tryInitSupabase() {
    try {
      if (
        SUPABASE_CONFIG.url &&
        SUPABASE_CONFIG.anonKey &&
        window.supabase &&
        typeof window.supabase.createClient === "function"
      ) {
        sbClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        cloudEnabled = true;
      }
    } catch (err) {
      console.warn("[AppDB] Supabase init failed, continuing in local-only mode.", err);
      cloudEnabled = false;
    }
    return cloudEnabled;
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
      progress: {},     // { [trackId]: { [weekNumber]: { status: 'locked'|'unlocked'|'passed', bestScore, attempts, lastAttemptAt } } }
      placementHistory: [] // array of past placement results, newest first
    };
  }

  function setLocalState(state) {
    localStorage.setItem(LS_KEYS.state, JSON.stringify(state));
  }

  // ---- Cloud sync (best-effort, never blocks the UI) ----
  async function cloudUpsertProfile(state) {
    if (!cloudEnabled) return;
    try {
      await sbClient.from("profiles").upsert({
        student_id: getStudentId(),
        current_track: state.placement ? state.placement.trackId : null,
        current_level: state.placement ? state.placement.level : null,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.warn("[AppDB] cloudUpsertProfile failed (continuing offline).", err);
    }
  }

  async function cloudSavePlacement(result) {
    if (!cloudEnabled) return;
    try {
      await sbClient.from("test_results").insert({
        student_id: getStudentId(),
        level_awarded: result.level,
        track_id: result.trackId,
        score: result.score,
        total_questions: result.totalQuestions,
        by_level: result.byLevel,
        taken_at: result.takenAt
      });
    } catch (err) {
      console.warn("[AppDB] cloudSavePlacement failed (continuing offline).", err);
    }
  }

  async function cloudSaveWeekProgress(trackId, week, entry) {
    if (!cloudEnabled) return;
    try {
      await sbClient.from("progress").upsert(
        {
          student_id: getStudentId(),
          track_id: trackId,
          week_number: week,
          status: entry.status,
          best_score: entry.bestScore,
          attempts: entry.attempts,
          last_attempt_at: entry.lastAttemptAt
        },
        { onConflict: "student_id,track_id,week_number" }
      );
    } catch (err) {
      console.warn("[AppDB] cloudSaveWeekProgress failed (continuing offline).", err);
    }
  }

  // ---- Public API ----
  function init() {
    tryInitSupabase();
    return { cloudEnabled };
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
    return state;
  }

  function recordQuizAttempt(trackId, week, scorePercent, passed, totalWeeksInTrack) {
    const state = getLocalState();
    state.progress = state.progress || {};
    state.progress[trackId] = state.progress[trackId] || {};
    const cur = state.progress[trackId][week] || { status: "unlocked", bestScore: null, attempts: 0 };
    cur.attempts = (cur.attempts || 0) + 1;
    cur.bestScore = cur.bestScore === null ? scorePercent : Math.max(cur.bestScore, scorePercent);
    cur.lastAttemptAt = new Date().toISOString();
    if (passed) {
      cur.status = "passed";
      const nextWeek = week + 1;
      if (nextWeek <= totalWeeksInTrack) {
        const next = state.progress[trackId][nextWeek] || { status: "locked", bestScore: null, attempts: 0, lastAttemptAt: null };
        if (next.status === "locked") next.status = "unlocked";
        state.progress[trackId][nextWeek] = next;
      }
    }
    state.progress[trackId][week] = cur;
    setLocalState(state);
    cloudSaveWeekProgress(trackId, week, cur);
    return state;
  }

  function resetAll() {
    setLocalState(defaultState());
  }

  return {
    init,
    getStudentId,
    loadState,
    savePlacement,
    initProgressForTrack,
    recordQuizAttempt,
    resetAll,
    isCloudEnabled: function () { return cloudEnabled; }
  };
})();
