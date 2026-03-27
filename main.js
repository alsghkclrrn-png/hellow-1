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

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: var(--card-background);
                    border-radius: 16px;
                    padding: 24px;
                    border: 1px solid var(--border-color);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                :host::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(to bottom, var(--primary-color), #818cf8);
                    opacity: 0.5;
                }
                :host(:hover) {
                    transform: translateY(-5px) scale(1.02);
                    border-color: var(--primary-color);
                    box-shadow: 0 10px 20px var(--shadow-color);
                }
                h3 {
                    margin: 0 0 16px 0;
                    color: var(--primary-color);
                    font-size: 1.4em;
                    letter-spacing: -0.01em;
                }
                .stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }
                .stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .label {
                    font-size: 0.75em;
                    text-transform: uppercase;
                    color: var(--secondary-color);
                    letter-spacing: 0.05em;
                    font-weight: 600;
                }
                .value {
                    color: var(--text-color);
                    font-size: 1.1em;
                    font-weight: 500;
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
                    font-size: 0.9em;
                    font-weight: 600;
                }
            </style>
            <div>
                <h3>${name}</h3>
                <div class="stats">
                    <div class="stat-item">
                        <span class="label">Sets</span>
                        <span class="value">${sets}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Repetitions</span>
                        <span class="value">${reps}</span>
                    </div>
                </div>
                <div class="rest-tag">
                    <span class="rest-label">Recovery Period</span>
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

const workoutForm = document.getElementById('workout-form');
const workoutContainer = document.getElementById('workout-container');

const workouts = {
    "weight-loss": {
        beginner: [
            { name: "Jumping Jacks", sets: 3, reps: "30s", rest: "30s" },
            { name: "Bodyweight Squats", sets: 3, reps: 15, rest: "45s" },
            { name: "Push-ups (on knees)", sets: 3, reps: 10, rest: "45s" },
            { name: "Plank", sets: 3, reps: "30s", rest: "45s" },
        ],
        intermediate: [
            { name: "Burpees", sets: 4, reps: 12, rest: "60s" },
            { name: "Jump Squats", sets: 4, reps: 15, rest: "60s" },
            { name: "Push-ups", sets: 4, reps: 15, rest: "60s" },
            { name: "High Knees", sets: 4, reps: "45s", rest: "30s" },
        ],
        advanced: [
            { name: "Box Jumps", sets: 5, reps: 10, rest: "60s" },
            { name: "Kettlebell Swings", sets: 5, reps: 20, rest: "60s" },
            { name: "Pull-ups", sets: 5, reps: "Max", rest: "90s" },
            { name: "Sprints", sets: 5, reps: "100m", rest: "90s" },
        ],
    },
    "muscle-gain": {
        beginner: [
            { name: "Goblet Squats", sets: 3, reps: 12, rest: "60s" },
            { name: "Dumbbell Bench Press", sets: 3, reps: 12, rest: "60s" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, rest: "60s" },
            { name: "Bicep Curls", sets: 3, reps: 12, rest: "45s" },
        ],
        intermediate: [
            { name: "Barbell Squats", sets: 4, reps: 10, rest: "90s" },
            { name: "Barbell Bench Press", sets: 4, reps: 10, rest: "90s" },
            { name: "Pull-ups", sets: 4, reps: 10, rest: "90s" },
            { name: "Overhead Press", sets: 4, reps: 10, rest: "60s" },
        ],
        advanced: [
            { name: "Deadlifts", sets: 5, reps: 5, rest: "120s" },
            { name: "Weighted Dips", sets: 5, reps: 8, rest: "90s" },
            { name: "Clean and Jerk", sets: 5, reps: 5, rest: "120s" },
            { name: "Muscle-ups", sets: 5, reps: "Max", rest: "120s" },
        ],
    },
    "general-fitness": {
        beginner: [
            { name: "Glute Bridges", sets: 3, reps: 15, rest: "45s" },
            { name: "Bird Dog", sets: 3, reps: 15, rest: "30s" },
            { name: "Wall Sit", sets: 3, reps: "45s", rest: "45s" },
            { name: "Forearm Plank", sets: 3, reps: "45s", rest: "45s" },
        ],
        intermediate: [
            { name: "Lunges", sets: 3, reps: 12, rest: "60s" },
            { name: "Incline Dumbbell Press", sets: 3, reps: 12, rest: "60s" },
            { name: "Lat Pulldowns", sets: 3, reps: 12, rest: "60s" },
            { name: "Russian Twists", sets: 3, reps: 20, rest: "45s" },
        ],
        advanced: [
            { name: "Pistol Squats", sets: 4, reps: 8, rest: "90s" },
            { name: "Handstand Push-ups", sets: 4, reps: 8, rest: "90s" },
            { name: "Front Levers", sets: 4, reps: "15s hold", rest: "90s" },
            { name: "Toes to Bar", sets: 4, reps: 15, rest: "60s" },
        ],
    },
};

workoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fitnessLevel = document.getElementById('fitness-level').value;
    const goal = document.getElementById('goal').value;

    const recommendedWorkout = workouts[goal][fitnessLevel];

    workoutContainer.innerHTML = '';

    recommendedWorkout.forEach(exercise => {
        const workoutCard = document.createElement('workout-card');
        workoutCard.setAttribute('name', exercise.name);
        workoutCard.setAttribute('sets', exercise.sets);
        workoutCard.setAttribute('reps', exercise.reps);
        workoutCard.setAttribute('rest', exercise.rest);
        workoutContainer.appendChild(workoutCard);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
});

if (window.lucide) {
    lucide.createIcons();
}
