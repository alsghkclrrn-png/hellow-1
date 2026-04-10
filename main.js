// Global State & Constants
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: 'male', age: 30, height: 175, weight: 70,
    bmi: null, bmr: null, dailyCalories: null,
    mbti: null, sasang: null,
    fitnessLevel: 'beginner', goal: 'general-fitness', weeklyFrequency: '3-4'
};

let workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || [];
let wgerExercises = [];
let seenExerciseIds = new Set(); // To prevent repeats across refreshes

const WGER_CATEGORY_MAP = {
    10: { ko: '복근', en: 'Abs' },
    8: { ko: '팔', en: 'Arms' },
    12: { ko: '등', en: 'Back' },
    14: { ko: '다리', en: 'Calves' },
    15: { ko: '유산소', en: 'Cardio' },
    11: { ko: '가슴', en: 'Chest' },
    9: { ko: '다리', en: 'Legs' },
    13: { ko: '어깨', en: 'Shoulders' }
};

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

    const logoText = activeTranslations[lang]['nav-logo'] || 'AI 운동 코치';
    document.title = logoText + (lang === 'ko' ? ' | 개인 맞춤형 피트니스 & 헬스케어' : ' | Personalized Fitness & Healthcare');

    updateLanguageSwitcherUI();
    if (window.lucide) window.lucide.createIcons();
    
    if (document.getElementById('mbti-quiz') && !document.getElementById('mbti-quiz').classList.contains('hidden')) renderMbtiQuestion();
    if (document.getElementById('sasang-quiz') && !document.getElementById('sasang-quiz').classList.contains('hidden')) renderSasangQuestion();
    
    renderCatalog();
    renderHomeWorkout();
    renderSupplements();
}

async function fetchWgerExercises() {
    try {
        console.log('Fetching diverse wger exercises (Limit 300)...');
        const response = await fetch('https://wger.de/api/v2/exerciseinfo/?language=2&limit=300&status=2');
        const data = await response.json();
        
        wgerExercises = data.results
            .filter(ex => ex.description && ex.description.length > 20)
            .map(ex => ({
                id: ex.id,
                name: { en: ex.name, ko: ex.name }, 
                desc: { en: ex.description.replace(/<[^>]*>?/gm, '').trim(), ko: ex.description.replace(/<[^>]*>?/gm, '').trim() },
                category: ex.category.id,
                image: (ex.images && ex.images.length > 0) ? ex.images[0].image : null,
                muscles: ex.muscles.map(m => m.name),
                equipment: ex.equipment.map(e => e.name),
                primary: WGER_CATEGORY_MAP[ex.category.id] || { ko: '기타', en: 'Misc' }
            }));
            
        wgerExercises.sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0));
        console.log('Wger exercises pool loaded:', wgerExercises.length);
    } catch (error) {
        console.error('Failed to fetch wger exercises:', error);
    }
}

function generateDetailedCaution(ex) {
    const category = ex.category;
    const equipment = ex.equipment || [];
    
    let cautions = [];
    if (category === 10) cautions.push("목이 아닌 복근의 힘으로 상체를 들어올리세요. 허리가 바닥에서 뜨지 않도록 주의가 필요합니다.");
    if (category === 12 || category === 9) cautions.push("동작 중 허리가 굽지 않도록 척추의 중립을 유지하세요. 무릎이 발끝을 지나치게 나가지 않도록 합니다.");
    if (equipment.some(e => ['Barbell', 'Dumbbell', 'Kettlebell'].includes(e))) cautions.push("반동을 이용하지 말고 천연한 무게 조절을 통해 관절에 무리가 가지 않도록 하세요.");
    if (category === 15) cautions.push("호흡을 멈추지 말고 일정하게 유지하세요. 어지러움이 느껴지면 즉시 강도를 낮추어야 합니다.");
    if (category === 11) cautions.push("어깨가 들리지 않도록 견갑골을 고정하고 가슴 근육의 이완과 수축에 집중하세요.");
    
    if (cautions.length === 0) cautions.push("운동 전 가벼운 스트레칭으로 몸을 풀고, 본인의 체력 수준에 맞는 횟수와 세트를 수행하세요.");
    return cautions.join(" ");
}

