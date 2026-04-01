let currentLang = localStorage.getItem('language') || 'ko';

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
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update dynamic elements that don't use data-i18n directly
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
        metricsDisplay.value = `BMI: ${userData.bmi} (${status}), BMR: ${Math.round(userData.bmr)} kcal`;
    }

    // Update empty messages
    const dietContainer = document.getElementById('diet-container');
    if (dietContainer && dietContainer.querySelector('.empty-msg')) {
        dietContainer.querySelector('.empty-msg').textContent = translations[lang]['diet-empty'];
    }
    const stretchingContainer = document.getElementById('stretching-container');
    if (stretchingContainer && stretchingContainer.querySelector('.empty-msg')) {
        stretchingContainer.querySelector('.empty-msg').textContent = translations[lang]['stretching-empty'];
    }
    const supplementContainer = document.getElementById('supplement-recommendations');
    if (supplementContainer && supplementContainer.querySelector('.empty-msg')) {
        supplementContainer.querySelector('.empty-msg').textContent = translations[lang]['supplement-empty'];
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

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

class WorkoutCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name') || translations[currentLang]['workout-card-default-name'];
        const sets = this.getAttribute('sets') || '0';
        const reps = this.getAttribute('reps') || '0';
        const rest = this.getAttribute('rest') || '0s';
        const desc = this.getAttribute('desc') || translations[currentLang]['workout-card-default-desc'];
        const image = this.getAttribute('image') || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';
        const calories = this.getAttribute('calories') || '0';
        const target = this.getAttribute('target') || translations[currentLang]['workout-card-default-target'];

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: var(--card-background);
                    border-radius: 20px;
                    padding: 0;
                    border: 1px solid var(--border-color);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                :host(:hover) {
                    transform: translateY(-8px);
                    border-color: var(--primary-color);
                    box-shadow: 0 15px 30px var(--shadow-color);
                }
                .image-container {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                    position: relative;
                    background: #27272a;
                }
                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                :host(:hover) .image-container img {
                    transform: scale(1.05);
                }
                .content {
                    padding: 24px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                h3 {
                    margin: 0 0 10px 0;
                    color: var(--primary-color);
                    font-size: 1.3em;
                    letter-spacing: -0.01em;
                    line-height: 1.2;
                }
                .target-badge {
                    display: inline-block;
                    background: var(--glow-color);
                    color: var(--primary-color);
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.75em;
                    font-weight: 800;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                }
                .description {
                    font-size: 0.85em;
                    color: var(--secondary-color);
                    margin-bottom: 20px;
                    line-height: 1.6;
                    flex-grow: 1;
                    background: rgba(255,255,255,0.03);
                    padding: 12px;
                    border-radius: 10px;
                }
                .stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 12px;
                    margin-top: auto;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .label {
                    font-size: 0.7em;
                    text-transform: uppercase;
                    color: var(--secondary-color);
                    letter-spacing: 0.05em;
                    font-weight: 700;
                }
                .value {
                    color: var(--text-color);
                    font-size: 1.05em;
                    font-weight: 600;
                }
                .rest-tag {
                    margin-top: 16px;
                    padding-top: 12px;
                    border-top: 1px solid var(--border-color);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .rest-label {
                    font-size: 0.8em;
                    color: var(--secondary-color);
                }
                .rest-value {
                    background: var(--glow-color);
                    color: var(--primary-color);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.85em;
                    font-weight: 700;
                }
                .calorie-badge {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    background: #ef4444;
                    color: white;
                    padding: 4px 10px;
                    border-radius: 8px;
                    font-size: 0.75em;
                    font-weight: 800;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .badge {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    background: var(--primary-color);
                    color: white;
                    padding: 4px 10px;
                    border-radius: 8px;
                    font-size: 0.7em;
                    font-weight: 800;
                    text-transform: uppercase;
                    z-index: 2;
                }
                .performance-tracking {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px dashed var(--border-color);
                }
                .performance-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .performance-title {
                    font-size: 0.85em;
                    font-weight: 700;
                    color: var(--text-color);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .completion-checkbox {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.75em;
                    font-weight: 700;
                    color: var(--primary-color);
                    cursor: pointer;
                }
                .completion-checkbox input {
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                }
                .input-group {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 12px;
                }
                .input-field {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .input-field label {
                    font-size: 0.7em;
                    color: var(--secondary-color);
                    font-weight: 600;
                }
                input[type="number"] {
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid var(--border-color);
                    background: var(--input-bg);
                    color: var(--text-color);
                    font-size: 0.9em;
                    width: 100%;
                    box-sizing: border-box;
                }
                input:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 2px var(--glow-color);
                }
            </style>
            <div class="badge">${translations[currentLang]['workout-card-badge']}</div>
            <div class="calorie-badge">🔥 ${calories} kcal</div>
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="content">
                <div class="target-badge"><i data-lucide="target"></i> ${target}</div>
                <h3>${name}</h3>
                <div class="description">
                    <strong>💡 ${translations[currentLang]['workout-card-guide']}:</strong><br>
                    ${desc}
                </div>
                <div class="stats">
                    <div class="stat-item">
                        <span class="label">${translations[currentLang]['workout-card-target-sets']}</span>
                        <span class="value">${sets}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">${translations[currentLang]['workout-card-target-reps']}</span>
                        <span class="value">${reps}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">${translations[currentLang]['workout-card-calories-burned']}</span>
                        <span class="value">${calories} kcal</span>
                    </div>
                </div>
                <div class="rest-tag">
                    <span class="rest-label">${translations[currentLang]['workout-card-recommended-rest']}</span>
                    <span class="rest-value">${rest}</span>
                </div>

                <div class="performance-tracking">
                    <div class="performance-header">
                        <div class="performance-title">${translations[currentLang]['workout-card-today-record']}</div>
                        <label class="completion-checkbox">
                            <input type="checkbox" class="is-completed" checked> ${translations[currentLang]['workout-card-completed-status']}
                        </label>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label>${translations[currentLang]['workout-card-actual-sets-label']}</label>
                            <input type="number" class="actual-sets" placeholder="0" value="${parseInt(sets) || 3}">
                        </div>
                        <div class="input-field">
                            <label>${translations[currentLang]['workout-card-actual-reps-label']}</label>
                            <input type="number" class="actual-reps" placeholder="0" value="${parseInt(reps) || 12}">
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label>${translations[currentLang]['workout-card-actual-rest-label']}</label>
                            <input type="number" class="actual-rest" placeholder="${translations[currentLang]['workout-card-placeholder-rest']}" value="${parseInt(rest) || 60}">
                        </div>
                        <div class="input-field">
                            <label>${translations[currentLang]['workout-card-actual-time-label']}</label>
                            <input type="number" class="total-time" placeholder="${translations[currentLang]['workout-card-placeholder-time']}" value="10">
                        </div>
                    </div>
                </div>
            </div>
        `;
        if (window.lucide) lucide.createIcons({
            attrs: {
                'stroke-width': 2,
                'class': 'lucide-icon'
            },
            portal: this.shadowRoot
        });
    }
}

customElements.define('workout-card', WorkoutCard);

// Global User State
let userData = {
    gender: null, age: null, height: null, weight: null,
    bmi: null, bmr: null, mbti: null, sasang: null
};

// Global Diet State & Cache
let mealCache = { breakfast: [], lunch: [], dinner: [] };
let dietSessionHistory = { breakfast: [], lunch: [], dinner: [] };

async function fetchGlobalMeals() {
    try {
        // Fetch from multiple categories to ensure variety
        const categories = ['Breakfast', 'Seafood', 'Chicken', 'Beef', 'Vegetarian', 'Pasta', 'Side', 'Starter'];
        const fetchPromises = categories.map(cat => 
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
                .then(res => res.json())
                .then(data => ({ cat, meals: data.meals || [] }))
        );

        const results = await Promise.all(fetchPromises);
        results.forEach(res => {
            if (res.cat === 'Breakfast') mealCache.breakfast.push(...res.meals);
            else if (['Seafood', 'Chicken', 'Beef'].includes(res.cat)) mealCache.lunch.push(...res.meals);
            else mealCache.dinner.push(...res.meals);
        });
    } catch (e) { console.error("Meal fetch error", e); }
}

function generateDietRecs() {
    const dietContainer = document.getElementById('diet-container');
    if (!dietContainer || !userData.bmi) return;

    dietContainer.innerHTML = '';
    const types = ['breakfast', 'lunch', 'dinner'];
    
    types.forEach(type => {
        const meal = mealCache[type][Math.floor(Math.random() * mealCache[type].length)];
        if (meal) {
            const card = document.createElement('div');
            card.className = 'rec-card';
            card.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="rec-card-content">
                    <span class="rec-card-tag">${type.toUpperCase()}</span>
                    <h4>${meal.strMeal}</h4>
                </div>
            `;
            dietContainer.appendChild(card);
        }
    });
}

// Global Theme Logic
const htmlElement = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon && window.lucide) {
        icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
        lucide.createIcons();
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Navigation & Smooth Scroll
document.querySelectorAll('.nav-links a, .nav-logo').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        if (targetId === 'workout-history') targetId = 'stretching-recommendations';
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// MBTI Quiz Logic
const mbtiQuestions = [
    { text: "나는 그룹 운동이나 북적이는 헬스장 환경을 선호한다.", dimension: "EI", positive: true },
    { text: "나는 북적이는 곳보다 혼자 조용히 운동하는 것을 선호한다.", dimension: "EI", positive: false },
    { text: "나는 휴식 시간에 다른 사람들과 대화하는 것을 즐긴다.", dimension: "EI", positive: true },
    { text: "나는 개인적인 공간에서 운동할 때 더 잘 집중된다.", dimension: "EI", positive: false },
    { text: "나는 친구들과 함께 피트니스 챌린지에 참여하는 것을 좋아한다.", dimension: "EI", positive: true },
    { text: "나는 나의 운동 목표와 과정을 비공개로 유지하는 편이다.", dimension: "EI", positive: false },
    { text: "나는 정확한 자세와 데이터(횟수/무게)에 집중한다.", dimension: "SN", positive: true },
    { text: "나는 새롭고 창의적이며 색다른 운동을 시도하는 것을 즐긴다.", dimension: "SN", positive: false },
    { text: "나는 명확하고 즉각적이며 실질적인 결과가 나오는 운동을 선호한다.", dimension: "SN", positive: true },
    { text: "나는 표준 루틴을 나만의 방식으로 변형하는 상상을 자주 한다.", dimension: "SN", positive: false },
    { text: "나는 검증된 표준 기술과 정석적인 방법을 중요하게 생각한다.", dimension: "SN", positive: true },
    { text: "나는 운동 루틴이 자주 바뀌지 않으면 쉽게 지루함을 느낀다.", dimension: "SN", positive: false },
    { text: "나는 논리적이고 효율적인 기준으로 운동을 선택한다.", dimension: "TF", positive: true },
    { text: "나는 몸과 마음의 연결(심신 조화)을 가장 중요하게 생각한다.", dimension: "TF", positive: false },
    { text: "나는 객관적인 경쟁을 통해 동기부여를 얻는다.", dimension: "TF", positive: true },
    { text: "나는 운동이 나의 감정을 조절하는 데 얼마나 도움이 되는지에 집중한다.", dimension: "TF", positive: false },
    { text: "나는 모든 동작 뒤에 숨겨진 과학적 원리를 분석한다.", dimension: "TF", positive: true },
    { text: "나는 기술적인 코치보다 지지해주고 격려해주는 트레이너를 더 좋아한다.", dimension: "TF", positive: false },
    { text: "나는 미리 짜여진 운동 일정을 엄격하게 준수한다.", dimension: "JP", positive: true },
    { text: "나는 그날의 기분에 따라 어떤 운동을 할지 결정하는 편이다.", dimension: "JP", positive: false },
    { text: "나는 계획된 세션을 건너뛰어야 할 때 스트레스를 받는다.", dimension: "JP", positive: true },
    { text: "나는 다른 운동을 시도해보는 즉흥적인 상황을 즐긴다.", dimension: "JP", positive: false },
    { text: "나는 시작하기 전에 전체 운동 계획을 세세하게 기록해둔다.", dimension: "JP", positive: true },
    { text: "나는 일단 운동을 시작한 뒤 몸의 컨디션에 따라 진행하는 편이다.", dimension: "JP", positive: false }
];

let currentMbtiIndex = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const mbtiQuizContainer = document.getElementById('mbti-quiz');
const mbtiQuestionText = document.getElementById('mbti-question-text');
const mbtiProgressText = document.getElementById('mbti-progress-text');
const mbtiProgressBar = document.getElementById('mbti-progress-bar');
const mbtiResults = document.getElementById('mbti-results');
const mbtiTypeValue = document.getElementById('mbti-type-value');
const mbtiInsightText = document.getElementById('mbti-insight-text');
const retakeMbtiBtn = document.getElementById('retake-mbti');

function updateMbtiQuiz() {
    const quizContainer = document.getElementById('mbti-quiz');
    if (!quizContainer || quizContainer.classList.contains('hidden')) return;

    if (currentMbtiIndex < mbtiQuestions.length) {
        const q = mbtiQuestions[currentMbtiIndex];
        const qKey = `mbti-q${currentMbtiIndex + 1}`;
        if (mbtiQuestionText) mbtiQuestionText.textContent = translations[currentLang][qKey] || q.text;
        if (mbtiProgressText) {
            const stepText = translations[currentLang]['mbti-step'];
            const ofText = translations[currentLang]['mbti-step-suffix'];
            mbtiProgressText.textContent = currentLang === 'ko' ? 
                `${mbtiQuestions.length}${stepText} ${currentMbtiIndex + 1}${ofText}` : 
                `${stepText} ${currentMbtiIndex + 1} ${ofText} ${mbtiQuestions.length}`;
        }
        const progress = (currentMbtiIndex / mbtiQuestions.length) * 100;
        mbtiProgressBar?.style.setProperty('--progress', `${progress}%`);

        // Render localized options
        const optionsContainer = document.querySelector('#mbti-quiz .mbti-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            [1, 2, 3, 4, 5].forEach(score => {
                const btn = document.createElement('button');
                btn.className = 'mbti-opt';
                btn.dataset.score = score;
                btn.textContent = translations[currentLang][`mbti-opt-${score}`];
                btn.addEventListener('click', () => handleMbtiAnswer(score));
                optionsContainer.appendChild(btn);
            });
        }
    } else {
        calculateMbtiResult();
    }
}

