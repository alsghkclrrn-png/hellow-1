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

// Body Metrics Calculation and Storage
const metricsForm = document.getElementById('metrics-form');
const metricsResults = document.getElementById('metrics-results');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiStatusSpan = document.getElementById('bmi-status');
const bmrValueSpan = document.getElementById('bmr-value');

// Global User State
let userData = {
    gender: null,
    age: null,
    height: null,
    weight: null,
    bmi: null,
    bmr: null
};

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
    
    metricsResults.classList.remove('hidden');
    metricsResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Feedback to user that analysis is saved
    const calcBtn = document.getElementById('calculate-btn');
    const originalText = calcBtn.textContent;
    calcBtn.textContent = "Metrics Applied to Coach ✅";
    setTimeout(() => calcBtn.textContent = originalText, 2000);
});

const workoutForm = document.getElementById('workout-form');
const workoutContainer = document.getElementById('workout-container');

// API Data Integration
let exerciseDatabase = [];
const EXERCISE_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

async function fetchExerciseData() {
    try {
        const response = await fetch(EXERCISE_API_URL);
        if (!response.ok) throw new Error('Failed to fetch exercises');
        exerciseDatabase = await response.json();
        console.log('Exercise Database Loaded:', exerciseDatabase.length);
    } catch (error) {
        console.error('Error fetching exercise data:', error);
    }
}

const goalToMuscles = {
    "weight-loss": ["cardio", "full body", "legs", "abdominals"],
    "muscle-gain": ["chest", "back", "shoulders", "biceps", "triceps", "quadriceps", "hamstrings"],
    "general-fitness": ["core", "lower back", "glutes", "calves", "shoulders"]
};

// Advanced Contextual Analysis Engine
function getExercisesByContext(options) {
    if (!exerciseDatabase || exerciseDatabase.length === 0) return null;

    const { goal, level, health, weather } = options;
    const now = new Date();
    const hour = now.getHours();

    // 1. Muscle Selection
    let targetMuscles = [...(goalToMuscles[goal] || ["full body"])];

    // 2. Body Info Analysis & Bias
    if (userData.gender === 'female' && goal === 'general-fitness') {
        targetMuscles.push('glutes', 'abdominals'); // Specific bias for female fitness routines
    } else if (userData.gender === 'male' && goal === 'muscle-gain') {
        targetMuscles.push('chest', 'shoulders'); // Specific bias for male hypertrophy routines
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

    // 4. Intensity & Volume Calculation (The "Trainer AI" Brain)
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const count = (health === 'recovery' || health === 'tired') ? 3 : 5;
    const selected = shuffled.slice(0, count);

    return selected.map(ex => {
        const imagePath = ex.images && ex.images.length > 0 ? ex.images[0] : `${ex.id}/0.jpg`;
        const imageUrl = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${imagePath}`;

        // Base Logic
        let sets = level === 'beginner' ? 2 : (level === 'intermediate' ? 3 : 4);
        let reps = level === 'beginner' ? 10 : (level === 'intermediate' ? 12 : 15);
        let rest = "60s";

        // Age Analysis (Safety first)
        if (userData.age && userData.age > 50) {
            sets = Math.min(sets, 3);
            rest = "90s";
        }

        // Weight/BMI Analysis (Joint protection)
        if (userData.bmi && userData.bmi > 28) {
            // Suggest lower impact/reps for higher BMI to protect joints
            reps = Math.max(8, reps - 2);
            rest = "90s";
        }

        // BMR Analysis (Metabolic focus)
        if (userData.bmr && userData.bmr > 2000 && goal === 'weight-loss') {
            reps = Math.min(20, reps + 5); // Increase volume for high BMR weight loss
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

const fallbackWorkouts = {
    "weight-loss": {
        beginner: [
            { name: "Dynamic Warm-up", sets: 2, reps: "1 min", rest: "30s", desc: "Get your heart rate up slowly.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" }
        ]
    }
};

workoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const options = {
        fitnessLevel: document.getElementById('fitness-level').value,
        goal: document.getElementById('goal').value,
        health: document.getElementById('health-status').value,
        weather: document.getElementById('weather').value
    };

    workoutContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--primary-color);">신체 지표, 날씨, 성별을 고려하여 AI가 맞춤 루틴을 설계 중입니다...</p>';

    setTimeout(() => {
        let recommendedWorkout = getExercisesByContext(options);

        if (!recommendedWorkout || recommendedWorkout.length === 0) {
            recommendedWorkout = fallbackWorkouts["weight-loss"].beginner;
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
    }, 800);
});

fetchExerciseData();
if (window.lucide) {
    lucide.createIcons();
}
