// Global State & Constants
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: null, age: null, height: null, weight: null,
    bmi: null, bmr: null, mbti: null, sasang: null
};
let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const IMG_BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';

// Core i18n Functions
function setLanguage(lang) {
    if (typeof translations === 'undefined') {
        console.warn('Translations not loaded yet. Retrying in 100ms...');
        setTimeout(() => setLanguage(lang), 100);
        return;
    }
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'SELECT') {
                // For select, we usually translate the options inside, but data-i18n on select itself is rare.
                // If it exists, we might ignore or handle specifically.
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update document title
    const titleSuffix = lang === 'ko' ? ' | 개인 맞춤형 건강 & 지혜 매거진' : ' | Personalized Health & Wisdom Magazine';
    document.title = translations[lang]['nav-logo'] + titleSuffix;

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.setAttribute('aria-label', translations[lang]['theme-toggle']);

    const bmiStatus = document.getElementById('bmi-status');
    if (bmiStatus && bmiStatus.getAttribute('data-status-key')) {
        bmiStatus.textContent = translations[lang][bmiStatus.getAttribute('data-status-key')];
    }

    const metricsDisplay = document.getElementById('metrics-display');
    if (metricsDisplay && userData.bmi && userData.bmr) {
        const statusKey = bmiStatus ? bmiStatus.getAttribute('data-status-key') : '';
        const status = statusKey ? translations[lang][statusKey] : '';
        let summary = translations[lang]['metrics-summary'] || "BMI: {bmi} ({status}), BMR: {bmr} kcal/day";
        summary = summary.replace('{bmi}', userData.bmi).replace('{status}', status).replace('{bmr}', Math.round(userData.bmr));
        metricsDisplay.value = summary;
    }

    // Update Result Descriptions if results are visible
    if (userData.sasang) {
        const sasangDesc = document.getElementById('sasang-type-desc');
        if (sasangDesc) {
            sasangDesc.textContent = translations[lang][`sasang-insight-${userData.sasang}`] || translations[lang]['sasang-type-desc-default'];
        }
    }
    if (userData.mbti) {
        const mbtiDesc = document.getElementById('mbti-type-desc');
        if (mbtiDesc) {
            mbtiDesc.textContent = translations[lang][`mbti-insight-${userData.mbti}`] || translations[lang]['mbti-default-desc'];
        }
    }

    // Re-render components if needed
    document.querySelectorAll('workout-card').forEach(card => {
        if (card.render) card.render();
    });

    updateLanguageSwitcherUI();
    updateMbtiQuiz();
    updateSasangQuiz();
}

function updateLanguageSwitcherUI() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'ko' ? 'EN' : 'KO';
    }
}

