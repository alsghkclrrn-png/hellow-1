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
    gender: null,
    age: null,
    height: null,
    weight: null,
    bmi: null,
    bmr: null,
    mbti: null
};

// Form Field Elements (New)
const mbtiDisplay = document.getElementById('mbti-display');
const metricsDisplay = document.getElementById('metrics-display');

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    
    if (window.lucide) {
        lucide.createIcons();
    }
};

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// MBTI Quiz Logic
const mbtiQuestions = [
    // E (Extraversion) vs I (Introversion)
    { text: "I feel energized after a group workout session.", dimension: "EI", positive: true },
    { text: "I prefer a quiet solo workout over a busy gym environment.", dimension: "EI", positive: false },
    { text: "I enjoy interacting with others during rest periods.", dimension: "EI", positive: true },
    { text: "I find that I focus better when training alone in a private space.", dimension: "EI", positive: false },
    { text: "I like participating in fitness challenges with friends or online communities.", dimension: "EI", positive: true },
    { text: "I prefer to keep my fitness goals and progress private.", dimension: "EI", positive: false },
    
    // S (Sensing) vs N (Intuition)
    { text: "I focus more on the exact form and data (reps/weight) than the overall feeling.", dimension: "SN", positive: true },
    { text: "I enjoy trying new, creative, and unconventional exercises.", dimension: "SN", positive: false },
    { text: "I prefer exercises with clear, immediate, and tangible results.", dimension: "SN", positive: true },
    { text: "I find myself imagining different ways to modify a standard routine.", dimension: "SN", positive: false },
    { text: "I value standard, proven techniques that have been around for years.", dimension: "SN", positive: true },
    { text: "I get bored if my workout routine doesn't change frequently.", dimension: "SN", positive: false },

    // T (Thinking) vs F (Feeling)
    { text: "I choose exercises based on logical efficiency and performance metrics.", dimension: "TF", positive: true },
    { text: "The mind-body connection and how I feel during a workout are most important.", dimension: "TF", positive: false },
    { text: "I am motivated by objective competition and outperforming others.", dimension: "TF", positive: true },
    { text: "I am motivated by how a workout helps me manage my stress and emotions.", dimension: "TF", positive: false },
    { text: "I analyze the scientific reasoning behind every movement I do.", dimension: "TF", positive: true },
    { text: "I appreciate a trainer who is supportive and encouraging over one who is purely technical.", dimension: "TF", positive: false },

    // J (Judging) vs P (Perceiving)
    { text: "I strictly follow a pre-planned workout schedule every day.", dimension: "JP", positive: true },
    { text: "I like to decide what to work out based on my mood that day.", dimension: "JP", positive: false },
    { text: "I feel stressed if I have to skip a planned session.", dimension: "JP", positive: true },
    { text: "I enjoy the spontaneity of trying a different exercise on a whim.", dimension: "JP", positive: false },
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
        mbtiQuestionText.textContent = q.text;
        mbtiProgressText.textContent = `Question ${currentQuestionIndex + 1} of ${mbtiQuestions.length}`;
        const progress = ((currentQuestionIndex) / mbtiQuestions.length) * 100;
        mbtiProgressBar.style.setProperty('--progress', `${progress}%`);
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
    mbtiTypeValue.textContent = type;
    
    // Sync to workout form (New)
    if (mbtiDisplay) {
        mbtiDisplay.value = type;
        mbtiDisplay.classList.add('populated');
    }
    
    const insights = {
        E: "You thrive in high-energy, social environments where you can feed off the group's intensity.",
        I: "You value internal focus and prefer environments where you can concentrate without distraction.",
        S: "You are grounded in reality and prefer structured, proven methods with clear, tangible goals.",
        N: "You are vision-oriented and enjoy exploring new possibilities and unconventional approaches.",
        T: "You are driven by logic and efficiency, focusing on objective data and performance milestones.",
        F: "You are driven by values and internal harmony, focusing on how the workout makes you feel.",
        J: "You love structure and predictability, thriving when you have a clear, pre-defined plan.",
        P: "You value flexibility and spontaneity, preferring to adapt your routine to your current energy level."
    };

    const typeFullNames = {
        "ISTJ": "The Inspector - Reliable and systematic.",
        "ISFJ": "The Protector - Dedicated and warm.",
        "INFJ": "The Advocate - Insightful and principled.",
        "INTJ": "The Architect - Strategic and independent.",
        "ISTP": "The Virtuoso - Practical and adaptable.",
        "ISFP": "The Adventurer - Artistic and sensitive.",
        "INFP": "The Mediator - Idealistic and loyal.",
        "INTP": "The Logician - Theoretical and precise.",
        "ESTP": "The Entrepreneur - Energetic and perceptive.",
        "ESFP": "The Entertainer - Spontaneous and outgoing.",
        "ENFP": "The Campaigner - Enthusiastic and creative.",
        "ENTP": "The Debater - Smart and curious.",
        "ESTJ": "The Executive - Efficient and organized.",
        "ESFJ": "The Provider - Outgoing and loyal.",
        "ENFJ": "The Giver - Charismatic and inspiring.",
        "ENTJ": "The Commander - Bold and imaginative."
    };

    mbtiInsightText.textContent = `${insights[type[0]]} ${insights[type[1]]} ${insights[type[2]]} ${insights[type[3]]}`;
    mbtiTypeDesc.textContent = `${typeFullNames[type] || ""} As an ${type}, your professional psychological profile suggests a unique approach to fitness that aligns with your core cognitive preferences.`;

    mbtiQuizContainer.classList.add('hidden');
    mbtiResults.classList.remove('hidden');
}

