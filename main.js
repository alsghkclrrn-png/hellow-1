// Global State & Constants
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: 'male', age: 30, height: 175, weight: 70,
    bmi: null, bmr: null, dailyCalories: null,
    mbti: null, sasang: null,
    fitnessLevel: 'beginner', goal: 'general-fitness'
};

let workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || [];

// Fallback translations if translations.js fails to load
const defaultTranslations = {
    ko: { 'nav-logo': 'AI 운동 코치', 'workout-loading': 'AI 루틴 생성 중...', 'workout-card-badge': '전문 트레이닝 플랜' },
    en: { 'nav-logo': 'AI Workout Coach', 'workout-loading': 'Generating AI Routine...', 'workout-card-badge': 'Expert Training Plan' }
};

// Core i18n Functions
function setLanguage(lang) {
    const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (activeTranslations[lang] && activeTranslations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = activeTranslations[lang][key];
            } else {
                const icon = el.querySelector('i[data-lucide], svg.lucide');
                if (icon) {
                    const translatedText = activeTranslations[lang][key];
                    let textFound = false;
                    Array.from(el.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                            node.textContent = ` ${translatedText}`;
                            textFound = true;
                        }
                    });
                    if (!textFound) {
                        el.appendChild(document.createTextNode(` ${translatedText}`));
                    }
                } else {
                    el.innerHTML = activeTranslations[lang][key];
                }
            }
        }
    });

    const logoText = activeTranslations[lang]['nav-logo'] || 'AI Workout Coach';
    document.title = logoText + (lang === 'ko' ? ' | 개인 맞춤형 피트니스 & 헬스케어' : ' | Personalized Fitness & Healthcare');

    updateLanguageSwitcherUI();
    if (window.lucide) window.lucide.createIcons();
    
    // Refresh Quizzes if in progress
    if (document.getElementById('mbti-quiz') && !document.getElementById('mbti-quiz').classList.contains('hidden')) renderMbtiQuestion();
    if (document.getElementById('sasang-quiz') && !document.getElementById('sasang-quiz').classList.contains('hidden')) renderSasangQuestion();
    
    // Refresh static catalogs
    renderCatalog();
    renderHomeWorkout();
    renderSupplements();
}

function updateLanguageSwitcherUI() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = currentLang === 'ko' ? 'EN' : 'KO';
}

// Web Components
class WorkoutCard extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    render() {
        const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;
        const lang = currentLang;
        const t = (key) => (activeTranslations[lang] && activeTranslations[lang][key]) || key;
        
