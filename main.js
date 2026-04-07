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

// Expert Core Quiz Logic (Professional 10 Questions)
const coreQuestions = [
    { 
        q: { ko: "새로운 사람들과 함께 운동하는 것을 즐기시나요?", en: "Do you enjoy working out with new people?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { E: 2 }, sasang: { Soyangin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { E: 1 }, sasang: { Soyangin: 0.5 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {}, sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { I: 1 }, sasang: { Soeumin: 0.5 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { I: 2 }, sasang: { Soeumin: 1 } } }
        ]
    },
    { 
        q: { ko: "운동 계획을 세울 때 세부적인 루틴과 기록을 중시하시나요?", en: "Do you value detailed routines and tracking when planning workouts?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { J: 2 }, sasang: { Soeumin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { J: 1 }, sasang: { Soeumin: 0.5 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {}, sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { P: 1 }, sasang: { Taeyangin: 0.5 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { P: 2 }, sasang: { Taeyangin: 1 } } }
        ]
    },
    { 
        q: { ko: "땀을 흘리고 난 후 몸이 가벼워지는 느낌을 좋아하시나요?", en: "Do you feel refreshed and light after sweating a lot?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { S: 1 }, sasang: { Taeeumin: 2 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { S: 0.5 }, sasang: { Taeeumin: 1 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {}, sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { N: 0.5 }, sasang: { Soeumin: 0.5 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { N: 1 }, sasang: { Soeumin: 1 } } }
        ]
    },
    { 
        q: { ko: "새로운 운동 기구나 최신 트렌드에 민감하게 반응하시나요?", en: "Are you sensitive to new workout equipment or latest trends?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { N: 2 }, sasang: { Soyangin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { N: 1 }, sasang: { Soyangin: 0.5 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {}, sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { S: 1 }, sasang: { Taeeumin: 0.5 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { S: 2 }, sasang: { Taeeumin: 1 } } }
        ]
    },
    { 
        q: { ko: "운동 중 발생하는 통증이나 피로를 논리적으로 분석하며 조절하시나요?", en: "Do you logically analyze and adjust pain or fatigue during workouts?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { T: 2 }, sasang: { Taeyangin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { T: 1 }, sasang: { Taeyangin: 0.5 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {}, sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { F: 1 }, sasang: { Taeeumin: 0.5 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { F: 2 }, sasang: { Taeeumin: 1 } } }
        ]
    },
    { 
        q: { ko: "평소 추위보다 더위를 더 많이 타는 편이신가요?", en: "Do you generally feel hot more than cold?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { sasang: { Soyangin: 2, Taeyangin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { sasang: { Soyangin: 1 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { sasang: { Soeumin: 1 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { sasang: { Soeumin: 2, Taeeumin: 1 } } }
        ]
    },
    { 
        q: { ko: "소화 기능이 좋고 식욕이 왕성한 편이신가요?", en: "Is your digestion strong and appetite large?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { sasang: { Taeeumin: 2, Soyangin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { sasang: { Taeeumin: 1 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { sasang: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { sasang: { Soeumin: 1 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { sasang: { Soeumin: 2, Taeyangin: 1 } } }
        ]
    },
    { 
        q: { ko: "운동할 때 정해진 시간과 순서를 엄격히 지키는 것이 편하신가요?", en: "Do you prefer strictly following a set time and sequence when exercising?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { J: 2 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { J: 1 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { P: 1 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { P: 2 } } }
        ]
    },
    { 
        q: { ko: "다른 사람의 응원이나 격려가 운동 의욕에 큰 영향을 주나요?", en: "Does encouragement from others significantly impact your motivation?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { F: 2, E: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { F: 1 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { T: 1 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { T: 2, I: 1 } } }
        ]
    },
    { 
        q: { ko: "자신의 신체 변화(근육통, 심박수 등)를 예민하게 감지하시나요?", en: "Are you sensitive to sensing your body changes like heart rate or muscle pain?" },
        options: [
            { text: { ko: "매우 그렇다", en: "Strongly Agree" }, scores: { mbti: { S: 2 }, sasang: { Soeumin: 1 } } },
            { text: { ko: "그렇다", en: "Agree" }, scores: { mbti: { S: 1 } } },
            { text: { ko: "보통이다", en: "Neutral" }, scores: { mbti: {} } },
            { text: { ko: "아니다", en: "Disagree" }, scores: { mbti: { N: 1 } } },
            { text: { ko: "전혀 아니다", en: "Strongly Disagree" }, scores: { mbti: { N: 2 }, sasang: { Taeyangin: 1 } } }
        ]
    }
];

let coreCurrentStep = 0;
let coreScores = {
    mbti: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
    sasang: { Taeyangin: 0, Taeeumin: 0, Soyangin: 0, Soeumin: 0 }
};

function initCoreQuiz() {
    const card = document.getElementById('core-question-card');
    if (!card) return;
    resetCoreQuiz();
    renderCoreQuestion();
}

function resetCoreQuiz() {
    coreCurrentStep = 0;
    coreScores = {
        mbti: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
        sasang: { Taeyangin: 0, Taeeumin: 0, Soyangin: 0, Soeumin: 0 }
    };
    document.getElementById('core-quiz').classList.remove('hidden');
    document.getElementById('core-results').classList.add('hidden');
}

