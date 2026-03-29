class WorkoutCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name') || 'Exercise';
        const sets = this.getAttribute('sets') || '0';
        const reps = this.getAttribute('reps') || '0';
        const rest = this.getAttribute('rest') || '0s';
        const desc = this.getAttribute('desc') || 'Follow the trainer\'s guidance for this movement.';
        const image = this.getAttribute('image') || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';

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
                .description {
                    font-size: 0.85em;
                    color: var(--secondary-color);
                    margin-bottom: 20px;
                    line-height: 1.6;
                    flex-grow: 1;
                }
                .stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
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
            </style>
            <div class="badge">Master Trainer Advice</div>
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="content">
                <h3>${name}</h3>
                <p class="description">${desc}</p>
                <div class="stats">
                    <div class="stat-item">
                        <span class="label">Sets</span>
                        <span class="value">${sets}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Reps</span>
                        <span class="value">${reps}</span>
                    </div>
                </div>
                <div class="rest-tag">
                    <span class="rest-label">Rest Period</span>
                    <span class="rest-value">${rest}</span>
                </div>
            </div>
        `;
    }
}

customElements.define('workout-card', WorkoutCard);

// Global User State
let userData = {
    gender: null, age: null, height: null, weight: null,
    bmi: null, bmr: null, mbti: null
};

// Form Field Elements
const mbtiDisplay = document.getElementById('mbti-display');
const metricsDisplay = document.getElementById('metrics-display');

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'light') themeIcon?.setAttribute('data-lucide', 'sun');
    else themeIcon?.setAttribute('data-lucide', 'moon');
    if (window.lucide) lucide.createIcons();
};

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Navigation & Smooth Scroll
document.querySelectorAll('.nav-links a, .nav-logo').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
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
    { text: "I feel energized after a group workout session.", dimension: "EI", positive: true },
    { text: "I prefer a quiet solo workout over a busy gym environment.", dimension: "EI", positive: false },
    { text: "I enjoy interacting with others during rest periods.", dimension: "EI", positive: true },
    { text: "I find that I focus better when training alone in a private space.", dimension: "EI", positive: false },
    { text: "I like participating in fitness challenges with friends.", dimension: "EI", positive: true },
    { text: "I prefer to keep my fitness goals and progress private.", dimension: "EI", positive: false },
    { text: "I focus more on the exact form and data (reps/weight).", dimension: "SN", positive: true },
    { text: "I enjoy trying new, creative, and unconventional exercises.", dimension: "SN", positive: false },
    { text: "I prefer exercises with clear, immediate, and tangible results.", dimension: "SN", positive: true },
    { text: "I find myself imagining different ways to modify a standard routine.", dimension: "SN", positive: false },
    { text: "I value standard, proven techniques.", dimension: "SN", positive: true },
    { text: "I get bored if my workout routine doesn't change frequently.", dimension: "SN", positive: false },
    { text: "I choose exercises based on logical efficiency.", dimension: "TF", positive: true },
    { text: "The mind-body connection is most important.", dimension: "TF", positive: false },
    { text: "I am motivated by objective competition.", dimension: "TF", positive: true },
    { text: "I am motivated by how a workout helps manage my emotions.", dimension: "TF", positive: false },
    { text: "I analyze the scientific reasoning behind every movement.", dimension: "TF", positive: true },
    { text: "I appreciate a supportive trainer over a purely technical one.", dimension: "TF", positive: false },
    { text: "I strictly follow a pre-planned workout schedule.", dimension: "JP", positive: true },
    { text: "I like to decide what to work out based on my mood.", dimension: "JP", positive: false },
    { text: "I feel stressed if I have to skip a planned session.", dimension: "JP", positive: true },
    { text: "I enjoy the spontaneity of trying a different exercise.", dimension: "JP", positive: false },
    { text: "I like to have my entire workout written out before I start.", dimension: "JP", positive: true },
    { text: "I often start a workout and see where the energy takes me.", dimension: "JP", positive: false }
];

let currentQuestionIndex = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const mbtiQuizContainer = document.getElementById('mbti-quiz');
const mbtiQuestionText = document.getElementById('mbti-question-text');
const mbtiProgressText = document.getElementById('mbti-progress-text');
const mbtiProgressBar = document.getElementById('mbti-progress-bar');
const mbtiResults = document.getElementById('mbti-results');
const mbtiTypeValue = document.getElementById('mbti-type-value');
const mbtiTypeDesc = document.getElementById('mbti-type-desc');
const mbtiInsightText = document.getElementById('mbti-insight-text');
const retakeMbtiBtn = document.getElementById('retake-mbti');

function updateMbtiQuiz() {
    if (currentQuestionIndex < mbtiQuestions.length) {
        const q = mbtiQuestions[currentQuestionIndex];
        if (mbtiQuestionText) mbtiQuestionText.textContent = q.text;
        if (mbtiProgressText) mbtiProgressText.textContent = `Question ${currentQuestionIndex + 1} of ${mbtiQuestions.length}`;
        const progress = ((currentQuestionIndex) / mbtiQuestions.length) * 100;
        mbtiProgressBar?.style.setProperty('--progress', `${progress}%`);
    } else {
        calculateMbtiResult();
    }
}

function calculateMbtiResult() {
    let type = "";
    type += mbtiScores.E >= mbtiScores.I ? "E" : "I";
    type += mbtiScores.S >= mbtiScores.N ? "S" : "N";
    type += mbtiScores.T >= mbtiScores.F ? "T" : "F";
    type += mbtiScores.J >= mbtiScores.P ? "J" : "P";

    userData.mbti = type;
    if (mbtiTypeValue) mbtiTypeValue.textContent = type;
    if (mbtiDisplay) {
        mbtiDisplay.value = type;
        mbtiDisplay.classList.add('populated');
    }
    
    const insights = {
        E: "고에너지 그룹 활동에서 동기부여를 얻습니다.", I: "혼자만의 집중할 수 있는 공간에서 능률이 오릅니다.",
        S: "명확한 데이터와 검증된 정석 루틴을 선호합니다.", N: "새롭고 창의적인 변화가 있는 운동을 즐깁니다.",
        T: "논리적인 효율성과 목표 달성에 집중합니다.", F: "신체와 마음의 조화, 즐거움을 중요시합니다.",
        J: "철저히 계획된 일정에 따를 때 성취감을 느낍니다.", P: "유연하고 즉흥적인 활동에서 활력을 얻습니다."
    };

    if (mbtiInsightText) mbtiInsightText.textContent = `${insights[type[0]]} ${insights[type[1]]} ${insights[type[2]]} ${insights[type[3]]}`;
    mbtiQuizContainer?.classList.add('hidden');
    mbtiResults?.classList.remove('hidden');
}

document.querySelectorAll('.mbti-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score);
        const q = mbtiQuestions[currentQuestionIndex];
        const weight = score - 3;
        const dim1 = q.dimension[0]; const dim2 = q.dimension[1];
        if (q.positive) {
            if (weight > 0) mbtiScores[dim1] += weight; else mbtiScores[dim2] += Math.abs(weight);
        } else {
            if (weight > 0) mbtiScores[dim2] += weight; else mbtiScores[dim1] += Math.abs(weight);
        }
        currentQuestionIndex++;
        updateMbtiQuiz();
    });
});

retakeMbtiBtn?.addEventListener('click', () => {
    currentQuestionIndex = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    mbtiQuizContainer?.classList.remove('hidden');
    mbtiResults?.classList.add('hidden');
    if (mbtiDisplay) mbtiDisplay.value = "";
    updateMbtiQuiz();
});

updateMbtiQuiz();

// Body Metrics Calculation
const metricsForm = document.getElementById('metrics-form');
const metricsResults = document.getElementById('metrics-results');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiStatusSpan = document.getElementById('bmi-status');
const bmrValueSpan = document.getElementById('bmr-value');

metricsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    userData.gender = document.getElementById('gender').value;
    userData.age = parseInt(document.getElementById('age').value);
    userData.height = parseInt(document.getElementById('height').value);
    userData.weight = parseInt(document.getElementById('weight').value);
    
    const heightInMeters = userData.height / 100;
    userData.bmi = parseFloat((userData.weight / (heightInMeters * heightInMeters)).toFixed(1));
    
    let status = "";
    if (userData.bmi < 18.5) status = "저체중";
    else if (userData.bmi < 25) status = "정상체중";
    else if (userData.bmi < 30) status = "과체중";
    else status = "비만";
    
    userData.bmr = (userData.gender === 'male') ? 
        (10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5) :
        (10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161);
    
    if (bmiValueSpan) bmiValueSpan.textContent = userData.bmi;
    if (bmiStatusSpan) bmiStatusSpan.textContent = status;
    if (bmrValueSpan) bmrValueSpan.textContent = Math.round(userData.bmr).toLocaleString();
    
    if (metricsDisplay) {
        metricsDisplay.value = `BMI: ${userData.bmi} (${status}), BMR: ${Math.round(userData.bmr)} kcal`;
        metricsDisplay.classList.add('populated');
    }
    
    metricsResults?.classList.remove('hidden');
    generateDietAndStyleRecs();
});

// Comprehensive Global Activity Database
const activityLibrary = [
    { name: "빈야사 요가", type: "Mindfulness", icon: "wind", mbti: ["I", "F", "N"], indoor: true, time: ["dawn", "night"], desc: "호흡과 유연성에 집중하며 마음의 평화를 찾는 요가입니다." },
    { name: "복싱 / 킥복싱", type: "High Intensity", icon: "zap", mbti: ["E", "T", "S"], indoor: true, time: ["morning", "afternoon"], desc: "스트레스 해소와 폭발적인 에너지를 발산하는 격투기 운동입니다." },
    { name: "실내 암벽 등반", type: "Adventure", icon: "mountain", mbti: ["N", "P", "T"], indoor: true, time: ["afternoon", "morning"], desc: "전신 근력과 문제 해결 능력을 키우는 익스트림 스포츠입니다." },
    { name: "수영", type: "Endurance", icon: "waves", mbti: ["I", "S", "T", "J"], indoor: true, time: ["dawn", "morning", "night"], desc: "관절 부담 없이 심폐 지구력을 강화하는 전신 유산소입니다." },
    { name: "트레일 하이킹", type: "Outdoor", icon: "trees", mbti: ["N", "P", "F"], indoor: false, time: ["morning", "afternoon"], desc: "자연 속에서 지구력을 기르고 정신적 환기를 돕는 걷기 운동입니다." },
    { name: "필라테스", type: "Core Control", icon: "activity", mbti: ["S", "J", "F"], indoor: true, time: ["morning", "afternoon", "dawn"], desc: "속근육을 강화하고 체형 교정에 탁월한 정밀 운동입니다." },
    { name: "줌바 / 에어로빅", type: "Cardio Party", icon: "music", mbti: ["E", "F", "P"], indoor: true, time: ["afternoon", "morning"], desc: "신나는 음악에 맞춰 칼로리를 연소하는 즐거운 유산소 활동입니다." },
    { name: "조깅", type: "Cardio", icon: "footprints", mbti: ["I", "S", "T", "J"], indoor: false, time: ["dawn", "morning", "night"], desc: "언제 어디서나 가능한 가장 기본적인 체지방 연소 운동입니다." },
    { name: "사이클링", type: "Endurance", icon: "bike", mbti: ["E", "S", "J"], indoor: true, time: ["morning", "afternoon"], desc: "강력한 하근력과 심폐 기능을 발달시키는 고효율 유산소입니다." }
];

function populateExerciseCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;
    catalogGrid.innerHTML = activityLibrary.map(act => `
        <div class="catalog-item">
            <div class="catalog-icon"><i data-lucide="${act.icon}"></i></div>
            <h3>${act.name}</h3>
            <p class="rec-content">${act.desc}</p>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

