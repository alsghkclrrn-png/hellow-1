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
                // Preserve icons if they exist
                const icon = el.querySelector('i[data-lucide], svg.lucide');
                if (icon) {
                    const translatedText = translations[lang][key];
                    // Keep the icon and update only the text node
                    Array.from(el.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = node.textContent.trim() ? ` ${translatedText}` : translatedText;
                        }
                    });
                    // If no text node found, append one
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
    if (themeBtn) {
        themeBtn.setAttribute('aria-label', translations[lang]['theme-toggle'] || 'Toggle Theme');
    }

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
    document.querySelectorAll('workout-card').forEach(card => card.render?.());
    updateLanguageSwitcherUI();
    if (window.lucide) window.lucide.createIcons();
    
    // Update Quizzes if they are active
    if (!document.getElementById('core-quiz')?.classList.contains('hidden')) updateCoreQuiz();
    if (!document.getElementById('mbti-quiz')?.classList.contains('hidden')) updateMbtiQuiz();
    if (!document.getElementById('sasang-quiz')?.classList.contains('hidden')) updateSasangQuiz();
    
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
        
        // Try to translate on the fly if it's a dynamic exercise card
        let name = this.getAttribute('name');
        let desc = this.getAttribute('desc');
        const exName = this.getAttribute('ex-name');
        
        if (exName && typeof exerciseDatabase !== 'undefined') {
            const exData = exerciseDatabase.find(e => e.name === exName);
            if (exData) {
                const info = getTranslatedData(exData);
                name = info.name;
                desc = info.desc;
            }
        }
        
        name = name || translations[lang]['workout-card-default-name'];
        desc = desc || translations[lang]['workout-card-default-desc'];
        
        const sets = this.getAttribute('sets') || '0';
        const reps = this.getAttribute('reps') || '0';
        const rest = this.getAttribute('rest') || '0';
        const image = this.getAttribute('image') || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
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
                .image-container img { width: 100%; height: 100%; object-fit: cover; }
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
                    <div class="input-group">
                        <div class="input-field">
                            <label style="font-size:0.7em; color:var(--secondary-color);">${translations[lang]['workout-card-actual-rest-label']}</label>
                            <input type="number" class="actual-rest" value="${rest}" placeholder="${translations[lang]['workout-card-placeholder-rest']}">
                        </div>
                        <div class="input-field">
                            <label style="font-size:0.7em; color:var(--secondary-color);">${translations[lang]['workout-card-actual-time-label']}</label>
                            <input type="number" class="total-time" value="10" placeholder="${translations[lang]['workout-card-placeholder-time']}">
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
    } catch (error) { console.error('Error:', error); }
    return [];
}

