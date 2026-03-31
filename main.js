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
        const calories = this.getAttribute('calories') || '0';
        const target = this.getAttribute('target') || '전신';

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
            <div class="badge">Professional Training Plan</div>
            <div class="calorie-badge">🔥 ${calories} kcal</div>
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="content">
                <div class="target-badge"><i data-lucide="target"></i> ${target}</div>
                <h3>${name}</h3>
                <div class="description">
                    <strong>💡 초보자 가이드:</strong><br>
                    ${desc}
                </div>
                <div class="stats">
                    <div class="stat-item">
                        <span class="label">Target Sets</span>
                        <span class="value">${sets}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Target Reps</span>
                        <span class="value">${reps}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Est. Calories</span>
                        <span class="value">${calories} kcal</span>
                    </div>
                </div>
                <div class="rest-tag">
                    <span class="rest-label">Recommended Rest</span>
                    <span class="rest-value">${rest}</span>
                </div>

                <div class="performance-tracking">
                    <div class="performance-header">
                        <div class="performance-title">Record Performance</div>
                        <label class="completion-checkbox">
                            <input type="checkbox" class="is-completed" checked> Done
                        </label>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label>Actual Sets</label>
                            <input type="number" class="actual-sets" placeholder="0" value="${sets}">
                        </div>
                        <div class="input-field">
                            <label>Actual Reps</label>
                            <input type="number" class="actual-reps" placeholder="0" value="${reps}">
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label>Rest Taken (sec)</label>
                            <input type="number" class="actual-rest" placeholder="sec" value="${parseInt(rest) || 60}">
                        </div>
                        <div class="input-field">
                            <label>Time Taken (min)</label>
                            <input type="number" class="total-time" placeholder="min" value="10">
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
        let targetId = this.getAttribute('href').substring(1);
        // Map old history ID to new stretching ID if necessary, though nav links were already updated
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
    if (currentMbtiIndex < mbtiQuestions.length) {
        const q = mbtiQuestions[currentMbtiIndex];
        if (mbtiQuestionText) mbtiQuestionText.textContent = q.text;
        if (mbtiProgressText) mbtiProgressText.textContent = `Step ${currentMbtiIndex + 1} of ${mbtiQuestions.length}`;
        const progress = (currentMbtiIndex / mbtiQuestions.length) * 100;
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

document.querySelectorAll('.mbti-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score);
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
    });
});

retakeMbtiBtn?.addEventListener('click', () => {
    currentMbtiIndex = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    mbtiQuizContainer?.classList.remove('hidden');
    mbtiResults?.classList.add('hidden');
    updateMbtiQuiz();
});

