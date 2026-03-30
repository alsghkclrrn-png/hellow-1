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

// ... (기존 코드 유지)

function populateExerciseCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;
    
    // 안정적인 시각적 자료를 위해 고화질 운동 관련 이미지와 설명을 결합한 카드로 구성
    const categories = [
        { 
            name: "벤치 프레스 (Bench Press)", 
            icon: "shield", 
            desc: "가슴 전체의 매스를 키우는 가장 대표적인 운동입니다. 바벨을 가슴 높이까지 내렸다가 힘차게 밀어올리세요.",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
        },
        { 
            name: "인클라인 덤벨 프레스 (Incline Press)", 
            icon: "arrow-up-right", 
            desc: "윗가슴을 타겟으로 하여 입체적인 가슴 라인을 완성합니다. 벤치 각도를 30-45도로 설정하세요.",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600"
        },
        { 
            name: "덤벨 플라이 (Dumbbell Fly)", 
            icon: "expand", 
            desc: "가슴 안쪽 라인과 근육의 결을 살려주는 고립 운동입니다. 가슴을 확장하며 천천히 근육을 이완하세요.",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
        },
        { 
            name: "푸쉬업 (Push-ups)", 
            icon: "zap", 
            desc: "언제 어디서나 가능한 가장 효과적인 가슴 맨몸 운동입니다. 몸을 일직선으로 유지하는 것이 핵심입니다.",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
        },
        { 
            name: "딥스 (Dips)", 
            icon: "arrow-down", 
            desc: "아랫가슴과 삼두근을 동시에 발달시키는 강력한 상체 운동입니다. 상체를 약간 숙여 가슴에 집중하세요.",
            img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=600"
        },
        { 
            name: "바벨 로우 (Barbell Row)", 
            icon: "align-justify", 
            desc: "등의 두께감을 키워주는 대표적인 운동입니다. 허리를 곧게 펴고 바벨을 배꼽 방향으로 당기세요.",
            img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=600"
        }
    ];

    catalogGrid.innerHTML = categories.map(cat => `
        <div class="catalog-item">
            <div class="video-wrapper" style="background-image: url('${cat.img}'); background-size: cover; background-position: center; height: 200px; position: relative;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 10px;">
                    <span style="color: white; font-size: 0.8em; font-weight: bold;">Pro Training Guide</span>
                </div>
            </div>
            <div class="catalog-content-box">
                <div class="catalog-header">
                    <div class="catalog-icon"><i data-lucide="${cat.icon}"></i></div>
                    <h3>${cat.name}</h3>
                </div>
                <p class="rec-content">${cat.desc}</p>
                <button class="secondary-btn" style="width: 100%; margin-top: 15px; padding: 10px;" onclick="alert('${cat.name}의 상세 운동 가이드 영상은 현재 준비 중입니다. 잠시만 기다려 주세요!')">
                    가이드 영상 보기
                </button>
            </div>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

function populateHomeWorkout(filter = 'bodyweight') {
    const homeWorkoutGrid = document.getElementById('home-workout-grid');
    if (!homeWorkoutGrid) return;

    const workoutData = {
        bodyweight: [
            { name: "슬로우 버피 (Slow Burpee)", icon: "zap", desc: "층간소음 없이 전신의 체지방을 태우는 유산소성 근력 운동입니다.", img: "https://images.unsplash.com/photo-1599058917233-35833f3b5e5e?auto=format&fit=crop&q=80&w=600" },
            { name: "와이드 스쿼트 (Wide Squat)", icon: "footprints", desc: "허벅지 안쪽과 엉덩이 라인을 탄탄하게 잡아주는 하체 운동입니다.", img: "https://images.unsplash.com/photo-1566241142559-40e1bfc26ddc?auto=format&fit=crop&q=80&w=600" },
            { name: "플랭크 탭 (Plank Taps)", icon: "activity", desc: "코어 안정성을 높이고 어깨 근력을 강화하는 전신 운동입니다.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600" },
            { name: "마운틴 클라이머 (Mountain Climbers)", icon: "wind", desc: "심박수를 높여 체지방 연소를 극대화하고 복근을 단련합니다.", img: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=600" }
        ],
        equipment: [
            { name: "덤벨 숄더 프레스 (Dumbbell Press)", icon: "triangle", desc: "생수병이나 덤벨을 활용해 직각 어깨 라인을 만드는 운동입니다.", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600" },
            { name: "밴드 랫 풀다운 (Band Pull-down)", icon: "align-justify", desc: "저항 밴드를 활용해 굽은 등을 펴고 매끈한 뒷태를 만듭니다.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600" },
            { name: "덤벨 런지 (Dumbbell Lunge)", icon: "arrow-down", desc: "양손에 무게를 들고 수행하여 하체 근력을 강하게 자극합니다.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" },
            { name: "폼롤러 등 스트레칭", icon: "accessibility", desc: "폼롤러를 이용해 뭉친 근육을 풀고 혈액순환을 돕습니다.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" }
        ]
    };

    homeWorkoutGrid.innerHTML = (workoutData[filter] || []).map(ex => `
        <div class="catalog-item">
            <div class="video-wrapper" style="background-image: url('${ex.img}'); background-size: cover; background-position: center; height: 180px;"></div>
            <div class="catalog-content-box">
                <div class="catalog-header">
                    <div class="catalog-icon"><i data-lucide="${ex.icon}"></i></div>
                    <h3>${ex.name}</h3>
                </div>
                <p class="rec-content">${ex.desc}</p>
            </div>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

// 필터 버튼 이벤트 리스너 등록
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        populateHomeWorkout(btn.dataset.target);
    });
});

fetchExerciseData().then(() => {
    populateExerciseCatalog();
    populateHomeWorkout(); // 초기 실행
    updateMbtiQuiz();
    updateSasangQuiz();
});
// ... (나머지 코드 유지)