function handleMbtiAnswer(score) {
    const q = mbtiQuestions[currentMbtiIndex];
    const weight = score - 3;
    const dim1 = q.dimension[0]; const dim2 = q.dimension[1];
    if (q.positive) {
        if (weight > 0) mbtiScores[dim1] += weight; else mbtiScores[dim2] += Math.abs(weight);
    } else {
        if (weight > 0) mbtiScores[dim2] += weight; else mbtiScores[dim1] += Math.abs(weight);
    }
    currentMbtiIndex++;
    updateMbtiQuiz();
}

function calculateMbtiResult() {
    let type = "";
    type += mbtiScores.E >= mbtiScores.I ? "E" : "I";
    type += mbtiScores.S >= mbtiScores.N ? "S" : "N";
    type += mbtiScores.T >= mbtiScores.F ? "T" : "F";
    type += mbtiScores.J >= mbtiScores.P ? "J" : "P";
    userData.mbti = type;
    if (mbtiTypeValue) mbtiTypeValue.textContent = type;
    if (mbtiDisplay) { mbtiDisplay.value = type; mbtiDisplay.classList.add('populated'); }
    const insights = {
        E: "고에너지 그룹 활동 선호.", I: "혼자만의 집중력 발휘.",
        S: "데이터 기반 정석 루틴.", N: "창의적인 변화 선호.",
        T: "논리적 효율 중심.", F: "신체와 마음의 조화.",
        J: "철저한 계획 이행.", P: "유연하고 즉흥적인 활동."
    };
    if (mbtiInsightText) mbtiInsightText.textContent = `${insights[type[0]]} ${insights[type[1]]} ${insights[type[2]]} ${insights[type[3]]}`;
    mbtiQuizContainer?.classList.add('hidden');
    mbtiResults?.classList.remove('hidden');
}

