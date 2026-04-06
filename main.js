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
            } else {
                const icon = el.querySelector('i[data-lucide], svg.lucide');
                if (icon) {
                    const translatedText = translations[lang][key];
                    Array.from(el.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = node.textContent.trim() ? ` ${translatedText}` : translatedText;
                        }
                    });
                    if (!Array.from(el.childNodes).some(n => n.nodeType === Node.TEXT_NODE)) {
                        el.appendChild(document.createTextNode(` ${translatedText}`));
                    }
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    });

    // Update document title
    const titleSuffix = lang === 'ko' ? ' | 개인 맞춤형 건강 & 지혜 매거진' : ' | Personalized Health & Wisdom Magazine';
    const logoText = translations[lang]['nav-logo'] || 'AI Workout Coach';
    document.title = logoText + titleSuffix;

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.setAttribute('aria-label', translations[lang]['theme-toggle'] || 'Toggle Theme');

    const bmiStatus = document.getElementById('bmi-status');
    if (bmiStatus && bmiStatus.getAttribute('data-status-key')) {
        const statusKey = bmiStatus.getAttribute('data-status-key');
        bmiStatus.textContent = translations[lang][statusKey] || statusKey;
    }

    // Update Result Descriptions
    if (userData.sasang) {
        const sasangDesc = document.getElementById('sasang-type-desc');
        if (sasangDesc) sasangDesc.textContent = translations[lang][`sasang-insight-${userData.sasang}`] || translations[lang]['sasang-type-desc-default'];
    }
    if (userData.mbti) {
        const mbtiDesc = document.getElementById('mbti-type-desc');
        if (mbtiDesc) mbtiDesc.textContent = translations[lang][`mbti-insight-${userData.mbti}`] || translations[lang]['mbti-default-desc'];
    }

    // Re-render components and icons
    document.querySelectorAll('workout-card').forEach(card => {
        if (typeof card.render === 'function') card.render();
    });
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
        if (typeof translations === 'undefined') return;
        const lang = currentLang;
        
        const exName = this.getAttribute('ex-name');
        let name = this.getAttribute('name');
        let desc = this.getAttribute('desc');
        let image = this.getAttribute('image');
        
        // Accurate matching from DB on every render
        if (exName && exerciseDatabase.length > 0) {
            const exData = exerciseDatabase.find(e => e.name === exName);
            if (exData) {
                const info = getTranslatedData(exData);
                name = info.name;
                desc = info.desc;
                if (info.image) image = info.image;
            }
        }
        
        name = name || translations[lang]['workout-card-default-name'];
        desc = desc || translations[lang]['workout-card-default-desc'];
        image = image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
        
        const sets = this.getAttribute('sets') || '0';
        const reps = this.getAttribute('reps') || '0';
        const rest = this.getAttribute('rest') || '0';
        const calories = this.getAttribute('calories') || '0';
        const primaryTarget = this.getAttribute('primary-target') || translations[lang]['workout-card-default-target'];
        const secondaryTarget = this.getAttribute('secondary-target') || '';

        const formattedDesc = desc.split('[').map((part, i) => {
            if (i === 0) return part;
            const splitIdx = part.indexOf(']');
            if (splitIdx === -1) return part;
            const title = part.substring(0, splitIdx);
            const content = part.substring(splitIdx + 1);
            return `<div class="desc-item"><span class="desc-title">${title}</span><span class="desc-content">${content}</span></div>`;
        }).join('');

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: var(--card-background); border-radius: 20px; border: 1px solid var(--border-color); transition: all 0.3s ease; position: relative; overflow: hidden; display: flex; flex-direction: column; margin-bottom: 20px; }
                .image-container { width: 100%; height: 220px; overflow: hidden; position: relative; }
                .image-container img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
                :host(:hover) .image-container img { transform: scale(1.05); }
                .content { padding: 20px; flex-grow: 1; }
                h3 { color: var(--primary-color); margin: 0 0 10px 0; font-size: 1.3em; font-weight: 800; }
                .target-info { margin-bottom: 15px; display: flex; flex-direction: column; gap: 5px; }
                .target-row { display: flex; align-items: center; gap: 8px; font-size: 0.8em; }
                .target-label { font-weight: bold; padding: 2px 6px; border-radius: 4px; min-width: 60px; text-align: center; }
                .primary-label { background: var(--primary-color); color: white; }
                .secondary-label { background: var(--secondary-color); color: white; opacity: 0.8; }
                .description { font-size: 0.85em; color: var(--secondary-color); line-height: 1.6; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid var(--primary-color); }
                .desc-item { margin-bottom: 8px; }
                .desc-title { font-weight: bold; color: var(--primary-color); display: block; margin-bottom: 2px; }
                .desc-content { display: block; padding-left: 5px; opacity: 0.9; }
                .stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 15px; }
                .stat-item { background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px; text-align: center; }
                .label { font-size: 0.65em; text-transform: uppercase; color: var(--secondary-color); font-weight: 700; display: block; margin-bottom: 4px; }
                .value { font-weight: 700; font-size: 1em; color: var(--primary-color); }
                .badge { position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.7em; font-weight: bold; z-index: 2; border: 1px solid rgba(255,255,255,0.2); }
                .performance-tracking { margin-top: 15px; padding-top: 15px; border-top: 1px dashed var(--border-color); }
                .input-group { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
                input { padding: 10px; border-radius: 10px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color); width: 100%; box-sizing: border-box; font-size: 0.85em; }
            </style>
            <div class="badge">${translations[lang]['workout-card-badge']}</div>
            <div class="image-container"><img src="${image}" alt="${name}"></div>
            <div class="content">
                <div class="target-info">
                    <div class="target-row">
                        <span class="target-label primary-label">${lang === 'ko' ? '주요 타겟' : 'Primary'}</span>
                        <span class="target-value">${primaryTarget}</span>
                    </div>
                    ${secondaryTarget ? `
                    <div class="target-row">
                        <span class="target-label secondary-label">${lang === 'ko' ? '보조 타겟' : 'Secondary'}</span>
                        <span class="target-value">${secondaryTarget}</span>
                    </div>` : ''}
                </div>
                <h3>${name}</h3>
                <div class="description">
                    ${formattedDesc}
                </div>
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
                    <label style="display:flex; align-items:center; gap:8px; margin-top:12px; font-size:0.9em; color:var(--primary-color); cursor:pointer; font-weight:600;">
                        <input type="checkbox" class="is-completed" checked style="width:auto; height:18px; width:18px; border-radius:4px;"> ${translations[lang]['workout-card-completed-status']}
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
    const lang = currentLang;
    const defaultDesc = lang === 'ko' ? "가이드를 따라 올바른 자세로 동작을 수행하세요. 부상 방지를 위해 적절한 무게를 선택하는 것이 중요합니다." : "Follow the guide carefully and maintain proper form. It is important to choose an appropriate weight to prevent injury.";
    
    const rawInstructions = Array.isArray(ex.instructions) ? ex.instructions.join(' ') : (ex.instructions || "");
    const exNameLower = ex.name.toLowerCase();
    
    if (typeof exerciseTranslations === 'undefined') return { name: ex.name, desc: rawInstructions || defaultDesc, primary: "", secondary: "", image: null };
    
    let translation = exerciseTranslations[exNameLower];
    if (!translation) {
        const key = Object.keys(exerciseTranslations).find(k => exNameLower.includes(k));
        if (key) translation = exerciseTranslations[key];
    }

    if (translation) {
        let finalDesc = translation.desc?.[lang] || translation.desc;
        if (!finalDesc || typeof finalDesc === 'object') {
            finalDesc = (lang === 'en') ? rawInstructions : defaultDesc;
        }
        
        return { 
            name: translation[lang] || ex.name, 
            desc: finalDesc,
            primary: translation.primary?.[lang] || "",
            secondary: translation.secondary?.[lang] || "",
            image: translation.image || ((ex.images && ex.images.length > 0) ? `${IMG_BASE_URL}${ex.images[0]}` : null)
        };
    }

    // Fallback logic
    if (lang === 'ko') {
        let name = ex.name;
        const replacements = {
            'barbell': '바벨', 'dumbbell': '덤벨', 'cable': '케이블', 'bench': '벤치',
            'press': '프레스', 'row': '로우', 'curl': '컬', 'extension': '익스텐션',
            'squat': '스쿼트', 'lunge': '런지', 'deadlift': '데드리프트', 'fly': '플라이',
            'raise': '레이즈', 'pulldown': '풀다운', 'pushup': '푸시업', 'pullup': '풀업',
            'incline': '인클라인', 'decline': '디클라인', 'seated': '시티드', 'standing': '스탠딩'
        };
        Object.entries(replacements).forEach(([en, ko]) => {
            const regex = new RegExp(`\\b${en}\\b`, 'gi');
            name = name.replace(regex, ko);
        });
        return { name: name, desc: defaultDesc, primary: "", secondary: "", image: null };
    }

    return { name: ex.name, desc: rawInstructions || defaultDesc, primary: "", secondary: "", image: null };
}