document.querySelectorAll('.mbti-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score);
        const q = mbtiQuestions[currentQuestionIndex];
        
        const weight = score - 3; // -2 to +2
        const dim1 = q.dimension[0];
        const dim2 = q.dimension[1];
        
        if (q.positive) {
            if (weight > 0) mbtiScores[dim1] += weight;
            else mbtiScores[dim2] += Math.abs(weight);
        } else {
            if (weight > 0) mbtiScores[dim2] += weight;
            else mbtiScores[dim1] += Math.abs(weight);
        }

        currentQuestionIndex++;
        updateMbtiQuiz();
    });
});

retakeMbtiBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    mbtiQuizContainer.classList.remove('hidden');
    mbtiResults.classList.add('hidden');
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

metricsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    userData.gender = document.getElementById('gender').value;
    userData.age = parseInt(document.getElementById('age').value);
    userData.height = parseInt(document.getElementById('height').value);
    userData.weight = parseInt(document.getElementById('weight').value);
    
    const heightInMeters = userData.height / 100;
    userData.bmi = parseFloat((userData.weight / (heightInMeters * heightInMeters)).toFixed(1));
    
    let status = "";
    if (userData.bmi < 18.5) status = "Underweight";
    else if (userData.bmi < 25) status = "Healthy Weight";
    else if (userData.bmi < 30) status = "Overweight";
    else status = "Obesity";
    
    if (userData.gender === 'male') {
        userData.bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5;
    } else {
        userData.bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161;
    }
    
    bmiValueSpan.textContent = userData.bmi;
    bmiStatusSpan.textContent = status;
    bmrValueSpan.textContent = Math.round(userData.bmr).toLocaleString();
    
    // Sync to workout form (New)
    if (metricsDisplay) {
        metricsDisplay.value = `BMI: ${userData.bmi} (${status}), BMR: ${Math.round(userData.bmr)} kcal`;
        metricsDisplay.classList.add('populated');
    }
    
    metricsResults.classList.remove('hidden');
    metricsResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    const calcBtn = document.getElementById('calculate-btn');
    const originalText = calcBtn.textContent;
    calcBtn.textContent = "Metrics Applied ✅";
    setTimeout(() => calcBtn.textContent = originalText, 2000);
});

// Exercise Database & Logic
let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (!response.ok) throw new Error('Failed to fetch exercises');
        exerciseDatabase = await response.json();
    } catch (error) {
        console.error('Error fetching exercise data:', error);
    }
}

const goalToMuscles = {
    "weight-loss": ["cardio", "full body", "legs", "abdominals"],
    "muscle-gain": ["chest", "back", "shoulders", "biceps", "triceps", "quadriceps", "hamstrings"],
    "general-fitness": ["core", "lower back", "glutes", "calves", "shoulders"]
};