retakeMbtiBtn?.addEventListener('click', () => {
    currentMbtiIndex = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    mbtiQuizContainer?.classList.remove('hidden');
    mbtiResults?.classList.add('hidden');
    updateMbtiQuiz();
});

// Sasang Constitution Logic
const sasangQuestions = [
    { text: "나의 체격은 어떤 편인가요?", options: [
        { text: "상체가 발달하고 목덜미가 굵음", type: "TY" },
        { text: "골격이 크고 체격이 좋으며 살집이 있음", type: "TE" },
        { text: "가슴 부위가 발달하고 엉덩이가 빈약함", type: "SY" },
        { text: "체구는 작으나 균형이 잡혀 있고 엉덩이가 발달함", type: "SE" }
    ]},
    { text: "나의 걸음걸이나 태도는 어떤가요?", options: [
        { text: "걸음걸이가 빠르고 꼿꼿함", type: "TY" },
        { text: "느긋하고 무게감이 있으며 안정적임", type: "TE" },
        { text: "걸음걸이가 가볍고 민첩함", type: "SY" },
        { text: "걸음걸이가 얌전하고 조심스러움", type: "SE" }
    ]},
    { text: "나의 평소 성격은 어떤가요?", options: [
        { text: "과단성 있고 창의적이나 독선적일 때가 있음", type: "TY" },
        { text: "너그럽고 끈기 있으나 게을러질 때가 있음", type: "TE" },
        { text: "활발하고 시원시원하나 시작만 하고 끝맺음이 부족함", type: "SY" },
        { text: "차분하고 치밀하나 내성적이고 소심할 때가 있음", type: "SE" }
    ]},
    { text: "나의 평소 소화 상태는 어떤가요?", options: [
        { text: "소화는 잘 되나 자꾸 위로 치밀어 오르는 느낌", type: "TY" },
        { text: "무엇이든 잘 먹고 소화력이 매우 좋음", type: "TE" },
        { text: "소화가 빠르고 식욕이 왕성함", type: "SY" },
        { text: "소화가 잘 안 되고 위장이 차가운 느낌", type: "SE" }
    ]},
    { text: "나의 땀 분비는 어떤 편인가요?", options: [
        { text: "땀이 별로 나지 않음", type: "TY" },
        { text: "땀이 아주 많으며 땀을 흘려야 개운함", type: "TE" },
        { text: "땀이 적당히 나며 운동 시에만 남", type: "SY" },
        { text: "땀이 적고 땀을 많이 흘리면 피곤함", type: "SE" }
    ]},
    { text: "나의 목소리나 말투는 어떤가요?", options: [
        { text: "목소리가 크고 위엄이 있음", type: "TY" },
        { text: "목소리가 낮고 굵으며 말수가 적음", type: "TE" },
        { text: "말투가 빠르고 논리적임", type: "SY" },
        { text: "목소리가 작고 조용하며 조곤조곤함", type: "SE" }
    ]},
    { text: "내가 선호하는 물의 온도는?", options: [
        { text: "미지근하거나 시원한 물", type: "TY" },
        { text: "갈증을 자주 느껴 시원한 물을 많이 마신다", type: "TE" },
        { text: "얼음이 들어간 차가운 음료를 선호한다", type: "SY" },
        { text: "따뜻한 보리차나 숭늉처럼 온기 있는 물이 좋다", type: "SE" }
    ]}
];