function getTranslatedData(ex) {
    const lang = currentLang;
    if (typeof exerciseTranslations === 'undefined') return { name: ex.name, desc: ex.instructions?.[0] || "", primary: "", secondary: "", image: null };
    
    const exNameLower = ex.name.toLowerCase();
    let translation = exerciseTranslations[exNameLower];
    
    // Partial match if exact match not found
    if (!translation) {
        const key = Object.keys(exerciseTranslations).find(k => exNameLower.includes(k));
        if (key) translation = exerciseTranslations[key];
    }

    if (translation) {
        return { 
            name: translation[lang], 
            desc: translation.desc?.[lang] || translation.desc || (ex.instructions?.[0] || (lang === 'ko' ? "가이드를 따라 동작을 수행하세요." : "Follow the guide.")),
            primary: translation.primary?.[lang] || "",
            secondary: translation.secondary?.[lang] || "",
            image: translation.image || null
        };
    }

    // Fallback if no translation found at all
    if (lang === 'ko') {
        // Basic translation mapping for common words in names
        let name = ex.name;
        const replacements = {
            'barbell': '바벨', 'dumbbell': '덤벨', 'cable': '케이블', 'bench': '벤치',
            'press': '프레스', 'row': '로우', 'curl': '컬', 'extension': '익스텐션',
            'squat': '스쿼트', 'lunge': '런지', 'deadlift': '데드리프트', 'fly': '플라이',
            'raise': '레이즈', 'pulldown': '풀다운', 'pushup': '푸시업', 'pullup': '풀업',
            'incline': '인클라인', 'decline': '디클라인', 'seated': '시티드', 'standing': '스탠딩'
        };
        Object.entries(replacements).forEach(([en, ko]) => {
            const regex = new RegExp(en, 'gi');
            name = name.replace(regex, ko);
        });

        return {
            name: name,
            desc: "가이드를 따라 올바른 자세로 운동을 수행해 보세요. 부상 방지를 위해 적절한 무게를 선택하는 것이 중요합니다.",
            primary: "",
            secondary: "",
            image: null
        };
    }

    return { name: ex.name, desc: ex.instructions?.[0] || "Follow the guide.", primary: "", secondary: "", image: null };
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
        const metMap = { 'strength': 6.0, 'cardio': 8.0, 'plyometrics': 8.0, 'abs': 4.0 };
        const burned = Math.round(((metMap[ex.category] || 5.0) * 3.5 * (userData.weight || 70) / 200) * 15);
        
        const rawPrimary = ex.primaryMuscles?.[0] || 'full body';
        const primaryTarget = info.primary || translateMuscle(rawPrimary);
        
        const rawSecondary = ex.secondaryMuscles?.[0] || '';
        const secondaryTarget = info.secondary || (rawSecondary ? translateMuscle(rawSecondary) : "");

        return {
            name: info.name,
            sets: fitnessLevel === 'beginner' ? 3 : 4,
            reps: 12,
            rest: "60",
            desc: info.desc,
            image: imgPath,
            calories: burned,
            'primary-target': primaryTarget,
            'secondary-target': secondaryTarget,
            'ex-name': ex.name
        };
    });
}