function getExercisesByContext(options) {
    if (!exerciseDatabase || exerciseDatabase.length === 0) return null;

    const { goal, level, health, weather } = options;
    
    // Use values from the form inputs (requested by user) or fallback to global state
    const mbti = document.getElementById('mbti-display').value || "ISTJ";
    const metricsVal = document.getElementById('metrics-display').value;

    // 1. Muscle Selection
    let targetMuscles = [...(goalToMuscles[goal] || ["full body"])];

    // 2. Personality & Context Bias
    if (mbti.includes('N')) {
        targetMuscles.push('forearms', 'traps', 'neck');
    }
    
    if (mbti.includes('E') && goal === 'general-fitness') {
        targetMuscles.push('cardio');
    }

    if (health === 'recovery' || health === 'tired') {
        targetMuscles = ["stretching", "calves", "forearms"];
    }

    // 3. Filter Library
    let filtered = exerciseDatabase.filter(ex => {
        const primaryMuscles = (ex.primaryMuscles || []).map(m => m.toLowerCase());
        const bodyPart = ex.bodyPart ? ex.bodyPart.toLowerCase() : "";
        return targetMuscles.some(m => primaryMuscles.includes(m) || bodyPart.includes(m));
    });

    // 4. MBTI specific filtering
    if (mbti.includes('S')) {
        filtered = filtered.filter(ex => !ex.name.toLowerCase().includes('dynamic') && !ex.name.toLowerCase().includes('creative'));
    }

    // 5. Volume & Intensity Calculation
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const count = (health === 'recovery' || health === 'tired') ? 3 : (mbti.includes('J') ? 6 : 5);
    const selected = shuffled.slice(0, count);

    return selected.map(ex => {
        const imagePath = ex.images && ex.images.length > 0 ? ex.images[0] : `${ex.id}/0.jpg`;
        const imageUrl = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${imagePath}`;

        let sets = level === 'beginner' ? 2 : (level === 'intermediate' ? 3 : 4);
        let reps = level === 'beginner' ? 10 : (level === 'intermediate' ? 12 : 15);
        let rest = mbti.includes('T') ? "45s" : "60s";

        // Joint protection and volume based on metrics summary
        if (userData.age && userData.age > 50) {
            sets = Math.min(sets, 3);
            rest = "90s";
        }

        if (userData.bmi && userData.bmi > 28) {
            reps = Math.max(8, reps - 2);
            rest = "90s";
        }

        return {
            name: ex.name,
            sets: sets,
            reps: reps,
            rest: rest,
            desc: ex.instructions && ex.instructions.length > 0 ? ex.instructions.join(' ') : "Focus on controlled breathing and form.",
            image: imageUrl
        };
    });
}

const workoutForm = document.getElementById('workout-form');
const workoutContainer = document.getElementById('workout-container');

workoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const options = {
        fitnessLevel: document.getElementById('fitness-level').value,
        goal: document.getElementById('goal').value,
        health: document.getElementById('health-status').value,
        weather: document.getElementById('weather').value
    };

    workoutContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--primary-color);">Combining your personality, body metrics, and goals into a perfect plan...</p>';

    setTimeout(() => {
        let recommendedWorkout = getExercisesByContext(options);

        if (!recommendedWorkout || recommendedWorkout.length === 0) {
            workoutContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">Could not generate workout. Please try again.</p>';
            return;
        }

        workoutContainer.innerHTML = '';

        recommendedWorkout.forEach(exercise => {
            const workoutCard = document.createElement('workout-card');
            workoutCard.setAttribute('name', exercise.name);
            workoutCard.setAttribute('sets', exercise.sets);
            workoutCard.setAttribute('reps', exercise.reps);
            workoutCard.setAttribute('rest', exercise.rest);
            workoutCard.setAttribute('desc', exercise.desc);
            workoutCard.setAttribute('image', exercise.image);
            workoutContainer.appendChild(workoutCard);
        });

        if (window.lucide) {
            lucide.createIcons();
        }
        
        workoutContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1000);
});

fetchExerciseData();
if (window.lucide) {
    lucide.createIcons();
}