let currentSasangIndex = 0;
let sasangScores = { TY: 0, TE: 0, SY: 0, SE: 0 };

const sasangQuiz = document.getElementById('sasang-quiz');
const sasangQuestionText = document.getElementById('sasang-question-text');
const sasangOptions = document.getElementById('sasang-options');
const sasangProgressText = document.getElementById('sasang-progress-text');
const sasangProgressBar = document.getElementById('sasang-progress-bar');
const sasangResults = document.getElementById('sasang-results');
const sasangTypeValue = document.getElementById('sasang-type-value');
const sasangTypeDesc = document.getElementById('sasang-type-desc');
const sasangInsightText = document.getElementById('sasang-insight-text');
const retakeSasangBtn = document.getElementById('retake-sasang');

function updateSasangQuiz() {
    const quizContainer = document.getElementById('sasang-quiz');
    if (!quizContainer || quizContainer.classList.contains('hidden')) return;

    if (currentSasangIndex < sasangQuestions.length) {
        const q = sasangQuestions[currentSasangIndex];
        const qKey = `sasang-q${currentSasangIndex + 1}`;
        if (sasangQuestionText) sasangQuestionText.textContent = translations[currentLang][qKey] || q.text;
        if (sasangProgressText) {
            const stepText = translations[currentLang]['mbti-step'];
            const ofText = translations[currentLang]['mbti-step-suffix'];
            sasangProgressText.textContent = currentLang === 'ko' ? 
                `${sasangQuestions.length}${stepText} ${currentSasangIndex + 1}${ofText}` : 
                `${stepText} ${currentSasangIndex + 1} ${ofText} ${sasangQuestions.length}`;
        }
        const progress = (currentSasangIndex / sasangQuestions.length) * 100;
        sasangProgressBar?.style.setProperty('--progress', `${progress}%`);

        if (sasangOptions) {
            sasangOptions.innerHTML = '';
            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'mbti-opt sasang-opt';
                btn.dataset.type = opt.type;
                const optKey = `sasang-q${currentSasangIndex + 1}-opt${idx + 1}`;
                btn.textContent = translations[currentLang][optKey] || opt.text;
                btn.onclick = () => {
                    sasangScores[opt.type]++;
                    currentSasangIndex++;
                    updateSasangQuiz();
                };
                sasangOptions.appendChild(btn);
            });
        }
    } else {
        calculateSasangResult();
    }
}