function renderStretchingRecommendations() {
    const container = document.getElementById('stretching-container');
    if (!container) return;
    
    if (lastGeneratedTargets.length === 0) {
        container.innerHTML = `<p class="empty-msg" data-i18n="stretching-empty">${translations[currentLang]['stretching-empty']}</p>`;
        return;
    }

    const uniqueTargets = [...new Set(lastGeneratedTargets)];
    let selectedStretches = [];
    
    uniqueTargets.forEach(target => {
        const matches = stretchingDatabase.filter(s => s.target === target);
        selectedStretches.push(...matches);
    });

    if (selectedStretches.length < 5) {
        const extras = stretchingDatabase.filter(s => !selectedStretches.includes(s)).sort(() => 0.5 - Math.random());
        selectedStretches.push(...extras.slice(0, 5 - selectedStretches.length));
    }

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

// MBTI Quiz Logic - Enhanced with 20 questions
let currentMbtiIndex = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
const mbtiQuestions = [
    {dimension:"EI",pos:true}, {dimension:"EI",pos:false}, {dimension:"EI",pos:true}, {dimension:"EI",pos:false}, {dimension:"EI",pos:true},
    {dimension:"SN",pos:true}, {dimension:"SN",pos:false}, {dimension:"SN",pos:true}, {dimension:"SN",pos:false}, {dimension:"SN",pos:true},
    {dimension:"TF",pos:true}, {dimension:"TF",pos:false}, {dimension:"TF",pos:true}, {dimension:"TF",pos:false}, {dimension:"TF",pos:true},
    {dimension:"JP",pos:true}, {dimension:"JP",pos:false}, {dimension:"JP",pos:true}, {dimension:"JP",pos:false}, {dimension:"JP",pos:true}
];

function updateMbtiQuiz() {
    const container = document.getElementById('mbti-quiz');
    if (!container || container.classList.contains('hidden')) return;
    const progressText = document.getElementById('mbti-progress-text');
    const progressBar = document.getElementById('mbti-progress-bar');
    if (progressText) progressText.textContent = `${translations[currentLang]['mbti-step']} ${currentMbtiIndex+1} ${translations[currentLang]['mbti-step-suffix']} ${mbtiQuestions.length}`;
    if (progressBar) progressBar.style.width = `${((currentMbtiIndex+1)/mbtiQuestions.length)*100}%`;
    
    if (currentMbtiIndex < mbtiQuestions.length) {
        document.getElementById('mbti-question-text').textContent = translations[currentLang][`mbti-q${currentMbtiIndex+1}`];
        const optCont = document.querySelector('#mbti-quiz .mbti-options');
        optCont.innerHTML = '';
        [1,2,3,4,5].forEach(score => {
            const btn = document.createElement('button');
            btn.className = 'mbti-opt';
            btn.textContent = translations[currentLang][`mbti-opt-${score}`];
            btn.onclick = () => {
                const q = mbtiQuestions[currentMbtiIndex];
                const weight = score - 3;
                const d1 = q.dimension[0], d2 = q.dimension[1];
                if (q.pos) { if(weight>0) mbtiScores[d1]+=weight; else if(weight<0) mbtiScores[d2]+=Math.abs(weight); }
                else { if(weight>0) mbtiScores[d2]+=weight; else if(weight<0) mbtiScores[d1]+=Math.abs(weight); }
                currentMbtiIndex++; updateMbtiQuiz();
            };
            optCont.appendChild(btn);
        });
    } else showMbtiResults();
}

function showMbtiResults() {
    let type = (mbtiScores.E>=mbtiScores.I?"E":"I")+(mbtiScores.S>=mbtiScores.N?"S":"N")+(mbtiScores.T>=mbtiScores.F?"T":"F")+(mbtiScores.J>=mbtiScores.P?"J":"P");
    userData.mbti = type;
    document.getElementById('mbti-type-value').textContent = type;
    const displayEl = document.getElementById('mbti-display');
    if (displayEl) displayEl.value = type;
    document.getElementById('mbti-quiz').classList.add('hidden');
    document.getElementById('mbti-results').classList.remove('hidden');
    document.getElementById('mbti-type-desc').textContent = translations[currentLang][`mbti-insight-${type}`] || translations[currentLang]['mbti-default-desc'];
    
    // Also update recommendation card if present
    const insightText = document.getElementById('mbti-insight-text');
    if (insightText) insightText.textContent = translations[currentLang][`mbti-insight-${type}`] || "";
}

// Sasang Logic
let currentSasangIndex = 0;
let sasangScores = { TY: 0, TE: 0, SY: 0, SE: 0 };
function updateSasangQuiz() {
    const container = document.getElementById('sasang-quiz');
    if (!container || container.classList.contains('hidden')) return;
    const progressText = document.getElementById('sasang-progress-text');
    const progressBar = document.getElementById('sasang-progress-bar');
    if (progressText) progressText.textContent = `${translations[currentLang]['mbti-step']} ${currentSasangIndex+1} ${translations[currentLang]['mbti-step-suffix']} 2`;
    if (progressBar) progressBar.style.width = `${((currentSasangIndex + 1) / 2) * 100}%`;
    if (currentSasangIndex < 2) {
        document.getElementById('sasang-question-text').textContent = translations[currentLang][`sasang-q${currentSasangIndex+1}`];
        const optCont = document.getElementById('sasang-options');
        optCont.innerHTML = '';
        ["TY","TE","SY","SE"].forEach((type, idx) => {
            const btn = document.createElement('button');
            btn.className = 'mbti-opt';
            btn.textContent = translations[currentLang][`sasang-q${currentSasangIndex+1}-opt${idx+1}`];
            btn.onclick = () => { sasangScores[type]++; currentSasangIndex++; updateSasangQuiz(); };
            optCont.appendChild(btn);
        });
    } else showSasangResults();
}

function showSasangResults() {
    let type = Object.keys(sasangScores).reduce((a,b)=>sasangScores[a]>sasangScores[b]?a:b);
    userData.sasang = type;
    document.getElementById('sasang-type-value').textContent = translations[currentLang][`sasang-type-${type}`];
    document.getElementById('sasang-quiz').classList.add('hidden');
    document.getElementById('sasang-results').classList.remove('hidden');
    document.getElementById('sasang-type-desc').textContent = translations[currentLang][`sasang-insight-${type}`];
}

// Core Diagnosis Logic
let currentCoreIndex = 0;
let coreScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0, TY: 0, TE: 0, SY: 0, SE: 0 };
const coreWeightMap = [
    { a: { E: 2, SY: 2 }, b: { E: 1, TE: 2 }, c: { I: 2, SE: 2 }, d: { I: 1, TY: 2 } },
    { a: { S: 2, TE: 2 }, b: { S: 1, SE: 2 }, c: { N: 2, SY: 2 }, d: { N: 1, TY: 2 } },
    { a: { T: 2, TY: 2 }, b: { T: 1, SY: 2 }, c: { F: 2, TE: 2 }, d: { F: 1, SE: 2 } },
    { a: { P: 2, SY: 2 }, b: { P: 1, TY: 2 }, c: { J: 2, TE: 2 }, d: { J: 1, SE: 2 } },
    { a: { SY: 3 }, b: { TE: 3 }, c: { SE: 3 }, d: { TY: 3 } }
];