function updateLanguageSwitcherUI() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = currentLang === 'ko' ? 'EN' : 'KO';
}

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
        const caution = this.getAttribute('caution') || t('workout-card-default-caution') || '';
        const recReps = this.getAttribute('reps') || '12';
        const recSets = this.getAttribute('sets') || '3';
        const recRest = this.getAttribute('rest') || '60s';
        const recTime = this.getAttribute('time') || '10m';

        const descSteps = desc.split(/[.!?]+/).filter(s => s.trim().length > 5);
        const formattedDesc = descSteps.length > 1 
            ? `<ol style="margin: 0; padding-left: 20px; font-size: 0.9em; line-height: 1.6; color: var(--text-color, #f1f5f9);">${descSteps.map(s => `<li>${s.trim()}.</li>`).join('')}</ol>`
            : `<p style="margin: 0; font-size: 0.9em; line-height: 1.6; color: var(--text-color, #f1f5f9);">${desc}</p>`;

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: var(--card-background, #1e293b); border-radius: 24px; border: 1px solid var(--border-color, rgba(255,255,255,0.1)); overflow: hidden; display: flex; flex-direction: column; color: var(--text-color, #f1f5f9); font-family: 'Roboto', sans-serif; transition: all 0.3s ease; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                :host(:hover) { transform: translateY(-8px); border-color: var(--primary-color, #38bdf8); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .image-container { width: 100%; height: 220px; position: relative; overflow: hidden; background: #0f172a; }
                .image-container img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.5s ease; background: #0f172a; }
                :host(:hover) .image-container img { transform: scale(1.05); }
                .target-badge { position: absolute; top: 12px; right: 12px; background: rgba(56, 189, 248, 0.9); color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 0.7em; font-weight: 800; backdrop-filter: blur(4px); }
                .content { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; gap: 12px; }
                h3 { color: var(--primary-color, #38bdf8); margin: 0; font-size: 1.3em; font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; }
                .desc-box { background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border-left: 4px solid var(--primary-color); }
                .rec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; background: rgba(56, 189, 248, 0.05); padding: 12px; border-radius: 12px; }
                .rec-item { font-size: 0.7em; display: flex; flex-direction: column; align-items: center; text-align: center; }
                .rec-label { color: var(--secondary-color, #94a3b8); font-weight: 600; margin-bottom: 2px; }
                .rec-value { font-weight: 800; color: var(--primary-color, #38bdf8); font-size: 1.1em; }
                .performance-tracking { border-top: 1px solid var(--border-color, rgba(255,255,255,0.05)); padding-top: 15px; }
                .perf-title { font-size: 0.8em; font-weight: 800; margin-bottom: 10px; color: var(--primary-color); display: flex; align-items: center; gap: 5px; }
                .perf-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
                .perf-input-group { display: flex; flex-direction: column; gap: 4px; }
                .perf-input-group label { font-size: 0.65em; color: var(--secondary-color, #94a3b8); font-weight: 600; text-align: center; }
                .perf-input-group input { background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 6px 4px; color: #fff; font-size: 0.8em; width: 100%; box-sizing: border-box; text-align: center; }
                .perf-input-group input:focus { outline: none; border-color: var(--primary-color); background: #1e293b; }
                .caution-box { font-size: 0.75em; color: #fbbf24; background: rgba(251, 191, 36, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #fbbf24; }
            </style>
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
                <span class="target-badge">${target}</span>
            </div>
            <div class="content">
                <h3>${name}</h3>
                <div class="desc-box">${formattedDesc}</div>
                ${caution ? `<div class="caution-box">⚠️ <strong>주의 사항:</strong> ${caution}</div>` : ''}
                <div class="rec-grid">
                    <div class="rec-item"><span class="rec-label">${t('workout-reps')}</span><span class="rec-value">${recReps}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-sets')}</span><span class="rec-value">${recSets}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-rest')}</span><span class="rec-value">${recRest}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-time')}</span><span class="rec-value">${recTime}</span></div>
                </div>
                <div class="performance-tracking">
                    <span class="perf-title">⚡ ${t('workout-actual-input')}</span>
                    <div class="perf-grid">
                        <div class="perf-input-group"><label>${t('actual-reps')}</label><input type="number" placeholder="0"></div>
                        <div class="perf-input-group"><label>${t('actual-sets')}</label><input type="number" placeholder="0"></div>
                        <div class="perf-input-group"><label>${t('actual-rest')}</label><input type="text" placeholder="0s"></div>
                        <div class="perf-input-group"><label>${t('actual-time')}</label><input type="text" placeholder="0m"></div>
                    </div>
                </div>
            </div>
        `;
    }
}
if (!customElements.get('workout-card')) customElements.define('workout-card', WorkoutCard);

// MBTI Quiz Implementation
const mbtiQuestions = [
    { id: 'EI', key: 'mbti-q1-title', options: [{ labelKey: 'mbti-q1-a', trait: 'E' }, { labelKey: 'mbti-q1-b', trait: 'I' }] },
    { id: 'EI', key: 'mbti-q2-title', options: [{ labelKey: 'mbti-q2-a', trait: 'E' }, { labelKey: 'mbti-q2-b', trait: 'I' }] },
    { id: 'EI', key: 'mbti-q3-title', options: [{ labelKey: 'mbti-q3-a', trait: 'E' }, { labelKey: 'mbti-q3-b', trait: 'I' }] },
    { id: 'EI', key: 'mbti-q4-title', options: [{ labelKey: 'mbti-q4-a', trait: 'E' }, { labelKey: 'mbti-q4-b', trait: 'I' }] },
    { id: 'EI', key: 'mbti-q5-title', options: [{ labelKey: 'mbti-q5-a', trait: 'E' }, { labelKey: 'mbti-q5-b', trait: 'I' }] },
    { id: 'SN', key: 'mbti-q6-title', options: [{ labelKey: 'mbti-q6-a', trait: 'S' }, { labelKey: 'mbti-q6-b', trait: 'N' }] },
    { id: 'SN', key: 'mbti-q7-title', options: [{ labelKey: 'mbti-q7-a', trait: 'S' }, { labelKey: 'mbti-q7-b', trait: 'N' }] },
    { id: 'SN', key: 'mbti-q8-title', options: [{ labelKey: 'mbti-q8-a', trait: 'S' }, { labelKey: 'mbti-q8-b', trait: 'N' }] },
    { id: 'SN', key: 'mbti-q9-title', options: [{ labelKey: 'mbti-q9-a', trait: 'S' }, { labelKey: 'mbti-q9-b', trait: 'N' }] },
    { id: 'SN', key: 'mbti-q10-title', options: [{ labelKey: 'mbti-q10-a', trait: 'S' }, { labelKey: 'mbti-q10-b', trait: 'N' }] },
    { id: 'TF', key: 'mbti-q11-title', options: [{ labelKey: 'mbti-q11-a', trait: 'T' }, { labelKey: 'mbti-q11-b', trait: 'F' }] },
    { id: 'TF', key: 'mbti-q12-title', options: [{ labelKey: 'mbti-q12-a', trait: 'T' }, { labelKey: 'mbti-q12-b', trait: 'F' }] },
    { id: 'TF', key: 'mbti-q13-title', options: [{ labelKey: 'mbti-q13-a', trait: 'T' }, { labelKey: 'mbti-q13-b', trait: 'F' }] },
    { id: 'TF', key: 'mbti-q14-title', options: [{ labelKey: 'mbti-q14-a', trait: 'T' }, { labelKey: 'mbti-q14-b', trait: 'F' }] },
    { id: 'TF', key: 'mbti-q15-title', options: [{ labelKey: 'mbti-q15-a', trait: 'T' }, { labelKey: 'mbti-q15-b', trait: 'F' }] },
    { id: 'JP', key: 'mbti-q16-title', options: [{ labelKey: 'mbti-q16-a', trait: 'J' }, { labelKey: 'mbti-q16-b', trait: 'P' }] },
    { id: 'JP', key: 'mbti-q17-title', options: [{ labelKey: 'mbti-q17-a', trait: 'J' }, { labelKey: 'mbti-q17-b', trait: 'P' }] },
    { id: 'JP', key: 'mbti-q18-title', options: [{ labelKey: 'mbti-q18-a', trait: 'J' }, { labelKey: 'mbti-q18-b', trait: 'P' }] },
    { id: 'JP', key: 'mbti-q19-title', options: [{ labelKey: 'mbti-q19-a', trait: 'J' }, { labelKey: 'mbti-q19-b', trait: 'P' }] },
    { id: 'JP', key: 'mbti-q20-title', options: [{ labelKey: 'mbti-q20-a', trait: 'J' }, { labelKey: 'mbti-q20-b', trait: 'P' }] }
];

let mbtiCurrentStep = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function initMbtiQuiz() {
    const quizContainer = document.getElementById('mbti-quiz');
    const resultsContainer = document.getElementById('mbti-results');
    if (!quizContainer) return;
    mbtiCurrentStep = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
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
            mbtiScores[opt.trait]++;
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
    const type = 
        (mbtiScores.E >= mbtiScores.I ? 'E' : 'I') +
        (mbtiScores.S >= mbtiScores.N ? 'S' : 'N') +
        (mbtiScores.T >= mbtiScores.F ? 'T' : 'F') +
        (mbtiScores.J >= mbtiScores.P ? 'J' : 'P');
    
    userData.mbti = type;
    document.getElementById('mbti-quiz').classList.add('hidden');
    document.getElementById('mbti-results').classList.remove('hidden');
    document.getElementById('mbti-type-value').textContent = type;
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    document.getElementById('mbti-type-desc').innerHTML = t(`mbti-type-${type}`);
    const mbtiDisplay = document.getElementById('mbti-display');
    if (mbtiDisplay) { mbtiDisplay.value = type; mbtiDisplay.classList.add('populated'); }
}

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

function generateWorkout(goal, level, freq = '3-4', isRefresh = false) {
    if (!isRefresh) seenExerciseIds.clear();
    const localExercises = Object.entries(exerciseTranslations).map(([id, data]) => ({ id, ...data }));
    const fullPool = [...localExercises, ...wgerExercises];
    
    const shufflePool = (array) => {
        let m = array.length, tmp, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            tmp = array[m]; array[m] = array[i]; array[i] = tmp;
        }
        return array;
    };

    const shuffled = shufflePool([...fullPool]);
    const getPoolByCategory = (enCat) => shuffled.filter(ex => ex.primary.en === enCat && !seenExerciseIds.has(ex.id));

    let absPool = getPoolByCategory('Abs');
    let cardioPool = getPoolByCategory('Cardio');
    if (absPool.length === 0) absPool = shuffled.filter(ex => ex.primary.en === 'Abs');
    if (cardioPool.length === 0) cardioPool = shuffled.filter(ex => ex.primary.en === 'Cardio');

    const sessionAbs = absPool[0];
    const sessionCardio = cardioPool[0];
    const remainingTargets = shuffled.filter(ex => 
        ex.primary.en !== 'Abs' && ex.primary.en !== 'Cardio' && 
        !seenExerciseIds.has(ex.id) &&
        ex.id !== (sessionAbs ? sessionAbs.id : null) &&
        ex.id !== (sessionCardio ? sessionCardio.id : null)
    );

    const sessionTargets = remainingTargets.slice(0, 3);
    const session = [sessionAbs, ...sessionTargets, sessionCardio].filter(Boolean);
    session.forEach(ex => seenExerciseIds.add(ex.id));

    const container = document.getElementById('workout-container');
    if (!container) return;
    container.innerHTML = '';
    
    let baseReps = 12, baseSets = 3, baseRest = 60;
    if (level === 'beginner') { baseReps = 10; baseSets = 2; }
    else if (level === 'advanced') { baseReps = 15; baseSets = 4; }
    if (freq === '1-2') { baseSets = Math.max(2, baseSets); baseRest = 90; }
    else if (freq === '5-6') { baseSets += 1; baseRest = 45; }
    else if (freq === '7') { baseSets += 1; baseReps += 2; baseRest = 30; }

    session.forEach(ex => {
        const card = document.createElement('workout-card');
        card.setAttribute('name', ex.name ? (ex.name[currentLang] || ex.name.en) : ex[currentLang]);
        card.setAttribute('desc', ex.desc[currentLang] || ex.desc.en || (typeof ex.desc === 'string' ? ex.desc : ''));
        card.setAttribute('image', ex.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400');
        card.setAttribute('target', ex.primary[currentLang] || ex.primary.en);
        card.setAttribute('caution', (ex.caution && ex.caution[currentLang]) ? ex.caution[currentLang] : generateDetailedCaution(ex));
        card.setAttribute('reps', baseReps.toString());
        card.setAttribute('sets', baseSets.toString());
        card.setAttribute('rest', baseRest + 's');
        card.setAttribute('time', (baseSets * 3).toString() + 'm');
        container.appendChild(card);
    });
    generateStretching(session);
    generateDiet(goal);
}

function generateStretching(exercises) {
    const container = document.getElementById('stretching-container');
    if (!container) return;
    container.innerHTML = '';
    const targets = exercises.map(ex => (ex.primary.en || '').toLowerCase());
    const matchedStretches = stretchingDatabase.filter(s => targets.includes(s.target.toLowerCase())).slice(0, 5);
    if (matchedStretches.length < 5) matchedStretches.push(...stretchingDatabase.filter(s => !matchedStretches.includes(s)).slice(0, 5 - matchedStretches.length));
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
    if (!container) return;
    container.innerHTML = '';
    const daySeed = Math.floor(new Date() / (1000 * 60 * 60 * 24));
    const meals = ['breakfast', 'lunch', 'dinner'];
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;
    const goalKeywords = {
        'weight-loss': ['샐러드', 'Salad', '야채', 'Veggies', '닭가슴살', 'Chicken', '저칼로리', 'low-cal'],
        'muscle-gain': ['소고기', 'Beef', '연어', 'Salmon', '단백질', 'Protein', '스테이크', 'Steak', '오트밀', 'Oatmeal'],
        'general-fitness': ['현미밥', 'Brown Rice', '두부', 'Tofu', '샌드위치', 'Sandwich', '건강', 'Healthy']
    };
    const keywords = goalKeywords[goal] || [];
    meals.forEach(time => {
        let pool = dietDatabase.filter(d => d.time === time);
        const goalSpecificPool = pool.filter(d => keywords.some(k => (d.name.ko && d.name.ko.includes(k)) || (d.name.en && d.name.en.toLowerCase().includes(k.toLowerCase()))));
        const meal = (goalSpecificPool.length > 0 ? goalSpecificPool : pool)[daySeed % (goalSpecificPool.length > 0 ? goalSpecificPool.length : pool.length)];
        const card = document.createElement('div');
        card.className = 'diet-card';
        card.innerHTML = `
            <img src="${meal.image}" class="diet-image" alt="${meal.name[currentLang]}">
            <div class="diet-content">
                <div class="diet-header"><span class="diet-tag">${t('diet-' + time)}</span><span class="diet-goal-tag">${t('goal-' + goal)}</span></div>
                <h3>${meal.name[currentLang]}</h3>
                <div class="diet-recipe"><h4>${t('diet-ingredients')}</h4><p>${meal.ingredients[currentLang]}</p><h4 style="margin-top:10px;">${t('diet-recipe-title')}</h4><p>${meal.recipe[currentLang]}</p></div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderCatalog() {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = '';
    const localExercises = Object.entries(exerciseTranslations).map(([id, data]) => ({ id, ...data }));
    const allEx = [...localExercises, ...wgerExercises.slice(0, 20)];
    allEx.forEach(ex => {
        if (!ex) return;
        const item = document.createElement('div');
        item.className = 'catalog-item';
        const name = ex.name ? (ex.name[currentLang] || ex.name.en) : ex[currentLang];
        const desc = ex.desc[currentLang] || ex.desc.en || (typeof ex.desc === 'string' ? ex.desc : '');
        const target = ex.primary[currentLang] || ex.primary.en;
        item.innerHTML = `
            <img src="${ex.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'}" class="catalog-item-image">
            <div class="catalog-content-box">
                <div class="catalog-header"><h3>${name}</h3></div>
                <span class="diet-tag">${target}</span>
                <p class="rec-content">${desc}</p>
                <div class="catalog-tip"><strong>Tip:</strong> ${ex.tip ? ex.tip[currentLang] : '호흡을 일정하게 유지하세요.'}</div>
                <div class="catalog-caution"><strong>주의:</strong> ${generateDetailedCaution(ex)}</div>
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
            <div class="catalog-content-box"><h3>${ex[currentLang]}</h3><p class="rec-content">${ex.desc[currentLang]}</p></div>
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

let refreshCounter = 0;
document.addEventListener('DOMContentLoaded', async () => {
    setLanguage(currentLang);
    initMbtiQuiz();
    initSasangQuiz();
    await fetchWgerExercises();
    renderCatalog();
    document.getElementById('metrics-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = document.getElementById('gender').value, age = parseInt(document.getElementById('age').value), h = parseFloat(document.getElementById('height').value), w = parseFloat(document.getElementById('weight').value);
        if (h > 0 && w > 0 && age > 0) {
            userData.gender = gender; userData.age = age; userData.height = h; userData.weight = w;
            const hm = h / 100;
            userData.bmi = (w / (hm * hm)).toFixed(1);
            userData.bmr = (gender === 'male') ? Math.round(10 * w + 6.25 * h - 5 * age + 5) : Math.round(10 * w + 6.25 * h - 5 * age - 161);
            userData.dailyCalories = Math.round(userData.bmr * 1.5);
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
        const goal = document.getElementById('goal').value, level = document.getElementById('fitness-level').value, freq = document.getElementById('weekly-frequency').value;
        userData.goal = goal; userData.fitnessLevel = level; userData.weeklyFrequency = freq; refreshCounter = 0;
        generateWorkout(goal, level, freq);
        document.getElementById('workout-analysis-section').classList.remove('hidden');
        window.location.hash = 'workout-plan';
    });
    document.getElementById('refresh-workout-btn')?.addEventListener('click', () => {
        refreshCounter++;
        generateWorkout(userData.goal, userData.fitnessLevel, userData.weeklyFrequency, true);
        const icon = document.querySelector('#refresh-workout-btn i');
        if (icon) { icon.style.transform = `rotate(${refreshCounter * 360}deg)`; icon.style.transition = 'transform 0.5s ease-in-out'; }
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