function generateDietAndStyleRecs() {
    const dietContainer = document.getElementById('diet-container');
    const styleContainer = document.getElementById('style-container');
    if (!dietContainer || !styleContainer) return;

    // Diet Logic
    const dietItems = [
        { title: "고단백 중심 식단", content: "근육 생성과 회복을 위해 닭가슴살, 계란, 두부 등 단백질 섭취를 늘리세요.", goal: "muscle-gain" },
        { title: "저탄수화물 및 식이섬유", content: "체중 감량을 위해 복합 탄수화물과 풍부한 채소 중심의 식단을 추천합니다.", goal: "weight-loss" },
        { title: "균형 잡힌 일반식", content: "기초 대사량을 유지하며 영양소를 골고루 섭취하는 영양 균형 식단입니다.", goal: "general-fitness" }
    ];
    const userGoal = document.getElementById('goal')?.value || "general-fitness";
    const selectedDiet = dietItems.find(d => d.goal === userGoal) || dietItems[2];

    dietContainer.innerHTML = `
        <div class="rec-card">
            <span class="rec-title">${selectedDiet.title}</span>
            <p class="rec-content">${selectedDiet.content}</p>
            <p class="rec-content">하루 권장 섭취 칼로리: <strong>${Math.round(userData.bmr * 1.2)} kcal</strong> (활동량 보통 기준)</p>
        </div>
    `;

    // Style Logic
    let styleTip = "";
    if (userData.gender === 'male') {
        if (userData.bmi < 20) styleTip = "레이어드 룩을 활용하여 체격을 보완하고, 밝은 색상의 상의를 추천합니다.";
        else if (userData.bmi < 25) styleTip = "머슬 핏(Muscle Fit) 티셔츠나 테이퍼드 팬츠로 탄탄한 체형을 강조해 보세요.";
        else styleTip = "다크 톤의 세로 스트라이프 패턴이나 세미 와이드 팬츠로 슬림한 실루엣을 연출하세요.";
    } else {
        if (userData.bmi < 20) styleTip = "볼륨감 있는 퍼프 소매나 에이라인 스커트로 우아한 실루엣을 추천합니다.";
        else if (userData.bmi < 25) styleTip = "크롭 탑과 하이웨이스트 하의로 비율을 살리는 스타일이 가장 잘 어울립니다.";
        else styleTip = "브이넥 상의와 롱 스커트, 또는 와이드 팬츠로 체형을 자연스럽게 커버하며 스타일을 챙기세요.";
    }

    styleContainer.innerHTML = `
        <div class="rec-card">
            <span class="rec-title">${userData.gender === 'male' ? '남성' : '여성'} ${userData.bmi < 25 ? '슬림/보통' : '탄탄/건강'} 체형 코디</span>
            <p class="rec-content">${styleTip}</p>
        </div>
    `;
}

