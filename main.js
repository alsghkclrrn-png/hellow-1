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
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="content">
                <h3>${name}</h3>
                <p class="description">${desc}</p>
                <div class="stats">
                    <div class="stat-item">
                        <span class="label">Target Sets</span>
                        <span class="value">${sets}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Target Reps</span>
                        <span class="value">${reps}</span>
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

// Comprehensive Global Activity Database
const activityLibrary = [
    { 
        name: "빈야사 요가", 
        type: "Mindfulness", 
        icon: "wind", 
        mbti: ["I", "F", "N"], 
        indoor: true, 
        time: ["dawn", "night"], 
        desc: "호흡과 유연성에 집중하며 마음의 평화를 찾는 요가입니다.",
        movements: [
            { name: "수리야 나마스카라 (태양경배)", sets: "5회", reps: "반복", rest: "30s", desc: "전신을 깨우는 연속 동작입니다.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
            { name: "다운독 (견상 자세)", sets: "3세트", reps: "1분 유지", rest: "20s", desc: "척추와 햄스트링을 이완시키는 핵심 자세입니다.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400" },
            { name: "워리어 II (전사 자세)", sets: "3세트", reps: "각 45초", rest: "30s", desc: "하체 근력과 집중력을 기르는 자세입니다.", image: "https://images.unsplash.com/photo-1510894347713-fc3ad6cb0d4d?auto=format&fit=crop&q=80&w=400" }
        ]
    },
    { 
        name: "복싱 / 킥복싱", 
        type: "High Intensity", 
        icon: "zap", 
        mbti: ["E", "T", "S"], 
        indoor: true, 
        time: ["morning", "afternoon"], 
        desc: "스트레스 해소와 폭발적인 에너지를 발산하는 격투기 운동입니다.",
        movements: [
            { name: "섀도우 복싱", sets: "3라운드", reps: "3분", rest: "1분", desc: "가상의 상대와 겨루며 폼과 속도를 체크합니다.", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=400" },
            { name: "헤비백 펀칭", sets: "5세트", reps: "100회", rest: "45s", desc: "샌드백을 이용해 타격력과 지구력을 기릅니다.", image: "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80&w=400" },
            { name: "더블 앤 싱글 잽", sets: "4세트", reps: "20회", rest: "30s", desc: "기초적인 잽 동작을 반복하여 정확도를 높입니다.", image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80&w=400" }
        ]
    },
    { 
        name: "필라테스", 
        type: "Core Control", 
        icon: "activity", 
        mbti: ["S", "J", "F"], 
        indoor: true, 
        time: ["morning", "afternoon", "dawn"], 
        desc: "속근육을 강화하고 체형 교정에 탁월한 정밀 운동입니다.",
        movements: [
            { name: "헌드레드 (The Hundred)", sets: "1세트", reps: "100회 호흡", rest: "없음", desc: "복부의 열을 발생시키고 코어를 강화합니다.", image: "https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?auto=format&fit=crop&q=80&w=400" },
            { name: "롤업 (Roll Up)", sets: "3세트", reps: "10회", rest: "30s", desc: "척추의 분절 능력과 복부 근력을 키웁니다.", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400" },
            { name: "싱글 레그 스트레치", sets: "3세트", reps: "15회", rest: "20s", desc: "코어 안정성을 유지하며 다리 근육을 사용합니다.", image: "https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?auto=format&fit=crop&q=80&w=400" }
        ]
    },
    { 
        name: "조깅 / 러닝", 
        type: "Cardio", 
        icon: "footprints", 
        mbti: ["I", "S", "T", "J"], 
        indoor: false, 
        time: ["dawn", "morning", "night"], 
        desc: "언제 어디서나 가능한 가장 기본적인 체지방 연소 운동입니다.",
        movements: [
            { name: "워밍업 조깅", sets: "1회", reps: "10분", rest: "없음", desc: "낮은 강도로 몸의 온도를 높입니다.", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400" },
            { name: "인터벌 스프린트", sets: "5세트", reps: "30초 질주", rest: "1분", desc: "폭발적인 에너지를 사용해 심폐 기능을 높입니다.", image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80&w=400" },
            { name: "쿨다운 워킹", sets: "1회", reps: "5분", rest: "없음", desc: "심박수를 천천히 내리며 정리 운동을 합니다.", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=400" }
        ]
    }
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

function generateDietRecs() {
    const dietContainer = document.getElementById('diet-container');
    if (!dietContainer) return;
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
            <p class="rec-content">하루 권장 섭취 칼로리: <strong>${Math.round(userData.bmr * 1.2)} kcal</strong></p>
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
    
    // 1. Pick One Main Activity
    let potentialActivities = activityLibrary.filter(act => {
        const mbtiMatch = act.mbti.some(trait => mbti.includes(trait));
        const timeMatch = act.time.includes(timeOfDay);
        if ((weather === 'rainy' || weather === 'hot' || weather === 'cold') && !act.indoor) return false;
        return mbtiMatch && timeMatch;
    });

    if (potentialActivities.length === 0) potentialActivities = [activityLibrary[Math.floor(Math.random() * activityLibrary.length)]];
    
    const selectedMainAct = potentialActivities[Math.floor(Math.random() * potentialActivities.length)];
    let recommendedList = [];

    // 2. Add movements from that main activity
    recommendedList.push(...selectedMainAct.movements.map(move => ({
        name: `${selectedMainAct.name}: ${move.name}`,
        sets: move.sets,
        reps: move.reps,
        rest: move.rest,
        desc: move.desc,
        image: move.image
    })));

    // 3. Add supplemental gym exercises based on health/time
    if (exerciseDatabase.length > 0) {
        let targetMuscles = (health === 'recovery' || timeOfDay === 'night') ? ["stretching"] : ["core", "abs", "legs"];
        let filteredGym = exerciseDatabase.filter(ex => (ex.primaryMuscles || []).some(m => targetMuscles.includes(m.toLowerCase())));
        const selectedGym = filteredGym.sort(() => 0.5 - Math.random()).slice(0, 2);
        
        recommendedList.push(...selectedGym.map(ex => ({
            name: `보조 운동: ${ex.name}`,
            sets: level === 'beginner' ? "2세트" : "3세트",
            reps: "12회",
            rest: "60s",
            desc: ex.instructions?.[0] || "천천히 정확하게 수행하세요.",
            image: `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${ex.images?.[0] || ex.id + '/0.jpg'}`
        })));
    }
    
    return recommendedList;
}

function saveToHistory(workout) {
    let history = JSON.parse(localStorage.getItem('workoutHistory') || "[]");
    const session = { date: new Date().toLocaleString(), exercises: workout.map(e => e.name) };
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
    renderHistory();
    updateMbtiQuiz();
    updateSasangQuiz();
});
if (window.lucide) lucide.createIcons();

// Legal Modal Logic
function showLegal(type) {
    const modal = document.getElementById('legal-modal');
    const container = document.getElementById('legal-text-container');
    if (!modal || !container) return;

    let content = '';
    if (type === 'privacy') {
        content = `
            <h2>개인정보처리방침</h2>
            <p>본 사이트(AI Workout Coach)는 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.</p>
            <p><strong>1. 수집하는 항목:</strong> 신체 지표(키, 몸무게, 나이), MBTI 설문 결과, 사상체질 설문 결과.</p>
            <p><strong>2. 수집 목적:</strong> 맞춤형 운동 및 식단 추천 서비스 제공.</p>
            <p><strong>3. 보유 기간:</strong> 서비스 이용 종료 시 혹은 이용자 요청 시 즉시 파기합니다. (현재 로컬 스토리지를 사용하여 서버에 저장되지 않습니다.)</p>
            <p><strong>4. 제3자 제공:</strong> 어떠한 경우에도 이용자의 동의 없이 제3자에게 정보를 제공하지 않습니다.</p>
        `;
    } else if (type === 'terms') {
        content = `
            <h2>이용약관</h2>
            <p>본 서비스의 이용과 관련하여 다음과 같은 내용을 안내드립니다.</p>
            <p><strong>1. 서비스 목적:</strong> 본 서비스는 정보 제공을 목적으로 하며, 전문적인 의료 진단을 대체할 수 없습니다.</p>
            <p><strong>2. 책임 제한:</strong> 서비스에서 제공하는 추천 사항은 참고용이며, 실제 운동 실행 시 본인의 건강 상태를 우선적으로 고려해야 합니다.</p>
            <p><strong>3. 저작권:</strong> 본 사이트의 디자인 및 알고리즘에 대한 권리는 AI Workout Coach에 있습니다.</p>
            <p><strong>4. 쿠키 및 광고:</strong> 본 사이트는 서비스 개선 및 광고 게재(Google AdSense)를 위해 쿠키를 사용할 수 있습니다.</p>
        `;
    }

    container.innerHTML = content;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLegal() {
    const modal = document.getElementById('legal-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('legal-modal');
    if (event.target == modal) {
        closeLegal();
    }
}