function updateCoreQuiz() {
    const container = document.getElementById('core-quiz');
    if (!container || container.classList.contains('hidden')) return;
    const progressText = document.getElementById('core-progress-text');
    const progressBar = document.getElementById('core-progress-bar');
    if (progressText) progressText.textContent = `${translations[currentLang]['mbti-step']} ${currentCoreIndex + 1} / 5`;
    if (progressBar) progressBar.style.width = `${((currentCoreIndex + 1) / 5) * 100}%`;

    if (currentCoreIndex < 5) {
        document.getElementById('core-question-text').textContent = translations[currentLang][`core-q${currentCoreIndex + 1}`];
        const optCont = document.getElementById('core-options');
        optCont.innerHTML = '';
        ['a', 'b', 'c', 'd'].forEach(optKey => {
            const btn = document.createElement('button');
            btn.className = 'mbti-opt';
            btn.textContent = translations[currentLang][`core-q${currentCoreIndex + 1}-${optKey}`];
            btn.onclick = () => {
                const weights = coreWeightMap[currentCoreIndex][optKey];
                Object.entries(weights).forEach(([key, val]) => coreScores[key] += val);
                currentCoreIndex++;
                updateCoreQuiz();
            };
            optCont.appendChild(btn);
        });
    } else showCoreResults();
}

