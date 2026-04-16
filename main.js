// =====================================================
// 전역 상태
// =====================================================
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: 'male', age: 30, height: 175, weight: 70,
    bmi: null, bmr: null, dailyCalories: null,
    mbti: null, sasang: null,
    fitnessLevel: 'beginner', goal: 'general-fitness', weeklyFrequency: '3-4',
    condition: 'excellent'
};

let seenExerciseIds = new Set();

// 건강 다이어리 상태
let healthDiary = {
    date: null,
    exercises: {},   // { id: bool }
    meals: {
        breakfast: { done: false, notes: '', calories: '' },
        lunch:     { done: false, notes: '', calories: '' },
        dinner:    { done: false, notes: '', calories: '' }
    },
    supplements: {}, // { id: { done: bool, time: '' } }
    health: { water: 0, sleep: '', mood: '', weight: '', steps: '' }
};
let streakCount = 0;

// =====================================================
// 다국어(i18n)
// =====================================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    renderCatalog();
    renderHomeWorkout();
    renderSupplements();
    renderDiaryExercises();
    renderDiarySupplements();
}

// =====================================================
// Userback
// =====================================================
function openFeedback() {
    const ub = window.Userback;
    if (ub && (typeof ub.open === 'function' || typeof ub.show === 'function')) {
        typeof ub.open === 'function' ? ub.open() : ub.show();
    } else {
        alert('피드백 위젯을 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
    }
}

// =====================================================
// Workout Card Web Component
// =====================================================
class WorkoutCard extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    render() {
        const lang = currentLang;
        const t = (key) => (translations[lang] && translations[lang][key]) || key;

        const name    = this.getAttribute('name');
        const desc    = this.getAttribute('desc');
        const image   = this.getAttribute('image');
        const target  = this.getAttribute('target');
        const caution = this.getAttribute('caution');
        const tip     = this.getAttribute('tip') || '';
        const reps    = this.getAttribute('reps');
        const sets    = this.getAttribute('sets');
        const rest    = this.getAttribute('rest');

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: #1e293b; border-radius: 20px; overflow: hidden; color: #f1f5f9; font-family: sans-serif; border: 1px solid rgba(255,255,255,0.1); }
                .img-box { width: 100%; height: 200px; background: #0f172a; position: relative; }
                .img-box img { width: 100%; height: 100%; object-fit: cover; }
                .badge { position: absolute; top: 10px; right: 10px; background: #38bdf8; padding: 4px 8px; border-radius: 10px; font-size: 0.7em; font-weight: 700; }
                .beginner-badge { position: absolute; top: 10px; left: 10px; background: rgba(16,185,129,0.9); color: white; padding: 3px 8px; border-radius: 10px; font-size: 0.68em; font-weight: 700; }
                .content { padding: 16px; }
                h3 { margin: 0 0 10px 0; color: #38bdf8; font-size: 1.1em; }
                .desc { font-size: 0.85em; line-height: 1.7; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 10px; margin-bottom: 10px; white-space: pre-line; }
                .caution { font-size: 0.8em; color: #fbbf24; padding: 10px; border-radius: 10px; background: rgba(251,191,36,0.1); border-left: 4px solid #fbbf24; margin-bottom: 10px; }
                .tip { font-size: 0.78em; color: #10b981; padding: 8px 10px; background: rgba(16,185,129,0.08); border-radius: 8px; margin-bottom: 10px; border-left: 3px solid #10b981; }
                .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; text-align: center; font-size: 0.8em; }
                .item { background: rgba(56,189,248,0.1); padding: 6px; border-radius: 8px; }
                .label { display: block; color: #94a3b8; font-size: 0.8em; margin-bottom: 2px; }
            </style>
            <div class="img-box">
                <img src="${image}" alt="${name}" loading="lazy">
                <span class="badge">${target}</span>
                <span class="beginner-badge">✓ 초보자 가능</span>
            </div>
            <div class="content">
                <h3>${name}</h3>
                <div class="desc"><strong>${t('workout-card-desc-title')}:</strong><br>${desc}</div>
                <div class="caution"><strong>⚠️ ${t('workout-card-caution')}:</strong><br>${caution}</div>
                ${tip ? `<div class="tip">💡 ${tip}</div>` : ''}
                <div class="grid">
                    <div class="item"><span class="label">${t('actual-reps')}</span>${reps}</div>
                    <div class="item"><span class="label">${t('actual-sets')}</span>${sets}</div>
                    <div class="item"><span class="label">${t('actual-rest')}</span>${rest}</div>
                </div>
            </div>
        `;
    }
}
customElements.define('workout-card', WorkoutCard);

// =====================================================
// MBTI 퀴즈
// =====================================================
let mbtiStep = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function initMbtiQuiz() {
    mbtiStep = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    document.getElementById('mbti-quiz').classList.remove('hidden');
    document.getElementById('mbti-results').classList.add('hidden');
    renderMbtiQuestion();
}

function renderMbtiQuestion() {
    if (mbtiStep >= 20) { showMbtiResults(); return; }
    const t = (key) => translations[currentLang][key] || key;
    document.getElementById('mbti-question-text').textContent = t(`mbti-q${mbtiStep + 1}-title`);
    const options = document.querySelector('.mbti-options');
    options.innerHTML = '';
    ['a', 'b'].forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'mbti-option-btn';
        btn.textContent = t(`mbti-q${mbtiStep + 1}-${opt}`);
        btn.onclick = () => {
            const match = btn.textContent.match(/\(([A-Z])\)/);
            if (match) mbtiScores[match[1]]++;
            mbtiStep++;
            renderMbtiQuestion();
        };
        options.appendChild(btn);
    });
    const pct = (mbtiStep / 20) * 100;
    document.getElementById('mbti-progress-bar').style.width = `${pct}%`;
    const ptEl = document.getElementById('mbti-progress-text');
    if (ptEl) ptEl.textContent = `${mbtiStep}/20`;
}

function showMbtiResults() {
    const type =
        (mbtiScores.E >= mbtiScores.I ? 'E' : 'I') +
        (mbtiScores.S >= mbtiScores.N ? 'S' : 'N') +
        (mbtiScores.T >= mbtiScores.F ? 'T' : 'F') +
        (mbtiScores.J >= mbtiScores.P ? 'J' : 'P');
    userData.mbti = type;
    document.getElementById('mbti-quiz').classList.add('hidden');
    document.getElementById('mbti-results').classList.remove('hidden');
    document.getElementById('mbti-type-value').textContent = type;
    document.getElementById('mbti-type-desc').innerHTML = translations[currentLang][`mbti-type-${type}`] || '';
    const display = document.getElementById('mbti-display');
    if (display) { display.value = type; display.classList.add('populated'); }
}

// =====================================================
// 사상체질 퀴즈
// =====================================================
let sasangStep = 0;
let sasangScores = { sun: 0, earth: 0, fire: 0, water: 0 };

function initSasangQuiz() {
    sasangStep = 0;
    sasangScores = { sun: 0, earth: 0, fire: 0, water: 0 };
    document.getElementById('sasang-quiz').classList.remove('hidden');
    document.getElementById('sasang-results').classList.add('hidden');
    renderSasangQuestion();
}

function renderSasangQuestion() {
    if (sasangStep >= 3) { showSasangResults(); return; }
    const t = (key) => translations[currentLang][key] || key;
    document.getElementById('sasang-question-text').textContent = t(`sasang-q${sasangStep + 1}`);
    const options = document.querySelector('.sasang-options');
    options.innerHTML = '';
    const mapping = ['sun', 'earth', 'fire', 'water'];
    ['a', 'b', 'c', 'd'].forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'sasang-option-btn';
        btn.textContent = t(`sasang-q${sasangStep + 1}-${opt}`);
        btn.onclick = () => {
            sasangScores[mapping[idx]]++;
            sasangStep++;
            renderSasangQuestion();
        };
        options.appendChild(btn);
    });
}

function showSasangResults() {
    const type = Object.keys(sasangScores).reduce((a, b) => sasangScores[a] > sasangScores[b] ? a : b);
    userData.sasang = type;
    document.getElementById('sasang-quiz').classList.add('hidden');
    document.getElementById('sasang-results').classList.remove('hidden');
    const t = (key) => translations[currentLang][key] || key;
    document.getElementById('sasang-result-container').innerHTML = `
        <div class="deep-card ${type}" style="padding:20px; text-align:center; border-radius:16px; background:var(--card-background); border:1px solid var(--border-color);">
            <h3 style="font-size:1.5em; margin-bottom:12px;">${t(`sasang-${type}-title`)}</h3>
            <p style="color:#10b981; margin-bottom:8px;"><strong>장점:</strong> ${t(`sasang-${type}-pros`)}</p>
            <p style="color:#fbbf24; margin-bottom:8px;"><strong>주의:</strong> ${t(`sasang-${type}-cons`)}</p>
            <p><strong>식이요법:</strong> ${t(`sasang-${type}-diet`)}</p>
        </div>
    `;
}

// =====================================================
// 운동 생성
// =====================================================
function generateWorkout(goal, level, freq, isRefresh = false) {
    if (!isRefresh) seenExerciseIds.clear();
    const container = document.getElementById('workout-container');
    container.innerHTML = '';

    const pool = Object.entries(exerciseTranslations).map(([id, data]) => ({ id, ...data }));
    let targetCount = 8;
    let allowedIntensity = ['low', 'medium', 'high'];

    if (userData.condition === 'tired') { targetCount = 6; allowedIntensity = ['low', 'medium']; }
    else if (userData.condition === 'recovery') { targetCount = 4; allowedIntensity = ['low']; }

    let filtered = pool.filter(ex => allowedIntensity.includes(ex.intensity) && !seenExerciseIds.has(ex.id));
    if (filtered.length < targetCount) {
        seenExerciseIds.clear();
        filtered = pool.filter(ex => allowedIntensity.includes(ex.intensity));
    }

    filtered.sort(() => Math.random() - 0.5);
    const session = filtered.slice(0, targetCount);

    session.forEach(ex => {
        seenExerciseIds.add(ex.id);
        const card = document.createElement('workout-card');
        card.setAttribute('name',   ex[currentLang] || ex.ko);
        card.setAttribute('desc',   ex.desc[currentLang]);
        card.setAttribute('image',  ex.image);
        card.setAttribute('target', ex.primary[currentLang]);
        card.setAttribute('caution', ex.caution[currentLang]);
        card.setAttribute('tip',    ex.tip ? ex.tip[currentLang] : '');
        card.setAttribute('reps',   userData.condition === 'recovery' ? '8' : '12');
        card.setAttribute('sets',   userData.condition === 'excellent' ? '4' : '3');
        card.setAttribute('rest',   userData.condition === 'tired' ? '90s' : '60s');
        container.appendChild(card);
    });

    generateStretching(session);
    generateDiet(goal);
    document.getElementById('workout-analysis-section').classList.remove('hidden');

    // 다이어리 운동 체크리스트를 생성된 운동으로 업데이트
    healthDiary.exercises = {};
    session.forEach(ex => { healthDiary.exercises[ex.id] = false; });
    renderDiaryExercises();
}

function generateStretching(exercises) {
    const container = document.getElementById('stretching-container');
    container.innerHTML = '';
    const targets = exercises.map(ex => ex.primary.en);

    // 타겟에 맞는 스트레칭 + 부족하면 나머지로 채우기
    let stretches = stretchingDatabase.filter(s => targets.includes(s.target));
    if (stretches.length < 5) {
        const extra = stretchingDatabase.filter(s => !targets.includes(s.target));
        stretches = [...stretches, ...extra].slice(0, 6);
    } else {
        stretches = stretches.slice(0, 6);
    }

    stretches.forEach(s => {
        const div = document.createElement('div');
        div.className = 'stretch-card';
        div.innerHTML = `
            <img src="${s.image}" alt="${s.name[currentLang]}" loading="lazy">
            <div class="stretch-card-body">
                <div class="stretch-card-title">${s.name[currentLang]}</div>
                <div class="stretch-duration">⏱️ ${s.duration[currentLang]}</div>
                <div class="stretch-instructions">${s.instructions[currentLang]}</div>
            </div>
        `;
        container.appendChild(div);
    });
}

function generateDiet(goal) {
    const container = document.getElementById('diet-container');
    container.innerHTML = '';

    // 현재 goal에 맞는 식단 필터링
    const goalKey = goal || userData.goal || 'general-fitness';
    const meals = dietDatabase.filter(m => m.goal === goalKey);

    // 아침/점심/저녁 순서 정렬
    const order = ['breakfast', 'lunch', 'dinner'];
    const t = (key) => translations[currentLang][key] || key;
    const timeLabels = {
        breakfast: t('diet-breakfast'),
        lunch:     t('diet-lunch'),
        dinner:    t('diet-dinner')
    };

    order.forEach(time => {
        const meal = meals.find(m => m.time === time);
        if (!meal) return;
        const div = document.createElement('div');
        div.className = 'diet-card';
        div.innerHTML = `
            <img src="${meal.image}" class="diet-image" alt="${meal.name[currentLang]}" loading="lazy">
            <div class="diet-content">
                <div class="diet-time-label">${timeLabels[time]}</div>
                <h4>${meal.name[currentLang]}</h4>
                <p style="font-size:0.8em; color:var(--secondary-color);">${meal.ingredients[currentLang]}</p>
                <div class="diet-macro">
                    <span class="diet-macro-tag calories">🔥 ${meal.calories} kcal</span>
                    <span class="diet-macro-tag protein">💪 단백질 ${meal.protein}g</span>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// =====================================================
// 운동 카탈로그
// =====================================================
function renderCatalog() {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = '';
    Object.entries(exerciseTranslations).forEach(([id, ex]) => {
        const div = document.createElement('div');
        div.className = 'catalog-item';
        div.innerHTML = `
            <img src="${ex.image}" class="catalog-item-image" alt="${ex[currentLang] || ex.ko}" loading="lazy">
            <div class="catalog-content-box">
                <div class="catalog-header">
                    <h4>${ex[currentLang] || ex.ko}</h4>
                    <span class="beginner-badge">초보자 OK</span>
                </div>
                <span class="diet-tag">${ex.primary[currentLang]}</span>
                <div class="exercise-steps">${ex.desc[currentLang]}</div>
                <div style="font-size:0.78em;color:#fbbf24;padding:8px;background:rgba(251,191,36,0.08);border-radius:8px;border-left:3px solid #fbbf24;">
                    ⚠️ ${ex.caution[currentLang]}
                </div>
                ${ex.tip ? `<div style="font-size:0.78em;color:#10b981;padding:8px;background:rgba(16,185,129,0.08);border-radius:8px;border-left:3px solid #10b981;">💡 ${ex.tip[currentLang]}</div>` : ''}
            </div>
        `;
        container.appendChild(div);
    });
}

// =====================================================
// 홈트 렌더링
// =====================================================
function renderHomeWorkout() {
    const container = document.getElementById('home-workout-container');
    if (!container) return;
    container.innerHTML = '';
    Object.entries(exerciseTranslations)
        .filter(([, ex]) => ex.isHome)
        .forEach(([id, ex]) => {
            const div = document.createElement('div');
            div.className = 'catalog-item';
            div.innerHTML = `
                <img src="${ex.image}" class="catalog-item-image" alt="${ex[currentLang] || ex.ko}" loading="lazy">
                <div class="catalog-content-box">
                    <div class="catalog-header">
                        <h4>${ex[currentLang] || ex.ko}</h4>
                        <span class="beginner-badge">홈트 OK</span>
                    </div>
                    <span class="diet-tag">${ex.primary[currentLang]}</span>
                    <div class="exercise-steps">${ex.desc[currentLang]}</div>
                    ${ex.tip ? `<div style="font-size:0.78em;color:#10b981;padding:8px;background:rgba(16,185,129,0.08);border-radius:8px;margin-top:4px;border-left:3px solid #10b981;">💡 ${ex.tip[currentLang]}</div>` : ''}
                </div>
            `;
            container.appendChild(div);
        });
}

// =====================================================
// 영양제 렌더링
// =====================================================
function renderSupplements() {
    const container = document.getElementById('supplement-container');
    if (!container) return;
    container.innerHTML = '';
    supplementDatabase.forEach(s => {
        const div = document.createElement('div');
        div.className = 'supplement-card';
        div.innerHTML = `
            <div class="supplement-card-header">
                <span class="supplement-card-icon">${s.icon}</span>
                <div>
                    <div class="supplement-card-name">${s.name[currentLang]}</div>
                    <span class="dosage-tag">${s.dosage[currentLang]}</span>
                </div>
            </div>
            <div class="supplement-card-benefit">${s.benefit[currentLang]}</div>
            <div class="supplement-card-meta">
                <div class="supplement-card-meta-row">
                    <span class="supplement-card-meta-label">⏰ 복용 시간:</span>
                    <span>${s.timing[currentLang]}</span>
                </div>
                <div class="supplement-card-meta-row">
                    <span class="supplement-card-meta-label">💊 용량:</span>
                    <span>${s.dosage[currentLang]}</span>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// =====================================================
// 건강 다이어리 — 초기화 및 저장
// =====================================================
function getTodayStr() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
}

function initHealthDiary() {
    const today = getTodayStr();
    const saved = localStorage.getItem(`healthDiary_${today}`);
    if (saved) {
        healthDiary = JSON.parse(saved);
    } else {
        healthDiary = {
            date: today,
            exercises: {},
            meals: {
                breakfast: { done: false, notes: '', calories: '' },
                lunch:     { done: false, notes: '', calories: '' },
                dinner:    { done: false, notes: '', calories: '' }
            },
            supplements: {},
            health: { water: 0, sleep: '', mood: '', weight: '', steps: '' }
        };
    }

    // 날짜 표시
    const dateEl = document.getElementById('diary-today-date');
    if (dateEl) {
        const d = new Date();
        dateEl.textContent = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${['일','월','화','수','목','금','토'][d.getDay()]})`;
    }

    // 스트릭 계산
    streakCount = calcStreak();
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = streakCount;

    // 물 글래스 초기화
    renderWaterGlasses();

    // 기분 복원
    if (healthDiary.health.mood) {
        selectMood(healthDiary.health.mood, false);
    }

    // 건강 입력값 복원
    if (healthDiary.health.sleep)  { const el = document.getElementById('sleep-input');  if (el) el.value = healthDiary.health.sleep; }
    if (healthDiary.health.weight) { const el = document.getElementById('weight-input'); if (el) el.value = healthDiary.health.weight; }
    if (healthDiary.health.steps)  { const el = document.getElementById('steps-input');  if (el) el.value = healthDiary.health.steps; }

    // 식사 복원
    ['breakfast', 'lunch', 'dinner'].forEach(meal => {
        const data = healthDiary.meals[meal];
        const noteEl = document.getElementById(`meal-notes-${meal}`);
        const calEl  = document.getElementById(`meal-cal-${meal}`);
        const card   = document.getElementById(`meal-card-${meal}`);
        const btn    = document.getElementById(`meal-btn-${meal}`);
        if (noteEl) noteEl.value = data.notes;
        if (calEl)  calEl.value  = data.calories;
        if (data.done && card) {
            card.classList.add('done');
            if (btn) btn.classList.add('done');
        }
    });

    renderDiaryExercises();
    renderDiarySupplements();
    updateDiaryProgress();
}

function saveDiary() {
    healthDiary.date = getTodayStr();
    localStorage.setItem(`healthDiary_${healthDiary.date}`, JSON.stringify(healthDiary));

    // 히스토리 업데이트
    const prog = getDiaryProgress();
    const history = JSON.parse(localStorage.getItem('diaryHistory') || '[]');
    const idx = history.findIndex(h => h.date === healthDiary.date);
    const entry = { date: healthDiary.date, ...prog };
    if (idx >= 0) history[idx] = entry; else history.push(entry);
    localStorage.setItem('diaryHistory', JSON.stringify(history));

    // 스트릭 갱신
    streakCount = calcStreak();
    const streakEl = document.getElementById('streak-count');
    if (streakEl) streakEl.textContent = streakCount;

    showToast(translations[currentLang]['diary-save-success'] || '오늘의 건강 기록이 저장되었습니다! 💪');
}

function calcStreak() {
    const history = JSON.parse(localStorage.getItem('diaryHistory') || '[]');
    if (!history.length) return 0;

    const today = getTodayStr();
    let streak = 0;
    let checkDate = new Date(today);

    while (true) {
        const ds = checkDate.toISOString().split('T')[0];
        const entry = history.find(h => h.date === ds);
        if (entry && (entry.exercisePct > 0 || entry.mealPct > 0 || entry.supplementPct > 0 || entry.healthPct > 0)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    return streak;
}

// =====================================================
// 건강 다이어리 — 탭 전환
// =====================================================
function switchDiaryTab(tab) {
    document.querySelectorAll('.diary-panel').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.diary-tab-btn').forEach(b => b.classList.remove('active'));

    const panel = document.getElementById(`tab-${tab}`);
    if (panel) panel.classList.remove('hidden');
    const btns = document.querySelectorAll('.diary-tab-btn');
    const tabOrder = ['exercise', 'meal', 'supplement', 'health'];
    const idx = tabOrder.indexOf(tab);
    if (btns[idx]) btns[idx].classList.add('active');
}

// =====================================================
// 건강 다이어리 — 운동 체크리스트
// =====================================================
function renderDiaryExercises() {
    const container = document.getElementById('exercise-checklist');
    if (!container) return;
    container.innerHTML = '';

    const ids = Object.keys(healthDiary.exercises);
    // 운동 플랜이 없으면 기본 운동 목록 일부 표시
    const source = ids.length > 0
        ? ids.map(id => ({ id, ...exerciseTranslations[id] })).filter(e => e.ko)
        : Object.entries(exerciseTranslations).slice(0, 8).map(([id, ex]) => ({ id, ...ex }));

    if (!ids.length) {
        // 다이어리 기본 exercises 초기화
        source.forEach(ex => { if (healthDiary.exercises[ex.id] === undefined) healthDiary.exercises[ex.id] = false; });
    }

    source.forEach(ex => {
        const done = healthDiary.exercises[ex.id] || false;
        const item = document.createElement('div');
        item.className = `check-item${done ? ' done' : ''}`;
        item.id = `ex-check-${ex.id}`;
        item.innerHTML = `
            <input type="checkbox" id="chk-${ex.id}" ${done ? 'checked' : ''} onchange="toggleExerciseCheck('${ex.id}')">
            <span class="check-icon">${ex.primary && ex.primary.ko === '유산소' ? '🏃' : ex.primary && ex.primary.ko === '복근' ? '🔥' : '💪'}</span>
            <label class="check-label" for="chk-${ex.id}">${ex[currentLang] || ex.ko}</label>
            <span class="check-meta">${ex.primary ? ex.primary[currentLang] : ''}</span>
        `;
        container.appendChild(item);
    });

    updateExerciseProgress();
}

function toggleExerciseCheck(id) {
    healthDiary.exercises[id] = !healthDiary.exercises[id];
    const item = document.getElementById(`ex-check-${id}`);
    if (item) item.classList.toggle('done', healthDiary.exercises[id]);
    updateExerciseProgress();
    updateDiaryProgress();
}

function updateExerciseProgress() {
    const ids = Object.keys(healthDiary.exercises);
    if (!ids.length) return;
    const done = ids.filter(id => healthDiary.exercises[id]).length;
    const pct = Math.round((done / ids.length) * 100);
    const bar = document.getElementById('exercise-progress-bar');
    const txt = document.getElementById('exercise-progress-text');
    if (bar) bar.style.width = `${pct}%`;
    if (txt) txt.textContent = `${pct}%`;
}

// =====================================================
// 건강 다이어리 — 식사 체크
// =====================================================
function toggleMealDone(meal) {
    healthDiary.meals[meal].done = !healthDiary.meals[meal].done;
    const card = document.getElementById(`meal-card-${meal}`);
    const btn  = document.getElementById(`meal-btn-${meal}`);
    if (card) card.classList.toggle('done', healthDiary.meals[meal].done);
    if (btn)  btn.classList.toggle('done', healthDiary.meals[meal].done);
    updateDiaryProgress();
}

function updateMealNote(meal, val) {
    healthDiary.meals[meal].notes = val;
}

function updateMealCalories(meal, val) {
    healthDiary.meals[meal].calories = val;
}

// =====================================================
// 건강 다이어리 — 영양제 체크리스트
// =====================================================
function renderDiarySupplements() {
    const container = document.getElementById('supplement-checklist');
    if (!container) return;
    container.innerHTML = '';

    supplementDatabase.forEach(s => {
        if (!healthDiary.supplements[s.id]) {
            healthDiary.supplements[s.id] = { done: false, time: '' };
        }
        const data = healthDiary.supplements[s.id];
        const item = document.createElement('div');
        item.className = `supplement-check-item${data.done ? ' done' : ''}`;
        item.id = `supp-check-${s.id}`;
        item.innerHTML = `
            <input type="checkbox" id="supp-chk-${s.id}" ${data.done ? 'checked' : ''} onchange="toggleSupplementCheck('${s.id}')">
            <div class="supplement-info">
                <div class="supplement-name">
                    ${s.icon} ${s.name[currentLang]}
                    <span class="dosage-tag">${s.dosage[currentLang]}</span>
                </div>
                <div class="supplement-detail">${s.timing[currentLang]}</div>
            </div>
            <input type="time" class="supplement-time-input" id="supp-time-${s.id}" value="${data.time}" onchange="updateSupplementTime('${s.id}', this.value)" placeholder="${(translations[currentLang]['diary-supplement-time-placeholder'] || '복용 시간')}">
        `;
        container.appendChild(item);
    });

    updateSupplementProgress();
}

function toggleSupplementCheck(id) {
    if (!healthDiary.supplements[id]) healthDiary.supplements[id] = { done: false, time: '' };
    healthDiary.supplements[id].done = !healthDiary.supplements[id].done;
    const item = document.getElementById(`supp-check-${id}`);
    if (item) item.classList.toggle('done', healthDiary.supplements[id].done);
    updateSupplementProgress();
    updateDiaryProgress();
}

function updateSupplementTime(id, val) {
    if (!healthDiary.supplements[id]) healthDiary.supplements[id] = { done: false, time: '' };
    healthDiary.supplements[id].time = val;
}

function updateSupplementProgress() {
    const total = supplementDatabase.length;
    const done = supplementDatabase.filter(s => healthDiary.supplements[s.id] && healthDiary.supplements[s.id].done).length;
    const pct = Math.round((done / total) * 100);
    const bar = document.getElementById('supplement-progress-bar');
    const txt = document.getElementById('supplement-progress-text');
    if (bar) bar.style.width = `${pct}%`;
    if (txt) txt.textContent = `${pct}%`;
}

// =====================================================
// 건강 다이어리 — 건강 지표
// =====================================================
function renderWaterGlasses() {
    const container = document.getElementById('water-glasses');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
        const span = document.createElement('span');
        span.className = `glass-btn${i <= healthDiary.health.water ? ' filled' : ''}`;
        span.textContent = '💧';
        span.onclick = () => setWater(i);
        span.title = `${i}잔`;
        container.appendChild(span);
    }
    const countEl = document.getElementById('water-count');
    if (countEl) countEl.textContent = `${healthDiary.health.water} / 8잔`;
}

function setWater(n) {
    // 같은 잔 클릭 시 토글 (해제)
    healthDiary.health.water = healthDiary.health.water === n ? n - 1 : n;
    renderWaterGlasses();
    updateDiaryProgress();
}

function selectMood(mood, updateState = true) {
    if (updateState) healthDiary.health.mood = mood;
    document.querySelectorAll('.mood-btn').forEach((btn, idx) => {
        btn.classList.toggle('selected', String(idx + 1) === String(mood));
    });
    updateDiaryProgress();
}

function updateHealthField(field, val) {
    healthDiary.health[field] = val;
    updateDiaryProgress();
}

// =====================================================
// 건강 다이어리 — 진행률 계산 및 요약
// =====================================================
function getDiaryProgress() {
    // 운동
    const exIds = Object.keys(healthDiary.exercises);
    const exercisePct = exIds.length
        ? Math.round((exIds.filter(id => healthDiary.exercises[id]).length / exIds.length) * 100)
        : 0;

    // 식사
    const meals = Object.values(healthDiary.meals);
    const mealPct = Math.round((meals.filter(m => m.done).length / meals.length) * 100);

    // 영양제
    const total = supplementDatabase.length;
    const suppDone = supplementDatabase.filter(s => healthDiary.supplements[s.id] && healthDiary.supplements[s.id].done).length;
    const supplementPct = total ? Math.round((suppDone / total) * 100) : 0;

    // 건강 (5개 지표 중 입력된 것)
    const h = healthDiary.health;
    const healthFilled = [h.water > 0, !!h.sleep, !!h.mood, !!h.weight, !!h.steps].filter(Boolean).length;
    const healthPct = Math.round((healthFilled / 5) * 100);

    return { exercisePct, mealPct, supplementPct, healthPct };
}

function updateDiaryProgress() {
    const { exercisePct, mealPct, supplementPct, healthPct } = getDiaryProgress();

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = `${val}%`; };
    set('summary-exercise-pct',    exercisePct);
    set('summary-meal-pct',        mealPct);
    set('summary-supplement-pct',  supplementPct);
    set('summary-health-pct',      healthPct);
}

// =====================================================
// 이벤트 리스너
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    initMbtiQuiz();
    initSasangQuiz();
    initHealthDiary();

    // 신체 지표 폼
    document.getElementById('metrics-form').onsubmit = (e) => {
        e.preventDefault();
        const h = parseFloat(document.getElementById('height').value) / 100;
        const w = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        if (h > 0 && w > 0 && age > 0) {
            userData.bmi = (w / (h * h)).toFixed(1);
            // Mifflin-St Jeor
            if (gender === 'female') {
                userData.bmr = Math.round(10 * w + 6.25 * (h * 100) - 5 * age - 161);
            } else {
                userData.bmr = Math.round(10 * w + 6.25 * (h * 100) - 5 * age + 5);
            }
            userData.dailyCalories = Math.round(userData.bmr * 1.5);

            document.getElementById('bmi-value').textContent = userData.bmi;
            document.getElementById('bmr-value').textContent = userData.bmr;
            document.getElementById('daily-calories-value').textContent = userData.dailyCalories;

            // BMI 상태
            const bmi = parseFloat(userData.bmi);
            const t = (key) => translations[currentLang][key] || key;
            let status = bmi < 18.5 ? t('bmi-underweight') : bmi < 25 ? t('bmi-normal') : bmi < 30 ? t('bmi-overweight') : t('bmi-obese');
            const statusEl = document.getElementById('bmi-status');
            if (statusEl) statusEl.textContent = status;

            document.getElementById('metrics-results').classList.remove('hidden');
            const metricsDisplay = document.getElementById('metrics-display');
            if (metricsDisplay) {
                metricsDisplay.value = `BMI: ${userData.bmi}, BMR: ${userData.bmr} kcal`;
                metricsDisplay.classList.add('populated');
            }
        }
    };

    // 운동 생성 폼
    document.getElementById('workout-form').onsubmit = (e) => {
        e.preventDefault();
        userData.goal = document.getElementById('goal').value;
        userData.fitnessLevel = document.getElementById('fitness-level').value;
        userData.condition = document.getElementById('health-status').value;
        generateWorkout(userData.goal, userData.fitnessLevel, '3-4');
    };

    // 운동 새로고침
    document.getElementById('refresh-workout-btn').onclick = () => {
        generateWorkout(userData.goal, userData.fitnessLevel, '3-4', true);
    };

    // 언어 토글
    document.getElementById('lang-toggle').onclick = () => {
        const newLang = currentLang === 'ko' ? 'en' : 'ko';
        setLanguage(newLang);
        document.getElementById('lang-toggle').textContent = newLang.toUpperCase();
    };

    // 테마 토글
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.onclick = () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
            const icon = document.getElementById('theme-icon');
            if (icon) icon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
            if (window.lucide) lucide.createIcons();
        };
    }

    // 운동 분석 버튼
    const analyzeBtn = document.getElementById('analyze-workout-btn');
    if (analyzeBtn) {
        analyzeBtn.onclick = () => {
            const t = (key) => translations[currentLang][key] || key;
            const condMap = { excellent: '최상의 컨디션', tired: '피로한 상태', recovery: '회복 중인 상태' };
            const goalMap = { 'weight-loss': '체중 감량', 'muscle-gain': '근육 증가', 'general-fitness': '건강 관리' };
            const cond = condMap[userData.condition] || userData.condition;
            const goal = goalMap[userData.goal] || userData.goal;
            const mbtiMsg = userData.mbti ? `${userData.mbti} 유형에 맞게 ` : '';
            const message = `
                <p>오늘 ${cond}에서 <strong>${goal}</strong> 목표로 ${mbtiMsg}운동을 훌륭히 수행하셨습니다! 💪</p>
                <p>운동 후에는 충분한 <strong>단백질 섭취</strong>와 <strong>스트레칭</strong>으로 회복을 도와주세요. 물은 최소 500ml 이상 마시는 것이 좋습니다.</p>
                <p>다음 운동까지 근육이 충분히 회복될 수 있도록 <strong>48시간</strong>의 휴식을 권장합니다. 오늘의 노력이 내일의 체력이 됩니다!</p>
                ${userData.sasang ? `<p>✅ ${userData.sasang === 'earth' ? '태음인' : userData.sasang === 'fire' ? '소양인' : userData.sasang === 'water' ? '소음인' : '태양인'} 체질은 운동 후 과도한 땀 배출에 유의하고 체질에 맞는 보양식을 섭취하세요.</p>` : ''}
            `;
            const resultsEl = document.getElementById('analysis-results');
            const contentEl = document.getElementById('analysis-content');
            if (contentEl) contentEl.innerHTML = message;
            if (resultsEl) resultsEl.classList.remove('hidden');
            if (window.lucide) lucide.createIcons();
        };
    }

    // MBTI 다시하기
    const retakeMbti = document.getElementById('retake-mbti');
    if (retakeMbti) retakeMbti.onclick = initMbtiQuiz;

    // 사상체질 다시하기
    const retakeSasang = document.getElementById('retake-sasang');
    if (retakeSasang) retakeSasang.onclick = initSasangQuiz;

    // lucide 아이콘 초기화
    if (window.lucide) lucide.createIcons();
});

// =====================================================
// 공유 기능
// =====================================================
function shareContent(type, platform) {
    const url = window.location.href;
    let text = '';
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;

    if (type === 'mbti' && userData.mbti) {
        text = `${t('share-mbti-prefix')} [${userData.mbti}]! ${t('share-suffix')}`;
    } else if (type === 'sasang' && userData.sasang) {
        const sasangTitle = t(`sasang-${userData.sasang}-title`).split(' ')[1] || userData.sasang;
        text = `${t('share-sasang-prefix')} [${sasangTitle}]! ${t('share-suffix')}`;
    } else if (type === 'workout') {
        text = t('share-workout-text');
    } else {
        text = t('header-subtitle');
    }

    if (platform === 'webshare' && navigator.share) {
        navigator.share({ title: 'AI 건강 코치', text, url }).catch(console.error);
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'kakao') {
        window.open(`https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}`, '_blank');
    } else {
        copyToClipboard();
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast(translations[currentLang]['toast-copy-success'] || '링크가 복사되었습니다!');
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    setTimeout(() => toast.remove(), 3000);
}

// 법적 고지 (stub)
function showLegal(type) {
    alert(type === 'privacy'
        ? '이 서비스는 개인정보를 서버에 저장하지 않습니다. 모든 데이터는 브라우저 localStorage에만 저장됩니다.'
        : '본 서비스는 의료 행위가 아닌 참고용 정보를 제공합니다. 건강 관련 결정은 전문가와 상담하시기 바랍니다.');
}