function updateSupplementRecs(healthStatus) {
    const supplementContainer = document.getElementById('supplement-container');
    if (!supplementContainer) return;

    const supplements = {
        excellent: { title: "활력 유지 패키지", content: "종합 비타민, 오메가3, 유산균으로 현재의 건강 상태를 유지하세요." },
        tired: { title: "피로 회복 패키지", content: "비타민B군, 마그네슘, 밀크씨슬로 피로를 풀고 에너지를 충전하세요." },
        recovery: { title: "신체 회복 패키지", content: "글루코사민, 보스웰리아, 비타민D로 관절과 면역력 회복에 집중하세요." }
    };
    const selected = supplements[healthStatus] || supplements.excellent;

    supplementContainer.innerHTML = `
        <div class="rec-card">
            <span class="rec-title">${selected.title}</span>
            <p class="rec-content">${selected.content}</p>
        </div>
    `;
}

// Exercise Database & Logic
let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (response.ok) exerciseDatabase = await response.json();
    } catch (error) { console.error('Error:', error); }
}

function getExercisesByContext(options) {
    const { goal, level, health, weather, timeOfDay } = options;
    const mbti = document.getElementById('mbti-display').value || "ISTJ";
    
    let potentialActivities = activityLibrary.filter(act => {
        const mbtiMatch = act.mbti.some(trait => mbti.includes(trait));
        const timeMatch = act.time.includes(timeOfDay);
        let goalMatch = true;
        if (goal === 'weight-loss' && !['High Intensity', 'Endurance', 'Cardio', 'Cardio Party'].includes(act.type)) goalMatch = Math.random() > 0.5;
        if ((weather === 'rainy' || weather === 'hot' || weather === 'cold') && !act.indoor) return false;
        return goalMatch && mbtiMatch && timeMatch;
    });

    if (potentialActivities.length === 0) potentialActivities = activityLibrary.filter(act => act.time.includes(timeOfDay));

    let recommendedList = [];
    const shuffledActivities = potentialActivities.sort(() => 0.5 - Math.random());
    recommendedList.push(...shuffledActivities.slice(0, 3).map(act => ({
        name: act.name, sets: level === 'beginner' ? "20분" : "45분", reps: act.type, rest: "상시",
        desc: act.desc + ` (${timeOfDay} 시간대에 최적화된 운동입니다.)`,
        image: `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500`
    })));

    if (exerciseDatabase.length > 0) {
        let targetMuscles = (health === 'recovery' || timeOfDay === 'night') ? ["stretching"] : ["core", "abs"];
        let filteredGym = exerciseDatabase.filter(ex => (ex.primaryMuscles || []).some(m => targetMuscles.includes(m.toLowerCase())));
        const selectedGym = filteredGym.sort(() => 0.5 - Math.random()).slice(0, 2);
        recommendedList.push(...selectedGym.map(ex => ({
            name: ex.name, sets: level === 'beginner' ? 2 : 3, reps: 12, rest: "60s",
            desc: "보조 운동: " + (ex.instructions?.[0] || "천천히 정확하게 수행하세요."),
            image: `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ex.images?.[0] || ex.id + '/0.jpg'}`
        })));
    }
    return recommendedList.sort(() => 0.5 - Math.random());
}

