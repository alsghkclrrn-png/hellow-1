// Global State & Constants
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: 'male', age: 30, height: 175, weight: 70,
    bmi: null, bmr: null, mbti: null, sasang: null
};
let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const IMG_BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';

// Fallback translations if translations.js fails to load
const defaultTranslations = {
    ko: { 'nav-logo': 'AI 운동 코치', 'workout-loading': 'AI 루틴 생성 중...', 'workout-card-badge': '전문 트레이닝 플랜' },
    en: { 'nav-logo': 'AI Workout Coach', 'workout-loading': 'Generating AI Routine...', 'workout-card-badge': 'Expert Training Plan' }
};

const muscleTranslations = {
    ko: { 'chest': '가슴', 'back': '등', 'shoulders': '어깨', 'biceps': '이두', 'triceps': '삼두', 'legs': '하체', 'quads': '대퇴사두', 'hamstrings': '햄스트링', 'glutes': '둔근', 'abs': '복근', 'full body': '전신' },
    en: { 'chest': 'Chest', 'back': 'Back', 'shoulders': 'Shoulders', 'biceps': 'Biceps', 'triceps': 'Triceps', 'legs': 'Legs', 'quads': 'Quads', 'hamstrings': 'Hamstrings', 'glutes': 'Glutes', 'abs': 'Abs', 'full body': 'Full Body' }
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
    document.title = logoText + (lang === 'ko' ? ' | 개인 맞춤형 건강 & 지혜 매거진' : ' | Personalized Health & Wisdom Magazine');

    updateLanguageSwitcherUI();
    if (window.lucide) window.lucide.createIcons();
    renderStretchingRecommendations(); 
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
        
        const name = this.getAttribute('name') || activeTranslations[lang]['workout-card-default-name'] || 'Exercise';
        const desc = this.getAttribute('desc') || activeTranslations[lang]['workout-card-default-desc'] || 'Follow the guide.';
        const image = this.getAttribute('image') || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
        const sets = this.getAttribute('sets') || '3';
        const reps = this.getAttribute('reps') || '12';
        const calories = this.getAttribute('calories') || '0';
        const primaryTarget = this.getAttribute('primary-target') || 'Full Body';

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: var(--card-background, #fff); border-radius: 20px; border: 1px solid var(--border-color, #eee); overflow: hidden; display: flex; flex-direction: column; margin-bottom: 20px; color: var(--text-color, #333); }
                .image-container { width: 100%; height: 200px; }
                .image-container img { width: 100%; height: 100%; object-fit: cover; }
                .content { padding: 20px; }
                h3 { color: var(--primary-color, #007bff); margin: 0 0 10px 0; }
                .stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 15px; }
                .stat-item { background: rgba(0,0,0,0.05); padding: 8px; border-radius: 8px; text-align: center; font-size: 0.8em; }
            </style>
            <div class="image-container"><img src="${image}" alt="${name}"></div>
            <div class="content">
                <h3>${name}</h3>
                <p style="font-size:0.9em; opacity:0.8;">${desc}</p>
                <div class="stats">
                    <div class="stat-item"><b>${sets}</b> Sets</div>
                    <div class="stat-item"><b>${reps}</b> Reps</div>
                    <div class="stat-item"><b>${calories}</b> kcal</div>
                </div>
            </div>
        `;
    }
}
if (!customElements.get('workout-card')) customElements.define('workout-card', WorkoutCard);

// Exercise Management
async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (response.ok) { exerciseDatabase = await response.json(); return exerciseDatabase; }
    } catch (error) { console.error('Error fetching exercise data:', error); }
    return [];
}

function getTranslatedData(ex) {
    const lang = currentLang;
    const name = ex.name;
    const desc = Array.isArray(ex.instructions) ? ex.instructions.join(' ') : (ex.instructions || "");
    return { name, desc, image: (ex.images && ex.images.length > 0) ? `${IMG_BASE_URL}${ex.images[0]}` : null };
}

function translateMuscle(muscle) {
    return muscleTranslations[currentLang]?.[muscle.toLowerCase()] || muscle;
}

let lastGeneratedTargets = [];

function getExercisesByContext(options) {
    if (exerciseDatabase.length === 0) return [];
    const sessionPool = exerciseDatabase.sort(() => 0.5 - Math.random()).slice(0, 5);
    lastGeneratedTargets = sessionPool.map(ex => ex.primaryMuscles?.[0] || 'full body');
    return sessionPool.map(ex => {
        const info = getTranslatedData(ex);
        return {
            name: info.name,
            sets: 3, reps: 12,
            desc: info.desc,
            image: info.image,
            calories: 50,
            'primary-target': translateMuscle(ex.primaryMuscles?.[0] || 'full body')
        };
    });
}

function renderStretchingRecommendations() {
    const container = document.getElementById('stretching-container');
    if (!container) return;
    container.innerHTML = lastGeneratedTargets.length === 0 ? '<p data-i18n="stretching-empty">Generate workout first!</p>' : '<p>Stretching recommendations based on your workout.</p>';
}

// MBTI Quiz Implementation
const mbtiQuestions = [
    { id: 1, trait: 'E', key: 'mbti-q1' },
    { id: 2, trait: 'N', key: 'mbti-q2' },
    { id: 3, trait: 'T', key: 'mbti-q3' },
    { id: 4, trait: 'P', key: 'mbti-q4' },
    { id: 5, trait: 'I', key: 'mbti-q5' },
    { id: 6, trait: 'S', key: 'mbti-q6' },
    { id: 7, trait: 'F', key: 'mbti-q7' },
    { id: 8, trait: 'J', key: 'mbti-q8' },
    { id: 9, trait: 'N', key: 'mbti-q9' },
    { id: 10, trait: 'F', key: 'mbti-q10' }
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
    const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;

    if (!qText || !optionsContainer || mbtiCurrentStep >= mbtiQuestions.length) return;

    const currentQ = mbtiQuestions[mbtiCurrentStep];
    qText.textContent = activeTranslations[currentLang][currentQ.key] || currentQ.key;

    optionsContainer.innerHTML = `
        <button class="mbti-option-btn" onclick="handleMbtiAnswer(true)">${activeTranslations[currentLang]['mbti-opt-yes']}</button>
        <button class="mbti-option-btn" onclick="handleMbtiAnswer(false)">${activeTranslations[currentLang]['mbti-opt-no']}</button>
    `;

    const progress = ((mbtiCurrentStep + 1) / mbtiQuestions.length) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${mbtiCurrentStep + 1} / ${mbtiQuestions.length}`;
}

window.handleMbtiAnswer = (isYes) => {
    const currentQ = mbtiQuestions[mbtiCurrentStep];
    if (isYes) {
        mbtiScores[currentQ.trait]++;
    } else {
        // Map opposites
        const opposites = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' };
        mbtiScores[opposites[currentQ.trait]]++;
    }

    mbtiCurrentStep++;
    if (mbtiCurrentStep < mbtiQuestions.length) {
        renderMbtiQuestion();
    } else {
        showMbtiResults();
    }
};

function showMbtiResults() {
    const quizContainer = document.getElementById('mbti-quiz');
    const resultsContainer = document.getElementById('mbti-results');
    const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;

    const type = [
        mbtiScores.E >= mbtiScores.I ? 'E' : 'I',
        mbtiScores.S >= mbtiScores.N ? 'S' : 'N',
        mbtiScores.T >= mbtiScores.F ? 'T' : 'F',
        mbtiScores.J >= mbtiScores.P ? 'J' : 'P'
    ].join('');

    userData.mbti = type;
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    document.getElementById('mbti-type-value').textContent = type;
    
    const insightText = document.getElementById('mbti-insight-text');
    if (insightText) {
        let report = '<ul class="mbti-report-list">';
        type.split('').forEach(char => {
            report += `<li>${activeTranslations[currentLang]['mbti-trait-' + char]}</li>`;
        });
        report += '</ul>';
        insightText.innerHTML = report;
    }

    const mbtiDisplay = document.getElementById('mbti-display');
    if (mbtiDisplay) {
        mbtiDisplay.value = type;
        mbtiDisplay.classList.add('populated');
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    setLanguage(currentLang);
    await fetchExerciseData();
    initMbtiQuiz();

    document.getElementById('metrics-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = document.getElementById('gender').value;
        const age = parseInt(document.getElementById('age').value);
        const h = parseFloat(document.getElementById('height').value);
        const w = parseFloat(document.getElementById('weight').value);
        
        if (h > 0 && w > 0 && age > 0) {
            userData.gender = gender;
            userData.age = age;
            userData.height = h;
            userData.weight = w;
            const hm = h / 100;
            userData.bmi = (w / (hm * hm)).toFixed(1);
            if (gender === 'male') {
                userData.bmr = Math.round(10 * w + 6.25 * h - 5 * age + 5);
            } else {
                userData.bmr = Math.round(10 * w + 6.25 * h - 5 * age - 161);
            }
            document.getElementById('bmi-value').textContent = userData.bmi;
            document.getElementById('bmr-value').textContent = userData.bmr;
            document.getElementById('metrics-results').classList.remove('hidden');
            const summary = document.getElementById('metrics-display');
            if (summary) {
                const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;
                const status = userData.bmi < 18.5 ? 'underweight' : (userData.bmi < 25 ? 'normal' : (userData.bmi < 30 ? 'overweight' : 'obese'));
                const statusText = activeTranslations[currentLang][`bmi-${status}`] || status;
                summary.value = `BMI: ${userData.bmi} (${statusText}), BMR: ${userData.bmr} kcal`;
            }
        }
    });

    document.getElementById('workout-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const container = document.getElementById('workout-container');
        container.innerHTML = '<p>Loading...</p>';
        setTimeout(() => {
            const exercises = getExercisesByContext({ fitnessLevel: document.getElementById('fitness-level').value });
            container.innerHTML = '';
            exercises.forEach(ex => {
                const card = document.createElement('workout-card');
                Object.entries(ex).forEach(([k, v]) => card.setAttribute(k, v));
                container.appendChild(card);
            });
            document.getElementById('workout-analysis-section').classList.remove('hidden');
            renderStretchingRecommendations();
        }, 500);
    });

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const theme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    document.getElementById('retake-mbti')?.addEventListener('click', () => {
        initMbtiQuiz();
    });
});

window.setLanguage = setLanguage;
window.handleMbtiAnswer = handleMbtiAnswer;