function renderCoreQuestion() {
    const qText = document.getElementById('core-question-text');
    const optionsContainer = document.getElementById('core-options');
    const progress = document.getElementById('core-progress-bar');
    const progressText = document.getElementById('core-progress-text');
    
    if (!qText || !optionsContainer || coreCurrentStep >= coreQuestions.length) return;

    const currentQ = coreQuestions[coreCurrentStep];
    qText.textContent = currentQ.q[currentLang];
    
    optionsContainer.innerHTML = currentQ.options.map((opt, idx) => `
        <button class="mbti-option-btn" onclick="handleCoreAnswer(${idx})">
            ${opt.text[currentLang]}
        </button>
    `).join('');

    const progressValue = ((coreCurrentStep + 1) / coreQuestions.length) * 100;
    if (progress) progress.style.width = `${progressValue}%`;
    if (progressText) progressText.textContent = `${coreCurrentStep + 1} / ${coreQuestions.length}`;
}

window.handleCoreAnswer = (optionIdx) => {
    const selectedOpt = coreQuestions[coreCurrentStep].options[optionIdx];
    
    // Accumulate MBTI scores
    if (selectedOpt.scores.mbti) {
        for (const [type, score] of Object.entries(selectedOpt.scores.mbti)) {
            coreScores.mbti[type] += score;
        }
    }
    // Accumulate Sasang scores
    if (selectedOpt.scores.sasang) {
        for (const [type, score] of Object.entries(selectedOpt.scores.sasang)) {
            coreScores.sasang[type] += score;
        }
    }

    coreCurrentStep++;
    if (coreCurrentStep < coreQuestions.length) {
        renderCoreQuestion();
    } else {
        showCoreResults();
    }
};

function getMBTIExpertReport(mbti) {
    const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;
    const l = currentLang;
    const traits = {
        E: l === 'ko' ? "외향형: 그룹 운동과 활발한 소통에서 에너지를 얻습니다." : "Extroverted: Gains energy from group workouts and active communication.",
        I: l === 'ko' ? "내향형: 개인적인 공간에서의 집중력 있는 수련이 효과적입니다." : "Introverted: Focused practice in personal space is more effective.",
        S: l === 'ko' ? "감각형: 현재의 신체 감각과 정확한 동작 수행에 집중합니다." : "Sensing: Focuses on current physical sensations and precise movement.",
        N: l === 'ko' ? "직관형: 새로운 운동 방식과 원리에 대한 이해를 즐깁니다." : "Intuitive: Enjoys understanding new workout methods and principles.",
        T: l === 'ko' ? "사고형: 체계적인 분석과 객관적인 목표 달성을 중시합니다." : "Thinking: Values systematic analysis and objective goal attainment.",
        F: l === 'ko' ? "감정형: 정서적 만족감과 공감적인 피드백을 선호합니다." : "Feeling: Prefers emotional satisfaction and empathetic feedback.",
        J: l === 'ko' ? "판단형: 철저한 계획과 정해진 루틴을 따를 때 편안함을 느낍니다." : "Judging: Feels comfortable following thorough plans and set routines.",
        P: l === 'ko' ? "인식형: 유연하고 상황에 따른 변화를 주며 운동하는 것을 선호합니다." : "Perceiving: Prefers flexible workouts with changes based on the situation."
    };
    
    let report = "";
    mbti.split("").forEach(char => {
        report += `<li>${traits[char]}</li>`;
    });
    return `<ul>${report}</ul>`;
}

function showCoreResults() {
    const m = coreScores.mbti;
    const finalMBTI = [
        m.E >= m.I ? "E" : "I",
        m.S >= m.N ? "S" : "N",
        m.T >= m.F ? "T" : "F",
        m.J >= m.P ? "J" : "P"
    ].join("");

    const s = coreScores.sasang;
    const finalSasang = Object.keys(s).reduce((a, b) => s[a] >= s[b] ? a : b);

    userData.mbti = finalMBTI;
    userData.sasang = finalSasang;
    
    document.getElementById('core-quiz').classList.add('hidden');
    document.getElementById('core-results').classList.remove('hidden');
    
    document.getElementById('core-mbti-value').textContent = finalMBTI;
    document.getElementById('core-sasang-value').textContent = finalSasang;
    
    const activeTranslations = (typeof translations !== 'undefined') ? translations : defaultTranslations;
    const l = currentLang;

    // Detailed Professional Report Generation
    const insightContainer = document.getElementById('core-insight-text');
    if (insightContainer) {
        const mbtiReport = getMBTIExpertReport(finalMBTI);
        const sasangInsight = activeTranslations[l][`core-insight-${finalSasang}`] || activeTranslations[l]['sasang-desc'];
        
        insightContainer.innerHTML = `
            <div class="expert-report">
                <section>
                    <h4><i data-lucide="brain"></i> ${activeTranslations[l]['core-report-mbti-title']}</h4>
                    ${mbtiReport}
                </section>
                <section style="margin-top:15px;">
                    <h4><i data-lucide="activity"></i> ${activeTranslations[l]['core-report-sasang-title']}</h4>
                    <p>${sasangInsight}</p>
                </section>
                <section style="margin-top:15px; border-top: 1px solid rgba(0,0,0,0.1); padding-top:10px;">
                    <h4><i data-lucide="sparkles"></i> ${activeTranslations[l]['core-report-lifestyle-title']}</h4>
                    <p>${l === 'ko' ? "분석된 결과를 바탕으로 당신에게 최적화된 운동 루틴과 식단을 생성할 준비가 되었습니다. 아래 섹션에서 신체 지표를 마저 입력해 주세요." : "Based on the analysis, we are ready to generate an optimized workout routine and diet for you. Please complete the body metrics in the section below."}</p>
                </section>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    const mbtiDisplay = document.getElementById('mbti-display');
    if (mbtiDisplay) mbtiDisplay.value = `${finalMBTI} (${finalSasang})`;
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    setLanguage(currentLang);
    await fetchExerciseData();
    initCoreQuiz();

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

    document.getElementById('retake-core')?.addEventListener('click', () => {
        initCoreQuiz();
    });
});

window.setLanguage = setLanguage;