function calculateSasangResult() {
    let maxScore = -1;
    let type = "";
    for (const [t, score] of Object.entries(sasangScores)) {
        if (score > maxScore) { maxScore = score; type = t; }
    }

    const typeNames = { TY: "태양인 (太陽人)", TE: "태음인 (太陰人)", SY: "소양인 (少陽人)", SE: "소음인 (少陰人)" };
    const typeDescs = {
        TY: "폐국이 강하고 간국이 약한 체질. 기운이 위로 솟구치며 소통에 능하지만 하체가 빈약할 수 있습니다.",
        TE: "간국이 강하고 폐국이 약한 체질. 흡수하는 기운이 강해 체격이 건실하나 성인병에 주의해야 합니다.",
        SY: "비국이 강하고 신국이 약한 체질. 소화력이 좋고 민첩하며 열이 많아 상체가 발달한 특징이 있습니다.",
        SE: "신국이 강하고 비국이 약한 체질. 꼼꼼하고 내밀하며 하체가 안정적이지만 소화기관이 차고 약합니다."
    };
    const insights = {
        TY: "해로운 음식: 매운 음식, 지방질 많은 고기. 이로운 음식: 메밀, 포도, 해산물. 추천 운동: 하체 강화 자전거, 수영.",
        TE: "해로운 음식: 닭고기, 개고기, 배추. 이로운 음식: 쇠고기, 콩, 율무, 배. 추천 운동: 땀이 많이 나는 조깅, 등산.",
        SY: "해로운 음식: 닭고기, 인삼, 꿀. 이로운 음식: 돼지고기, 오리, 오이, 수박. 추천 운동: 명상, 하체 위주 근력 운동.",
        SE: "해로운 음식: 돼지고기, 냉면, 참외. 이로운 음식: 닭고기, 양고기, 사과, 생강. 추천 운동: 가벼운 유산소, 요가, 스트레칭."
    };

    userData.sasang = type;
    if (sasangTypeValue) sasangTypeValue.textContent = typeNames[type];
    if (sasangTypeDesc) sasangTypeDesc.textContent = typeDescs[type];
    if (sasangInsightText) sasangInsightText.textContent = insights[type];
    
    sasangQuiz?.classList.add('hidden');
    sasangResults?.classList.remove('hidden');
}

