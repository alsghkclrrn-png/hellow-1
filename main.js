class WorkoutCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name') || '운동';
        const sets = this.getAttribute('sets') || '0';
        const reps = this.getAttribute('reps') || '0';
        const rest = this.getAttribute('rest') || '0s';
        const desc = this.getAttribute('desc') || '트레이너의 안내에 따라 동작을 수행하세요.';
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
            <div class="badge">전문 트레이닝 플랜</div>
            <div class="calorie-badge">🔥 ${calories} kcal</div>
            <div class="image-container">
                <img src="${image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="content">
                <div class="target-badge"><i data-lucide="target"></i> ${target}</div>
                <h3>${name}</h3>
                <div class="description">
                    <strong>💡 운동 가이드:</strong><br>
                    ${desc}
                </div>
                <div class="stats">
                    <div class="stat-item">
                        <span class="label">목표 세트</span>
                        <span class="value">${sets}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">목표 횟수</span>
                        <span class="value">${reps}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">소모 칼로리</span>
                        <span class="value">${calories} kcal</span>
                    </div>
                </div>
                <div class="rest-tag">
                    <span class="rest-label">권장 휴식 시간</span>
                    <span class="rest-value">${rest}</span>
                </div>

                <div class="performance-tracking">
                    <div class="performance-header">
                        <div class="performance-title">오늘의 운동 기록</div>
                        <label class="completion-checkbox">
                            <input type="checkbox" class="is-completed" checked> 완료
                        </label>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label>수행 세트</label>
                            <input type="number" class="actual-sets" placeholder="0" value="${parseInt(sets) || 3}">
                        </div>
                        <div class="input-field">
                            <label>수행 횟수</label>
                            <input type="number" class="actual-reps" placeholder="0" value="${parseInt(reps) || 12}">
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-field">
                            <label>휴식 (초)</label>
                            <input type="number" class="actual-rest" placeholder="초" value="${parseInt(rest) || 60}">
                        </div>
                        <div class="input-field">
                            <label>시간 (분)</label>
                            <input type="number" class="total-time" placeholder="분" value="10">
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
    if (currentMbtiIndex < mbtiQuestions.length) {
        const q = mbtiQuestions[currentMbtiIndex];
        if (mbtiQuestionText) mbtiQuestionText.textContent = q.text;
        if (mbtiProgressText) mbtiProgressText.textContent = `24단계 중 ${currentMbtiIndex + 1}단계`;
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
    const quizContainer = document.getElementById('sasang-quiz');
    if (!quizContainer) return;

    if (currentSasangIndex < sasangQuestions.length) {
        const q = sasangQuestions[currentSasangIndex];
        if (sasangQuestionText) sasangQuestionText.textContent = q.text;
        if (sasangProgressText) sasangProgressText.textContent = `${sasangQuestions.length}단계 중 ${currentSasangIndex + 1}단계`;
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
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7);
        this.scene.add(directionalLight);
        
        // Character Parts
        this.character = new THREE.Group();
        this.createCharacter();
        this.scene.add(this.character);
        
        // Floor
        const grid = new THREE.GridHelper(10, 10, 0x38bdf8, 0x27272a);
        this.scene.add(grid);
        
        this.camera.position.set(0, 1.5, 4);
        this.camera.lookAt(0, 1, 0);
        
        this.currentExercise = null;
        this.clock = new THREE.Clock();
        this.animate();
        
        window.addEventListener('resize', () => this.onWindowResize());
    }

    createCharacter() {
        const material = new THREE.MeshPhongMaterial({ color: 0x38bdf8 });
        
        // Torso
        const torsoGeo = new THREE.BoxGeometry(0.6, 0.8, 0.3);
        this.torso = new THREE.Mesh(torsoGeo, material);
        this.torso.position.y = 1.2;
        this.character.add(this.torso);
        
        // Head
        const headGeo = new THREE.SphereGeometry(0.2, 32, 32);
        this.head = new THREE.Mesh(headGeo, material);
        this.head.position.y = 0.6;
        this.torso.add(this.head);
        
        // Arms
        const armGeo = new THREE.BoxGeometry(0.15, 0.6, 0.15);
        this.leftArm = new THREE.Mesh(armGeo, material);
        this.leftArm.position.set(-0.4, 0.1, 0);
        this.torso.add(this.leftArm);
        
        this.rightArm = new THREE.Mesh(armGeo, material);
        this.rightArm.position.set(0.4, 0.1, 0);
        this.torso.add(this.rightArm);
        
        // Legs
        const legGeo = new THREE.BoxGeometry(0.2, 0.8, 0.2);
        this.leftLeg = new THREE.Mesh(legGeo, material);
        this.leftLeg.position.set(-0.2, -0.8, 0);
        this.character.add(this.leftLeg);
        
        this.rightLeg = new THREE.Mesh(legGeo, material);
        this.rightLeg.position.set(0.2, -0.8, 0);
        this.character.add(this.rightLeg);
    }

    setExercise(type) {
        this.currentExercise = type;
        this.resetPose();
    }

    resetPose() {
        this.character.position.set(0, 0, 0);
        this.character.rotation.set(0, 0, 0);
        this.torso.position.y = 1.2;
        this.torso.rotation.x = 0;
        this.leftArm.rotation.x = 0;
        this.rightArm.rotation.x = 0;
        this.leftLeg.rotation.x = 0;
        this.rightLeg.rotation.x = 0;
        this.character.scale.set(1, 1, 1);
    }

    onWindowResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const time = this.clock.getElapsedTime();
        const speed = 2.5;
        
        if (this.currentExercise) {
            switch(this.currentExercise) {
                case 'squat':
                case 'pistol_squat':
                    const squatDepth = Math.sin(time * speed) * 0.4 - 0.4;
                    this.torso.position.y = 1.2 + squatDepth;
                    this.leftLeg.scale.y = 1 + squatDepth * 0.8;
                    this.rightLeg.scale.y = 1 + squatDepth * 0.8;
                    this.leftArm.rotation.x = -Math.PI / 3;
                    this.rightArm.rotation.x = -Math.PI / 3;
                    break;
                case 'pushup':
                case 'diamond_pushup':
                case 'decline_pushup':
                    this.character.rotation.x = Math.PI / 2.5;
                    this.character.position.y = 0.5;
                    const pushDepth = Math.sin(time * speed) * 0.2 + 0.2;
                    this.character.position.z = pushDepth;
                    this.leftArm.rotation.x = pushDepth * 2;
                    this.rightArm.rotation.x = pushDepth * 2;
                    break;
                case 'plank':
                    this.character.rotation.x = Math.PI / 2.5;
                    this.character.position.y = 0.4;
                    this.character.position.z = Math.sin(time * 10) * 0.01; // Shake effect
                    break;
                case 'burpee':
                    const cycle = (time * 1.5) % 4;
                    if (cycle < 1) { // Standing
                        this.resetPose();
                    } else if (cycle < 2) { // Going down to plank
                        this.character.rotation.x = Math.PI / 2.5;
                        this.character.position.y = 0.4;
                    } else if (cycle < 3) { // Pushup in burpee
                        this.character.rotation.x = Math.PI / 2.5;
                        this.character.position.z = Math.sin(time * 10) * 0.1;
                    } else { // Jump
                        this.resetPose();
                        this.character.position.y = Math.sin(time * 10) * 0.5;
                    }
                    break;
                case 'mountain_climber':
                    this.character.rotation.x = Math.PI / 2.5;
                    this.character.position.y = 0.5;
                    this.leftLeg.position.z = Math.sin(time * 10) * 0.4;
                    this.rightLeg.position.z = -Math.sin(time * 10) * 0.4;
                    break;
                case 'superman':
                    this.character.rotation.x = Math.PI / 2;
                    this.character.position.y = 0.2;
                    const lift = Math.sin(time * speed) * 0.2;
                    this.leftArm.rotation.x = -lift;
                    this.rightArm.rotation.x = -lift;
                    this.leftLeg.rotation.x = lift;
                    this.rightLeg.rotation.x = lift;
                    break;
                case 'flutter_kick':
                    this.character.rotation.x = -Math.PI / 4;
                    this.character.position.y = 0.8;
                    this.leftLeg.rotation.x = Math.sin(time * 10) * 0.5;
                    this.rightLeg.rotation.x = -Math.sin(time * 10) * 0.5;
                    break;
                case 'pullup':
                case 'chinup':
                    const pull = Math.sin(time * speed) * 0.3 + 0.3;
                    this.character.position.y = pull;
                    this.leftArm.rotation.x = Math.PI;
                    this.rightArm.rotation.x = Math.PI;
                    break;
            }
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

let virtualCoachInstance = null;

// Exercise Translation & Professional Guide Mapping
const translationMap = {
    "Bench Press": { 
        name: "벤치 프레스 (Bench Press)", 
        desc: "가슴(대흉근)의 전체적인 부피와 근력을 키우는 최고의 상체 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 벤치에 누워 발을 바닥에 고정하고 허리는 아치형을 만듭니다.<br>2. 바벨을 어깨너비보다 약간 넓게 잡고 쇄골 아래쪽으로 천천히 내립니다.<br>3. 가슴 근육의 수축을 느끼며 바벨을 수직으로 밀어 올립니다.<br><br><b>[초보자 팁]</b><br>바벨이 흔들리지 않도록 견갑골을 벤치에 단단히 밀착시키세요.",
        video: "https://www.youtube.com/embed/rT7DgVCn7iU",
        img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
    },
    "Incline Dumbbell Press": { 
        name: "인클라인 덤벨 프레스", 
        desc: "윗가슴을 타겟으로 하여 입체감 있는 가슴 라인을 만듭니다.",
        guide: "<b>[운동 방법]</b><br>1. 벤치 각도를 30~45도로 설정하고 덤벨을 들고 앉습니다.<br>2. 덤벨을 쇄골 방향으로 내리며 윗가슴 근육을 이완합니다.<br>3. 덤벨이 서로 모아지는 느낌으로 밀어 올립니다.<br><br><b>[초보자 팁]</b><br>너무 무거운 무게보다는 정확한 윗가슴 자극에 집중하세요.",
        video: "https://www.youtube.com/embed/8iPEnn-ltC8",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600"
    },
    "Dumbbell Fly": { 
        name: "덤벨 플라이 (Dumbbell Fly)", 
        desc: "가슴 안쪽 근육의 결을 살려주는 대표적인 고립 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 벤치에 누워 덤벨을 가슴 위로 마주 보게 듭니다.<br>2. 팔꿈치를 살짝 굽힌 채 큰 나무를 안듯 옆으로 벌립니다.<br>3. 가슴 근육을 모아주며 다시 시작 자세로 돌아옵니다.<br><br><b>[초보자 팁]</b><br>팔꿈치가 어깨 아래로 너무 깊게 내려가지 않도록 주의하세요.",
        video: "https://www.youtube.com/embed/eGjt4lk6gjw",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    },
    "Push-ups": { 
        name: "푸쉬업 (Push-ups)", 
        desc: "언제 어디서나 가능한 가장 효과적인 가슴 및 전신 맨몸 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 양손을 어깨너비보다 넓게 짚고 몸을 일직선으로 만듭니다.<br>2. 가슴이 바닥에 닿기 직전까지 천천히 내려갑니다.<br>3. 가슴과 팔의 힘으로 지면을 강하게 밀어 올라옵니다.<br><br><b>[초보자 팁]</b><br>정석 자세가 어렵다면 무릎을 바닥에 대고 먼저 연습하세요.",
        video: "https://www.youtube.com/embed/rEB6BeZz648", 
        threeType: "pushup",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
    },
    "Barbell Row": { 
        name: "바벨 로우 (Barbell Row)", 
        desc: "등 근육의 두께감을 키워주는 강력한 상체 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 무릎을 살짝 굽히고 상체를 45도 정도 숙입니다.<br>2. 바벨을 배꼽 방향으로 당기며 날개뼈(견갑골)를 모아줍니다.<br>3. 등 근육의 긴장을 유지하며 천천히 바벨을 내립니다.<br><br><b>[초보자 팁]</b><br>허리가 굽지 않도록 복부에 힘을 주어 척추 중립을 유지하세요.",
        video: "https://www.youtube.com/embed/9efgcAjQW7E",
        img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=600"
    },
    "Pull-ups": { 
        name: "풀업 (Pull-ups / 턱걸이)", 
        desc: "넓은 어깨와 탄탄한 등 라인을 만드는 최고의 등 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 철봉을 어깨너비보다 넓게 잡고 가슴을 살짝 들어줍니다.<br>2. 팔의 힘이 아닌 등의 힘으로 가슴이 봉에 닿는 느낌으로 당깁니다.<br>3. 최대한 버티면서 천천히 내려와 근육을 이완합니다.<br><br><b>[초보자 팁]</b><br>등 근육 사용이 어렵다면 풀업 밴드의 도움을 받으세요.",
        video: "https://www.youtube.com/embed/eGo4IYlbE5g", 
        threeType: "pullup",
        img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600"
    },
    "Lat Pulldown": { 
        name: "렛 풀다운 (Lat Pulldown)", 
        desc: "광배근을 타겟으로 하여 등 전체의 너비를 확장하는 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 허벅지를 머신 패드에 고정하고 바를 넓게 잡습니다.<br>2. 바를 쇄골 쪽으로 끌어내리며 등을 수축합니다.<br>3. 팔이 다 펴지기 직전까지 천천히 올리며 이완합니다.<br><br><b>[초보자 팁]</b><br>상체를 너무 뒤로 눕히지 말고 수직 움직임에 집중하세요.",
        video: "https://www.youtube.com/embed/CAwf7n6Luuc",
        img: "https://images.unsplash.com/photo-1591940742888-243ad0512807?auto=format&fit=crop&q=80&w=600"
    },
    "Overhead Press": { 
        name: "오버헤드 프레스 (OHP)", 
        desc: "어깨 전체의 근력과 볼륨을 키우는 상체 밀기 운동의 핵심입니다.",
        guide: "<b>[운동 방법]</b><br>1. 바벨을 가슴 상단 높이에 위치시키고 단단히 잡습니다.<br>2. 머리 위 수직 방향으로 바벨을 밀어 올립니다.<br>3. 저항을 느끼며 천천히 내려 시작 자세로 돌아옵니다.<br><br><b>[초보자 팁]</b><br>동작 중 허리가 과하게 꺾이지 않도록 둔근과 복근에 힘을 주세요.",
        video: "https://www.youtube.com/embed/2yjwHeEdf9w",
        img: "https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&q=80&w=600"
    },
    "Lateral Raise": { 
        name: "사이드 레터럴 레이즈", 
        desc: "어깨 측면(측면 삼각근)을 발달시켜 어깨 프레임을 넓힙니다.",
        guide: "<b>[운동 방법]</b><br>1. 덤벨을 들고 차렷 자세에서 팔꿈치를 살짝 굽힙니다.<br>2. 덤벨을 어깨 높이까지만 옆으로 멀리 던지듯 들어 올립니다.<br>3. 천천히 내리며 어깨의 긴장을 끝까지 유지합니다.<br><br><b>[초보자 팁]</b><br>승모근이 과하게 개입되지 않도록 어깨를 누른 상태에서 수행하세요.",
        video: "https://www.youtube.com/embed/3VcKaXpzqRo",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600"
    },
    "Squat": { 
        name: "스쿼트 (Squat)", 
        desc: "전신 근력 향상과 하체 발달에 필수적인 '운동의 왕'입니다.",
        guide: "<b>[운동 방법]</b><br>1. 발을 어깨너비로 벌리고 발끝을 살짝 바깥으로 둡니다.<br>2. 엉덩이를 뒤로 빼며 무릎이 발끝을 향하게 천천히 내려갑니다.<br>3. 발바닥 전체로 지면을 밀며 일어납니다.<br><br><b>[초보자 팁]</b><br>무릎이 안으로 모이지 않게 주의하고 허리를 곧게 펴세요.",
        video: "https://www.youtube.com/embed/MVMnk0HiTMg", 
        threeType: "squat",
        img: "https://images.unsplash.com/photo-1566241142559-40e1bfc26ddc?auto=format&fit=crop&q=80&w=600"
    },
    "Lunge": { 
        name: "런지 (Lunge)", 
        desc: "하체의 균형과 탄력 있는 엉덩이 라인을 만드는 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 한쪽 발을 앞으로 크게 내디디고 상체를 세웁니다.<br>2. 뒷무릎이 바닥에 닿기 직전까지 수직으로 내려갑니다.<br>3. 앞발 뒤꿈치에 힘을 주어 제자리로 돌아옵니다.<br><br><b>[초보자 팁]</b><br>상체가 앞으로 쏠리지 않도록 복부에 긴장을 유지하세요.",
        video: "https://www.youtube.com/embed/QOVaHwm-Q6U",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    },
    "Bicep Curl": { 
        name: "바벨 컬 (Bicep Curl)", 
        desc: "팔 앞쪽(이두근)의 볼륨감을 키우는 가장 기본적인 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 어깨너비로 바벨을 잡고 팔꿈치를 옆구리에 고정합니다.<br>2. 이두근의 힘으로 바벨을 가슴 높이까지 들어 올립니다.<br>3. 천천히 저항을 느끼며 바벨을 내립니다.<br><br><b>[초보자 팁]</b><br>몸통을 흔들지 말고 팔의 고립에만 집중하세요.",
        video: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef03a726ec?auto=format&fit=crop&q=80&w=600"
    },
    "Tricep Extension": { 
        name: "트라이셉스 익스텐션", 
        desc: "팔 뒤쪽(삼두근)을 단련하여 탄력 있는 팔을 만듭니다.",
        guide: "<b>[운동 방법]</b><br>1. 덤벨을 양손으로 잡고 머리 위로 올립니다.<br>2. 팔꿈치를 고정한 채 덤벨을 머리 뒤로 천천히 내립니다.<br>3. 삼두근의 힘으로 팔을 끝까지 펴줍니다.<br><br><b>[초보자 팁]</b><br>팔꿈치가 옆으로 벌어지지 않도록 모아주세요.",
        video: "https://www.youtube.com/embed/nRiJVZDpdL0",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    },
    "Plank": { 
        name: "플랭크 (Plank)", 
        desc: "코어 안정성과 신체 정렬을 바로잡는 최고의 정적 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 전완을 바닥에 대고 엎드려 어깨와 팔꿈치를 수직으로 둡니다.<br>2. 머리부터 발뒤꿈치까지 일직선이 되도록 코어에 힘을 줍니다.<br>3. 호흡을 일정하게 유지하며 정해진 시간을 버팁니다.<br><br><b>[초보자 팁]</b><br>엉덩이가 아래로 처지면 허리에 무리가 가니 주의하세요.",
        video: "https://www.youtube.com/embed/ASdvN_XEl_c", 
        threeType: "plank",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
    },
    "Leg Raise": { 
        name: "레그 레이즈 (Leg Raise)", 
        desc: "하복부 근육을 집중적으로 단련하여 선명한 복근을 만듭니다.",
        guide: "<b>[운동 방법]</b><br>1. 바닥에 누워 손을 엉덩이 옆에 둡니다.<br>2. 다리를 곧게 펴고 복부의 힘으로 들어 올립니다.<br>3. 허리가 바닥에서 뜨지 않는 지점까지 천천히 다리를 내립니다.<br><br><b>[초보자 팁]</b><br>다리를 내릴 때 배의 긴장이 풀리지 않도록 주의하세요.",
        video: "https://www.youtube.com/embed/l4kQd9eWclE",
        img: "https://images.unsplash.com/photo-1599058917233-35833f3b5e5e?auto=format&fit=crop&q=80&w=600"
    },
    "Home Cardio": { 
        name: "3분 전신 다이어트 홈트", 
        desc: "집에서 좁은 공간에서도 할 수 있는 고효율 전신 유산소 운동입니다.",
        guide: "<b>[운동 방법]</b><br>1. 제자리에서 가볍게 뛰며 몸을 풉니다.<br>2. 팔벌려뛰기, 마운틴 클라이머 등 고강도 동작을 섞어 수행합니다.<br>3. 3분간 쉬지 않고 움직여 심박수를 높입니다.<br><br><b>[초보자 팁]</b><br>층간소음이 걱정된다면 뒤꿈치를 들고 가볍게 움직이세요.",
        video: "https://www.youtube.com/embed/DBA1eN2NtJI",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600"
    }
};

const getTranslatedData = (ex) => {
    const key = Object.keys(translationMap).find(k => ex.name.toLowerCase().includes(k.toLowerCase()));
    if (key) {
        return {
            name: translationMap[key].name,
            desc: translationMap[key].desc,
            guide: translationMap[key].guide,
            video: translationMap[key].video,
            threeType: translationMap[key].threeType,
            img: translationMap[key].img
        };
    }
    return {
        name: ex.name,
        desc: "전문적인 운동 가이드를 준비 중입니다.",
        guide: Array.isArray(ex.instructions) ? ex.instructions.map((s,i) => `${i+1}. ${s}`).join('<br>') : (ex.instructions || '전문 가이드를 확인하세요.'),
        video: ex.video || "https://www.youtube.com/embed/dQw4w9WgXcQ",
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
    };
};

function populateExerciseCatalog(filterPart = 'all') {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;
    
    if (exerciseDatabase.length === 0) {
        catalogGrid.innerHTML = '<p class="empty-msg">운동 데이터를 불러오는 중입니다...</p>';
        return;
    }

    const muscleMap = {
        chest: ['chest'],
        back: ['back', 'lats', 'middle back', 'lower back'],
        shoulders: ['shoulders'],
        arms: ['biceps', 'triceps', 'forearms'],
        legs: ['quads', 'hamstrings', 'glutes', 'calves'],
        core: ['abs']
    };

    let rawData = [];
    if (filterPart === 'all') {
        Object.keys(muscleMap).forEach(part => {
            const filtered = exerciseDatabase.filter(ex => 
                ex.primaryMuscles.some(m => muscleMap[part].includes(m))
            );
            rawData.push(...filtered.slice(0, 2));
        });
    } else {
        const muscles = muscleMap[filterPart] || [];
        rawData = exerciseDatabase.filter(ex => 
            ex.primaryMuscles.some(m => muscles.includes(m))
        );
    }

    // Process translations and videos for ALL raw data
    let displayData = rawData.map(ex => {
        const info = getTranslatedData(ex);
        return { ...ex, ...info };
    });

    // Inject the new featured exercise
    const featuredEx = {
        name: translationMap["Home Cardio"].name,
        desc: translationMap["Home Cardio"].desc,
        guide: translationMap["Home Cardio"].guide,
        video: translationMap["Home Cardio"].video,
        customImg: translationMap["Home Cardio"].img,
        isFeatured: true
    };

    if (filterPart === 'all') {
        displayData = [featuredEx, ...displayData];
    } else if (filterPart === 'core' || filterPart === 'legs') { // Add to relevant categories too
        displayData = [featuredEx, ...displayData];
    }

    // Add user-uploaded exercises
    if (filterPart === 'all' && window.uploadedExercises) {
        Object.values(window.uploadedExercises).forEach(arr => {
            displayData = [...arr, ...displayData];
        });
    } else if (window.uploadedExercises && window.uploadedExercises[filterPart]) {
        displayData = [...window.uploadedExercises[filterPart], ...displayData];
    }

    catalogGrid.innerHTML = displayData.map(ex => {
        const imgPath = ex.customImg || ex.img || ((ex.images && ex.images.length > 0) 
            ? `${IMG_BASE_URL}${ex.images[0]}` 
            : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600');
        
        const finalName = ex.name;
        const finalDesc = ex.desc;
        const finalGuide = ex.guide || (Array.isArray(ex.instructions) ? ex.instructions.join(' ') : (ex.instructions || '가이드를 확인하세요.'));
        const finalVideo = ex.video || "https://www.youtube.com/embed/dQw4w9WgXcQ";

        return `
            <div class="catalog-item">
                <div class="video-wrapper" style="background-image: url('${imgPath}'); background-size: cover; background-position: center; height: 200px; position: relative;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 10px;">
                        <span style="color: white; font-size: 0.8em; font-weight: bold;">${ex.isUploaded ? '사용자 업로드 가이드' : '전문가 추천 운동'}</span>
                    </div>
                    ${ex.isFeatured ? '<div style="position: absolute; top: 10px; left: 10px; background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7em; font-weight: bold;">FEATURED</div>' : ''}
                </div>
                <div class="catalog-content-box">
                    <div class="catalog-header">
                        <div class="catalog-icon"><i data-lucide="layers"></i></div>
                        <h3>${finalName}</h3>
                    </div>
                    <p class="rec-content" style="margin-bottom: 15px; color: var(--primary-color); font-weight: 600;">${finalDesc}</p>
                    <div class="guide-text-box" style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; font-size: 0.85em; color: var(--secondary-color); line-height: 1.6; margin-bottom: 15px; max-height: 120px; overflow-y: auto;">
                        ${finalGuide}
                    </div>
                    <button class="secondary-btn" style="width: 100%; padding: 10px; display: flex; align-items: center; justify-content: center; gap: 8px;" 
                        onclick="openVideoPlayer('${finalVideo}', '${finalName.replace(/'/g, "\\'")}', '${finalGuide.replace(/'/g, "\\'").substring(0, 500)}', '${ex.threeType || ''}')">
                        <i data-lucide="play-circle"></i> 가이드 영상 및 3D 코치 보기
                    </button>
                </div>
            </div>
        `;
    }).join('');
    if (window.lucide) lucide.createIcons();
}

// Video Modal Logic
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-iframe');
const videoPlayer = document.getElementById('video-player');
const videoTitle = document.getElementById('video-title');
const videoDesc = document.getElementById('video-desc');
const closeVideoBtn = document.getElementById('close-video-modal');

// Upload Modal & Form Elements
const uploadModal = document.getElementById('upload-modal');
const openUploadBtn = document.getElementById('open-upload-btn');
const closeUploadBtn = document.getElementById('close-upload-modal');
const uploadForm = document.getElementById('upload-form');

function openVideoPlayer(url, title, desc, threeType) {
    if (!videoModal) return;
    
    const threeContainer = document.getElementById('three-canvas-container');

    // Reset all players
    if (videoIframe) { videoIframe.src = ""; videoIframe.classList.add('hidden'); }
    if (videoPlayer) { videoPlayer.pause(); videoPlayer.src = ""; videoPlayer.classList.add('hidden'); }
    if (threeContainer) { threeContainer.classList.add('hidden'); }

    if (threeType) {
        if (threeContainer) {
            threeContainer.classList.remove('hidden');
            if (!virtualCoachInstance) {
                virtualCoachInstance = new VirtualCoach('three-canvas-container');
            }
            virtualCoachInstance.setExercise(threeType);
        }
    } else if (url && (url.includes('youtube.com') || url.includes('youtu.be'))) {
        if (videoIframe) {
            let embedUrl = url;
            if (url.includes('shorts/')) {
                embedUrl = url.replace('shorts/', 'embed/');
            } else if (!url.includes('embed/')) {
                embedUrl = url.replace('watch?v=', 'embed/');
            }
            videoIframe.src = embedUrl + (embedUrl.includes('?') ? '&' : '?') + "autoplay=1";
            videoIframe.classList.remove('hidden');
        }
    } else if (url) {
        if (videoPlayer) {
            videoPlayer.src = url;
            videoPlayer.classList.remove('hidden');
            videoPlayer.play().catch(e => console.log("Auto-play blocked", e));
        }
    } else {
        if (videoDesc) videoDesc.innerHTML += "<br><small>(영상이 제공되지 않는 운동입니다.)</small>";
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

openUploadBtn?.addEventListener('click', () => {
    uploadModal?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeUploadBtn?.addEventListener('click', () => {
    uploadModal?.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// Persistent storage for uploaded exercises in current session
window.uploadedExercises = {};

// Drag and Drop Logic for File Upload
const dropZone = document.querySelector('.file-input-wrapper');
const fileInput = document.getElementById('upload-video-file');

if (dropZone && fileInput) {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--primary-color)';
        dropZone.style.background = 'rgba(56, 189, 248, 0.1)';
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.style.borderColor = 'var(--border-color)';
            dropZone.style.background = 'transparent';
        });
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateFileHint(e.dataTransfer.files);
        }
    });

    fileInput.addEventListener('change', () => {
        updateFileHint(fileInput.files);
    });
}

function updateFileHint(files) {
    const hint = document.querySelector('.file-hint');
    if (hint && files.length) {
        hint.textContent = files.length > 1 ? `${files.length}개의 파일이 선택되었습니다.` : files[0].name;
        hint.style.color = 'var(--primary-color)';
    }
}

// Improved Upload Form Submission
uploadForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('upload-name').value;
    const part = document.getElementById('upload-part').value;
    const youtubeUrl = document.getElementById('upload-video').value;
    const desc = document.getElementById('upload-desc').value;
    
    let finalVideoUrl = youtubeUrl;

    if (fileInput && fileInput.files.length > 0) {
        const firstFile = fileInput.files[0];
        // Local Blob URL for playback
        finalVideoUrl = URL.createObjectURL(firstFile);
    }

    if (!finalVideoUrl && !youtubeUrl) {
        alert("영상 파일이나 YouTube URL 중 하나는 필수입니다.");
        return;
    }

    if (!window.uploadedExercises[part]) window.uploadedExercises[part] = [];
    
    window.uploadedExercises[part].unshift({
        name: name,
        desc: desc, // Store directly as desc to bypass getTranslatedData logic in populate
        instructions: [desc],
        customImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
        video: finalVideoUrl,
        primaryMuscles: [part],
        isUploaded: true // Flag to identify user uploads
    });

    // Re-populate with 'all' or current part
    const activeTab = document.querySelector('#catalog-tabs .filter-btn.active');
    populateExerciseCatalog(activeTab ? activeTab.dataset.part : 'all');
    
    uploadModal?.classList.add('hidden');
    document.body.style.overflow = 'auto';
    uploadForm.reset();
    const hint = document.querySelector('.file-hint');
    if (hint) hint.textContent = "가이드 영상을 선택하거나 폴더를 드래그하세요.";
    
    alert(`'${name}' 운동이 성공적으로 추가되었습니다! 하단 카탈로그에서 확인하세요.`);
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
        filtered = exerciseDatabase.filter(ex => 
            (ex.equipment === 'body only' || !ex.equipment) && 
            ['strength', 'stretching', 'cardio', 'abs'].includes(ex.category)
        );
    } else {
        const homeEquip = ['dumbbell', 'bands', 'foam roller', 'medicine ball', 'exercise ball'];
        filtered = exerciseDatabase.filter(ex => 
            homeEquip.includes(ex.equipment)
        );
    }

    const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    // Inject the new featured exercise from YouTube link at the start
    const featuredEx = {
        name: translationMap["Home Cardio"].name,
        desc: translationMap["Home Cardio"].desc,
        video: translationMap["Home Cardio"].video,
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
        equipment: "Full Body"
    };
    
    const finalSelection = [featuredEx, ...selected];

    homeWorkoutGrid.innerHTML = finalSelection.map(ex => {
        const info = ex.video ? ex : getTranslatedData(ex); // If already has info (featured), use it
        const imgPath = ex.img || ((ex.images && ex.images.length > 0) 
            ? `${IMG_BASE_URL}${ex.images[0]}` 
            : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600');
            
        return `
            <div class="catalog-item">
                <div class="video-wrapper" style="background-image: url('${imgPath}'); background-size: cover; background-position: center; height: 180px;">
                    <div style="position: absolute; top: 10px; right: 10px; background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7em; font-weight: bold; text-transform: uppercase;">
                        ${ex.equipment || 'Bodyweight'}
                    </div>
                    ${ex.video === featuredEx.video ? '<div style="position: absolute; top: 10px; left: 10px; background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7em; font-weight: bold;">FEATURED</div>' : ''}
                </div>
                <div class="catalog-content-box">
                    <div class="catalog-header">
                        <div class="catalog-icon"><i data-lucide="activity"></i></div>
                        <h3>${info.name}</h3>
                    </div>
                    <p class="rec-content">${info.desc.substring(0, 100)}...</p>
                    <button class="secondary-btn" style="width: 100%; margin-top: 10px; padding: 8px;" 
                        onclick="openVideoPlayer('${info.video}', '${info.name.replace(/'/g, "\\'")}', '${info.desc.replace(/'/g, "\\'").substring(0, 300)}', '${info.threeType || ''}')">자세히 보기</button>
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
                sets: `${setsNum}세트`,
                reps: ex.category === 'cardio' ? "15~20분" : `${repsNum}회`,
                rest: "60초",
                desc: info.desc,
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

// Immediate Initialization
updateMbtiQuiz();
updateSasangQuiz();
populateExerciseCatalog();
populateHomeWorkout();

fetchExerciseData().then(() => {
    populateExerciseCatalog();
    populateHomeWorkout();
    // Re-check stretching if a workout was already generated
    if (!document.getElementById('workout-analysis-section')?.classList.contains('hidden')) {
        const activeTab = document.querySelector('#home-filter-tabs .filter-btn.active');
        populateHomeWorkout(activeTab ? activeTab.dataset.target : 'bodyweight');
    }
}).catch(err => {
    console.error("Data fetch failed, using fallbacks:", err);
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
