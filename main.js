// Global State & Constants
let currentLang = localStorage.getItem('language') || 'ko';
let userData = {
    gender: 'male', age: 30, height: 175, weight: 70,
    bmi: null, bmr: null, dailyCalories: null,
    mbti: null, sasang: null,
    fitnessLevel: 'beginner', goal: 'general-fitness', weeklyFrequency: '3-4',
    condition: 'excellent'
};

let workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || [];
let wgerExercises = [];
let seenExerciseIds = new Set(); 

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
        console.log('Fetching massive diverse wger exercises (Limit 500)...');
        const response = await fetch('https://wger.de/api/v2/exerciseinfo/?language=2&limit=500&status=2');
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
        console.log('Wger massive pool loaded:', wgerExercises.length);
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
        const caution = this.getAttribute('caution') || '';
        const recReps = this.getAttribute('reps') || '12';
        const recSets = this.getAttribute('sets') || '3';
        const recRest = this.getAttribute('rest') || '60s';
        const recTime = this.getAttribute('time') || '10m';

        // Format detailed description (1. 2. 3. -> list)
        const descSteps = desc.split(/(\d\.\s)/).filter(s => s.trim().length > 0);
        let formattedDesc = "";
        if (descSteps.length > 1) {
            formattedDesc = `<ol style="margin: 0; padding-left: 18px; font-size: 0.9em; line-height: 1.6; color: var(--text-color, #f1f5f9);">`;
            for (let i = 0; i < descSteps.length; i += 2) {
                const stepText = (descSteps[i+1] || "").trim();
                if (stepText) formattedDesc += `<li>${stepText}</li>`;
            }
            formattedDesc += `</ol>`;
        } else {
            formattedDesc = `<p style="margin: 0; font-size: 0.9em; line-height: 1.6; color: var(--text-color, #f1f5f9);">${desc}</p>`;
        }

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; background: var(--card-background, #1e293b); border-radius: 24px; border: 1px solid var(--border-color, rgba(255,255,255,0.1)); overflow: hidden; display: flex; flex-direction: column; color: var(--text-color, #f1f5f9); font-family: 'Roboto', sans-serif; transition: all 0.3s ease; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                :host(:hover) { transform: translateY(-8px); border-color: var(--primary-color, #38bdf8); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .image-container { width: 100%; height: 220px; position: relative; overflow: hidden; background: #0f172a; }
                .image-container img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
                :host(:hover) .image-container img { transform: scale(1.05); }
                .target-badge { position: absolute; top: 12px; right: 12px; background: rgba(56, 189, 248, 0.9); color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 0.7em; font-weight: 800; backdrop-filter: blur(4px); }
                .content { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; gap: 15px; }
                h3 { color: var(--primary-color, #38bdf8); margin: 0; font-size: 1.3em; font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; }
                .section-title { font-size: 0.8em; font-weight: 800; color: var(--secondary-color, #94a3b8); margin-bottom: 5px; display: block; text-transform: uppercase; }
                .desc-box { background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border-left: 4px solid var(--primary-color); }
                .caution-box { font-size: 0.8em; color: #fbbf24; background: rgba(251, 191, 36, 0.05); padding: 12px; border-radius: 12px; border: 1px solid rgba(251, 191, 36, 0.2); }
                .caution-box strong { color: #fbbf24; display: block; margin-bottom: 4px; font-size: 0.9em; }
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
            </style>
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
                <span class="target-badge">${target}</span>
            </div>
            <div class="content">
                <h3 class="exercise-name">${name}</h3>
                <div class="desc-box">
                    <span class="section-title">📝 ${t('workout-card-desc-title')}</span>
                    ${formattedDesc}
                </div>
                ${caution ? `
                <div class="caution-box">
                    <strong>⚠️ ${t('workout-card-caution')}</strong>
                    ${caution}
                </div>` : ''}
                <div class="rec-grid">
                    <div class="rec-item"><span class="rec-label">${t('workout-reps')}</span><span class="rec-value rec-reps-val">${recReps}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-sets')}</span><span class="rec-value rec-sets-val">${recSets}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-rest')}</span><span class="rec-value">${recRest}</span></div>
                    <div class="rec-item"><span class="rec-label">${t('workout-time')}</span><span class="rec-value">${recTime}</span></div>
                </div>
                <div class="performance-tracking">
                    <span class="perf-title">⚡ ${t('workout-actual-input')}</span>
                    <div class="perf-grid">
                        <div class="perf-input-group"><label>${t('actual-reps')}</label><input type="number" class="actual-reps" placeholder="0"></div>
                        <div class="perf-input-group"><label>${t('actual-sets')}</label><input type="number" class="actual-sets" placeholder="0"></div>
                        <div class="perf-input-group"><label>${t('actual-rest')}</label><input type="text" class="actual-rest" placeholder="0s"></div>
                        <div class="perf-input-group"><label>${t('actual-time')}</label><input type="text" class="actual-time" placeholder="0m"></div>
                    </div>
                </div>
            </div>
        `;
    }
}
if (!customElements.get('workout-card')) customElements.define('workout-card', WorkoutCard);

// ... (previous functions omit)

function generateWorkout(goal, level, freq = '3-4', isRefresh = false) {
    // We don't clear seenExerciseIds on refresh to ensure diversity
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

    let targetCount = 8; 
    let preferredIntensity = ['low', 'medium', 'high'];
    
    // Core Intensity Logic based on user condition
    if (userData.condition === 'tired') {
        targetCount = 6;
        preferredIntensity = ['low', 'medium'];
    } else if (userData.condition === 'recovery') {
        targetCount = 4;
        preferredIntensity = ['low'];
    }

    // Filter for truly unseen exercises and match intensity
    let shuffled = shufflePool([...fullPool]);
    let unseenPool = shuffled.filter(ex => !seenExerciseIds.has(ex.id));
    
    // Smart Filter: Prioritize matching intensity
    let filteredPool = unseenPool.filter(ex => {
        const intensity = ex.intensity || 'medium'; 
        return preferredIntensity.includes(intensity);
    });

    // Fallback if not enough matching intensity
    if (filteredPool.length < targetCount) {
        filteredPool = unseenPool;
    }

    // Reset if pool completely exhausted
    if (filteredPool.length < targetCount) {
        seenExerciseIds.clear();
        filteredPool = shuffled;
    }

    const session = [];
    
    // Composition logic: 1 Abs + 1 Cardio + N Body Parts
    let absEx = filteredPool.find(ex => {
        const primaryKo = (ex.primary && ex.primary.ko) || "";
        const primaryEn = (ex.primary && ex.primary.en) || "";
        return primaryEn === 'Abs' || primaryKo === '복근';
    });
    if (absEx) {
        session.push(absEx);
        filteredPool = filteredPool.filter(ex => ex.id !== absEx.id);
    }

    let cardioEx = filteredPool.find(ex => {
        const primaryKo = (ex.primary && ex.primary.ko) || "";
        const primaryEn = (ex.primary && ex.primary.en) || "";
        return primaryEn === 'Cardio' || primaryKo === '유산소';
    });
    if (cardioEx) {
        session.push(cardioEx);
        filteredPool = filteredPool.filter(ex => ex.id !== cardioEx.id);
    }

    while (session.length < targetCount && filteredPool.length > 0) {
        session.push(filteredPool.shift());
    }

    // Tracking
    session.forEach(ex => seenExerciseIds.add(ex.id));

    const container = document.getElementById('workout-container');
    if (!container) return;
    container.innerHTML = '';
    
    let baseReps = 12, baseSets = 3, baseRest = 60;
    
    // Intensity scaling based on condition
    if (userData.condition === 'tired') { baseReps = 10; baseSets = 2; baseRest = 90; }
    else if (userData.condition === 'recovery') { baseReps = 8; baseSets = 2; baseRest = 120; }
    else {
        if (level === 'beginner') { baseReps = 10; baseSets = 2; }
        else if (level === 'advanced') { baseReps = 15; baseSets = 4; }
    }

    session.forEach(ex => {
        const card = document.createElement('workout-card');
        const name = ex.name ? (ex.name[currentLang] || ex.name.en) : (ex[currentLang] || ex.en);
        const desc = ex.desc ? (ex.desc[currentLang] || ex.desc.en || (typeof ex.desc === 'string' ? ex.desc : '')) : '';
        const caution = (ex.caution && ex.caution[currentLang]) ? ex.caution[currentLang] : generateDetailedCaution(ex);
        
        card.setAttribute('name', name);
        card.setAttribute('desc', desc);
        card.setAttribute('image', ex.image || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400');
        card.setAttribute('target', ex.primary[currentLang] || ex.primary.en);
        card.setAttribute('caution', caution);
        card.setAttribute('reps', baseReps.toString());
        card.setAttribute('sets', baseSets.toString());
        card.setAttribute('rest', Math.max(10, baseRest) + 's');
        card.setAttribute('time', (baseSets * 3).toString() + 'm');
        container.appendChild(card);
    });
    
    document.getElementById('workout-analysis-section').classList.remove('hidden');
    generateStretching(session);
    generateDiet(goal);
}

function analyzePerformance() {
    const cards = document.querySelectorAll('workout-card');
    let totalRecReps = 0, totalActualReps = 0;
    let totalRecSets = 0, totalActualSets = 0;
    let exerciseStats = [];

    cards.forEach(card => {
        const shadow = card.shadowRoot;
        const name = shadow.querySelector('.exercise-name').textContent;
        const recReps = parseInt(shadow.querySelector('.rec-reps-val').textContent);
        const recSets = parseInt(shadow.querySelector('.rec-sets-val').textContent);
        const actualReps = parseInt(shadow.querySelector('.actual-reps').value) || 0;
        const actualSets = parseInt(shadow.querySelector('.actual-sets').value) || 0;

        totalRecReps += recReps;
        totalActualReps += actualReps;
        totalRecSets += recSets;
        totalActualSets += actualSets;

        exerciseStats.push({ name, recReps, actualReps, recSets, actualSets });
    });

    const analysisContent = document.getElementById('analysis-content');
    const analysisResults = document.getElementById('analysis-results');
    
    // Expert AI Coaching Logic (5+ sentences)
    let feedback = "";
    const performanceRatio = totalActualReps > 0 ? (totalActualReps / totalRecReps) : 0;
    
    // Evaluation
    if (performanceRatio >= 1.0) {
        feedback += `오늘 운동을 아주 성공적으로 완수하셨습니다! 권장 횟수를 모두 채우거나 그 이상을 달성하신 것은 현재 본인의 체력 수준이 설정된 단계보다 높거나 열정이 매우 뜨겁다는 증거입니다. `;
    } else if (performanceRatio >= 0.7) {
        feedback += `오늘 계획한 운동량의 대부분을 소화해내셨습니다. 완벽하지는 않더라도 끝까지 포기하지 않고 세션을 마무리한 점을 높게 평가하며, 이는 장기적인 근성장의 훌륭한 밑거름이 될 것입니다. `;
    } else {
        feedback += `오늘 운동은 조금 힘겨우셨던 것 같습니다. 하지만 컨디션이 저하된 날에 무리하게 운동량을 채우기보다 본인의 몸 상태에 귀를 기울이고 수행 가능한 만큼만 진행한 것은 부상 방지 측면에서 매우 현명한 선택입니다. `;
    }

    // MBTI / Sasang context
    if (userData.sasang) {
        const sasangMap = { sun: '기운이 밖으로 뻗치는 태양인', earth: '지구력이 좋은 태음인', fire: '열정이 넘치는 소양인', water: '세심한 관리가 필요한 소음인' };
        feedback += `특히 ${sasangMap[userData.sasang]}으로서 본인의 체질적 특성을 고려할 때, 오늘의 수행 기록은 매우 의미 있는 데이터입니다. `;
    }

    // Cautions & Tips
    if (performanceRatio > 1.2) {
        feedback += `다만, 권장량보다 너무 많은 횟수를 수행할 경우 근육의 과도한 피로가 누적되어 오히려 다음 운동에 지장을 줄 수 있으니 '오버트레이닝'을 경계해야 합니다. `;
    } else if (performanceRatio < 0.5 && totalActualReps > 0) {
        feedback += `현재 수행 능력이 권장치에 크게 미달한다면, 운동 강도를 한 단계 낮추거나 세트 사이의 휴식 시간을 30초 정도 더 늘려보는 것을 추천드립니다. `;
    } else {
        feedback += `운동 중 자세가 흐트러지지 않았는지 다시 한번 점검해 보시고, 특히 마지막 세트에서 근육의 자극을 온전히 느끼는 것에 집중해 보시기 바랍니다. `;
    }

    // Closing
    feedback += `내일은 오늘보다 더 나은 컨디션으로 운동하실 수 있도록 충분한 수분 섭취와 7시간 이상의 숙면을 취하시길 권장합니다. `;
    feedback += `당신의 끊임없는 도전을 응원하며, AI 코치가 항상 곁에서 성장을 돕겠습니다.`;

    analysisContent.innerHTML = `<p style="line-height:1.8; font-size:1.05em; color:var(--text-color);">${feedback}</p>`;
    analysisResults.classList.remove('hidden');
    analysisResults.scrollIntoView({ behavior: 'smooth' });
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
        const goal = document.getElementById('goal').value, level = document.getElementById('fitness-level').value, freq = document.getElementById('weekly-frequency').value, status = document.getElementById('health-status').value;
        userData.goal = goal; userData.fitnessLevel = level; userData.weeklyFrequency = freq; userData.condition = status; refreshCounter = 0;
        generateWorkout(goal, level, freq);
        window.location.hash = 'workout-plan';
    });
    document.getElementById('refresh-workout-btn')?.addEventListener('click', () => {
        refreshCounter++;
        generateWorkout(userData.goal, userData.fitnessLevel, userData.weeklyFrequency, true);
        const icon = document.querySelector('#refresh-workout-btn i');
        if (icon) { icon.style.transform = `rotate(${refreshCounter * 360}deg)`; icon.style.transition = 'transform 0.5s ease-in-out'; }
    });
    document.getElementById('analyze-workout-btn')?.addEventListener('click', analyzePerformance);
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
    document.getElementById('retake-mbti')?.addEventListener('click', initMbtiQuiz);
    document.getElementById('retake-sasang')?.addEventListener('click', initSasangQuiz);
});
window.setLanguage = setLanguage;
