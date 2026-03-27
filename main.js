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
                    height: 200px;
                    overflow: hidden;
                    position: relative;
                }
                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                :host(:hover) .image-container img {
                    transform: scale(1.1);
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
                    font-size: 1.4em;
                    letter-spacing: -0.01em;
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
            <div class="badge">Guide</div>
            <div class="image-container">
                <img src="${image}" alt="${name}">
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

// Professional Workouts with Visual Guidance
const workouts = {
    "weight-loss": {
        beginner: [
            { name: "Full Body Dynamic Warm-up", sets: 1, reps: "5 min", rest: "None", desc: "Light cardio mixed with dynamic stretches to prepare joints.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
            { name: "Air Squats", sets: 3, reps: 20, rest: "45s", desc: "Keep chest up and weight on heels. Focus on range of motion.", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=400" },
            { name: "Incline Push-ups", sets: 3, reps: 12, rest: "45s", desc: "Hands on a bench/table. Engage core and lower chest to the edge.", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400" },
            { name: "Alternating Lunges", sets: 3, reps: 20, rest: "45s", desc: "Step forward, drop back knee toward ground. Keep torso upright.", image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400" }
        ],
        intermediate: [
            { name: "Burpees (High Intensity)", sets: 4, reps: 15, rest: "60s", desc: "Full chest-to-floor burpee with an explosive jump at the top.", image: "https://images.unsplash.com/photo-1599058917233-57c0e680c053?auto=format&fit=crop&q=80&w=400" },
            { name: "Kettlebell Swings", sets: 4, reps: 20, rest: "60s", desc: "Hinge at hips, drive through glutes. Snap the hips forward.", image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=400" },
            { name: "Mountain Climbers", sets: 4, reps: "45s", rest: "30s", desc: "Drive knees toward chest rapidly while maintaining a plank position.", image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=400" },
            { name: "Jump Squats", sets: 4, reps: 15, rest: "60s", desc: "Explode upward from a squat, land softly on the balls of your feet.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" }
        ],
        advanced: [
            { name: "Tabata Sprints", sets: 8, reps: "20s", rest: "10s", desc: "Max effort sprint for 20 seconds, followed by 10 seconds of rest.", image: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80&w=400" },
            { name: "Thrusters", sets: 5, reps: 12, rest: "90s", desc: "Full squat into an overhead press in one fluid movement.", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400" },
            { name: "Devil's Press", sets: 5, reps: 10, rest: "90s", desc: "Dumbbell burpee into a ground-to-overhead snatch.", image: "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80&w=400" },
            { name: "Assault Bike / Row", sets: 5, reps: "500m", rest: "60s", desc: "High-intensity metabolic conditioning at max output.", image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=400" }
        ],
    },
    "muscle-gain": {
        beginner: [
            { name: "Goblet Squats", sets: 3, reps: 12, rest: "90s", desc: "Hold weight at chest. Sit deep into the squat to engage glutes and quads.", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=400" },
            { name: "Dumbbell Floor Press", sets: 3, reps: 12, rest: "90s", desc: "Great for shoulder safety. Drive weight up from the floor.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" },
            { name: "Three-Point Rows", sets: 3, reps: 12, rest: "90s", desc: "Support yourself on a bench. Pull dumbbell to hip, squeezing the lat.", image: "https://images.unsplash.com/photo-1521804906057-1df8fdb7aa27?auto=format&fit=crop&q=80&w=400" },
            { name: "Plank Hold", sets: 3, reps: "60s", rest: "60s", desc: "Maximum core tension. Squeeze glutes and quads throughout.", image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80&w=400" }
        ],
        intermediate: [
            { name: "Barbell Back Squats", sets: 4, reps: 8, rest: "120s", desc: "The king of leg exercises. Maintain a neutral spine and hit depth.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" },
            { name: "Barbell Bench Press", sets: 4, reps: 8, rest: "120s", desc: "Classic chest builder. Control the eccentric, explode on the concentric.", image: "https://images.unsplash.com/photo-1534367524873-21c5484a397a?auto=format&fit=crop&q=80&w=400" },
            { name: "Deadlifts", sets: 4, reps: 6, rest: "150s", desc: "Focus on hip hinge. Keep bar close to shins and engage lats.", image: "https://images.unsplash.com/photo-1603503363848-6952525df449?auto=format&fit=crop&q=80&w=400" },
            { name: "Pull-ups (Weighted)", sets: 4, reps: 8, rest: "120s", desc: "Full range of motion. Chin over bar, full extension at the bottom.", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400" }
        ],
        advanced: [
            { name: "Front Squats (Heavy)", sets: 5, reps: 5, rest: "180s", desc: "Upright torso emphasis. Core strength is critical here.", image: "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80&w=400" },
            { name: "Overhead Press", sets: 5, reps: 5, rest: "180s", desc: "Full body stability. Drive bar from shoulders to locked out overhead.", image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=400" },
            { name: "Weighted Dips", sets: 5, reps: 10, rest: "120s", desc: "Lean forward for chest, stay upright for triceps. controlled tempo.", image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=400" },
            { name: "Bulgarian Split Squats", sets: 4, reps: 10, rest: "90s", desc: "Rear foot elevated. Incredible for unilateral strength and hypertrophy.", image: "https://images.unsplash.com/photo-1507398941214-57f51621ae35?auto=format&fit=crop&q=80&w=400" }
        ],
    },
    "general-fitness": {
        beginner: [
            { name: "Cat-Cow & Mobility", sets: 2, reps: "10ea", rest: "30s", desc: "Focus on spinal articulation and waking up the nervous system.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
            { name: "Bird-Dog", sets: 3, reps: 12, rest: "45s", desc: "Stability focus. Extend opposite arm and leg without arching back.", image: "https://images.unsplash.com/photo-1518611012118-2960c8bad41d?auto=format&fit=crop&q=80&w=400" },
            { name: "Bodyweight Step-ups", sets: 3, reps: 12, rest: "45s", desc: "Drive through the heel of the leading foot to step onto a box.", image: "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80&w=400" },
            { name: "Glute Bridges", sets: 3, reps: 15, rest: "45s", desc: "Squeeze glutes at the top. Pause for 2 seconds for max activation.", image: "https://images.unsplash.com/photo-1562771242-a02d9090c90c?auto=format&fit=crop&q=80&w=400" }
        ],
        intermediate: [
            { name: "Turkish Get-ups", sets: 3, reps: 5, rest: "60s", desc: "A complex movement for total body coordination and shoulder health.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
            { name: "Face Pulls", sets: 4, reps: 15, rest: "45s", desc: "Pull toward forehead, emphasize external rotation of the shoulders.", image: "https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?auto=format&fit=crop&q=80&w=400" },
            { name: "Renegade Rows", sets: 4, reps: 10, rest: "60s", desc: "Plank position with dumbbells. Row while keeping hips perfectly still.", image: "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80&w=400" },
            { name: "Farmer's Walk", sets: 4, reps: "40m", rest: "60s", desc: "Walk with heavy weights. Maintain perfect posture and grip.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" }
        ],
        advanced: [
            { name: "Handstand Holds", sets: 4, reps: "45s", rest: "90s", desc: "Balance and shoulder stability. Use a wall for support if needed.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
            { name: "Single-Arm Snatch", sets: 5, reps: 8, rest: "90s", desc: "Explosive movement from ground to overhead with one dumbbell.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
            { name: "Cossack Squats", sets: 4, reps: 16, rest: "60s", desc: "Lateral mobility and strength. Sink deep into one side while keeping other leg straight.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" },
            { name: "Strict Leg Raises", sets: 4, reps: 12, rest: "60s", desc: "Hanging from a bar. Control the legs up and down without swinging.", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" }
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
        workoutCard.setAttribute('image', exercise.image);
        workoutContainer.appendChild(workoutCard);
    });

    if (window.lucide) {
        lucide.createIcons();
    }
});

if (window.lucide) {
    lucide.createIcons();
}