// Professional Sasang Constitution Logic (20 Questions)
const sasangQuestions = [
    // 외형 (Appearance)
    { text: "나의 전반적인 체격은 어떤가요?", options: [
        { text: "목덜미가 굵고 머리가 크며 하체가 빈약한 편이다", type: "TY" },
        { text: "골격이 굵고 상하체가 균형 있게 발달했으나 살이 찌기 쉽다", type: "TE" },
        { text: "가슴 부위가 넓게 발달하고 어깨가 벌어졌으나 골반이 작다", type: "SY" },
        { text: "체구가 작고 아담하며 상체보다 하체가 더 발달했다", type: "SE" }
    ]},
    { text: "나의 얼굴형은 어디에 가깝나요?", options: [
        { text: "이마가 넓고 눈에 광채가 있으며 강인한 인상이다", type: "TY" },
        { text: "윤곽이 뚜렷하고 이목구비가 큼직하며 너그러운 인상이다", type: "TE" },
        { text: "입술이 얇고 턱이 뾰족하며 날카롭거나 명랑한 인상이다", type: "SY" },
        { text: "얼굴이 작고 갸름하며 오밀조밀하고 단정한 인상이다", type: "SE" }
    ]},
    { text: "나의 평소 걸음걸이는 어떤가요?", options: [
        { text: "가슴을 펴고 당당하게 걷지만 다리에 힘이 없어 보일 때가 있다", type: "TY" },
        { text: "속도는 느리지만 무게감이 있고 흔들림 없이 걷는다", type: "TE" },
        { text: "몸을 다소 흔들며 걷고 발걸음이 매우 가볍고 빠르다", type: "SY" },
        { text: "조용조용 조심스럽게 걸으며 몸가짐이 매우 단정하다", type: "SE" }
    ]},
    // 성격 (Personality)
    { text: "새로운 일을 시작할 때 나의 태도는?", options: [
        { text: "남이 생각지 못한 창의적인 아이디어로 앞장서서 추진한다", type: "TY" },
        { text: "한번 시작한 일은 끝까지 인내심 있게 마무리한다", type: "TE" },
        { text: "판단이 빠르고 민첩하게 실행에 옮기지만 쉽게 실증내기도 한다", type: "SY" },
        { text: "계획을 꼼꼼히 세우고 세밀하게 검토한 뒤 움직인다", type: "SE" }
    ]},
    { text: "대인관계에서 나는 어떤 사람인가요?", options: [
        { text: "자기주장이 강하고 카리스마가 있어 리더 역할을 자주 한다", type: "TY" },
        { text: "과묵한 편이며 남의 말을 잘 들어주고 포용력이 있다", type: "TE" },
        { text: "처음 보는 사람과도 금방 친해지며 분위기 메이커 역할을 한다", type: "SY" },
        { text: "예의 바르고 세심하지만 낯을 좀 가리고 내성적인 편이다", type: "SE" }
    ]},
    { text: "스트레스를 받았을 때 나의 반응은?", options: [
        { text: "버럭 화를 내며 즉시 발산하고 뒤끝이 없는 편이다", type: "TY" },
        { text: "속으로 삭이며 겉으로 잘 드러내지 않고 오랫동안 고민한다", type: "TE" },
        { text: "불안해하며 감정 기복이 심해지고 안절부절못한다", type: "SY" },
        { text: "깊은 수심에 빠지고 식욕이 떨어지며 몸이 바로 축 처진다", type: "SE" }
    ]},
    // 생리/병증 (Physiology/Symptoms)
    { text: "나의 평소 소화 상태는 어떤가요?", options: [
        { text: "소화는 잘 되지만 가끔 음식을 삼키기 힘든 느낌이 든다", type: "TY" },
        { text: "식성이 매우 좋아 무엇이든 잘 먹고 소화력도 아주 좋다", type: "TE" },
        { text: "음식을 매우 빨리 먹는 편이며 자극적인 것을 즐긴다", type: "SY" },
        { text: "소화력이 약해 조금만 과식해도 속이 불편하고 체하기 쉽다", type: "SE" }
    ]},
    { text: "나의 땀은 어떻게 나는 편인가요?", options: [
        { text: "땀이 별로 나지 않으며 땀을 흘리고 나면 몸이 몹시 피곤하다", type: "TY" },
        { text: "땀이 아주 많고, 운동으로 땀을 흠뻑 흘리고 나면 몸이 가볍다", type: "TE" },
        { text: "땀이 적당히 나는 편이며 운동할 때만 주로 난다", type: "SY" },
        { text: "땀이 거의 없으며 땀을 많이 흘리면 기운이 하나도 없다", type: "SE" }
    ]},
    { text: "잠을 잘 때 나의 모습은?", options: [
        { text: "비교적 깊게 자지만 꿈을 자주 꾸는 편이다", type: "TY" },
        { text: "머리만 대면 바로 잠들고 코를 골거나 깊게 자는 편이다", type: "TE" },
        { text: "잠귀가 밝아 자주 깨고 숙면을 취하기 어려울 때가 많다", type: "SY" },
        { text: "예민한 편이지만 규칙적인 수면 습관을 가지려 노력한다", type: "SE" }
    ]},
    { text: "추위를 느끼는 정도는 어떤가요?", options: [
        { text: "추위보다 더위에 더 민감하며 시원한 곳을 찾는다", type: "TY" },
        { text: "더위를 많이 타며 몸에 열이 많아 땀을 자주 흘린다", type: "TE" },
        { text: "상체에는 열이 오르지만 하체는 차가울 때가 많다", type: "SY" },
        { text: "추위를 몹시 타고 찬바람이 불면 몸이 바로 움츠러든다", type: "SE" }
    ]},
    { text: "변비나 설사 중 어떤 것을 자주 겪나요?", options: [
        { text: "대변이 굵고 시원하게 나오는 것이 건강의 척도다", type: "TY" },
        { text: "평소 변비기가 약간 있어도 생활에 큰 지장이 없다", type: "TE" },
        { text: "대변이 무르거나 설사를 자주 하면 기운이 떨어진다", type: "SY" },
        { text: "대변이 잘 안 나오면 속이 몹시 답답하고 컨디션이 나빠진다", type: "SE" }
    ]},
    { text: "평소 선호하는 음료는?", options: [
        { text: "담백한 차나 물을 즐겨 마신다", type: "TY" },
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
    if (currentSasangIndex < sasangQuestions.length) {
        const q = sasangQuestions[currentSasangIndex];
        if (sasangQuestionText) sasangQuestionText.textContent = q.text;
        if (sasangProgressText) sasangProgressText.textContent = `Step ${currentSasangIndex + 1} of ${sasangQuestions.length}`;
        const progress = (currentSasangIndex / sasangQuestions.length) * 100;
        sasangProgressBar?.style.setProperty('--progress', `${progress}%`);
        
        if (sasangOptions) {
            sasangOptions.innerHTML = q.options.map(opt => `
                <button class="mbti-opt sasang-opt" data-type="${opt.type}">${opt.text}</button>
            `).join('');
            
            document.querySelectorAll('.sasang-opt').forEach(btn => {
                btn.addEventListener('click', () => {
                    const type = btn.dataset.type;
                    sasangScores[type]++;
                    currentSasangIndex++;
                    updateSasangQuiz();
                });
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
    if (metricsDisplay) { metricsDisplay.value = `BMI: ${userData.bmi} (${status}), BMR: ${Math.round(userData.bmr)} kcal`; metricsDisplay.classList.add('populated'); }
    metricsResults?.classList.remove('hidden');
    generateDietRecs();
});

// Exercise Video Catalog Data (Categorized)
let exerciseCatalogData = {
    chest: [
        { name: "벤치 프레스 (Bench Press)", icon: "shield", desc: "가슴 전체의 매스를 키우는 가장 대표적인 운동입니다.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/rT7DgVCn7iU" },
        { name: "인클라인 덤벨 프레스", icon: "arrow-up-right", desc: "윗가슴을 타겟으로 하여 입체적인 가슴 라인을 완성합니다.", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/8iPEnn-ltC8" },
        { name: "덤벨 플라이 (Dumbbell Fly)", icon: "expand", desc: "가슴 안쪽 라인과 근육의 결을 살려주는 고립 운동입니다.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/eGjt4lk6gjw" }
    ],
    back: [
        { name: "바벨 로우 (Barbell Row)", icon: "align-justify", desc: "등의 두께감을 키워주는 대표적인 운동입니다.", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/9efgcAjQW7E" },
        { name: "풀업 (Pull-ups)", icon: "arrow-up", desc: "등의 넓이를 확장하고 상체 전반의 근력을 강화합니다.", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/eGo4IYlbE5g" },
        { name: "렛 풀다운 (Lat Pulldown)", icon: "arrow-down", desc: "광배근을 고립시켜 역삼각형 뒤태를 만듭니다.", img: "https://images.unsplash.com/photo-1591940742888-243ad0512807?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/CAwf7n6Luuc" }
    ],
    shoulders: [
        { name: "오버헤드 프레스", icon: "triangle", desc: "강력한 어깨 프레임을 만드는 상체 밀기 운동의 핵심입니다.", img: "https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/2yjwHeEdf9w" },
        { name: "사이드 레터럴 레이즈", icon: "expand", desc: "측면 삼각근을 발달시켜 어깨를 더 넓어 보이게 합니다.", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/3VcKaXpzqRo" }
    ],
    legs: [
        { name: "바벨 스쿼트 (Squat)", icon: "footprints", desc: "하체 근력과 전신 안정성을 키우는 '운동의 왕'입니다.", img: "https://images.unsplash.com/photo-1566241142559-40e1bfc26ddc?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/MVMnk0HiTMg" },
        { name: "런지 (Lunge)", icon: "arrow-down", desc: "하체의 균형 감각과 엉덩이 근육을 집중적으로 단련합니다.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/QOVaHwm-Q6U" }
    ],
    arms: [
        { name: "바벨 컬 (Bicep Curl)", icon: "zap", desc: "이두근의 크기를 키우는 가장 기본적인 운동입니다.", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/ykJmrZ5v0Oo" },
        { name: "트라이셉스 익스텐션", icon: "arrow-up", desc: "팔 뒷부분인 삼두근을 단련하여 팔의 두께를 완성합니다.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/nRiJVZDpdL0" }
    ],
    core: [
        { name: "플랭크 (Plank)", icon: "activity", desc: "코어 전체의 안정성과 버티는 힘을 기릅니다.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/ASdvN_XEl_c" },
        { name: "레그 레이즈", icon: "arrow-up", desc: "하복부 근육을 집중적으로 타격하여 복근 라인을 만듭니다.", img: "https://images.unsplash.com/photo-1599058917233-35833f3b5e5e?auto=format&fit=crop&q=80&w=600", video: "https://www.youtube.com/embed/l4kQd9eWclE" }
    ]
};

function populateExerciseCatalog(filterPart = 'all') {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;
    
    let displayData = [];
    if (filterPart === 'all') {
        Object.values(exerciseCatalogData).forEach(partArr => displayData.push(...partArr));
    } else {
        displayData = exerciseCatalogData[filterPart] || [];
    }

    catalogGrid.innerHTML = displayData.map(cat => `
        <div class="catalog-item">
            <div class="video-wrapper" style="background-image: url('${cat.img}'); background-size: cover; background-position: center; height: 200px; position: relative;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 10px;">
                    <span style="color: white; font-size: 0.8em; font-weight: bold;">Virtual Character Guide</span>
                </div>
            </div>
            <div class="catalog-content-box">
                <div class="catalog-header">
                    <div class="catalog-icon"><i data-lucide="${cat.icon}"></i></div>
                    <h3>${cat.name}</h3>
                </div>
                <p class="rec-content">${cat.desc}</p>
                <button class="secondary-btn" style="width: 100%; margin-top: 15px; padding: 10px; display: flex; align-items: center; justify-content: center; gap: 8px;" 
                    onclick="openVideoPlayer('${cat.video}', '${cat.name}', '${cat.desc}')">
                    <i data-lucide="play-circle"></i> 가이드 영상 보기
                </button>
            </div>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

// Video Modal Logic
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-iframe');
const videoPlayer = document.getElementById('video-player');
const videoTitle = document.getElementById('video-title');
const videoDesc = document.getElementById('video-desc');
const closeVideoBtn = document.getElementById('close-video-modal');

function openVideoPlayer(url, title, desc) {
    if (!videoModal) return;
    
    // Reset both
    if (videoIframe) { videoIframe.src = ""; videoIframe.classList.add('hidden'); }
    if (videoPlayer) { videoPlayer.src = ""; videoPlayer.classList.add('hidden'); }

    if (url && (url.includes('youtube.com') || url.includes('youtu.be'))) {
        if (videoIframe) {
            videoIframe.src = url.includes('embed') ? url + "?autoplay=1" : url.replace('watch?v=', 'embed/') + "?autoplay=1";
            videoIframe.classList.remove('hidden');
        }
    } else if (url) {
        if (videoPlayer) {
            videoPlayer.src = url;
            videoPlayer.classList.remove('hidden');
            videoPlayer.play().catch(e => console.log("Auto-play blocked or failed", e));
        }
    } else {
        // Fallback or just show title/desc if no URL
        if (videoDesc) videoDesc.innerHTML += "<br><small>(영상이 제공되지 않는 운동입니다. 설명을 참고하세요.)</small>";
    }

    if (videoTitle) videoTitle.textContent = title;
    if (videoDesc && desc) videoDesc.textContent = desc;
    
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

closeVideoBtn?.addEventListener('click', () => {
    videoModal?.classList.add('hidden');
    if (videoIframe) videoIframe.src = "";
    if (videoPlayer) { videoPlayer.pause(); videoPlayer.src = ""; }
    document.body.style.overflow = 'auto';
});

// Improved Upload Form Submission
const uploadModal = document.getElementById('upload-modal');
const openUploadBtn = document.getElementById('open-upload-btn');
const closeUploadBtn = document.getElementById('close-upload-modal');
const uploadForm = document.getElementById('upload-form');

openUploadBtn?.addEventListener('click', () => {
    uploadModal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeUploadBtn?.addEventListener('click', () => {
    uploadModal?.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

uploadForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('upload-name').value;
    const part = document.getElementById('upload-part').value;
    const youtubeUrl = document.getElementById('upload-video').value;
    const desc = document.getElementById('upload-desc').value;
    const fileInput = document.getElementById('upload-video-file');
    
    let finalVideoUrl = youtubeUrl;

    if (fileInput && fileInput.files.length > 0) {
        const firstFile = fileInput.files[0];
        // Local Blob URL for playback
        finalVideoUrl = URL.createObjectURL(firstFile);
        console.log(`Local file upload simulation: ${firstFile.name}`);
    }

    if (!finalVideoUrl && !youtubeUrl) {
        alert("영상 파일이나 YouTube URL 중 하나는 필수입니다.");
        return;
    }

    if (!exerciseCatalogData[part]) exerciseCatalogData[part] = [];
    exerciseCatalogData[part].unshift({
        name: name,
        icon: "plus-circle",
        desc: desc,
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
        video: finalVideoUrl
    });

    populateExerciseCatalog('all');
    uploadModal?.classList.add('hidden');
    document.body.style.overflow = 'auto';
    uploadForm.reset();
    alert(`'${name}' 운동 정보와 영상이 성공적으로 업로드되었습니다!`);
});

// Catalog Tab Logic
document.querySelectorAll('#catalog-tabs .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#catalog-tabs .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        populateExerciseCatalog(btn.dataset.part);
    });
});

window.openVideoPlayer = openVideoPlayer;

function populateHomeWorkout(filter = 'bodyweight') {
    const homeWorkoutGrid = document.getElementById('home-workout-grid');
    if (!homeWorkoutGrid) return;

    if (exerciseDatabase.length === 0) {
        homeWorkoutGrid.innerHTML = '<p class="empty-msg">데이터를 불러오는 중입니다...</p>';
        return;
    }

    let filtered = [];
    if (filter === 'bodyweight') {
        // 'body only' equipment from API
        filtered = exerciseDatabase.filter(ex => 
            (ex.equipment === 'body only' || !ex.equipment) && 
            ['strength', 'stretching', 'cardio', 'abs'].includes(ex.category)
        );
    } else {
        // 'dumbbell', 'bands', 'kettlebells' etc for home equipment
        const homeEquip = ['dumbbell', 'bands', 'foam roller', 'medicine ball', 'exercise ball'];
        filtered = exerciseDatabase.filter(ex => 
            homeEquip.includes(ex.equipment)
        );
    }

    // Shuffle and pick 4
    const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, 4);

    if (selected.length === 0) {
        homeWorkoutGrid.innerHTML = '<p class="empty-msg">해당 조건의 운동이 없습니다.</p>';
        return;
    }

    homeWorkoutGrid.innerHTML = selected.map(ex => {
        const imgPath = (ex.images && ex.images.length > 0) 
            ? `${IMG_BASE_URL}${ex.images[0]}` 
            : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600';
            
        return `
            <div class="catalog-item">
                <div class="video-wrapper" style="background-image: url('${imgPath}'); background-size: cover; background-position: center; height: 180px;">
                    <div style="position: absolute; top: 10px; right: 10px; background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7em; font-weight: bold; text-transform: uppercase;">
                        ${ex.equipment || 'Bodyweight'}
                    </div>
                </div>
                <div class="catalog-content-box">
                    <div class="catalog-header">
                        <div class="catalog-icon"><i data-lucide="activity"></i></div>
                        <h3>${ex.name}</h3>
                    </div>
                    <p class="rec-content">${ex.instructions ? ex.instructions[0].substring(0, 100) + '...' : '가이드를 보려면 클릭하세요.'}</p>
                    <button class="secondary-btn" style="width: 100%; margin-top: 10px; padding: 8px;" onclick="openVideoPlayer('', '${ex.name}', '${ex.instructions ? ex.instructions.join(' ') : ''}')">자세히 보기</button>
                </div>
            </div>
        `;
    }).join('');
    if (window.lucide) lucide.createIcons();
}

// 필터 버튼 이벤트 리스너 등록
document.querySelectorAll('#home-filter-tabs .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#home-filter-tabs .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        populateHomeWorkout(btn.dataset.target);
    });
});

// Refresh Button Listener
document.getElementById('refresh-home-workout')?.addEventListener('click', () => {
    const activeTab = document.querySelector('#home-filter-tabs .filter-btn.active');
    populateHomeWorkout(activeTab ? activeTab.dataset.target : 'bodyweight');
    const icon = document.querySelector('#refresh-home-workout i');
    if (icon) {
        icon.style.transition = 'transform 0.5s ease';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => { icon.style.transform = 'rotate(0deg)'; }, 500);
    }
});

function generateDietRecs() {
    const dietContainer = document.getElementById('diet-container');
    if (!dietContainer || !userData.bmr) return;

    const userGoal = document.getElementById('goal')?.value || "general-fitness";
    const bmr = userData.bmr;
    
    // TDEE estimation (Sedentary factor 1.2)
    const tdee = Math.round(bmr * 1.2);
    let targetCalories = tdee;
    
    if (userGoal === 'weight-loss') targetCalories -= 500;
    else if (userGoal === 'muscle-gain') targetCalories += 300;

    // Professional Meal Pool for Diversity
    const mealPool = {
        breakfast: [
            {
                name: "수비드 닭가슴살 샐러드 & 오트밀",
                recipe: "[1단계] 롤드 오트 40g에 뜨거운 물을 부어 불립니다.<br>[2단계] 닭가슴살 100g을 얇게 썰어 루꼴라, 방울토마토와 담습니다.<br>[3단계] 올리브유와 발사믹으로 드레싱합니다.",
                nutrients: "고단백, 저당질, 식이섬유",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
            },
            {
                name: "아보카도 통밀 에그 토스트",
                recipe: "[1단계] 통밀빵 2조각을 바삭하게 굽습니다.<br>[2단계] 아보카도 반 개를 으깨어 빵 위에 펴 바릅니다.<br>[3단계] 수란 혹은 프라이를 올려 레드페퍼 홀을 뿌립니다.",
                nutrients: "양질의 지방, 복합 탄수화물",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600"
            },
            {
                name: "베리 넛츠 그릭 요거트 볼",
                recipe: "[1단계] 꾸덕한 그릭 요거트 150g을 볼에 담습니다.<br>[2단계] 블루베리와 견과류 20g을 토핑합니다.<br>[3단계] 기호에 따라 시나몬 가루를 살짝 뿌립니다.",
                nutrients: "프로바이오틱스, 항산화",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600"
            }
        ],
        lunch: [
            {
                name: "현미밥 & 흰살생선 채소 찜",
                recipe: "[1단계] 현미밥 150g을 준비합니다.<br>[2단계] 대구살 120g을 미림과 생강으로 밑간해 찜기에 익힙니다.<br>[3단계] 데친 브로콜리와 버섯을 곁들입니다.",
                nutrients: "저지방 단백질, 풍부한 미네랄",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600"
            },
            {
                name: "소고기 우둔살 파스타",
                recipe: "[1단계] 통밀 파스타면 80g을 삶습니다.<br>[2단계] 우둔살 100g을 마늘, 올리브유와 볶습니다.<br>[3단계] 구운 어린 시금치와 면을 섞어 완성합니다.",
                nutrients: "철분 보충, 에너자이징",
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600"
            },
            {
                name: "두부 곤약 잡곡 비빔밥",
                recipe: "[1단계] 곤약과 잡곡을 섞은 밥 150g을 담습니다.<br>[2단계] 으깬 두부와 각종 나물을 올립니다.<br>[3단계] 저염 고추장 한 스푼과 참기름으로 비빕니다.",
                nutrients: "저칼로리 포만감, 식물성 영양",
                image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600"
            }
        ],
        dinner: [
            {
                name: "그릴드 연어 스테이크",
                recipe: "[1단계] 연어 150g에 허브 솔트를 뿌려 굽습니다.<br>[2단계] 아스파라거스와 미니 당근을 함께 구워냅니다.<br>[3단계] 레몬즙을 살짝 뿌려 산뜻함을 더합니다.",
                nutrients: "오메가-3, 세포 회복",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600"
            },
            {
                name: "닭안심 버섯 볶음",
                recipe: "[1단계] 닭안심 120g을 한입 크기로 썹니다.<br>[2단계] 표고버섯, 청경채와 함께 굴소스로 빠르게 볶습니다.<br>[3단계] 통깨를 뿌려 고소함을 살립니다.",
                nutrients: "근육 합성, 저칼로리",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600"
            },
            {
                name: "단호박 훈제오리 찜",
                recipe: "[1단계] 미니 단호박의 속을 파냅니다.<br>[2단계] 기름기를 뺀 훈제오리를 채워 넣습니다.<br>[3단계] 찜기에서 15분간 쪄서 완성합니다.",
                nutrients: "베타카로틴, 원기 회복",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600"
            }
        ]
    };

    // Helper to pick random item
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const selectedPlan = [
        { time: "아침 (Breakfast)", ...getRandom(mealPool.breakfast), calories: Math.round(targetCalories * 0.25) },
        { time: "점심 (Lunch)", ...getRandom(mealPool.lunch), calories: Math.round(targetCalories * 0.4) },
        { time: "저녁 (Dinner)", ...getRandom(mealPool.dinner), calories: Math.round(targetCalories * 0.35) }
    ];

    dietContainer.innerHTML = `
        <div class="diet-summary-card">
            <div class="summary-header">
                <i data-lucide="calculator"></i>
                <span>일일 맞춤 권장량: <strong>${targetCalories} kcal</strong></span>
            </div>
            <p class="summary-desc">전문 코칭 알고리즘이 성별, 연령, 체격 및 '${userGoal}' 목표를 정밀 분석한 결과입니다.</p>
        </div>
        <div class="meal-grid">
            ${selectedPlan.map(meal => `
                <div class="rec-card meal-card">
                    <div class="meal-img-container">
                        <img src="${meal.image}" alt="${meal.name}" class="meal-img" onerror="this.src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600'">
                        <div class="meal-calorie-tag">${meal.calories} kcal</div>
                    </div>
                    <div class="meal-content-body">
                        <span class="meal-time">${meal.time}</span>
                        <h3 class="meal-name">${meal.name}</h3>
                        <div class="meal-nutrients">
                            <i data-lucide="award"></i> ${meal.nutrients}
                        </div>
                        <div class="meal-recipe">
                            <strong>👨‍🍳 조리 순서:</strong><br>
                            <div class="recipe-steps">${meal.recipe}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    if (window.lucide) lucide.createIcons();
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

let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';
const IMG_BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';

async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (response.ok) exerciseDatabase = await response.json();
    } catch (error) { console.error('Error fetching exercise data:', error); }
}

function getExercisesByContext(options) {
    const { goal, fitnessLevel, health, weather, timeOfDay } = options;
    const mbti = document.getElementById('mbti-display').value || "ISTJ";
    
    let recommendedList = [];

    if (exerciseDatabase.length > 0) {
        // Professional Body Part Mapping
        const parts = {
            chest: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('chest')),
            back: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('back') || (ex.primaryMuscles || []).includes('lats')),
            shoulders: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('shoulders')),
            arms: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('biceps') || (ex.primaryMuscles || []).includes('triceps')),
            legs: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('quads') || (ex.primaryMuscles || []).includes('hamstrings') || (ex.primaryMuscles || []).includes('glutes')),
            abs: exerciseDatabase.filter(ex => (ex.primaryMuscles || []).includes('abs') || (ex.category === 'abs')),
            cardio: exerciseDatabase.filter(ex => ex.category === 'cardio' || (ex.primaryMuscles || []).includes('cardio'))
        };

        // Selection Logic
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

        recommendedList = sessionPool.map(ex => {
            const imgPath = (ex.images && ex.images.length > 0) 
                ? `${IMG_BASE_URL}${ex.images[0]}` 
                : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400';

            const rawInstructions = (ex.instructions && ex.instructions.length > 0) ? ex.instructions : ["천천히 정확한 자세로 수행하세요."];
            const detailedDesc = rawInstructions.map((step, idx) => `[${idx + 1}단계] ${step}`).join('<br>');
            
            const metMap = { 'strength': 6.0, 'cardio': 8.0, 'stretching': 2.5, 'plyometrics': 8.0, 'abs': 4.0 };
            const currentMET = metMap[ex.category] || 5.0;

            const weight = userData.weight || 70;
            const setsNum = fitnessLevel === 'beginner' ? 3 : 4;
            const repsNum = fitnessLevel === 'advanced' ? 15 : 12;
            const totalMinutes = (setsNum * (repsNum * 4 + 60)) / 60;
            const burned = Math.round((currentMET * 3.5 * weight / 200) * totalMinutes);

            // Muscle name mapping for display
            const muscleMap = { 
                'chest': '가슴', 'back': '등', 'lats': '등', 'shoulders': '어깨', 
                'biceps': '팔(이두)', 'triceps': '팔(삼두)', 'quads': '허벅지(앞)', 
                'hamstrings': '허벅지(뒤)', 'glutes': '엉덩이', 'abs': '복근', 'cardio': '전신/심폐' 
            };
            const displayTarget = (ex.primaryMuscles || []).map(m => muscleMap[m] || m).join(', ') || '전신';

            return {
                name: ex.name,
                sets: `${setsNum}세트`,
                reps: ex.category === 'cardio' ? "15~20분" : `${repsNum}회`,
                rest: "60초",
                desc: detailedDesc,
                image: imgPath,
                calories: burned,
                primaryMuscles: ex.primaryMuscles || [],
                target: displayTarget
            };
        });
    } else {
        recommendedList = [{
            name: "기본 전신 프로그램",
            sets: "3세트", reps: "15회", rest: "60초",
            desc: "[1단계] 가볍게 제자리 뛰기로 몸을 풉니다.<br>[2단계] 스쿼트 15회를 수행합니다.<br>[3단계] 플랭크 30초를 유지합니다.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
            calories: 120,
            primaryMuscles: ["full body"],
            target: "전신"
        }];
    }
    
    return recommendedList;
}

function generateStretchingRecs(workout) {
    const container = document.getElementById('stretching-container');
    if (!container || workout.length === 0) return;

    const targetMuscles = [...new Set(workout.flatMap(ex => ex.primaryMuscles))];
    
    let matchingStretches = exerciseDatabase.filter(ex => 
        ex.category === 'stretching' && 
        ex.primaryMuscles.some(m => targetMuscles.includes(m))
    );

    if (matchingStretches.length === 0) {
        matchingStretches = exerciseDatabase.filter(ex => ex.category === 'stretching').slice(0, 3);
    } else {
        matchingStretches = matchingStretches.sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    container.innerHTML = matchingStretches.map(stretch => {
        const imgPath = (stretch.images && stretch.images.length > 0) 
            ? `${IMG_BASE_URL}${stretch.images[0]}` 
            : 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400';
        
        const rawInstructions = (stretch.instructions && stretch.instructions.length > 0) ? stretch.instructions : ["호흡하며 부드럽게 근육을 늘려주세요."];
        const detailedDesc = rawInstructions.map((step, idx) => `[${idx + 1}단계] ${step}`).join('<br>');

        return `
            <div class="rec-card" style="min-width: 320px; display: flex; flex-direction: column; gap: 15px;">
                <div style="width: 100%; height: 180px; overflow: hidden; border-radius: 12px;">
                    <img src="${imgPath}" alt="${stretch.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'">
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="meal-time">추천 스트레칭</span>
                    <span class="status-badge" style="background: var(--glow-color); color: var(--primary-color); padding: 4px 8px; font-size: 0.7em;">${stretch.primaryMuscles.join(', ')}</span>
                </div>
                <h3 style="font-size: 1.1em; color: var(--primary-color); margin: 0;">${stretch.name}</h3>
                <div class="meal-recipe" style="font-size: 0.85em; flex-grow: 1;">
                    <strong>🧘 가이드:</strong><br>
                    ${detailedDesc}
                </div>
            </div>
        `;
    }).join('');
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
            workoutCard.setAttribute('calories', exercise.calories);
            workoutCard.setAttribute('target', exercise.target);
            workoutContainer?.appendChild(workoutCard);
        });
        
        generateStretchingRecs(recommendedWorkout);
        updateSupplementRecs(options.health);
        
        // Show analysis section
        const analysisSection = document.getElementById('workout-analysis-section');
        if (analysisSection) analysisSection.classList.remove('hidden');
        
        if (window.lucide) lucide.createIcons();
        workoutContainer?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
});

// Workout Analysis Logic
document.getElementById('analyze-workout-btn')?.addEventListener('click', () => {
    const cards = document.querySelectorAll('workout-card');
    let totalTargetSets = 0;
    let totalActualSets = 0;
    let totalTargetReps = 0;
    let totalActualReps = 0;
    let totalTime = 0;
    let totalRest = 0;
    let completedCount = 0;
    let exerciseCount = cards.length;

    cards.forEach(card => {
        const isCompleted = card.shadowRoot.querySelector('.is-completed')?.checked;
        if (!isCompleted) return;

        completedCount++;
        const targetSets = parseInt(card.getAttribute('sets') || 0);
        const targetReps = parseInt(card.getAttribute('reps') || 0);
        const targetRest = parseInt(card.getAttribute('rest') || 60);
        
        const actualSets = parseInt(card.shadowRoot.querySelector('.actual-sets')?.value || 0);
        const actualReps = parseInt(card.shadowRoot.querySelector('.actual-reps')?.value || 0);
        const actualRest = parseInt(card.shadowRoot.querySelector('.actual-rest')?.value || 0);
        const time = parseInt(card.shadowRoot.querySelector('.total-time')?.value || 0);

        totalTargetSets += targetSets;
        totalActualSets += actualSets;
        totalTargetReps += targetReps;
        totalActualReps += actualReps;
        totalRest += actualRest;
        totalTime += time;
    });

    if (completedCount === 0) {
        alert("최소 한 개 이상의 운동을 완료 상태로 체크해 주세요!");
        return;
    }

    const completionRate = (totalActualSets / totalTargetSets) * 100;
    const intensityScore = (totalActualReps / totalTargetReps) * 100;
    const avgRest = totalRest / completedCount;

    let evaluation = "";
    let status = "";
    let statusColor = "";
    let suggestions = [];

    // Professional Trainer Logic
    if (completionRate >= 100 && intensityScore >= 100) {
        status = "Elite Performance (전문가 수준)";
        statusColor = "#10b981";
        evaluation = `전체 운동의 ${completionRate.toFixed(0)}%를 완벽하게 소화하셨습니다. 특히 목표 횟수를 모두 채운 점은 근지구력과 정신력이 매우 훌륭하다는 증거입니다. 현재 프로그램이 몸에 잘 적응된 상태입니다.`;
        suggestions.push("점진적 과부하 원칙에 따라 다음 주에는 전체 중량을 2.5kg~5kg 증량해 보세요.");
        suggestions.push(`세트 사이 휴식 시간을 현재 ${avgRest.toFixed(0)}초에서 45초로 줄여 심폐 지구력을 추가로 강화해 보세요.`);
        suggestions.push("운동 후 30분 이내에 탄수화물과 단백질이 3:1 비율로 섞인 식단을 섭취하여 회복을 극대화하세요.");
    } else if (completionRate >= 70) {
        status = "Solid Progress (안정적인 성장)";
        statusColor = "#3b82f6";
        evaluation = `목표한 세트의 상당 부분을 완수하셨습니다. ${totalTime}분 동안 집중력을 유지한 점을 높게 평가합니다. 다만, 일부 구간에서 횟수가 부족했던 점은 근력 부족보다는 에너지 고갈의 원인이 큽니다.`;
        suggestions.push("운동 1시간 전 바나나나 오트밀 같은 복합 탄수화물을 섭취하여 에너지를 보충하세요.");
        suggestions.push("수행하지 못한 마지막 세트는 '드롭 세트' 기법을 활용해 가벼운 무게로라도 끝까지 횟수를 채워보세요.");
        suggestions.push(`휴식 시간(${avgRest.toFixed(0)}초)이 적절합니다. 이 리듬을 유지하되 마지막 세트 직전에만 20초 더 쉬어주세요.`);
    } else {
        status = "Foundation Building (기초 다지기)";
        statusColor = "#f59e0b";
        evaluation = "오늘 운동은 몸에 다소 무리가 되었거나 컨디션 조절에 실패했을 가능성이 큽니다. 하지만 포기하지 않고 일부라도 수행한 것 자체가 큰 진전입니다. 부상 방지를 위해 강도 조절이 필요합니다.";
        suggestions.push("현재 설정된 목표 횟수를 20% 하향 조정하여 '성취감'을 먼저 느끼는 쪽으로 방향을 잡으세요.");
        suggestions.push("수행 동작의 가동 범위를 줄이더라도 올바른 자세(Form)를 유지하는 데 100% 집중하세요.");
        suggestions.push("운동 전 스트레칭과 폼롤러 사용 시간을 10분 더 늘려 몸의 유연성을 먼저 확보해야 합니다.");
    }

    const resultsDiv = document.getElementById('analysis-results');
    const contentDiv = document.getElementById('analysis-content');
    
    if (resultsDiv && contentDiv) {
        contentDiv.innerHTML = `
            <div class="analysis-stats-grid">
                <div class="stat-box">
                    <span class="stat-label">수행 완료</span>
                    <span class="stat-value">${completedCount}/${exerciseCount}</span>
                </div>
                <div class="stat-box">
                    <span class="stat-label">수행률 (Sets)</span>
                    <span class="stat-value">${completionRate.toFixed(1)}%</span>
                </div>
                <div class="stat-box">
                    <span class="stat-label">평균 휴식</span>
                    <span class="stat-value">${avgRest.toFixed(0)}초</span>
                </div>
            </div>
            <div class="evaluation-text">
                <div class="status-badge" style="background: ${statusColor}">${status}</div>
                <h4 style="color: var(--primary-color); margin-bottom: 10px;">코치 총평</h4>
                <p class="main-eval">${evaluation}</p>
                <h4 style="color: var(--primary-color); margin-bottom: 15px;">향후 보완점 (Action Plan)</h4>
                <ul class="suggestion-list">
                    ${suggestions.map(s => `<li><i data-lucide="chevron-right-circle"></i> ${s}</li>`).join('')}
                </ul>
            </div>
        `;
        resultsDiv.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

fetchExerciseData().then(() => {
    populateExerciseCatalog();
    populateHomeWorkout();
    updateMbtiQuiz();
    updateSasangQuiz();
});
if (window.lucide) lucide.createIcons();

// Legal Sections Logic
function showLegal(type) {
    const privacy = document.getElementById('privacy-policy');
    const terms = document.getElementById('terms-of-service');
    
    if (!privacy || !terms) return;

    if (type === 'privacy') {
        privacy.classList.toggle('hidden');
        terms.classList.add('hidden');
        if (!privacy.classList.contains('hidden')) {
            privacy.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (type === 'terms') {
        terms.classList.toggle('hidden');
        privacy.classList.add('hidden');
        if (!terms.classList.contains('hidden')) {
            terms.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function closeLegal() {
    const privacy = document.getElementById('privacy-policy');
    const terms = document.getElementById('terms-of-service');
    if (privacy) privacy.classList.add('hidden');
    if (terms) terms.classList.add('hidden');
}

// Ensure these are globally accessible for onclick
window.showLegal = showLegal;
window.closeLegal = closeLegal;

// Close modal logic (kept for compatibility or other potential modals)
window.onclick = function(event) {
    const modal = document.getElementById('legal-modal');
    if (event.target == modal) {
        closeLegal();
        if (modal) modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}