// Web Components
class WorkoutCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this.render(); }
    render() {
        if (typeof translations === 'undefined') return;
        const lang = currentLang;
        const name = this.getAttribute('name') || translations[lang]['workout-card-default-name'];
        const sets = this.getAttribute('sets') || '0';
        const reps = this.getAttribute('reps') || '0';
        const rest = this.getAttribute('rest') || '0s';
        const desc = this.getAttribute('desc') || translations[lang]['workout-card-default-desc'];
        const image = this.getAttribute('image') || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
        const calories = this.getAttribute('calories') || '0';

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: var(--card-background); border-radius: 20px; border: 1px solid var(--border-color); transition: all 0.3s ease; position: relative; overflow: hidden; display: flex; flex-direction: column; margin-bottom: 20px; }
                .image-container { width: 100%; height: 200px; overflow: hidden; }
                .image-container img { width: 100%; height: 100%; object-fit: cover; }
                .content { padding: 20px; flex-grow: 1; }
                h3 { color: var(--primary-color); margin: 0 0 10px 0; font-size: 1.2em; }
                .description { font-size: 0.85em; color: var(--secondary-color); line-height: 1.6; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 10px; margin-bottom: 15px; }
                .stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
                .stat-item { display: flex; flex-direction: column; }
                .label { font-size: 0.7em; text-transform: uppercase; color: var(--secondary-color); font-weight: 700; }
                .value { font-weight: 600; font-size: 0.9em; }
                .badge { position: absolute; top: 10px; left: 10px; background: var(--primary-color); color: white; padding: 4px 8px; border-radius: 5px; font-size: 0.7em; font-weight: bold; z-index: 2; }
                .performance-tracking { margin-top: 15px; padding-top: 15px; border-top: 1px dashed var(--border-color); }
                .input-group { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
                input { padding: 8px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color); width: 100%; box-sizing: border-box; font-size: 0.85em; }
            </style>
            <div class="badge">${translations[lang]['workout-card-badge']}</div>
            <div class="image-container"><img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'"></div>
            <div class="content">
                <h3>${name}</h3>
                <div class="description"><strong>💡 ${translations[lang]['workout-card-guide']}:</strong><br>${desc}</div>
                <div class="stats">
                    <div class="stat-item"><span class="label">${translations[lang]['workout-card-target-sets']}</span><span class="value">${sets}</span></div>
                    <div class="stat-item"><span class="label">${translations[lang]['workout-card-target-reps']}</span><span class="value">${reps}</span></div>
                    <div class="stat-item"><span class="label">KCAL</span><span class="value">${calories}</span></div>
                </div>
                <div class="performance-tracking">
                    <div class="input-group">
                        <div class="input-field">
                            <label style="font-size:0.7em; color:var(--secondary-color);">${translations[lang]['workout-card-actual-sets-label']}</label>
                            <input type="number" class="actual-sets" value="${parseInt(sets)}" placeholder="${translations[lang]['workout-card-placeholder-sets']}">
                        </div>
                        <div class="input-field">
                            <label style="font-size:0.7em; color:var(--secondary-color);">${translations[lang]['workout-card-actual-reps-label']}</label>
                            <input type="number" class="actual-reps" value="${parseInt(reps)}" placeholder="${translations[lang]['workout-card-placeholder-reps']}">
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label style="font-size:0.7em; color:var(--secondary-color);">${translations[lang]['workout-card-actual-rest-label']}</label>
                            <input type="number" class="actual-rest" value="60" placeholder="${translations[lang]['workout-card-placeholder-rest']}">
                        </div>
                        <div class="input-field">
                            <label style="font-size:0.7em; color:var(--secondary-color);">${translations[lang]['workout-card-actual-time-label']}</label>
                            <input type="number" class="total-time" value="10" placeholder="${translations[lang]['workout-card-placeholder-time']}">
                        </div>
                    </div>
                    <label style="display:flex; align-items:center; gap:5px; margin-top:10px; font-size:0.8em; color:var(--primary-color); cursor:pointer;">
                        <input type="checkbox" class="is-completed" checked style="width:auto;"> ${translations[lang]['workout-card-completed-status']}
                    </label>
                </div>
            </div>
        `;
    }
}
customElements.define('workout-card', WorkoutCard);

// Exercise Management
async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (response.ok) { exerciseDatabase = await response.json(); return exerciseDatabase; }
    } catch (error) { console.error('Error fetching exercise data:', error); }
    return [];
}

function getTranslatedData(ex) {
    if (typeof exerciseTranslations === 'undefined') return { name: ex.name, desc: ex.instructions?.[0] || "" };
    const key = Object.keys(exerciseTranslations).find(k => ex.name.toLowerCase().includes(k.toLowerCase()));
    if (key) {
        return { name: exerciseTranslations[key][currentLang], desc: exerciseTranslations[key].desc };
    }
    return { name: ex.name, desc: ex.instructions?.[0] || "Follow the guide for this movement." };
}

function getExercisesByContext(options) {
    const { fitnessLevel } = options;
    if (exerciseDatabase.length === 0) return [];
    
    const parts = {
        chest: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('chest')),
        back: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('back') || (ex.primaryMuscles || []).includes('lats')),
        shoulders: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('shoulders')),
        arms: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('biceps') || (ex.primaryMuscles || []).includes('triceps')),
        legs: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('quads') || (ex.primaryMuscles || []).includes('hamstrings') || (ex.primaryMuscles || []).includes('glutes')),
        abs: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('abs') || (ex.category === 'abs')),
        cardio: exerciseDatabase.filter(ex => ex.category === 'cardio')
    };

    const focusPool = ['chest', 'back', 'shoulders', 'arms', 'legs'];
    const selectedFocus = focusPool[Math.floor(Math.random() * focusPool.length)];
    
    let sessionPool = [];
    sessionPool.push(...(parts[selectedFocus] || []).sort(() => 0.5 - Math.random()).slice(0, 2));
    const secondaryPart = focusPool.filter(p => p !== selectedFocus)[Math.floor(Math.random() * (focusPool.length - 1))];
    sessionPool.push(...(parts[secondaryPart] || []).sort(() => 0.5 - Math.random()).slice(0, 1));
    sessionPool.push(...(parts.abs || []).sort(() => 0.5 - Math.random()).slice(0, 1));
    sessionPool.push(...(parts.cardio || []).sort(() => 0.5 - Math.random()).slice(0, 1));

    if (sessionPool.length < 5) sessionPool.push(...exerciseDatabase.sort(() => 0.5 - Math.random()).slice(0, 5 - sessionPool.length));

    return sessionPool.map(ex => {
        const info = getTranslatedData(ex);
        const imgPath = (ex.images && ex.images.length > 0) ? `${IMG_BASE_URL}${ex.images[0]}` : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
        const metMap = { 'strength': 6.0, 'cardio': 8.0, 'stretching': 2.5, 'plyometrics': 8.0, 'abs': 4.0 };
        const burned = Math.round(((metMap[ex.category] || 5.0) * 3.5 * (userData.weight || 70) / 200) * 15);
        return {
            name: info.name,
            sets: fitnessLevel === 'beginner' ? 3 : 4,
            reps: 12,
            rest: "60",
            desc: info.desc,
            image: imgPath,
            calories: burned,
            target: ex.primaryMuscles?.[0] || translations[currentLang]['workout-card-default-target']
        };
    });
}

// MBTI Quiz Logic
const mbtiQuestions = [
    { dimension: "EI", positive: true },
    { dimension: "EI", positive: false },
    { dimension: "EI", positive: true },
    { dimension: "EI", positive: false },
    { dimension: "SN", positive: true },
    { dimension: "SN", positive: false },
    { dimension: "TF", positive: true },
    { dimension: "TF", positive: false },
    { dimension: "JP", positive: true },
    { dimension: "JP", positive: false }
];
let currentMbtiIndex = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function updateMbtiQuiz() {
    const container = document.getElementById('mbti-quiz');
    if (!container || container.classList.contains('hidden')) return;
    
    // Update progress
    const progressText = document.getElementById('mbti-progress-text');
    const progressBar = document.getElementById('mbti-progress-bar');
    if (progressText) {
        const stepText = translations[currentLang]['mbti-step'] || "Step";
        const suffixText = translations[currentLang]['mbti-step-suffix'] || "of";
        progressText.textContent = `${stepText} ${currentMbtiIndex + 1} ${suffixText} ${mbtiQuestions.length}`;
    }
    if (progressBar) progressBar.style.width = `${((currentMbtiIndex + 1) / mbtiQuestions.length) * 100}%`;

    if (currentMbtiIndex < mbtiQuestions.length) {
        const q = mbtiQuestions[currentMbtiIndex];
        const qKey = `mbti-q${currentMbtiIndex + 1}`;
        document.getElementById('mbti-question-text').textContent = translations[currentLang][qKey] || "Question";
        const optionsContainer = document.querySelector('#mbti-quiz .mbti-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            [1, 2, 3, 4, 5].forEach(score => {
                const btn = document.createElement('button');
                btn.className = 'mbti-opt';
                btn.textContent = translations[currentLang][`mbti-opt-${score}`] || score;
                btn.onclick = () => {
                    const weight = score - 3;
                    const dim1 = q.dimension[0]; const dim2 = q.dimension[1];
                    if (q.positive) { if (weight > 0) mbtiScores[dim1] += weight; else mbtiScores[dim2] += Math.abs(weight); }
                    else { if (weight > 0) mbtiScores[dim2] += weight; else mbtiScores[dim1] += Math.abs(weight); }
                    currentMbtiIndex++; updateMbtiQuiz();
                };
                optionsContainer.appendChild(btn);
            });
        }
    } else { showMbtiResults(); }
}

function showMbtiResults() {
    let type = "";
    type += mbtiScores.E >= mbtiScores.I ? "E" : "I";
    type += mbtiScores.S >= mbtiScores.N ? "S" : "N";
    type += mbtiScores.T >= mbtiScores.F ? "T" : "F";
    type += mbtiScores.J >= mbtiScores.P ? "J" : "P";
    userData.mbti = type;
    document.getElementById('mbti-type-value').textContent = type;
    document.getElementById('mbti-display').value = type;
    document.getElementById('mbti-quiz').classList.add('hidden');
    document.getElementById('mbti-results').classList.remove('hidden');
    
    // Update description immediately
    const mbtiDesc = document.getElementById('mbti-type-desc');
    if (mbtiDesc) mbtiDesc.textContent = translations[currentLang][`mbti-insight-${type}`] || translations[currentLang]['mbti-default-desc'];
}

// Sasang Logic
const sasangQuestions = [
    { options: ["TY", "TE", "SY", "SE"] },
    { options: ["TY", "TE", "SY", "SE"] }
];
let currentSasangIndex = 0;
let sasangScores = { TY: 0, TE: 0, SY: 0, SE: 0 };

function updateSasangQuiz() {
    const container = document.getElementById('sasang-quiz');
    if (!container || container.classList.contains('hidden')) return;
    
    // Update progress
    const progressText = document.getElementById('sasang-progress-text');
    const progressBar = document.getElementById('sasang-progress-bar');
    if (progressText) {
        const stepText = translations[currentLang]['mbti-step'] || "Step";
        const suffixText = translations[currentLang]['mbti-step-suffix'] || "of";
        progressText.textContent = `${stepText} ${currentSasangIndex + 1} ${suffixText} ${sasangQuestions.length}`;
    }
    if (progressBar) progressBar.style.width = `${((currentSasangIndex + 1) / sasangQuestions.length) * 100}%`;

    if (currentSasangIndex < sasangQuestions.length) {
        const q = sasangQuestions[currentSasangIndex];
        const qKey = `sasang-q${currentSasangIndex + 1}`;
        document.getElementById('sasang-question-text').textContent = translations[currentLang][qKey] || "Question";
        const optContainer = document.getElementById('sasang-options');
        if (optContainer) {
            optContainer.innerHTML = '';
            q.options.forEach((type, idx) => {
                const btn = document.createElement('button');
                btn.className = 'mbti-opt';
                const optKey = `sasang-q${currentSasangIndex + 1}-opt${idx + 1}`;
                btn.textContent = translations[currentLang][optKey] || "Option";
                btn.onclick = () => { sasangScores[type]++; currentSasangIndex++; updateSasangQuiz(); };
                optContainer.appendChild(btn);
            });
        }
    } else { showSasangResults(); }
}

function showSasangResults() {
    let type = Object.keys(sasangScores).reduce((a, b) => sasangScores[a] > sasangScores[b] ? a : b);
    userData.sasang = type;
    const typeName = translations[currentLang][`sasang-type-${type}`] || type;
    document.getElementById('sasang-type-value').textContent = typeName;
    document.getElementById('sasang-quiz').classList.add('hidden');
    document.getElementById('sasang-results').classList.remove('hidden');
    
    // Update description immediately
    const sasangDesc = document.getElementById('sasang-type-desc');
    if (sasangDesc) {
        sasangDesc.textContent = translations[currentLang][`sasang-insight-${type}`] || translations[currentLang]['sasang-type-desc-default'];
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    // UI Elements Initialization
    const metricsForm = document.getElementById('metrics-form');
    const workoutForm = document.getElementById('workout-form');
    const themeToggle = document.getElementById('theme-toggle');

    // Language Initial Setup
    setLanguage(currentLang);

    // Fetch Initial Data
    await fetchExerciseData();

    // Event Listeners
    metricsForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        userData.gender = document.getElementById('gender').value;
        userData.age = parseInt(document.getElementById('age').value);
        userData.height = parseInt(document.getElementById('height').value);
        userData.weight = parseInt(document.getElementById('weight').value);
        const heightM = userData.height / 100;
        userData.bmi = parseFloat((userData.weight / (heightM * heightM)).toFixed(1));
        userData.bmr = (userData.gender === 'male') ? (10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5) : (10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161);
        
        document.getElementById('bmi-value').textContent = userData.bmi;
        document.getElementById('bmr-value').textContent = Math.round(userData.bmr);
        
        let statusKey = 'bmi-normal';
        if (userData.bmi < 18.5) statusKey = 'bmi-underweight';
        else if (userData.bmi >= 25 && userData.bmi < 30) statusKey = 'bmi-overweight';
        else if (userData.bmi >= 30) statusKey = 'bmi-obese';
        
        const bmiStatus = document.getElementById('bmi-status');
        if (bmiStatus) {
            bmiStatus.setAttribute('data-status-key', statusKey);
            bmiStatus.textContent = translations[currentLang][statusKey];
        }

        document.getElementById('metrics-results').classList.remove('hidden');
        setLanguage(currentLang);
    });

    workoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const workoutContainer = document.getElementById('workout-container');
        workoutContainer.innerHTML = `<p class="loading">${translations[currentLang]['workout-loading']}</p>`;
        setTimeout(() => {
            workoutContainer.innerHTML = '';
            const exercises = getExercisesByContext({ fitnessLevel: document.getElementById('fitness-level').value });
            if (exercises.length === 0) { workoutContainer.innerHTML = `<p>${translations[currentLang]['workout-fetch-error']}</p>`; return; }
            exercises.forEach(ex => {
                const card = document.createElement('workout-card');
                card.setAttribute('name', ex.name);
                card.setAttribute('sets', ex.sets);
                card.setAttribute('reps', ex.reps);
                card.setAttribute('rest', ex.rest);
                card.setAttribute('desc', ex.desc);
                card.setAttribute('image', ex.image);
                card.setAttribute('calories', ex.calories);
                workoutContainer.appendChild(card);
            });
            document.getElementById('workout-analysis-section').classList.remove('hidden');
            if (window.lucide) lucide.createIcons();
            workoutContainer.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });

    themeToggle?.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (window.lucide) lucide.createIcons();
    });

    document.getElementById('retake-mbti')?.addEventListener('click', () => {
        currentMbtiIndex = 0; mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        document.getElementById('mbti-quiz').classList.remove('hidden');
        document.getElementById('mbti-results').classList.add('hidden');
        updateMbtiQuiz();
    });

    document.getElementById('retake-sasang')?.addEventListener('click', () => {
        currentSasangIndex = 0; sasangScores = { TY: 0, TE: 0, SY: 0, SE: 0 };
        document.getElementById('sasang-quiz').classList.remove('hidden');
        document.getElementById('sasang-results').classList.add('hidden');
        updateSasangQuiz();
    });

    document.getElementById('analyze-workout-btn')?.addEventListener('click', () => {
        const cards = document.querySelectorAll('workout-card');
        let totalSets = 0; let actualSets = 0;
        cards.forEach(c => {
            totalSets += parseInt(c.getAttribute('sets'));
            actualSets += parseInt(c.shadowRoot.querySelector('.actual-sets').value);
        });
        const rate = Math.round((actualSets/totalSets)*100);
        document.getElementById('analysis-results').classList.remove('hidden');
        document.getElementById('analysis-content').innerHTML = `<h4>${translations[currentLang]['analysis-completion-rate']}: ${rate}%</h4><p>${translations[currentLang]['analysis-motivation']}</p>`;
        document.getElementById('analysis-results').scrollIntoView({ behavior: 'smooth' });
    });

    if (window.lucide) lucide.createIcons();
});

window.setLanguage = setLanguage;
function showLegal(t) {
    document.getElementById('privacy-policy').classList.add('hidden');
    document.getElementById('terms-of-service').classList.add('hidden');
    if(t==='privacy') { document.getElementById('privacy-policy').classList.remove('hidden'); document.getElementById('privacy-policy').scrollIntoView({behavior:'smooth'}); }
    else { document.getElementById('terms-of-service').classList.remove('hidden'); document.getElementById('terms-of-service').scrollIntoView({behavior:'smooth'}); }
}
window.showLegal = showLegal;