retakeSasangBtn?.addEventListener('click', () => {
    currentSasangIndex = 0;
    sasangScores = { TY: 0, TE: 0, SY: 0, SE: 0 };
    sasangQuiz?.classList.remove('hidden');
    sasangResults?.classList.add('hidden');
    updateSasangQuiz();
});

// Body Metrics Calculation
const metricsForm = document.getElementById('metrics-form');
const metricsResults = document.getElementById('metrics-results');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiStatusSpan = document.getElementById('bmi-status');
const bmrValueSpan = document.getElementById('bmr-value');
const metricsDisplay = document.getElementById('metrics-display');
const mbtiDisplay = document.getElementById('mbti-display');

metricsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    userData.gender = document.getElementById('gender').value;
    userData.age = parseInt(document.getElementById('age').value);
    userData.height = parseInt(document.getElementById('height').value);
    userData.weight = parseInt(document.getElementById('weight').value);
    const heightInMeters = userData.height / 100;
    userData.bmi = parseFloat((userData.weight / (heightInMeters * heightInMeters)).toFixed(1));
    
    let statusKey = "";
    if (userData.bmi < 18.5) statusKey = "bmi-underweight";
    else if (userData.bmi < 25) statusKey = "bmi-normal";
    else if (userData.bmi < 30) statusKey = "bmi-overweight";
    else statusKey = "bmi-obese";
    const status = translations[currentLang][statusKey];

    userData.bmr = (userData.gender === 'male') ? 
        (10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5) :
        (10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161);
    
    if (bmiValueSpan) bmiValueSpan.textContent = userData.bmi;
    if (bmiStatusSpan) {
        bmiStatusSpan.textContent = status;
        bmiStatusSpan.setAttribute('data-status-key', statusKey);
    }
    if (bmrValueSpan) bmrValueSpan.textContent = Math.round(userData.bmr).toLocaleString();
    
    if (metricsDisplay) { 
        metricsDisplay.value = `BMI: ${userData.bmi} (${status}), BMR: ${Math.round(userData.bmr)} kcal`; 
        metricsDisplay.classList.add('populated'); 
    }
    metricsResults?.classList.remove('hidden');
    generateDietRecs();
});

// Three.js Virtual Coach Logic
class VirtualCoach {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);
        
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 2);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        
        this.camera.position.z = 5;
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        if (this.coach) {
            this.coach.rotation.y += 0.01;
        }
        this.renderer.render(this.scene, this.camera);
    }
    
    setExercise(type) {
        if (this.coach) this.scene.remove(this.coach);
        
        const geometry = new THREE.BoxGeometry(1, 2, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0x38bdf8 });
        this.coach = new THREE.Mesh(geometry, material);
        this.scene.add(this.coach);
    }
}

let virtualCoachInstance = null;

// Global Exercise Database
let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const IMG_BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';

async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (response.ok) {
            exerciseDatabase = await response.json();
            return exerciseDatabase;
        }
    } catch (error) { console.error('Error fetching exercise data:', error); }
    return [];
}

function getTranslatedData(ex) {
    const key = Object.keys(exerciseTranslations).find(k => ex.name.toLowerCase().includes(k.toLowerCase()));
    if (key) {
        return {
            name: exerciseTranslations[key][currentLang],
            desc: exerciseTranslations[key].desc
        };
    }
    return { name: ex.name, desc: ex.instructions?.[0] || "Follow the guide for this movement." };
}

