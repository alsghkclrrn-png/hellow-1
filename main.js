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
                    display: flex;
                    flex-direction: column;
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
                    transform: translateY(-5px) scale(1.01);
                    border-color: var(--primary-color);
                    box-shadow: 0 10px 20px var(--shadow-color);
                }
                h3 {
                    margin: 0 0 12px 0;
                    color: var(--primary-color);
                    font-size: 1.4em;
                    letter-spacing: -0.01em;
                }
                .description {
                    font-size: 0.9em;
                    color: var(--secondary-color);
                    margin-bottom: 20px;
                    line-height: 1.5;
                    font-style: italic;
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
                <p class="description">${desc}</p>
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
                    <span class="rest-label">Recovery</span>
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

// Professional Workouts by 20-Year Veteran Trainer
const workouts = {
    "weight-loss": {
        beginner: [
            { name: "Full Body Dynamic Warm-up", sets: 1, reps: "5 min", rest: "None", desc: "Light cardio mixed with dynamic stretches to prepare joints." },
            { name: "Air Squats", sets: 3, reps: 20, rest: "45s", desc: "Keep chest up and weight on heels. Focus on range of motion." },
            { name: "Incline Push-ups", sets: 3, reps: 12, rest: "45s", desc: "Hands on a bench/table. Engage core and lower chest to the edge." },
            { name: "Alternating Lunges", sets: 3, reps: 20, rest: "45s", desc: "Step forward, drop back knee toward ground. Keep torso upright." }
        ],
        intermediate: [
            { name: "Burpees (High Intensity)", sets: 4, reps: 15, rest: "60s", desc: "Full chest-to-floor burpee with an explosive jump at the top." },
            { name: "Kettlebell Swings", sets: 4, reps: 20, rest: "60s", desc: "Hinge at hips, drive through glutes. Snap the hips forward." },
            { name: "Mountain Climbers", sets: 4, reps: "45s", rest: "30s", desc: "Drive knees toward chest rapidly while maintaining a plank position." },
            { name: "Jump Squats", sets: 4, reps: 15, rest: "60s", desc: "Explode upward from a squat, land softly on the balls of your feet." }
        ],
        advanced: [
            { name: "Tabata Sprints", sets: 8, reps: "20s", rest: "10s", desc: "Max effort sprint for 20 seconds, followed by 10 seconds of rest." },
            { name: "Thrusters", sets: 5, reps: 12, rest: "90s", desc: "Full squat into an overhead press in one fluid movement." },
            { name: "Devil's Press", sets: 5, reps: 10, rest: "90s", desc: "Dumbbell burpee into a ground-to-overhead snatch." },
            { name: "Assault Bike / Row", sets: 5, reps: "500m", rest: "60s", desc: "High-intensity metabolic conditioning at max output." }
        ],
    },
    "muscle-gain": {
        beginner: [
            { name: "Goblet Squats", sets: 3, reps: 12, rest: "90s", desc: "Hold weight at chest. Sit deep into the squat to engage glutes and quads." },
            { name: "Dumbbell Floor Press", sets: 3, reps: 12, rest: "90s", desc: "Great for shoulder safety. Drive weight up from the floor." },
            { name: "Three-Point Rows", sets: 3, reps: 12, rest: "90s", desc: "Support yourself on a bench. Pull dumbbell to hip, squeezing the lat." },
            { name: "Plank Hold", sets: 3, reps: "60s", rest: "60s", desc: "Maximum core tension. Squeeze glutes and quads throughout." }
        ],
        intermediate: [
            { name: "Barbell Back Squats", sets: 4, reps: 8, rest: "120s", desc: "The king of leg exercises. Maintain a neutral spine and hit depth." },
            { name: "Barbell Bench Press", sets: 4, reps: 8, rest: "120s", desc: "Classic chest builder. Control the eccentric, explode on the concentric." },
            { name: "Deadlifts", sets: 4, reps: 6, rest: "150s", desc: "Focus on hip hinge. Keep bar close to shins and engage lats." },
            { name: "Pull-ups (Weighted)", sets: 4, reps: 8, rest: "120s", desc: "Full range of motion. Chin over bar, full extension at the bottom." }
        ],
        advanced: [
            { name: "Front Squats (Heavy)", sets: 5, reps: 5, rest: "180s", desc: "Upright torso emphasis. Core strength is critical here." },
            { name: "Overhead Press", sets: 5, reps: 5, rest: "180s", desc: "Full body stability. Drive bar from shoulders to locked out overhead." },
            { name: "Weighted Dips", sets: 5, reps: 10, rest: "120s", desc: "Lean forward for chest, stay upright for triceps. controlled tempo." },
            { name: "Bulgarian Split Squats", sets: 4, reps: 10, rest: "90s", desc: "Rear foot elevated. Incredible for unilateral strength and hypertrophy." }
        ],
    },
    "general-fitness": {
        beginner: [
            { name: "Cat-Cow & Mobility", sets: 2, reps: "10ea", rest: "30s", desc: "Focus on spinal articulation and waking up the nervous system." },
            { name: "Bird-Dog", sets: 3, reps: 12, rest: "45s", desc: "Stability focus. Extend opposite arm and leg without arching back." },
            { name: "Bodyweight Step-ups", sets: 3, reps: 12, rest: "45s", desc: "Drive through the heel of the leading foot to step onto a box." },
            { name: "Glute Bridges", sets: 3, reps: 15, rest: "45s", desc: "Squeeze glutes at the top. Pause for 2 seconds for max activation." }
        ],
        intermediate: [
            { name: "Turkish Get-ups", sets: 3, reps: 5, rest: "60s", desc: "A complex movement for total body coordination and shoulder health." },
            { name: "Face Pulls", sets: 4, reps: 15, rest: "45s", desc: "Pull toward forehead, emphasize external rotation of the shoulders." },
            { name: "Renegade Rows", sets: 4, reps: 10, rest: "60s", desc: "Plank position with dumbbells. Row while keeping hips perfectly still." },
            { name: "Farmer's Walk", sets: 4, reps: "40m", rest: "60s", desc: "Walk with heavy weights. Maintain perfect posture and grip." }
        ],
        advanced: [
            { name: "Handstand Holds", sets: 4, reps: "45s", rest: "90s", desc: "Balance and shoulder stability. Use a wall for support if needed." },
            { name: "Single-Arm Snatch", sets: 5, reps: 8, rest: "90s", desc: "Explosive movement from ground to overhead with one dumbbell." },
            { name: "Cossack Squats", sets: 4, reps: 16, rest: "60s", desc: "Lateral mobility and strength. Sink deep into one side while keeping other leg straight." },
            { name: "Strict Leg Raises", sets: 4, reps: 12, rest: "60s", desc: "Hanging from a bar. Control the legs up and down without swinging." }
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
        workoutCard.setAttribute('desc', exercise.desc);
        workoutContainer.appendChild(workoutCard);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
});

if (window.lucide) {
    lucide.createIcons();
}