function showCoreResults() {
    // Determine MBTI
    const mbti = (coreScores.E >= coreScores.I ? 'E' : 'I') +
                 (coreScores.S >= coreScores.N ? 'S' : 'N') +
                 (coreScores.T >= coreScores.F ? 'T' : 'F') +
                 (coreScores.J >= coreScores.P ? 'J' : 'P');
    
    // Determine Sasang
    const sasang = Object.keys({ TY: 0, TE: 0, SY: 0, SE: 0 }).reduce((a, b) => coreScores[a] > coreScores[b] ? a : b);
    
    userData.mbti = mbti;
    userData.sasang = sasang;
    
    document.getElementById('core-mbti-value').textContent = mbti;
    document.getElementById('core-sasang-value').textContent = translations[currentLang][`sasang-type-${sasang}`];
    document.getElementById('core-insight-text').textContent = translations[currentLang][`sasang-insight-${sasang}`];
    
    // Auto-populate displays
    const mbtiDisp = document.getElementById('mbti-display');
    if (mbtiDisp) mbtiDisp.value = mbti;
    
    document.getElementById('core-quiz').classList.add('hidden');
    document.getElementById('core-results').classList.remove('hidden');
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    setLanguage(currentLang);
    await fetchExerciseData();
    updateCoreQuiz();

    document.getElementById('retake-core')?.addEventListener('click', () => {
        currentCoreIndex = 0;
        coreScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0, TY: 0, TE: 0, SY: 0, SE: 0 };
        document.getElementById('core-quiz').classList.remove('hidden');
        document.getElementById('core-results').classList.add('hidden');
        updateCoreQuiz();
    });

    document.getElementById('metrics-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const ageVal = document.getElementById('age').value;
        const heightVal = document.getElementById('height').value;
        const weightVal = document.getElementById('weight').value;
        const genderVal = document.getElementById('gender').value;

        if (!ageVal || !heightVal || !weightVal) return;

        userData.age = parseInt(ageVal);
        userData.height = parseInt(heightVal);
        userData.weight = parseInt(weightVal);
        userData.gender = genderVal;

        const heightM = userData.height / 100;
        userData.bmi = parseFloat((userData.weight / (heightM * heightM)).toFixed(1));
        userData.bmr = (userData.gender === 'male') ? (10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5) : (10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161);
        
        document.getElementById('bmi-value').textContent = userData.bmi;
        document.getElementById('bmr-value').textContent = Math.round(userData.bmr);
        
        let statusKey = 'bmi-normal';
        if (userData.bmi < 18.5) statusKey = 'bmi-underweight';
        else if (userData.bmi >= 25 && userData.bmi < 30) statusKey = 'bmi-overweight';
        else if (userData.bmi >= 30) statusKey = 'bmi-obese';
        
        const bmiStatusEl = document.getElementById('bmi-status');
        bmiStatusEl.setAttribute('data-status-key', statusKey);
        bmiStatusEl.textContent = translations[currentLang][statusKey];
        
        document.getElementById('metrics-results').classList.remove('hidden');
        
        // Update summary display in personalization section
        const metricsDisplay = document.getElementById('metrics-display');
        if (metricsDisplay) {
            let summary = translations[currentLang]['metrics-summary'] || "BMI: {bmi} ({status}), BMR: {bmr} kcal/day";
            summary = summary.replace('{bmi}', userData.bmi).replace('{status}', translations[currentLang][statusKey]).replace('{bmr}', Math.round(userData.bmr));
            metricsDisplay.value = summary;
        }
    });

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

    document.getElementById('analyze-workout-btn')?.addEventListener('click', () => {
        const cards = document.querySelectorAll('workout-card');
        let totalSets = 0, actualSets = 0;
        cards.forEach(c => {
            totalSets += parseInt(c.getAttribute('sets') || 0);
            const actualVal = c.shadowRoot.querySelector('.actual-sets')?.value;
            actualSets += parseInt(actualVal || 0);
        });
        const rate = totalSets > 0 ? Math.round((actualSets / totalSets) * 100) : 0;
        
        document.getElementById('analysis-results').classList.remove('hidden');
        const contentArea = document.getElementById('analysis-content');
        contentArea.innerHTML = `<p class="loading">${translations[currentLang]['workout-loading']}</p>`;
        
        // AI 코치 피드백 생성 (시뮬레이션)
        setTimeout(() => {
            const feedback = getAiCoachFeedback(rate);
            renderAiCoachFeedback(feedback, contentArea);
            document.getElementById('analysis-results').scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
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
});

function getAiCoachFeedback(completionRate) {
    const lang = currentLang;
    const isKo = lang === 'ko';
    const profile = {
        mbti: userData.mbti || 'ISTJ',
        sasang: userData.sasang || 'TE',
        bmi: userData.bmi || 23.0,
        age: userData.age || 30,
        gender: userData.gender || 'male',
        bmr: userData.bmr || 1500
    };

    // 전문 페르소나 설정
    const personaTitle = isKo 
        ? "세계 최고 스포츠 과학자 & 한방 전문의" 
        : "World-Class Sports Scientist & Oriental Medicine Expert";

    const sasangNames = {
        TY: isKo ? "태양인" : "Taeyangin",
        TE: isKo ? "태음인" : "Taeeumin",
        SY: isKo ? "소양인" : "Soyangin",
        SE: isKo ? "소음인" : "Soeumin"
    };

    // 사상체질별 고정 이미지 매칭
    const sasangImages = {
        TY: "https://images.unsplash.com/photo-1599058917232-d750c1822000?auto=format&fit=crop&q=80&w=400",
        TE: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400",
        SY: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400",
        SE: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400"
    };

    // 체질별 외형 특징 묘사 (프롬프트용)
    const sasangVisualPrompts = {
        TY: "A person with a strong upper body, thick neck, and intense gaze, representing the 'Solar' type in traditional medicine, heroic and charismatic aura",
        TE: "A person with a sturdy build, broad shoulders, and a calm, reliable expression, representing the 'Great Lunar' type, stable and grounded presence",
        SY: "A person with an agile and slender frame, sharp features, and energetic movements, representing the 'Lesser Yang' type, vibrant and quick-witted look",
        SE: "A person with a delicate and well-proportioned figure, soft facial lines, and a thoughtful expression, representing the 'Lesser Lunar' type, graceful and meticulous appearance"
    };

    let analysisText = "";
    if (isKo) {
        // 구체적 수치 활용 분석
        const bmiVal = profile.bmi;
        let bmiAnalysis = "";
        if (bmiVal < 18.5) {
            bmiAnalysis = `현재 BMI는 ${bmiVal}로 저체중군에 속하며, 이는 근감소증 위험이 정상군 대비 약 20% 높을 수 있음을 시사합니다.`;
        } else if (bmiVal < 23) {
            bmiAnalysis = `현재 BMI는 ${bmiVal}로 이상적인 범위 내에 있으며, 대사 질환 위험도가 가장 낮은 안정적인 상태입니다.`;
        } else if (bmiVal < 25) {
            bmiAnalysis = `현재 BMI는 ${bmiVal}로 '과체중 경계'에 위치합니다. 연구에 따르면 이 수치에서 동양인의 경우 고혈압 및 당뇨 발생 위험도가 정상군 대비 약 1.5배 상승할 수 있습니다.`;
        } else {
            bmiAnalysis = `현재 BMI는 ${bmiVal}로 비만군에 해당하며, 심혈관 질환 위험도가 유의미하게 높은 상태입니다. 즉각적인 식단 조절과 유산소 운동 병행이 필수적입니다.`;
        }

        analysisText = `[${personaTitle}의 심층 분석]\n\n`;
        analysisText += `귀하의 정밀 신체 지표(BMI ${profile.bmi}, BMR ${Math.round(profile.bmr)}kcal)와 심리 프로필(${profile.mbti}), 선천적 체질(${sasangNames[profile.sasang]})을 분석한 결과입니다.\n\n`;
        analysisText += `1. 스포츠 과학적 소견: ${bmiAnalysis} 오늘의 운동 달성률 ${completionRate}%는 `;
        
        if (completionRate >= 90) analysisText += "당신의 신체 엔진이 최상의 연소 효율을 보이고 있음을 증명합니다. ";
        else analysisText += "현재 신체 부하를 고려할 때, 전략적 휴식을 통해 과훈련 증후군을 예방해야 하는 구간입니다. ";

        analysisText += `\n\n2. 한방 및 심리적 관점: ${sasangNames[profile.sasang]}으로서 귀하는 ${profile.sasang === 'TE' ? '간의 흡수력은 강하나 폐의 발산 기능이 상대적으로 약해 체내 노폐물이 축적되기 쉬운' : '소화기(비위)는 발달했으나 신장의 정력이 부족해 하체 관절 건강에 유의해야 하는'} 특징이 있습니다. ${profile.mbti}의 성향을 활용해 꾸준한 루틴을 유지하는 것이 핵심입니다.`;
    } else {
        const bmiVal = profile.bmi;
        let bmiAnalysis = "";
        if (bmiVal < 18.5) {
            bmiAnalysis = `Your BMI is ${bmiVal} (Underweight), which may increase the risk of sarcopenia by approximately 20% compared to the normal range.`;
        } else if (bmiVal < 23) {
            bmiAnalysis = `Your BMI is ${bmiVal} (Normal), representing an optimal metabolic state with the lowest risk for lifestyle diseases.`;
        } else if (bmiVal < 25) {
            bmiAnalysis = `Your BMI is ${bmiVal} (Overweight Borderline). For Asians, this level is associated with a 1.5x higher risk of hypertension and diabetes.`;
        } else {
            bmiAnalysis = `Your BMI is ${bmiVal} (Obese), indicating a significantly elevated risk for cardiovascular diseases. Immediate intervention is required.`;
        }

        analysisText = `[Analysis from ${personaTitle}]\n\n`;
        analysisText += `Data-driven integration of your metrics (BMI ${profile.bmi}, BMR ${Math.round(profile.bmr)}kcal), psychology (${profile.mbti}), and constitution (${sasangNames[profile.sasang]}).\n\n`;
        analysisText += `1. Sports Science: ${bmiAnalysis} Your ${completionRate}% completion rate today indicates `;
        analysisText += completionRate >= 90 ? "optimal engine efficiency. " : "the need for strategic recovery to prevent overtraining. ";

        analysisText += `\n\n2. Oriental Medicine & Psychology: As a ${sasangNames[profile.sasang]}, you possess ${profile.sasang === 'TE' ? 'strong absorption but weaker metabolic excretion' : 'robust digestion but potentially weaker lower-body stability'}. Leveraging your ${profile.mbti} traits will be crucial for long-term health.`;
    }

    const recs = [
        {
            name: isKo ? "체질 맞춤형 기능성 스트레칭" : "Constitution-based Functional Stretch",
            description: isKo ? "사상체질별 취약 부위를 집중 보강합니다. 하체 순환을 돕고 척추 정렬을 바로잡는 동작을 15분간 실시하세요." : "Targets vulnerable areas based on your type. Focus on lower-body circulation and spinal alignment for 15 mins.",
            image_prompt: `A professional athlete performing a precise stretching pose in a high-tech lab setting, detailed muscle anatomy, soft cinematic lighting, 8k resolution`,
            type: "workout"
        },
        {
            name: isKo ? "대사 촉진 영양 식단" : "Metabolism Boosting Nutrition Plan",
            description: isKo ? "귀하의 기초대사량(BMR)을 고려한 맞춤 식단입니다. 체내 염증을 줄이고 근육 합성을 극대화하는 신선한 단백질 위주로 구성하세요." : "High-protein meal optimized for your BMR. Uses fresh ingredients to reduce inflammation and maximize protein synthesis.",
            image_prompt: "A balanced healthy meal with grilled salmon, quinoa, and vibrant steamed greens, professional food photography, natural lighting",
            type: "diet"
        }
    ];

    return { 
        analysis: analysisText, 
        recommendations: recs,
        sasangImage: sasangImages[profile.sasang],
        visualPrompt: sasangVisualPrompts[profile.sasang]
    };
}

function renderAiCoachFeedback(feedback, container) {
    const lang = currentLang;
    container.innerHTML = `
        <div class="ai-analysis-container">
            <div class="ai-analysis-header-flex" style="display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;">
                <div class="sasang-character-img" style="flex: 0 0 200px; height: 200px; border-radius: 20px; overflow: hidden; border: 2px solid var(--primary-color);">
                    <img src="${feedback.sasangImage}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="ai-analysis-text" style="flex: 1; min-width: 300px;">
                    ${feedback.analysis}
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px dashed var(--border-color); font-size: 0.8em; color: var(--secondary-color);">
                        <strong>[Visual Prompt]:</strong> ${feedback.visualPrompt}
                    </div>
                </div>
            </div>
            <div class="ai-recommendations-grid">
                ${feedback.recommendations.map((rec, i) => `
                    <div class="ai-rec-card">
                        <div class="ai-rec-image" style="background-image: url('https://images.unsplash.com/photo-${i === 0 ? '1544367567-0f2fcb009e0b' : '1504674900247-0877df9cc836'}?auto=format&fit=crop&q=80&w=400')">
                            <span class="ai-rec-badge">${translations[lang][rec.type === 'workout' ? 'ai-rec-badge-workout' : 'ai-rec-badge-diet']}</span>
                        </div>
                        <div class="ai-rec-content">
                            <h4 class="ai-rec-name">${rec.name}</h4>
                            <p class="ai-rec-desc">${rec.description}</p>
                        </div>
                        <div class="ai-rec-prompt-container">
                            <span class="ai-rec-prompt-label">${translations[lang]['ai-rec-prompt-label']}</span>
                            <span class="ai-rec-prompt">${rec.image_prompt}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

window.setLanguage = setLanguage;
function showLegal(t) {
    const priv = document.getElementById('privacy-policy');
    const term = document.getElementById('terms-of-service');
    if (priv) priv.classList.add('hidden');
    if (term) term.classList.add('hidden');
    const target = document.getElementById(t === 'privacy' ? 'privacy-policy' : 'terms-of-service');
    if (target) {
        target.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth' });
    }
}
window.showLegal = showLegal;
