/* ============================================================
   AI English Coach — app logic
   Placement test -> CEFR scoring -> track assignment ->
   12-week gated curriculum (lesson + weekly quiz, 70% to pass)
   ============================================================ */

(function () {
  "use strict";

  const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const PASS_RATIO = 0.7;
  const TOTAL_WEEKS = 12;

  const TRACKS = {
    beginner: typeof BEGINNER_CURRICULUM !== "undefined" ? BEGINNER_CURRICULUM : null,
    intermediate: typeof INTERMEDIATE_CURRICULUM !== "undefined" ? INTERMEDIATE_CURRICULUM : null,
    advanced: typeof ADVANCED_CURRICULUM !== "undefined" ? ADVANCED_CURRICULUM : null
  };

  const VOCAB_5000 = [].concat(
    typeof VOCAB_PART_1 !== "undefined" ? VOCAB_PART_1 : [],
    typeof VOCAB_PART_2 !== "undefined" ? VOCAB_PART_2 : [],
    typeof VOCAB_PART_3 !== "undefined" ? VOCAB_PART_3 : [],
    typeof VOCAB_PART_4 !== "undefined" ? VOCAB_PART_4 : [],
    typeof VOCAB_PART_5 !== "undefined" ? VOCAB_PART_5 : [],
    typeof VOCAB_PART_6 !== "undefined" ? VOCAB_PART_6 : [],
    typeof VOCAB_PART_7 !== "undefined" ? VOCAB_PART_7 : [],
    typeof VOCAB_PART_8 !== "undefined" ? VOCAB_PART_8 : [],
    typeof VOCAB_PART_9 !== "undefined" ? VOCAB_PART_9 : [],
    typeof VOCAB_PART_10 !== "undefined" ? VOCAB_PART_10 : []
  );
  const VOCAB_PAGE_SIZE = 60;
  let vocabPage = 1;

  const LEVEL_PLACEMENT_MAP = {
    A1: { trackId: "beginner", startWeek: 1 },
    A2: { trackId: "beginner", startWeek: 7 },
    B1: { trackId: "intermediate", startWeek: 1 },
    B2: { trackId: "intermediate", startWeek: 7 },
    C1: { trackId: "advanced", startWeek: 1 },
    C2: { trackId: "advanced", startWeek: 7 }
  };

  // ---------------------------------------------------------
  // DOM helpers
  // ---------------------------------------------------------
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $all = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function showView(viewId) {
    $all(".view").forEach((v) => v.classList.remove("active"));
    const target = document.getElementById("view-" + viewId);
    if (target) target.classList.add("active");
    $all(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === viewId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------------------------------------------------------
  // Text-to-speech / speech recognition helpers
  // ---------------------------------------------------------
  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) return false;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-US";
      utter.rate = 0.95;
      window.speechSynthesis.speak(utter);
      return true;
    } catch (err) {
      console.warn("speak() failed", err);
      return false;
    }
  }

  function getRecognition() {
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) return null;
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    return rec;
  }

  function normalizeWords(text) {
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9'\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);
  }

  function similarityScore(target, spoken) {
    const t = normalizeWords(target);
    const s = new Set(normalizeWords(spoken));
    if (t.length === 0) return 0;
    let hit = 0;
    t.forEach((w) => {
      if (s.has(w)) hit++;
    });
    return Math.round((hit / t.length) * 100);
  }

  // ---------------------------------------------------------
  // Placement test flow
  // ---------------------------------------------------------
  let testAnswers = [];
  let testIdx = 0;

  function startPlacementTest() {
    testAnswers = new Array(PLACEMENT_TEST.length).fill(null);
    testIdx = 0;
    $("#testIntro").hidden = true;
    $("#testResult").hidden = true;
    $("#testRunner").hidden = false;
    renderTestQuestion();
  }

  function renderTestQuestion() {
    const total = PLACEMENT_TEST.length;
    const q = PLACEMENT_TEST[testIdx];
    $("#testProgressBar").style.width = Math.round(((testIdx + 1) / total) * 100) + "%";
    $("#testProgressLabel").textContent = `ข้อ ${testIdx + 1} / ${total} · ระดับ ${q.level}`;
    $("#testQuestionText").textContent = q.question;

    const passageBox = $("#testPassage");
    if (q.passage) {
      passageBox.hidden = false;
      passageBox.textContent = q.passage;
    } else {
      passageBox.hidden = true;
      passageBox.textContent = "";
    }

    const choicesBox = $("#testChoices");
    choicesBox.innerHTML = "";
    q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn" + (testAnswers[testIdx] === i ? " selected" : "");
      btn.textContent = choice;
      btn.addEventListener("click", () => {
        testAnswers[testIdx] = i;
        renderTestQuestion();
      });
      choicesBox.appendChild(btn);
    });

    $("#btnPrevQ").disabled = testIdx === 0;
    $("#btnNextQ").textContent = testIdx === total - 1 ? "ส่งคำตอบ" : "ถัดไป";
  }

  function computePlacement() {
    const byLevel = {};
    CEFR_LEVELS.forEach((lvl) => (byLevel[lvl] = { correct: 0, total: 0 }));

    PLACEMENT_TEST.forEach((q, i) => {
      byLevel[q.level].total++;
      if (testAnswers[i] === q.answerIndex) byLevel[q.level].correct++;
    });

    // A level is "mastered" if the learner scores >= 60% on it.
    // Placement = the highest level that is mastered together with
    // every level below it (keeps placement conservative & fair).
    let placementLevel = "A1";
    for (const lvl of CEFR_LEVELS) {
      const stats = byLevel[lvl];
      const ratio = stats.total ? stats.correct / stats.total : 0;
      if (ratio >= 0.6) {
        placementLevel = lvl;
      } else {
        break;
      }
    }

    const totalCorrect = Object.values(byLevel).reduce((a, b) => a + b.correct, 0);
    const totalQuestions = PLACEMENT_TEST.length;

    const mapping = LEVEL_PLACEMENT_MAP[placementLevel];

    const byLevelPercent = {};
    CEFR_LEVELS.forEach((lvl) => {
      const s = byLevel[lvl];
      byLevelPercent[lvl] = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    });

    return {
      level: placementLevel,
      trackId: mapping.trackId,
      startWeek: mapping.startWeek,
      score: totalCorrect,
      totalQuestions,
      byLevel: byLevelPercent,
      takenAt: new Date().toISOString()
    };
  }

  function finishPlacementTest() {
    const result = computePlacement();
    AppDB.savePlacement(result);
    AppDB.initProgressForTrack(result.trackId, result.startWeek, TOTAL_WEEKS);

    $("#testRunner").hidden = true;
    $("#testResult").hidden = false;

    const track = TRACKS[result.trackId];
    $("#resultLevelBadge").textContent = `ระดับของคุณ: ${result.level} (${track ? track.name : result.trackId})`;
    $("#resultSummary").textContent =
      `คุณตอบถูก ${result.score} จาก ${result.totalQuestions} ข้อ ระบบจัดให้คุณเริ่มเรียนที่แทร็ก "${track ? track.name : result.trackId}" ` +
      `ตั้งแต่สัปดาห์ที่ ${result.startWeek} (สัปดาห์ก่อนหน้าจะถือว่าผ่านแล้วตามระดับพื้นฐานที่คุณมี)`;

    const breakdown = $("#resultBreakdown");
    breakdown.innerHTML = "";
    CEFR_LEVELS.forEach((lvl) => {
      const pct = result.byLevel[lvl];
      const row = document.createElement("div");
      row.className = "level-row";
      row.innerHTML = `
        <span class="level-row-label">${lvl}</span>
        <div class="level-row-bar"><div class="level-row-fill" style="width:${pct}%"></div></div>
        <span class="level-row-pct">${pct}%</span>
      `;
      breakdown.appendChild(row);
    });

    renderHome();
  }

  // ---------------------------------------------------------
  // Dashboard
  // ---------------------------------------------------------
  function renderDashboard() {
    const state = AppDB.loadState();
    if (!state.placement) {
      $("#dashboardEmpty").hidden = false;
      $("#dashboardContent").hidden = true;
      return;
    }
    $("#dashboardEmpty").hidden = true;
    $("#dashboardContent").hidden = false;

    const trackId = state.placement.trackId;
    const track = TRACKS[trackId];
    $("#dashTrackName").textContent = track.name;
    $("#dashTrackDesc").textContent = `ระดับปัจจุบัน: ${state.placement.level} · หลักสูตร 12 สัปดาห์`;

    const trackProgress = (state.progress && state.progress[trackId]) || {};
    const weeksPassed = Object.values(trackProgress).filter((w) => w.status === "passed").length;
    const scored = Object.values(trackProgress).filter((w) => typeof w.bestScore === "number");
    const avgScore = scored.length
      ? Math.round(scored.reduce((a, w) => a + w.bestScore, 0) / scored.length)
      : null;

    $("#statWeeksPassed").textContent = weeksPassed + " / " + TOTAL_WEEKS;
    $("#statAvgScore").textContent = avgScore === null ? "-" : avgScore + "%";

    const grid = $("#weekGrid");
    grid.innerHTML = "";
    track.weeks.forEach((weekData) => {
      const wp = trackProgress[weekData.week] || { status: "locked" };
      const card = document.createElement("button");
      card.type = "button";
      card.className = "week-card status-" + wp.status;
      const icon = wp.status === "passed" ? "✅" : wp.status === "unlocked" ? "▶️" : "🔒";
      card.innerHTML = `
        <div class="week-card-top">
          <span class="week-num">สัปดาห์ ${weekData.week}</span>
          <span class="week-icon">${icon}</span>
        </div>
        <div class="week-card-title">${escapeHtml(weekData.title)}</div>
        <div class="week-card-level">${weekData.levelTag}</div>
        ${typeof wp.bestScore === "number" ? `<div class="week-card-score">คะแนนล่าสุด: ${wp.bestScore}%</div>` : ""}
      `;
      if (wp.status !== "locked") {
        card.addEventListener("click", () => openLesson(trackId, weekData.week));
      } else {
        card.disabled = true;
      }
      grid.appendChild(card);
    });
  }

  // ---------------------------------------------------------
  // Lesson view
  // ---------------------------------------------------------
  let currentLessonTrack = null;
  let currentLessonWeek = null;

  function openLesson(trackId, week) {
    currentLessonTrack = trackId;
    currentLessonWeek = week;
    const track = TRACKS[trackId];
    const weekData = track.weeks.find((w) => w.week === week);
    if (!weekData) return;

    $("#lessonTitle").textContent = `สัปดาห์ ${weekData.week}: ${weekData.title}`;
    $("#lessonLevelChip").textContent = `ระดับ ${weekData.levelTag} · ${track.name}`;

    const objList = $("#lessonObjectives");
    objList.innerHTML = "";
    weekData.objectives.forEach((o) => {
      const li = document.createElement("li");
      li.textContent = o;
      objList.appendChild(li);
    });

    $("#grammarPoint").textContent = weekData.grammar.point;
    $("#grammarExplain").textContent = weekData.grammar.explanationTh;
    const exList = $("#grammarExamples");
    exList.innerHTML = "";
    weekData.grammar.examples.forEach((ex) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${escapeHtml(ex)}</span>`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "speak-btn";
      btn.textContent = "🔊";
      btn.addEventListener("click", () => speak(ex));
      li.appendChild(btn);
      exList.appendChild(li);
    });

    const vocabGrid = $("#vocabGrid");
    vocabGrid.innerHTML = "";
    weekData.vocabulary.forEach((v) => {
      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div class="vocab-front">
          <strong>${escapeHtml(v.en)}</strong>
          <button type="button" class="speak-btn" aria-label="ฟังเสียง">🔊</button>
        </div>
        <div class="vocab-th">${escapeHtml(v.th)}</div>
        <div class="vocab-example">${escapeHtml(v.example)}</div>
      `;
      card.querySelector(".speak-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        speak(v.en);
      });
      vocabGrid.appendChild(card);
    });

    $("#readingPassage").textContent = weekData.reading.passage;
    const rq = $("#readingQuestions");
    rq.innerHTML = "";
    weekData.reading.questions.forEach((q, qi) => {
      const wrap = document.createElement("div");
      wrap.className = "practice-q";
      wrap.innerHTML = `<p><strong>${qi + 1}. ${escapeHtml(q.question)}</strong></p>`;
      const choiceWrap = document.createElement("div");
      choiceWrap.className = "choice-list";
      q.choices.forEach((choice, ci) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "choice-btn";
        btn.textContent = choice;
        btn.addEventListener("click", () => {
          $all(".choice-btn", choiceWrap).forEach((b) => (b.disabled = true));
          if (ci === q.answerIndex) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("incorrect");
            const correctBtn = choiceWrap.children[q.answerIndex];
            if (correctBtn) correctBtn.classList.add("correct");
          }
          const explain = document.createElement("p");
          explain.className = "muted explain-text";
          explain.textContent = q.explanation;
          wrap.appendChild(explain);
        });
        choiceWrap.appendChild(btn);
      });
      wrap.appendChild(choiceWrap);
      rq.appendChild(wrap);
    });

    $("#speakingPrompt").textContent = weekData.speaking.prompt;
    $("#targetPhrase").textContent = weekData.speaking.targetPhrase;
    $("#speakingFeedback").textContent = "";

    showView("lesson");
  }

  function setupSpeakingButtons() {
    $("#btnPlayPhrase").addEventListener("click", () => {
      const weekData = getCurrentLessonWeekData();
      if (weekData) speak(weekData.speaking.targetPhrase);
    });

    $("#btnRecordPhrase").addEventListener("click", () => {
      const weekData = getCurrentLessonWeekData();
      if (!weekData) return;
      const feedback = $("#speakingFeedback");
      const rec = getRecognition();
      if (!rec) {
        feedback.textContent = "เบราว์เซอร์นี้ไม่รองรับการฝึกพูด ลองใช้ Google Chrome บนคอมพิวเตอร์หรือ Android";
        return;
      }
      feedback.textContent = "🎙️ กำลังฟัง... พูดประโยคด้านบนได้เลย";
      rec.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        const score = similarityScore(weekData.speaking.targetPhrase, transcript);
        let verdict = "ลองใหม่อีกครั้งนะ 💪";
        if (score >= 85) verdict = "เยี่ยมมาก! 🎉";
        else if (score >= 60) verdict = "ดีมาก ใกล้เคียงแล้ว 👍";
        feedback.textContent = `คุณพูดว่า: "${transcript}" — ความใกล้เคียง ${score}% — ${verdict}`;
      };
      rec.onerror = (e) => {
        feedback.textContent = "ไม่สามารถฟังเสียงได้ (" + e.error + ") กรุณาอนุญาตการใช้ไมโครโฟนแล้วลองใหม่";
      };
      try {
        rec.start();
      } catch (err) {
        feedback.textContent = "ไม่สามารถเริ่มการฟังเสียงได้ ลองอีกครั้ง";
      }
    });
  }

  function getCurrentLessonWeekData() {
    if (!currentLessonTrack || !currentLessonWeek) return null;
    const track = TRACKS[currentLessonTrack];
    return track.weeks.find((w) => w.week === currentLessonWeek) || null;
  }

  // ---------------------------------------------------------
  // Quiz flow
  // ---------------------------------------------------------
  let quizAnswers = [];
  let quizIdx = 0;
  let quizQuestions = [];

  function openQuiz(trackId, week) {
    currentLessonTrack = trackId;
    currentLessonWeek = week;
    const weekData = getCurrentLessonWeekData();
    if (!weekData) return;
    quizQuestions = weekData.quiz;
    quizAnswers = new Array(quizQuestions.length).fill(null);
    quizIdx = 0;
    $("#quizTitle").textContent = `แบบทดสอบ สัปดาห์ ${week}: ${weekData.title}`;
    $("#quizRunner").hidden = false;
    $("#quizResult").hidden = true;
    renderQuizQuestion();
    showView("quiz");
  }

  function renderQuizQuestion() {
    const total = quizQuestions.length;
    const q = quizQuestions[quizIdx];
    $("#quizProgressBar").style.width = Math.round(((quizIdx + 1) / total) * 100) + "%";
    $("#quizProgressLabel").textContent = `ข้อ ${quizIdx + 1} / ${total}`;
    $("#quizQuestionText").textContent = q.question;

    const choicesBox = $("#quizChoices");
    choicesBox.innerHTML = "";
    q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn" + (quizAnswers[quizIdx] === i ? " selected" : "");
      btn.textContent = choice;
      btn.addEventListener("click", () => {
        quizAnswers[quizIdx] = i;
        renderQuizQuestion();
      });
      choicesBox.appendChild(btn);
    });

    $("#btnPrevQuizQ").disabled = quizIdx === 0;
    $("#btnNextQuizQ").textContent = quizIdx === total - 1 ? "ส่งคำตอบ" : "ถัดไป";
  }

  function submitQuiz() {
    const total = quizQuestions.length;
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (quizAnswers[i] === q.answerIndex) correct++;
    });
    const percent = Math.round((correct / total) * 100);
    const passMark = Math.ceil(total * PASS_RATIO);
    const passed = correct >= passMark;

    AppDB.recordQuizAttempt(currentLessonTrack, currentLessonWeek, percent, passed, TOTAL_WEEKS);

    $("#quizRunner").hidden = true;
    $("#quizResult").hidden = false;
    $("#quizResultTitle").textContent = passed ? "🎉 ผ่านแล้ว!" : "ยังไม่ผ่าน ลองอีกครั้งนะ";
    $("#quizResultScore").textContent = `คุณตอบถูก ${correct}/${total} ข้อ (${percent}%) · เกณฑ์ผ่าน ${passMark}/${total} ข้อ`;

    const review = $("#quizReview");
    review.innerHTML = "";
    quizQuestions.forEach((q, i) => {
      const yourAns = quizAnswers[i];
      const isCorrect = yourAns === q.answerIndex;
      const row = document.createElement("div");
      row.className = "review-item " + (isCorrect ? "review-correct" : "review-incorrect");
      row.innerHTML = `
        <p><strong>${i + 1}. ${escapeHtml(q.question)}</strong></p>
        <p>คำตอบของคุณ: ${yourAns === null ? "(ไม่ได้ตอบ)" : escapeHtml(q.choices[yourAns])} ${isCorrect ? "✅" : "❌"}</p>
        ${!isCorrect ? `<p>คำตอบที่ถูก: ${escapeHtml(q.choices[q.answerIndex])}</p>` : ""}
        <p class="muted">${escapeHtml(q.explanation)}</p>
      `;
      review.appendChild(row);
    });

    if (passed) renderDashboard();
  }

  // ---------------------------------------------------------
  // Progress / history view
  // ---------------------------------------------------------
  function renderProgressView() {
    const state = AppDB.loadState();
    $("#progressStorageNote").textContent = AppDB.isCloudEnabled()
      ? "☁️ ข้อมูลของคุณกำลังสำรองไว้บน Supabase นอกเหนือจากในเบราว์เซอร์นี้"
      : "💾 ข้อมูลของคุณถูกเก็บไว้ในเบราว์เซอร์นี้เท่านั้น (ยังไม่ได้ตั้งค่า Supabase) — ดูวิธีเปิดใช้งานได้ใน README";

    const placementBox = $("#placementHistory");
    placementBox.innerHTML = "";
    const history = state.placementHistory || (state.placement ? [state.placement] : []);
    if (!history.length) {
      placementBox.innerHTML = '<p class="muted">ยังไม่เคยทำแบบทดสอบวัดระดับ</p>';
    } else {
      history.forEach((h) => {
        const div = document.createElement("div");
        div.className = "history-row";
        const date = new Date(h.takenAt).toLocaleString("th-TH");
        div.innerHTML = `<strong>${h.level}</strong> — ${h.score}/${h.totalQuestions} ข้อ — แทร็ก ${TRACKS[h.trackId] ? TRACKS[h.trackId].name : h.trackId} — <span class="muted">${date}</span>`;
        placementBox.appendChild(div);
      });
    }

    const weekBox = $("#weekHistory");
    weekBox.innerHTML = "";
    if (!state.placement) {
      weekBox.innerHTML = '<p class="muted">ยังไม่มีข้อมูลความคืบหน้า</p>';
      return;
    }
    const trackId = state.placement.trackId;
    const trackProgress = (state.progress && state.progress[trackId]) || {};
    const track = TRACKS[trackId];
    track.weeks.forEach((w) => {
      const wp = trackProgress[w.week];
      if (!wp) return;
      const div = document.createElement("div");
      div.className = "history-row";
      const statusLabel = { locked: "🔒 ยังไม่ปลดล็อก", unlocked: "▶️ กำลังเรียน", passed: "✅ ผ่านแล้ว" }[wp.status];
      div.innerHTML = `สัปดาห์ ${w.week} (${w.title}) — ${statusLabel}${
        typeof wp.bestScore === "number" ? ` — คะแนนสูงสุด ${wp.bestScore}% — พยายาม ${wp.attempts} ครั้ง` : ""
      }`;
      weekBox.appendChild(div);
    });
  }

  // ---------------------------------------------------------
  // Home view
  // ---------------------------------------------------------
  function renderHome() {
    const state = AppDB.loadState();
    const note = $("#homeStatusNote");
    const goDashBtn = $("#btnGoDashboard");
    if (state.placement) {
      const track = TRACKS[state.placement.trackId];
      note.textContent = `คุณเคยทำแบบทดสอบแล้ว — ระดับปัจจุบัน: ${state.placement.level} (${track ? track.name : ""})`;
      goDashBtn.hidden = false;
    } else {
      note.textContent = "";
      goDashBtn.hidden = true;
    }
  }

  // ---------------------------------------------------------
  // Vocabulary bank (5,000 words) view
  // ---------------------------------------------------------
  function populateVocabFilters() {
    const categorySelect = $("#vocabCategoryFilter");
    const categories = Array.from(new Set(VOCAB_5000.map((w) => w.category))).sort((a, b) =>
      a.localeCompare(b, "th")
    );
    categories.forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });

    const levelSelect = $("#vocabLevelFilter");
    CEFR_LEVELS.forEach((lvl) => {
      const opt = document.createElement("option");
      opt.value = lvl;
      opt.textContent = lvl;
      levelSelect.appendChild(opt);
    });
  }

  function getFilteredVocab() {
    const query = $("#vocabSearchInput").value.trim().toLowerCase();
    const category = $("#vocabCategoryFilter").value;
    const level = $("#vocabLevelFilter").value;
    return VOCAB_5000.filter((w) => {
      if (category && w.category !== category) return false;
      if (level && w.level !== level) return false;
      if (query && !w.en.toLowerCase().includes(query) && !w.th.toLowerCase().includes(query)) return false;
      return true;
    });
  }

  function renderVocabPage() {
    if (!VOCAB_5000.length) return;
    const filtered = getFilteredVocab();
    const totalPages = Math.max(1, Math.ceil(filtered.length / VOCAB_PAGE_SIZE));
    if (vocabPage > totalPages) vocabPage = totalPages;
    if (vocabPage < 1) vocabPage = 1;

    $("#vocabResultCount").textContent = `พบ ${filtered.length.toLocaleString()} คำ`;

    const start = (vocabPage - 1) * VOCAB_PAGE_SIZE;
    const pageItems = filtered.slice(start, start + VOCAB_PAGE_SIZE);

    const grid = $("#vocab5000Grid");
    grid.innerHTML = "";
    pageItems.forEach((w) => {
      const card = document.createElement("div");
      card.className = "vocab5000-card";
      card.innerHTML = `
        <div class="vocab5000-emoji">${w.emoji ? escapeHtml(w.emoji) : "🔤"}</div>
        <div class="vocab5000-en-row">
          <span class="vocab5000-en">${escapeHtml(w.en)}</span>
          <button type="button" class="speak-btn" aria-label="ฟังเสียง">🔊</button>
        </div>
        <div class="vocab5000-th">${escapeHtml(w.th)}</div>
        <div class="vocab5000-tags">
          <span class="vocab5000-tag">${escapeHtml(w.category)}</span>
          <span class="vocab5000-tag vocab5000-tag-level">${escapeHtml(w.level)}</span>
        </div>
      `;
      card.querySelector(".speak-btn").addEventListener("click", () => speak(w.en));
      grid.appendChild(card);
    });

    $("#vocabPageLabel").textContent = `หน้า ${vocabPage} / ${totalPages}`;
    $("#btnVocabPrevPage").disabled = vocabPage <= 1;
    $("#btnVocabNextPage").disabled = vocabPage >= totalPages;
  }

  // ---------------------------------------------------------
  // Wire everything up
  // ---------------------------------------------------------
  function init() {
    const dbInfo = AppDB.init();
    $("#footerSyncNote").textContent = dbInfo.cloudEnabled ? "· ซิงก์กับ Supabase ✅" : "· โหมดออฟไลน์ (localStorage)";

    $all(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view;
        showView(view);
        if (view === "dashboard") renderDashboard();
        if (view === "progress") renderProgressView();
        if (view === "home") renderHome();
        if (view === "vocab") renderVocabPage();
      });
    });

    $("#btnStartTest").addEventListener("click", () => showView("test"));
    $("#btnGoTestFromDash").addEventListener("click", () => showView("test"));
    $("#btnGoDashboard").addEventListener("click", () => {
      showView("dashboard");
      renderDashboard();
    });

    $("#btnBeginTest").addEventListener("click", startPlacementTest);
    $("#btnNextQ").addEventListener("click", () => {
      if (testIdx < PLACEMENT_TEST.length - 1) {
        testIdx++;
        renderTestQuestion();
      } else {
        finishPlacementTest();
      }
    });
    $("#btnPrevQ").addEventListener("click", () => {
      if (testIdx > 0) {
        testIdx--;
        renderTestQuestion();
      }
    });
    $("#btnSeePlan").addEventListener("click", () => {
      showView("dashboard");
      renderDashboard();
    });

    $("#btnRetakeTest").addEventListener("click", () => {
      if (confirm("การทำแบบทดสอบใหม่จะไม่ลบความคืบหน้าเดิม แต่จะประเมินระดับใหม่และอาจเปลี่ยนแทร็กการเรียน ต้องการดำเนินการต่อหรือไม่?")) {
        $("#testIntro").hidden = false;
        $("#testRunner").hidden = true;
        $("#testResult").hidden = true;
        showView("test");
      }
    });

    $("#btnBackToDash").addEventListener("click", () => {
      showView("dashboard");
      renderDashboard();
    });

    $("#btnStartQuiz").addEventListener("click", () => {
      openQuiz(currentLessonTrack, currentLessonWeek);
    });

    $("#btnNextQuizQ").addEventListener("click", () => {
      if (quizIdx < quizQuestions.length - 1) {
        quizIdx++;
        renderQuizQuestion();
      } else {
        submitQuiz();
      }
    });
    $("#btnPrevQuizQ").addEventListener("click", () => {
      if (quizIdx > 0) {
        quizIdx--;
        renderQuizQuestion();
      }
    });
    $("#btnRetryQuiz").addEventListener("click", () => {
      openQuiz(currentLessonTrack, currentLessonWeek);
    });
    $("#btnBackToDashFromQuiz").addEventListener("click", () => {
      showView("dashboard");
      renderDashboard();
    });

    setupSpeakingButtons();

    populateVocabFilters();
    $("#vocabSearchInput").addEventListener("input", () => {
      vocabPage = 1;
      renderVocabPage();
    });
    $("#vocabCategoryFilter").addEventListener("change", () => {
      vocabPage = 1;
      renderVocabPage();
    });
    $("#vocabLevelFilter").addEventListener("change", () => {
      vocabPage = 1;
      renderVocabPage();
    });
    $("#btnVocabPrevPage").addEventListener("click", () => {
      vocabPage--;
      renderVocabPage();
    });
    $("#btnVocabNextPage").addEventListener("click", () => {
      vocabPage++;
      renderVocabPage();
    });

    renderHome();
    showView("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