function translateMuscle(muscle) {
    if (typeof muscleTranslations === 'undefined') return muscle;
    const lang = currentLang || 'ko';
    return muscleTranslations[lang]?.[muscle.toLowerCase()] || muscle;
}

let lastGeneratedTargets = [];

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

    lastGeneratedTargets = sessionPool.map(ex => ex.primaryMuscles?.[0] || 'full body');

    return sessionPool.map(ex => {
        const info = getTranslatedData(ex);
        const imgPath = info.image || ((ex.images && ex.images.length > 0) ? `${IMG_BASE_URL}${ex.images[0]}` : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400');
        const burned = Math.round((6.0 * 3.5 * (userData.weight || 70) / 200) * 15);
        
        return {
            name: info.name,
            sets: fitnessLevel === 'beginner' ? 3 : 4,
            reps: 12,
            rest: "60",
            desc: info.desc,
            image: imgPath,
            calories: burned,
            'primary-target': info.primary || translateMuscle(ex.primaryMuscles?.[0] || 'full body'),
            'secondary-target': info.secondary || translateMuscle(ex.secondaryMuscles?.[0] || ''),
            'ex-name': ex.name
        };
    });
}

function renderStretchingRecommendations() {
    const container = document.getElementById('stretching-container');
    if (!container || lastGeneratedTargets.length === 0) return;

    const uniqueTargets = [...new Set(lastGeneratedTargets)];
    let selectedStretches = [];
    
    uniqueTargets.forEach(target => {
        if (typeof stretchingDatabase !== 'undefined') {
            const matches = stretchingDatabase.filter(s => s.target === target);
            selectedStretches.push(...matches);
        }
    });

    container.innerHTML = selectedStretches.slice(0, 6).map(s => `
        <div class="stretching-card" style="min-width: 250px; background: var(--card-background); border-radius: 15px; overflow: hidden; border: 1px solid var(--border-color); flex-shrink: 0;">
            <img src="${s.image}" style="width: 100%; height: 150px; object-fit: cover;">
            <div style="padding: 15px;">
                <h4 style="color: var(--primary-color); margin: 0 0 10px 0;">${s.name[currentLang]}</h4>
                <p style="font-size: 0.8em; color: var(--secondary-color); line-height: 1.4;">
                    ${translations[currentLang]['stretching-item-desc'].replace('{target}', translateMuscle(s.target))}
                </p>
            </div>
        </div>
    `).join('');
    container.style.display = 'flex';
    container.style.gap = '15px';
    container.style.overflowX = 'auto';
    container.style.padding = '10px 0';
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    setLanguage(currentLang);
    await fetchExerciseData();

    document.getElementById('workout-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const workoutContainer = document.getElementById('workout-container');
        workoutContainer.innerHTML = `<p class="loading">${translations[currentLang]['workout-loading']}</p>`;
        setTimeout(() => {
            workoutContainer.innerHTML = '';
            const exercises = getExercisesByContext({ fitnessLevel: document.getElementById('fitness-level').value });
            exercises.forEach(ex => {
                const card = document.createElement('workout-card');
                Object.entries(ex).forEach(([k, v]) => card.setAttribute(k, v));
                workoutContainer.appendChild(card);
            });
            document.getElementById('workout-analysis-section').classList.remove('hidden');
            renderStretchingRecommendations();
            workoutContainer.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});

window.setLanguage = setLanguage;