// History Storage
function saveToHistory(workout) {
    let history = JSON.parse(localStorage.getItem('workoutHistory') || "[]");
    const session = {
        date: new Date().toLocaleString(),
        exercises: workout.map(e => e.name)
    };
    history.unshift(session);
    localStorage.setItem('workoutHistory', JSON.stringify(history.slice(0, 10)));
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('history-container');
    if (!container) return;
    const history = JSON.parse(localStorage.getItem('workoutHistory') || "[]");
    if (history.length === 0) return;
    container.innerHTML = history.map(session => `
        <div class="rec-card" style="min-width: 250px;">
            <span class="rec-title">${session.date}</span>
            <p class="rec-content" style="font-size: 0.8em;">${session.exercises.join(', ')}</p>
        </div>
    `).join('');
}

const workoutForm = document.getElementById('workout-form');
const workoutContainer = document.getElementById('workout-container');

workoutForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const options = {
        fitnessLevel: document.getElementById('fitness-level').value,
        goal: document.getElementById('goal').value,
        health: document.getElementById('health-status').value,
        weather: document.getElementById('weather').value,
        timeOfDay: document.getElementById('time-of-day').value
    };
    if (workoutContainer) workoutContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">운동 계획을 세우는 중입니다...</p>';
    
    setTimeout(() => {
        let recommendedWorkout = getExercisesByContext(options);
        if (!recommendedWorkout || recommendedWorkout.length === 0) return;
        if (workoutContainer) workoutContainer.innerHTML = '';
        recommendedWorkout.forEach(exercise => {
            const workoutCard = document.createElement('workout-card');
            workoutCard.setAttribute('name', exercise.name);
            workoutCard.setAttribute('sets', exercise.sets);
            workoutCard.setAttribute('reps', exercise.reps);
            workoutCard.setAttribute('rest', exercise.rest);
            workoutCard.setAttribute('desc', exercise.desc);
            workoutCard.setAttribute('image', exercise.image);
            workoutContainer?.appendChild(workoutCard);
        });
        saveToHistory(recommendedWorkout);
        updateSupplementRecs(options.health);
        if (window.lucide) lucide.createIcons();
        workoutContainer?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
});

fetchExerciseData().then(() => {
    populateExerciseCatalog();
    renderHistory();
});
if (window.lucide) lucide.createIcons();
