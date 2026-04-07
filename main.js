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

// Core Quiz Logic (Simplified)
const coreQuestions = [
    { q: { ko: "새로운 사람을 만나는 것을 즐기시나요?", en: "Do you enjoy meeting new people?" }, type: "EI" },
    { q: { ko: "땀이 잘 나는 편인가요?", en: "Do you sweat easily?" }, type: "Sasang" }
];
let coreCurrentStep = 0;
let coreAnswers = [];

function initCoreQuiz() {
    const card = document.getElementById('core-question-card');
    if (!card) return;
    renderCoreQuestion();
}

function renderCoreQuestion() {
    const qText = document.getElementById('core-question-text');
    const options = document.getElementById('core-options');
    if (!qText || !options || coreCurrentStep >= coreQuestions.length) return;

    qText.textContent = coreQuestions[coreCurrentStep].q[currentLang];
    options.innerHTML = `
        <button class="quiz-btn" onclick="handleCoreAnswer(true)">Yes</button>
        <button class="quiz-btn" onclick="handleCoreAnswer(false)">No</button>
    `;
    const progress = document.getElementById('core-progress-bar');
    if (progress) progress.style.width = `${((coreCurrentStep + 1) / coreQuestions.length) * 100}%`;
}

window.handleCoreAnswer = (ans) => {
    coreAnswers.push(ans);
    coreCurrentStep++;
    if (coreCurrentStep < coreQuestions.length) {
        renderCoreQuestion();
    } else {
        showCoreResults();
    }
};

function showCoreResults() {
    userData.mbti = coreAnswers[0] ? "E" : "I";
    userData.sasang = coreAnswers[1] ? "Taeeumin" : "Soyangin";
    
    document.getElementById('core-quiz').classList.add('hidden');
    document.getElementById('core-results').classList.remove('hidden');
    document.getElementById('core-mbti-value').textContent = userData.mbti;
    document.getElementById('core-sasang-value').textContent = userData.sasang;
}

// Sasang Quiz Logic
const sasangQuestions = [
    { q: { ko: "체격이 크고 골격이 굵으신가요?", en: "Do you have a large build and thick bones?" }, type: "Taeeum" },
    { q: { ko: "성격이 급하고 직선적이신가요?", en: "Are you impatient and straightforward?" }, type: "Soyang" }
];
let sasangCurrentStep = 0;
let sasangAnswers = [];

function initSasangQuiz() {
    const card = document.getElementById('sasang-question-card');
    if (!card) return;
    renderSasangQuestion();
}

function renderSasangQuestion() {
    const qText = document.getElementById('sasang-question-text');
    const options = document.getElementById('sasang-options');
    if (!qText || !options || sasangCurrentStep >= sasangQuestions.length) return;

    qText.textContent = sasangQuestions[sasangCurrentStep].q[currentLang];
    options.innerHTML = `
        <button class="quiz-btn" onclick="handleSasangAnswer(true)">Yes</button>
        <button class="quiz-btn" onclick="handleSasangAnswer(false)">No</button>
    `;
    const progress = document.getElementById('sasang-progress-bar');
    if (progress) progress.style.width = `${((sasangCurrentStep + 1) / sasangQuestions.length) * 100}%`;
}

window.handleSasangAnswer = (ans) => {
    sasangAnswers.push(ans);
    sasangCurrentStep++;
    if (sasangCurrentStep < sasangQuestions.length) {
        renderSasangQuestion();
    } else {
        showSasangResults();
    }
};

function showSasangResults() {
    userData.sasang = sasangAnswers[0] ? "Taeeumin" : "Soyangin";
    document.getElementById('sasang-quiz').classList.add('hidden');
    document.getElementById('sasang-results').classList.remove('hidden');
    document.getElementById('sasang-type-value').textContent = userData.sasang;
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    setLanguage(currentLang);
    await fetchExerciseData();
    initCoreQuiz();
    initSasangQuiz();

    document.getElementById('metrics-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const h = parseFloat(document.getElementById('height').value) / 100;
        const w = parseFloat(document.getElementById('weight').value);
        if (h > 0 && w > 0) {
            userData.bmi = (w / (h * h)).toFixed(1);
            document.getElementById('bmi-value').textContent = userData.bmi;
            document.getElementById('metrics-results').classList.remove('hidden');
        }
    });

    document.getElementById('workout-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const container = document.getElementById('workout-container');
        container.innerHTML = '<p>Loading...</p>';
        setTimeout(() => {
            const exercises = getExercisesByContext({ fitnessLevel: 'beginner' });
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
});

window.setLanguage = setLanguage;