        const name = this.getAttribute('name') || t('workout-card-default-name');
        const desc = this.getAttribute('desc') || t('workout-card-default-desc');
        const image = this.getAttribute('image') || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
        const target = this.getAttribute('target') || t('workout-card-default-target');
        const recReps = this.getAttribute('reps') || '12';
        const recSets = this.getAttribute('sets') || '3';
        const recRest = this.getAttribute('rest') || '60s';
        const recTime = this.getAttribute('time') || '10m';

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: var(--card-background, #1e293b); border-radius: 20px; border: 1px solid var(--border-color, rgba(255,255,255,0.1)); overflow: hidden; display: flex; flex-direction: column; color: var(--text-color, #f1f5f9); font-family: sans-serif; transition: transform 0.3s ease; }
                :host(:hover) { transform: translateY(-5px); border-color: var(--primary-color, #38bdf8); }
                .image-container { width: 100%; height: 200px; position: relative; }
                .image-container img { width: 100%; height: 100%; object-fit: cover; }
                .target-badge { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75em; }
                .content { padding: 20px; flex-grow: 1; }
                h3 { color: var(--primary-color, #38bdf8); margin: 0 0 10px 0; font-size: 1.2em; }
                .desc { font-size: 0.85em; opacity: 0.8; line-height: 1.5; margin-bottom: 15px; }
                .rec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 15px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 10px; }
                .rec-item { font-size: 0.75em; display: flex; justify-content: space-between; }
                .rec-label { color: var(--secondary-color, #94a3b8); }
                .rec-value { font-weight: 700; color: var(--primary-color, #38bdf8); }
                .performance-tracking { border-top: 1px solid var(--border-color, rgba(255,255,255,0.1)); padding-top: 15px; }
                .perf-title { font-size: 0.8em; font-weight: 700; margin-bottom: 10px; display: block; }
                .perf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                .perf-input-group { display: flex; flex-direction: column; gap: 4px; }
                .perf-input-group label { font-size: 0.7em; color: var(--secondary-color, #94a3b8); }
                .perf-input-group input { background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 6px 8px; color: #fff; font-size: 0.8em; }
            </style>
            <div class="image-container">
                <img src="${image}" alt="${name}">
                <span class="target-badge">${target}</span>
            </div>
            <div class="content">
                <h3>${name}</h3>
                <p class="desc">${desc}</p>
                <div class="rec-grid">
                    <div class="rec-item"><span class="rec-label">${t('workout-reps')}</span><span class="rec-value">${recReps}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-sets')}</span><span class="rec-value">${recSets}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-rest')}</span><span class="rec-value">${recRest}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-time')}</span><span class="rec-value">${recTime}</span></div>
                </div>
                <div class="performance-tracking">
                    <span class="perf-title">${t('workout-actual-input')}</span>
                    <div class="perf-grid">
                        <div class="perf-input-group">
                            <label>${t('actual-reps')}</label>
                            <input type="number" placeholder="0">
                        </div>
                        <div class="perf-input-group">
                            <label>${t('actual-sets')}</label>
                            <input type="number" placeholder="0">
                        </div>
                        <div class="perf-input-group">
                            <label>${t('actual-rest')}</label>
                            <input type="text" placeholder="0s">
                        </div>
                        <div class="perf-input-group">
                            <label>${t('actual-time')}</label>
                            <input type="text" placeholder="0m">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
if (!customElements.get('workout-card')) customElements.define('workout-card', WorkoutCard);

// MBTI Quiz Implementation
const mbtiQuestions = [
    { id: 'EI', trait: 'E', key: 'mbti-q1-title', options: [{ labelKey: 'mbti-q1-e', trait: 'E' }, { labelKey: 'mbti-q1-i', trait: 'I' }] },
    { id: 'SN', trait: 'S', key: 'mbti-q2-title', options: [{ labelKey: 'mbti-q2-s', trait: 'S' }, { labelKey: 'mbti-q2-n', trait: 'N' }] },
    { id: 'TF', trait: 'T', key: 'mbti-q3-title', options: [{ labelKey: 'mbti-q3-t', trait: 'T' }, { labelKey: 'mbti-q3-f', trait: 'F' }] },
    { id: 'JP', trait: 'J', key: 'mbti-q4-title', options: [{ labelKey: 'mbti-q4-j', trait: 'J' }, { labelKey: 'mbti-q4-p', trait: 'P' }] }
];

let mbtiCurrentStep = 0;
let mbtiResult = { EI: '', SN: '', TF: '', JP: '' };

function initMbtiQuiz() {
    const quizContainer = document.getElementById('mbti-quiz');
    const resultsContainer = document.getElementById('mbti-results');
    if (!quizContainer) return;
    mbtiCurrentStep = 0;
    mbtiResult = { EI: '', SN: '', TF: '', JP: '' };
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    renderMbtiQuestion();
}

function renderMbtiQuestion() {
    const qText = document.getElementById('mbti-question-text');
    const optionsContainer = document.querySelector('#mbti-question-card .mbti-options');
    const progressBar = document.getElementById('mbti-progress-bar');
    const progressText = document.getElementById('mbti-progress-text');
    if (!qText || mbtiCurrentStep >= mbtiQuestions.length) return;
    const currentQ = mbtiQuestions[mbtiCurrentStep];
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    qText.textContent = t(currentQ.key);
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'mbti-option-btn';
        btn.textContent = t(opt.labelKey);
        btn.onclick = () => {
            mbtiResult[currentQ.id] = opt.trait;
            mbtiCurrentStep++;
            if (mbtiCurrentStep < mbtiQuestions.length) renderMbtiQuestion();
            else showMbtiResults();
        };
        optionsContainer.appendChild(btn);
    });
    const progress = ((mbtiCurrentStep + 1) / mbtiQuestions.length) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${mbtiCurrentStep + 1} / ${mbtiQuestions.length}`;
}

function showMbtiResults() {
    const type = mbtiResult.EI + mbtiResult.SN + mbtiResult.TF + mbtiResult.JP;
    userData.mbti = type;
    document.getElementById('mbti-quiz').classList.add('hidden');
    document.getElementById('mbti-results').classList.remove('hidden');
    document.getElementById('mbti-type-value').textContent = type;
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    document.getElementById('mbti-type-desc').innerHTML = t(`mbti-type-${type}`);
    const mbtiDisplay = document.getElementById('mbti-display');
    if (mbtiDisplay) { mbtiDisplay.value = type; mbtiDisplay.classList.add('populated'); }
}

// Sasang Quiz Implementation
const sasangQuestions = [
    { key: 'sasang-q1', options: [{ labelKey: 'sasang-q1-a', type: 'sun' }, { labelKey: 'sasang-q1-b', type: 'earth' }, { labelKey: 'sasang-q1-c', type: 'fire' }, { labelKey: 'sasang-q1-d', type: 'water' }] },
    { key: 'sasang-q2', options: [{ labelKey: 'sasang-q2-a', type: 'sun' }, { labelKey: 'sasang-q2-b', type: 'earth' }, { labelKey: 'sasang-q2-c', type: 'fire' }, { labelKey: 'sasang-q2-d', type: 'water' }] },
    { key: 'sasang-q3', options: [{ labelKey: 'sasang-q3-a', type: 'sun' }, { labelKey: 'sasang-q3-b', type: 'earth' }, { labelKey: 'sasang-q3-c', type: 'fire' }, { labelKey: 'sasang-q3-d', type: 'water' }] }
];
let sasangCurrentStep = 0;
let sasangScores = { sun: 0, earth: 0, fire: 0, water: 0 };

function initSasangQuiz() {
    sasangCurrentStep = 0;
    sasangScores = { sun: 0, earth: 0, fire: 0, water: 0 };
    document.getElementById('sasang-quiz').classList.remove('hidden');
    document.getElementById('sasang-results').classList.add('hidden');
    renderSasangQuestion();
}

function renderSasangQuestion() {
    const qText = document.getElementById('sasang-question-text');
    const optionsContainer = document.querySelector('.sasang-options');
    const progressBar = document.getElementById('sasang-progress-bar');
    if (!qText || sasangCurrentStep >= sasangQuestions.length) return;
    const currentQ = sasangQuestions[sasangCurrentStep];
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    qText.textContent = t(currentQ.key);
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'sasang-option-btn';
        btn.textContent = t(opt.labelKey);
        btn.onclick = () => {
            sasangScores[opt.type]++;
            sasangCurrentStep++;
            if (sasangCurrentStep < sasangQuestions.length) renderSasangQuestion();
            else showSasangResults();
        };
        optionsContainer.appendChild(btn);
    });
    progressBar.style.width = `${((sasangCurrentStep + 1) / sasangQuestions.length) * 100}%`;
}

function showSasangResults() {
    const type = Object.keys(sasangScores).reduce((a, b) => sasangScores[a] > sasangScores[b] ? a : b);
    userData.sasang = type;
    document.getElementById('sasang-quiz').classList.add('hidden');
    document.getElementById('sasang-results').classList.remove('hidden');
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    const container = document.getElementById('sasang-result-container');
    const title = t(`sasang-${type}-title`);
    const pros = t(`sasang-${type}-pros`);
    const cons = t(`sasang-${type}-cons`);
    const diet = t(`sasang-${type}-diet`);
    const imgMap = { sun: 'photo-1507525428034-b723cf961d3e', earth: 'photo-1441974231531-c6227db76b6e', fire: 'photo-1464822759023-fed622ff2c3b', water: 'photo-1544367567-0f2fcb009e0b' };
    
    container.innerHTML = `
        <article class="deep-card ${type}" style="max-width: 500px; margin: 0 auto;">
            <div class="card-image"><img src="https://images.unsplash.com/${imgMap[type]}?auto=format&fit=crop&q=80&w=600" alt="${title}"></div>
            <h4 style="text-align:center; font-size:1.5em; padding:20px;">${title}</h4>
            <p><strong>강점:</strong> ${pros}</p>
            <p><strong>주의:</strong> ${cons}</p>
            <p class="diet-info">${diet}</p>
        </article>
    `;
}

// Workout Generation Logic
function generateWorkout(goal, level) {
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    const allExercises = Object.entries(exerciseTranslations).map(([id, data]) => ({ id, ...data }));
    
    const absPool = allExercises.filter(ex => ex.primary.en === 'Abs');
    const cardioPool = allExercises.filter(ex => ex.primary.en === 'Cardio');
    const othersPool = allExercises.filter(ex => ex.primary.en !== 'Abs' && ex.primary.en !== 'Cardio');

    // Ensure 100-day variety using date seed
    const daySeed = Math.floor(new Date() / (1000 * 60 * 60 * 24));
    const shuffle = (array, seed) => {
        let m = array.length, t, i;
        while (m) {
            i = Math.floor(((seed * m) % 100) / 100 * m--);
            t = array[m]; array[m] = array[i]; array[i] = t;
        }
        return array;
    };

    const sessionAbs = shuffle([...absPool], daySeed)[0];
    const sessionCardio = shuffle([...cardioPool], daySeed)[0];
    const sessionTargets = shuffle([...othersPool], daySeed).slice(0, 3);

    const session = [sessionAbs, ...sessionTargets, sessionCardio];
    const container = document.getElementById('workout-container');
    container.innerHTML = '';
    
    session.forEach(ex => {
        const card = document.createElement('workout-card');
        card.setAttribute('name', ex[currentLang]);
        card.setAttribute('desc', ex.desc[currentLang]);
        card.setAttribute('image', ex.image);
        card.setAttribute('target', ex.primary[currentLang]);
        card.setAttribute('reps', level === 'beginner' ? '10' : (level === 'intermediate' ? '12' : '15'));
        card.setAttribute('sets', '3');
        card.setAttribute('rest', '60s');
        card.setAttribute('time', '15m');
        container.appendChild(card);
    });

    generateStretching(session);
    generateDiet(goal);
}

function generateStretching(exercises) {
    const container = document.getElementById('stretching-container');
    container.innerHTML = '';
    const targets = exercises.map(ex => ex.primary.en.toLowerCase());
    const matchedStretches = stretchingDatabase.filter(s => targets.includes(s.target.toLowerCase())).slice(0, 5);
    
    // If less than 5, fill with general
    if (matchedStretches.length < 5) {
        matchedStretches.push(...stretchingDatabase.filter(s => !matchedStretches.includes(s)).slice(0, 5 - matchedStretches.length));
    }

    matchedStretches.forEach(s => {
        const item = document.createElement('div');
        item.className = 'rec-card';
        item.innerHTML = `
            <img src="${s.image}" alt="${s.name[currentLang]}" style="width:100%; height:150px; object-fit:cover; border-radius:12px;">
            <h4 class="rec-title">${s.name[currentLang]}</h4>
            <p class="rec-content">${s.desc ? s.desc[currentLang] : '천천히 근육을 이완하며 20초간 유지하세요.'}</p>
        `;
        container.appendChild(item);
    });
}

function generateDiet(goal) {
    const container = document.getElementById('diet-container');
    container.innerHTML = '';
    const daySeed = Math.floor(new Date() / (1000 * 60 * 60 * 24));
    const meals = ['breakfast', 'lunch', 'dinner'];
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;

    meals.forEach(time => {
        const pool = dietDatabase.filter(d => d.time === time);
        const meal = pool[daySeed % pool.length];
        const card = document.createElement('div');
        card.className = 'diet-card';
        card.innerHTML = `
            <img src="${meal.image}" class="diet-image" alt="${meal.name[currentLang]}">
            <div class="diet-content">
                <span class="diet-tag">${t('diet-' + time)}</span>
                <h3>${meal.name[currentLang]}</h3>
                <div class="diet-recipe">
                    <h4>${t('diet-ingredients')}</h4>
                    <p>${meal.ingredients[currentLang]}</p>
                    <h4 style="margin-top:10px;">${t('diet-recipe-title')}</h4>
                    <p>${meal.recipe[currentLang]}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderCatalog() {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = '';
    const categories = ['Chest', 'Back', 'Legs', 'Arms', 'Abs', 'Cardio'];
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;

    Object.entries(exerciseTranslations).forEach(([id, ex]) => {
        const item = document.createElement('div');
        item.className = 'catalog-item';
        item.innerHTML = `
            <img src="${ex.image}" class="catalog-item-image">
            <div class="catalog-content-box">
                <div class="catalog-header"><h3>${ex[currentLang]}</h3></div>
                <span class="diet-tag">${ex.primary[currentLang]}</span>
                <p class="rec-content">${ex.desc[currentLang]}</p>
                <div class="catalog-tip"><strong>Tip:</strong> ${ex.tip ? ex.tip[currentLang] : '호흡을 일정하게 유지하세요.'}</div>
                <div class="catalog-caution"><strong>주의:</strong> ${ex.caution ? ex.caution[currentLang] : '무리한 무게는 부상의 위험이 있습니다.'}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderHomeWorkout() {
    const container = document.getElementById('home-workout-container');
    if (!container) return;
    container.innerHTML = '';
    const homeEx = Object.entries(exerciseTranslations).filter(([id, ex]) => ex.isHome).map(([id, ex]) => ex);
    homeEx.forEach(ex => {
        const item = document.createElement('div');
        item.className = 'catalog-item';
        item.innerHTML = `
            <img src="${ex.image}" class="catalog-item-image">
            <div class="catalog-content-box">
                <h3>${ex[currentLang]}</h3>
                <p class="rec-content">${ex.desc[currentLang]}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderSupplements() {
    const container = document.getElementById('supplement-container');
    if (!container) return;
    container.innerHTML = '';
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    supplementDatabase.forEach(s => {
        const item = document.createElement('div');
        item.className = 'rec-card';
        item.innerHTML = `
            <h4 class="rec-title">${s.name[currentLang]}</h4>
            <p class="rec-content"><strong>효능:</strong> ${s.benefit[currentLang]}</p>
            <p class="rec-content" style="margin-top:10px;"><strong>추천 제품:</strong> ${s.products[currentLang]}</p>
        `;
        container.appendChild(item);
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    initMbtiQuiz();
    initSasangQuiz();

    document.getElementById('metrics-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = document.getElementById('gender').value;
        const age = parseInt(document.getElementById('age').value);
        const h = parseFloat(document.getElementById('height').value);
        const w = parseFloat(document.getElementById('weight').value);
        
        if (h > 0 && w > 0 && age > 0) {
            userData.gender = gender; userData.age = age; userData.height = h; userData.weight = w;
            const hm = h / 100;
            userData.bmi = (w / (hm * hm)).toFixed(1);
            userData.bmr = (gender === 'male') ? Math.round(10 * w + 6.25 * h - 5 * age + 5) : Math.round(10 * w + 6.25 * h - 5 * age - 161);
            userData.dailyCalories = Math.round(userData.bmr * 1.5); // Average activity
            
            document.getElementById('bmi-value').textContent = userData.bmi;
            document.getElementById('bmr-value').textContent = userData.bmr;
            document.getElementById('daily-calories-value').textContent = userData.dailyCalories;
            document.getElementById('metrics-results').classList.remove('hidden');
            
            const summary = document.getElementById('metrics-display');
            if (summary) {
                const status = userData.bmi < 18.5 ? 'underweight' : (userData.bmi < 25 ? 'normal' : (userData.bmi < 30 ? 'overweight' : 'obese'));
                const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
                summary.value = `BMI: ${userData.bmi} (${t('bmi-' + status)}), BMR: ${userData.bmr} kcal`;
                summary.classList.add('populated');
            }
        }
    });

    document.getElementById('workout-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const goal = document.getElementById('goal').value;
        const level = document.getElementById('fitness-level').value;
        userData.goal = goal;
        userData.fitnessLevel = level;
        generateWorkout(goal, level);
        document.getElementById('workout-analysis-section').classList.remove('hidden');
        window.location.hash = 'workout-plan';
    });

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    document.getElementById('retake-mbti')?.addEventListener('click', initMbtiQuiz);
    document.getElementById('retake-sasang')?.addEventListener('click', initSasangQuiz);
});

window.setLanguage = setLanguage;
