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

metricsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    
    // BMI Calculation: weight (kg) / (height(m)^2)
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    // BMI Status
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Healthy Weight";
    else if (bmi < 30) status = "Overweight";
    else status = "Obesity";
    
    // BMR Calculation (Mifflin-St Jeor Equation)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Display results
    bmiValueSpan.textContent = bmi;
    bmiStatusSpan.textContent = status;
    bmrValueSpan.textContent = Math.round(bmr).toLocaleString();
    
    metricsResults.classList.remove('hidden');
    
    // Smooth scroll to results
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

// Map User Goals to Muscle Groups in the API
const goalToMuscles = {
    "weight-loss": ["cardio", "full body", "legs", "abdominals"],
    "muscle-gain": ["chest", "back", "shoulders", "biceps", "triceps", "quadriceps", "hamstrings"],
    "general-fitness": ["core", "lower back", "glutes", "calves", "shoulders"]
};

function getExercisesByGoal(goal, level, count = 4) {
    if (!exerciseDatabase || exerciseDatabase.length === 0) return null;

    const targetMuscles = goalToMuscles[goal] || ["full body"];
    
    // Filter by muscle and level
    let filtered = exerciseDatabase.filter(ex => {
        const levelMatch = ex.level ? ex.level.toLowerCase() === level.toLowerCase() : true;
        const primaryMuscles = (ex.primaryMuscles || []).map(m => m.toLowerCase());
        const secondaryMuscles = (ex.secondaryMuscles || []).map(m => m.toLowerCase());
        const bodyPart = ex.bodyPart ? ex.bodyPart.toLowerCase() : "";
        
        const muscleMatch = targetMuscles.some(m => 
            primaryMuscles.includes(m) || 
            secondaryMuscles.includes(m) || 
            bodyPart.includes(m)
        );
        
        return levelMatch && muscleMatch;
    });

    if (filtered.length < count) {
        filtered = exerciseDatabase.filter(ex => {
            const primaryMuscles = (ex.primaryMuscles || []).map(m => m.toLowerCase());
            return targetMuscles.some(m => primaryMuscles.includes(m));
        });
    }

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    return selected.map(ex => {
        const imagePath = ex.images && ex.images.length > 0 ? ex.images[0] : `${ex.id}/0.jpg`;
        const imageUrl = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${imagePath}`;

        return {
            name: ex.name,
            sets: level === 'beginner' ? 3 : (level === 'intermediate' ? 4 : 5),
            reps: level === 'beginner' ? 12 : (level === 'intermediate' ? 10 : 8),
            rest: level === 'beginner' ? "90s" : "60s",
            desc: ex.instructions && ex.instructions.length > 0 ? ex.instructions.join(' ') : "Follow the visual guide and maintain correct posture.",
            image: imageUrl
        };
    });
}

const fallbackWorkouts = {
    "weight-loss": {
        beginner: [
            { name: "Jumping Jacks", sets: 3, reps: "45s", rest: "30s", desc: "Keep rhythm, jump wide.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" }
        ]
    }
};

workoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fitnessLevel = document.getElementById('fitness-level').value;
    const goal = document.getElementById('goal').value;

    workoutContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--primary-color);">AI가 맞춤형 운동 정보를 동기화하는 중입니다...</p>';

    setTimeout(() => {
        let recommendedWorkout = getExercisesByGoal(goal, fitnessLevel);

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
    }, 500);
});

fetchExerciseData();
if (window.lucide) {
    lucide.createIcons();
}
