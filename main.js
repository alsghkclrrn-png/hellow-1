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

// Body Metrics Calculation
const metricsForm = document.getElementById('metrics-form');
const metricsResults = document.getElementById('metrics-results');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiStatusSpan = document.getElementById('bmi-status');
const bmrValueSpan = document.getElementById('bmr-value');

let userBMI = null;

metricsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    userBMI = parseFloat(bmi);
    
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Healthy Weight";
    else if (bmi < 30) status = "Overweight";
    else status = "Obesity";
    
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    bmiValueSpan.textContent = bmi;
    bmiStatusSpan.textContent = status;
    bmrValueSpan.textContent = Math.round(bmr).toLocaleString();
    
    metricsResults.classList.remove('hidden');
    metricsResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

// Map User Goals to Muscle Groups
const goalToMuscles = {
    "weight-loss": ["cardio", "full body", "legs", "abdominals"],
    "muscle-gain": ["chest", "back", "shoulders", "biceps", "triceps", "quadriceps", "hamstrings"],
    "general-fitness": ["core", "lower back", "glutes", "calves", "shoulders"]
};

// Get Context-Aware Exercises
function getExercisesByContext(options) {
    if (!exerciseDatabase || exerciseDatabase.length === 0) return null;

    const { goal, level, health, weather } = options;
    const now = new Date();
    const hour = now.getHours();
    const month = now.getMonth(); // 0-11

    // 1. Determine Target Muscles based on Goal
    let targetMuscles = [...(goalToMuscles[goal] || ["full body"])];

    // 2. Adjust for Health Status
    if (health === 'recovery' || health === 'tired') {
        targetMuscles = ["stretching", "calves", "forearms"]; // Lighter focus
    }

    // 3. Filter Initial Pool
    let filtered = exerciseDatabase.filter(ex => {
        const primaryMuscles = (ex.primaryMuscles || []).map(m => m.toLowerCase());
        const bodyPart = ex.bodyPart ? ex.bodyPart.toLowerCase() : "";
        
        return targetMuscles.some(m => primaryMuscles.includes(m) || bodyPart.includes(m));
    });

    // 4. Contextual Adjustments (Season/Time/Weather)
    // Season (Winter: 11, 0, 1) -> Suggest indoor/warm-up focus
    // Time (Morning: 5-11) -> Suggest activation
    // Weather (Rainy) -> Suggest indoor/bodyweight
    
    if (weather === 'rainy' || weather === 'cold') {
        filtered = filtered.filter(ex => !ex.equipment || ex.equipment === 'bodyweight' || ex.equipment === 'dumbbell');
    }

    if (hour < 11) {
        // Morning: Add at least one stretching/warm-up
        const warmups = exerciseDatabase.filter(ex => ex.primaryMuscles.includes('stretching')).slice(0, 2);
        filtered = [...warmups, ...filtered];
    }

    // 5. Pick random exercises and adjust difficulty
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const count = (health === 'recovery' || health === 'tired') ? 3 : 5;
    const selected = shuffled.slice(0, count);

    return selected.map(ex => {
        const imagePath = ex.images && ex.images.length > 0 ? ex.images[0] : `${ex.id}/0.jpg`;
        const imageUrl = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${imagePath}`;

        // Dynamic Sets/Reps based on BMI and Health
        let sets = level === 'beginner' ? 2 : (level === 'intermediate' ? 3 : 4);
        let reps = level === 'beginner' ? 10 : (level === 'intermediate' ? 12 : 15);
        let rest = "60s";

        if (health === 'tired') {
            sets = Math.max(1, sets - 1);
            rest = "90s";
        }
        
        if (userBMI && userBMI > 30) {
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

    workoutContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--primary-color);">AI가 날씨, 시간, 신체 컨디션을 분석하여 최적의 운동을 설계 중입니다...</p>';

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