function getExercisesByContext(options) {
    const { goal, fitnessLevel, health, weather, timeOfDay } = options;
    
    if (exerciseDatabase.length === 0) return [];

    // Filter by body part mapping
    const parts = {
        chest: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('chest')),
        back: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('back') || (ex.primaryMuscles || []).includes('lats')),
        shoulders: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('shoulders')),
        arms: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('biceps') || (ex.primaryMuscles || []).includes('triceps')),
        legs: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('quads') || (ex.primaryMuscles || []).includes('hamstrings') || (ex.primaryMuscles || []).includes('glutes')),
        abs: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('abs') || (ex.category === 'abs')),
        cardio: exerciseDatabase.filter(ex => ex.category === 'cardio')
    };

    // Smart Selection Logic
    const focusPool = ['chest', 'back', 'shoulders', 'arms', 'legs'];
    const selectedFocus = focusPool[Math.floor(Math.random() * focusPool.length)];
    
    let sessionPool = [];
    sessionPool.push(...(parts[selectedFocus] || []).sort(() => 0.5 - Math.random()).slice(0, 2));
    
    const secondaryPart = focusPool.filter(p => p !== selectedFocus)[Math.floor(Math.random() * (focusPool.length - 1))];
    sessionPool.push(...(parts[secondaryPart] || []).sort(() => 0.5 - Math.random()).slice(0, 1));

    sessionPool.push(...(parts.abs || []).sort(() => 0.5 - Math.random()).slice(0, 1));
    sessionPool.push(...(parts.cardio || []).sort(() => 0.5 - Math.random()).slice(0, 1));

    if (sessionPool.length < 5) {
        sessionPool.push(...exerciseDatabase.sort(() => 0.5 - Math.random()).slice(0, 5 - sessionPool.length));
    }

    return sessionPool.map(ex => {
        const info = getTranslatedData(ex);
        const imgPath = (ex.images && ex.images.length > 0) 
            ? `${IMG_BASE_URL}${ex.images[0]}` 
            : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';

        const metMap = { 'strength': 6.0, 'cardio': 8.0, 'stretching': 2.5, 'plyometrics': 8.0, 'abs': 4.0 };
        const currentMET = metMap[ex.category] || 5.0;

        const weight = userData.weight || 70;
        const setsNum = fitnessLevel === 'beginner' ? 3 : 4;
        const repsNum = fitnessLevel === 'advanced' ? 15 : 12;
        const totalMinutes = (setsNum * (repsNum * 4 + 60)) / 60;
        const burned = Math.round((currentMET * 3.5 * weight / 200) * totalMinutes);

        const muscleMap = { 
            'chest': '가슴', 'back': '등', 'lats': '등', 'shoulders': '어깨', 
            'biceps': '팔(이두)', 'triceps': '팔(삼두)', 'quads': '허벅지(앞)', 
            'hamstrings': '허벅지(뒤)', 'glutes': '엉덩이', 'abs': '복근', 'cardio': '전신/심폐' 
        };
        const displayTarget = (ex.primaryMuscles || []).map(m => muscleMap[m] || m).join(', ') || '전신';

        return {
            name: info.name,
            sets: `${setsNum} sets`,
            reps: ex.category === 'cardio' ? "15~20 min" : `${repsNum} reps`,
            rest: "60s",
            desc: info.desc,
            image: imgPath,
            calories: burned,
            primaryMuscles: ex.primaryMuscles || [],
            target: displayTarget
        };
    });
}

function populateExerciseCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;
    
    fetchExerciseData().then(exercises => {
        catalogGrid.innerHTML = exercises.map(ex => `
            <div class="rec-card">
                <div class="rec-card-content">
                    <span class="rec-card-tag">${ex.target.toUpperCase()}</span>
                    <h4>${ex.name}</h4>
                    <p>${ex.desc}</p>
                    <button class="secondary-btn" onclick="openVideoPlayer('', '${ex.name}', '${ex.desc}', '${ex.target}')">가이드 보기</button>
                </div>
            </div>
        `).join('');
    });
}

function populateHomeWorkout() {
    // Similar to catalog but with specific home workout logic
}

function generateStretchingRecs() {
    const stretchingContainer = document.getElementById('stretching-container');
    if (!stretchingContainer) return;
    stretchingContainer.innerHTML = `
        <div class="rec-card">
            <div class="rec-card-content">
                <h4>전신 스트레칭</h4>
                <p>운동 전후로 전신 근육을 이완시켜 부상을 예방하세요.</p>
            </div>
        </div>
    `;
}

