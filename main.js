// Global State
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: 'male', age: 30, height: 175, weight: 70,
    bmi: null, bmr: null, dailyCalories: null,
    mbti: null, sasang: null,
    fitnessLevel: 'beginner', goal: 'general-fitness', weeklyFrequency: '3-4',
    condition: 'excellent'
};

let seenExerciseIds = new Set(); 

// Core i18n Functions
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
    updateUserbackData();
}

// Userback Data Integration
function updateUserbackData() {
    if (window.Userback) {
        window.Userback.user_data = {
            id: userData.mbti || "guest_" + Math.floor(Math.random() * 1000000),
            info: {
                name: userData.sasang ? userData.sasang.toUpperCase() : "someone",
                email: "user@example.com",
                mbti: userData.mbti || "None",
                sasang: userData.sasang || "None",
                bmi: userData.bmi || "None",
                fitnessLevel: userData.fitnessLevel,
                goal: userData.goal,
                language: currentLang
            }
        };
    }
}

// Workout Card Component
class WorkoutCard extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    render() {
        const lang = currentLang;
        const t = (key) => (translations[lang] && translations[lang][key]) || key;
        
        const name = this.getAttribute('name');
        const desc = this.getAttribute('desc');
        const image = this.getAttribute('image');
        const target = this.getAttribute('target');
        const caution = this.getAttribute('caution');
        const reps = this.getAttribute('reps');
        const sets = this.getAttribute('sets');
        const rest = this.getAttribute('rest');

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: #1e293b; border-radius: 20px; overflow: hidden; color: #f1f5f9; font-family: sans-serif; border: 1px solid rgba(255,255,255,0.1); }
                .img-box { width: 100%; height: 200px; background: #0f172a; position: relative; }
                .img-box img { width: 100%; height: 100%; object-fit: cover; }
                .badge { position: absolute; top: 10px; right: 10px; background: #38bdf8; padding: 4px 8px; border-radius: 10px; font-size: 0.7em; }
                .content { padding: 15px; }
                h3 { margin: 0 0 10px 0; color: #38bdf8; }
                .desc { font-size: 0.9em; line-height: 1.5; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px; margin-bottom: 10px; }
                .caution { font-size: 0.8em; color: #fbbf24; padding: 10px; border-radius: 10px; background: rgba(251, 191, 36, 0.1); border-left: 4px solid #fbbf24; margin-bottom: 10px; }
                .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; text-align: center; font-size: 0.8em; }
                .item { background: rgba(56, 189, 248, 0.1); padding: 5px; border-radius: 5px; }
                .label { display: block; color: #94a3b8; font-size: 0.8em; }
            </style>
            <div class="img-box">
                <img src="${image}" alt="${name}">
                <span class="badge">${target}</span>
            </div>
            <div class="content">
                <h3>${name}</h3>
                <div class="desc"><strong>${t('workout-card-desc-title')}:</strong><br>${desc}</div>
                <div class="caution"><strong>⚠️ ${t('workout-card-caution')}</strong><br>${caution}</div>
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

// MBTI Logic
let mbtiStep = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
const mbtiKeys = ['EI', 'EI', 'EI', 'EI', 'EI', 'SN', 'SN', 'SN', 'SN', 'SN', 'TF', 'TF', 'TF', 'TF', 'TF', 'JP', 'JP', 'JP', 'JP', 'JP'];

function initMbtiQuiz() {
    mbtiStep = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    document.getElementById('mbti-quiz').classList.remove('hidden');
    document.getElementById('mbti-results').classList.add('hidden');
    renderMbtiQuestion();
}

function renderMbtiQuestion() {
    if (mbtiStep >= 20) { showMbtiResults(); return; }
    const t = (key) => translations[currentLang][key];
    document.getElementById('mbti-question-text').textContent = t(`mbti-q${mbtiStep + 1}-title`);
    const options = document.querySelector('.mbti-options');
    options.innerHTML = '';
    
    ['a', 'b'].forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'mbti-option-btn';
        btn.textContent = t(`mbti-q${mbtiStep + 1}-${opt}`);
        btn.onclick = () => {
            const trait = btn.textContent.match(/\(([A-Z])\)/)[1];
            mbtiScores[trait]++;
            mbtiStep++;
            renderMbtiQuestion();
        };
        options.appendChild(btn);
    });
    document.getElementById('mbti-progress-bar').style.width = `${(mbtiStep / 20) * 100}%`;
}

function showMbtiResults() {
    const type = (mbtiScores.E >= mbtiScores.I ? 'E' : 'I') + (mbtiScores.S >= mbtiScores.N ? 'S' : 'N') + (mbtiScores.T >= mbtiScores.F ? 'T' : 'F') + (mbtiScores.J >= mbtiScores.P ? 'J' : 'P');
    userData.mbti = type;
    document.getElementById('mbti-quiz').classList.add('hidden');
    document.getElementById('mbti-results').classList.remove('hidden');
    document.getElementById('mbti-type-value').textContent = type;
    document.getElementById('mbti-type-desc').innerHTML = translations[currentLang][`mbti-type-${type}`];
    const display = document.getElementById('mbti-display');
    if (display) { display.value = type; display.classList.add('populated'); }
    updateUserbackData();
}

// Sasang Logic
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
    const t = (key) => translations[currentLang][key];
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
    const t = (key) => translations[currentLang][key];
    document.getElementById('sasang-result-container').innerHTML = `
        <div class="deep-card ${type}" style="padding:20px; text-align:center;">
            <h3>${t(`sasang-${type}-title`)}</h3>
            <p>${t(`sasang-${type}-pros`)}</p>
            <p style="color:#fbbf24;">${t(`sasang-${type}-cons`)}</p>
            <p>${t(`sasang-${type}-diet`)}</p>
        </div>
    `;
    updateUserbackData();
}

// Generation Logic
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
    if (filtered.length < targetCount) { seenExerciseIds.clear(); filtered = pool.filter(ex => allowedIntensity.includes(ex.intensity)); }

    filtered.sort(() => Math.random() - 0.5);
    const session = filtered.slice(0, targetCount);
    
    session.forEach(ex => {
        seenExerciseIds.add(ex.id);
        const card = document.createElement('workout-card');
        card.setAttribute('name', ex[currentLang] || ex.ko);
        card.setAttribute('desc', ex.desc[currentLang]);
        card.setAttribute('image', ex.image);
        card.setAttribute('target', ex.primary[currentLang]);
        card.setAttribute('caution', ex.caution[currentLang]);
        card.setAttribute('reps', userData.condition === 'recovery' ? '8' : '12');
        card.setAttribute('sets', userData.condition === 'excellent' ? '4' : '3');
        card.setAttribute('rest', userData.condition === 'tired' ? '90s' : '60s');
        container.appendChild(card);
    });

    generateStretching(session);
    generateDiet(goal);
    document.getElementById('workout-analysis-section').classList.remove('hidden');
}

function generateStretching(exercises) {
    const container = document.getElementById('stretching-container');
    container.innerHTML = '';
    const targets = exercises.map(ex => ex.primary.en);
    const stretches = stretchingDatabase.filter(s => targets.includes(s.target)).slice(0, 5);
    stretches.forEach(s => {
        const div = document.createElement('div');
        div.className = 'rec-card';
        div.innerHTML = `<img src="${s.image}" style="width:100%; border-radius:10px;"><h4>${s.name[currentLang]}</h4>`;
        container.appendChild(div);
    });
}

function generateDiet(goal) {
    const container = document.getElementById('diet-container');
    container.innerHTML = '';
    dietDatabase.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'diet-card';
        div.innerHTML = `
            <img src="${meal.image}" class="diet-image">
            <div class="diet-content">
                <h4>${meal.name[currentLang]}</h4>
                <p style="font-size:0.8em; color:#94a3b8;">${meal.ingredients[currentLang]}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderCatalog() {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = '';
    Object.values(exerciseTranslations).slice(0, 6).forEach(ex => {
        const div = document.createElement('div');
        div.className = 'catalog-item';
        div.innerHTML = `
            <img src="${ex.image}" class="catalog-item-image">
            <div class="catalog-content-box">
                <h4>${ex[currentLang] || ex.ko}</h4>
                <span class="diet-tag">${ex.primary[currentLang]}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderHomeWorkout() {
    const container = document.getElementById('home-workout-container');
    if (!container) return;
    container.innerHTML = '';
    Object.values(exerciseTranslations).filter(ex => ex.isHome).forEach(ex => {
        const div = document.createElement('div');
        div.className = 'catalog-item';
        div.innerHTML = `<img src="${ex.image}" class="catalog-item-image"><h4>${ex[currentLang] || ex.ko}</h4>`;
        container.appendChild(div);
    });
}

function renderSupplements() {
    const container = document.getElementById('supplement-container');
    if (!container) return;
    container.innerHTML = '';
    supplementDatabase.forEach(s => {
        const div = document.createElement('div');
        div.className = 'rec-card';
        div.innerHTML = `<h4>${s.name[currentLang]}</h4><p style="font-size:0.8em;">${s.benefit[currentLang]}</p>`;
        container.appendChild(div);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    initMbtiQuiz();
    initSasangQuiz();

    document.getElementById('metrics-form').onsubmit = (e) => {
        e.preventDefault();
        const h = parseFloat(document.getElementById('height').value) / 100;
        const w = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        userData.bmi = (w / (h * h)).toFixed(1);
        userData.bmr = Math.round(10 * w + 6.25 * (h * 100) - 5 * age + 5);
        document.getElementById('bmi-value').textContent = userData.bmi;
        document.getElementById('bmr-value').textContent = userData.bmr;
        document.getElementById('daily-calories-value').textContent = Math.round(userData.bmr * 1.5);
        document.getElementById('metrics-results').classList.remove('hidden');
        document.getElementById('metrics-display').value = `BMI: ${userData.bmi}, BMR: ${userData.bmr}`;
        updateUserbackData();
    };

    document.getElementById('workout-form').onsubmit = (e) => {
        e.preventDefault();
        userData.goal = document.getElementById('goal').value;
        userData.fitnessLevel = document.getElementById('fitness-level').value;
        userData.condition = document.getElementById('health-status').value;
        generateWorkout(userData.goal, userData.fitnessLevel, '3-4');
    };

    document.getElementById('refresh-workout-btn').onclick = () => {
        generateWorkout(userData.goal, userData.fitnessLevel, '3-4', true);
    };

    document.getElementById('lang-toggle').onclick = () => {
        setLanguage(currentLang === 'ko' ? 'en' : 'ko');
        document.getElementById('lang-toggle').textContent = currentLang.toUpperCase();
    };
});

// Viral Sharing Functions
function shareContent(type, platform) {
    const url = window.location.href;
    let text = "";
    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;

    if (type === 'mbti' && userData.mbti) {
        text = `${t('share-mbti-prefix')} [${userData.mbti}]! ${t('share-suffix')}`;
    } else if (type === 'sasang' && userData.sasang) {
        const sasangTitle = t(`sasang-${userData.sasang}-title`).split(' ')[1];
        text = `${t('share-sasang-prefix')} [${sasangTitle}]! ${t('share-suffix')}`;
    } else if (type === 'workout') {
        text = t('share-workout-text');
    } else {
        text = t('header-subtitle');
    }

    if (platform === 'webshare' && navigator.share) {
        navigator.share({
            title: 'AI 운동 코치',
            text: text,
            url: url
        }).catch(console.error);
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'kakao') {
        // Simple Kakao link sharer (requires App Key for SDK, using sharer URL)
        window.open(`https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}`, '_blank');
    } else {
        copyToClipboard();
    }
}

function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast(translations[currentLang]['toast-copy-success']);
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