// Workout Form Generation
const workoutForm = document.getElementById('workout-form');
workoutForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const workoutContainer = document.getElementById('workout-container');
    if (!workoutContainer) return;

    const options = {
        fitnessLevel: document.getElementById('fitness-level').value,
        goal: document.getElementById('goal').value,
        health: document.getElementById('health-status').value,
        weather: document.getElementById('weather').value,
        timeOfDay: document.getElementById('time-of-day').value
    };

    workoutContainer.innerHTML = '<p class="loading">AI가 최적의 루틴을 생성 중입니다...</p>';
    
    setTimeout(() => {
        workoutContainer.innerHTML = '';
        const exercises = getExercisesByContext(options);
        
        if (exercises.length === 0) {
            workoutContainer.innerHTML = '<p class="empty-msg">운동 데이터를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.</p>';
            return;
        }

        exercises.forEach(exercise => {
            const workoutCard = document.createElement('workout-card');
            workoutCard.setAttribute('name', exercise.name);
            workoutCard.setAttribute('sets', exercise.sets);
            workoutCard.setAttribute('reps', exercise.reps);
            workoutCard.setAttribute('rest', exercise.rest);
            workoutCard.setAttribute('desc', exercise.desc);
            workoutCard.setAttribute('target', exercise.target);
            workoutCard.setAttribute('image', exercise.image);
            workoutCard.setAttribute('calories', exercise.calories);
            workoutContainer.appendChild(workoutCard);
        });
        
        generateStretchingRecs();
        document.getElementById('workout-analysis-section')?.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        workoutContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
});

// Workout Analysis Logic
document.getElementById('analyze-workout-btn')?.addEventListener('click', () => {
    const resultsDiv = document.getElementById('analysis-results');
    const contentDiv = document.getElementById('analysis-content');
    const cards = document.querySelectorAll('workout-card');
    
    if (resultsDiv && contentDiv && cards.length > 0) {
        let totalTargetSets = 0;
        let totalActualSets = 0;
        let completedCount = 0;

        cards.forEach(card => {
            const targetSets = parseInt(card.getAttribute('sets')) || 0;
            const actualSets = parseInt(card.shadowRoot.querySelector('.actual-sets')?.value) || 0;
            const isCompleted = card.shadowRoot.querySelector('.is-completed')?.checked;

            totalTargetSets += targetSets;
            totalActualSets += actualSets;
            if (isCompleted) completedCount++;
        });

        const achievementRate = Math.min(100, Math.round((totalActualSets / totalTargetSets) * 100));
        let feedback = "";

        if (currentLang === 'ko') {
            if (achievementRate >= 100) {
                feedback = `<h4>완벽합니다! (달성률 ${achievementRate}%)</h4>
                           <p>설정한 목표를 모두 달성하셨습니다. 현재의 강도가 적절하거나 약간 낮을 수 있으니, 다음 세션에서는 중량이나 횟수를 5-10% 늘려보는 것을 추천합니다.</p>`;
            } else if (achievementRate >= 70) {
                feedback = `<h4>훌륭한 시도였습니다! (달성률 ${achievementRate}%)</h4>
                           <p>목표의 대부분을 소화하셨습니다. 근육에 충분한 자극이 전달되었을 것입니다. 충분한 휴식과 단백질 섭취를 통해 회복에 집중하세요.</p>`;
            } else {
                feedback = `<h4>꾸준함이 정답입니다! (달성률 ${achievementRate}%)</h4>
                           <p>오늘은 컨디션이 조금 저조했을 수 있습니다. 무리하지 않고 끝까지 수행한 것만으로도 충분히 의미가 있습니다. 내일은 더 나은 에너지를 기대해 봅시다.</p>`;
            }
        } else {
            if (achievementRate >= 100) {
                feedback = `<h4>Perfect! (Achievement: ${achievementRate}%)</h4>
                           <p>You have reached all your goals. The current intensity might be just right or a bit low. Consider increasing weight or reps by 5-10% next session.</p>`;
            } else if (achievementRate >= 70) {
                feedback = `<h4>Great job! (Achievement: ${achievementRate}%)</h4>
                           <p>You completed most of your goals. Your muscles should have received enough stimulation. Focus on recovery with rest and protein.</p>`;
            } else {
                feedback = `<h4>Consistency is key! (Achievement: ${achievementRate}%)</h4>
                           <p>You might have been a bit tired today. Completing the session itself is meaningful. Let's aim for better energy tomorrow.</p>`;
            }
        }

        contentDiv.innerHTML = feedback;
        resultsDiv.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// Immediate Initialization
document.addEventListener('DOMContentLoaded', async () => {
    await fetchExerciseData();
    updateMbtiQuiz();
    updateSasangQuiz();
    populateExerciseCatalog();
    populateHomeWorkout();
    fetchGlobalMeals();
    if (window.lucide) lucide.createIcons();
});

// Legal Sections Logic
function showLegal(type) {
    const privacy = document.getElementById('privacy-policy');
    const terms = document.getElementById('terms-of-service');
    
    if (!privacy || !terms) return;

    if (type === 'privacy') {
        privacy.classList.toggle('hidden');
        terms.classList.add('hidden');
    } else if (type === 'terms') {
        terms.classList.toggle('hidden');
        privacy.classList.add('hidden');
    }
}

window.showLegal = showLegal;
