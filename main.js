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

const workoutForm = document.getElementById('workout-form');
const workoutContainer = document.getElementById('workout-container');

// Master Trainer's Curated Workouts with Perfect Visual Alignment
const workouts = {
    "weight-loss": {
        beginner: [
            { 
                name: "Standard Jumping Jacks", 
                sets: 3, 
                reps: "45s", 
                rest: "30s", 
                desc: "Full range motion. Clap hands at top and return to sides. Maintain steady rhythm.", 
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Bodyweight Air Squats", 
                sets: 3, 
                reps: 20, 
                rest: "45s", 
                desc: "Hips below knees. Keep chest upright and weight on mid-foot to heels.", 
                image: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Wall Push-ups", 
                sets: 3, 
                reps: 15, 
                rest: "45s", 
                desc: "Safe upper body start. Lean against wall, elbows 45 degrees, push back controlled.", 
                image: "https://images.unsplash.com/photo-1598971639058-aba7c52e9a22?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Static Forearm Plank", 
                sets: 3, 
                reps: "30s", 
                rest: "45s", 
                desc: "Don't let hips sag. Squeeze glutes and abs. Forearms parallel.", 
                image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80&w=500" 
            }
        ],
        intermediate: [
            { 
                name: "Standard Burpees", 
                sets: 4, 
                reps: 12, 
                rest: "60s", 
                desc: "Squat, jump feet back, push-up, jump feet forward, explosive jump up.", 
                image: "https://images.unsplash.com/photo-1599058917233-57c0e680c053?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Dumbbell Kettlebell Swings", 
                sets: 4, 
                reps: 20, 
                rest: "60s", 
                desc: "Hinge at hips, don't squat. Power comes from glutes snapping forward.", 
                image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "High-Knee Running", 
                sets: 4, 
                reps: "45s", 
                rest: "30s", 
                desc: "Drive knees to hip height. Pump arms and stay on balls of feet.", 
                image: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Mountain Climbers", 
                sets: 4, 
                reps: 30, 
                rest: "45s", 
                desc: "Plank position. Rapidly switch feet under chest. Keep hips low.", 
                image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=500" 
            }
        ],
        advanced: [
            { 
                name: "Box Jumps", 
                sets: 5, 
                reps: 10, 
                rest: "60s", 
                desc: "Explosive jump onto platform. Land softly in a squat. Step down safely.", 
                image: "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Thrusters (Dumbbell)", 
                sets: 5, 
                reps: 12, 
                rest: "90s", 
                desc: "Dumbbells at shoulders. Full squat into overhead press in one motion.", 
                image: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Assault Bike Sprint", 
                sets: 5, 
                reps: "30s", 
                rest: "90s", 
                desc: "Max effort intensity. Use both arms and legs for maximum power.", 
                image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Pull-ups (Strict)", 
                sets: 5, 
                reps: "Max", 
                rest: "120s", 
                desc: "Dead hang to chin over bar. No kipping. Controlled descent.", 
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=500" 
            }
        ],
    },
    "muscle-gain": {
        beginner: [
            { 
                name: "Goblet Squats", 
                sets: 3, 
                reps: 12, 
                rest: "90s", 
                desc: "Hold dumbbell/kettlebell at chest. Keep torso upright, sit deep.", 
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Dumbbell Chest Press", 
                sets: 3, 
                reps: 12, 
                rest: "90s", 
                desc: "On flat bench. Lower weights until elbows are just below chest level.", 
                image: "https://images.unsplash.com/photo-1534367524873-21c5484a397a?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Dumbbell One-Arm Row", 
                sets: 3, 
                reps: 12, 
                rest: "90s", 
                desc: "Back flat, pull weight to hip. Squeeze shoulder blade at top.", 
                image: "https://images.unsplash.com/photo-1581009146145-b5ef03a74e7f?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Dumbbell Bicep Curls", 
                sets: 3, 
                reps: 12, 
                rest: "60s", 
                desc: "Full range motion. Don't swing. Squeeze at top, control down.", 
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=500" 
            }
        ],
        intermediate: [
            { 
                name: "Barbell Back Squats", 
                sets: 4, 
                reps: 8, 
                rest: "120s", 
                desc: "Bar on traps. Neutral spine. Descend until thighs are parallel to floor.", 
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Barbell Bench Press", 
                sets: 4, 
                reps: 8, 
                rest: "120s", 
                desc: "Touch mid-chest, drive up to lockout. Keep feet planted on floor.", 
                image: "https://images.unsplash.com/photo-1534367524873-21c5484a397a?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Overhead Press (Barbell)", 
                sets: 4, 
                reps: 8, 
                rest: "120s", 
                desc: "Full lockout overhead. No leg drive. Tight core and glutes.", 
                image: "https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Pull-ups (Strict)", 
                sets: 4, 
                reps: 10, 
                rest: "120s", 
                desc: "Overhand grip. Pull until chin is above bar. Full stretch at bottom.", 
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=500" 
            }
        ],
        advanced: [
            { 
                name: "Deadlifts (Conventional)", 
                sets: 5, 
                reps: 5, 
                rest: "180s", 
                desc: "Pull from floor to lockout. Bar stays close to legs. Flat back.", 
                image: "https://images.unsplash.com/photo-1603503363848-6952525df449?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Weighted Dips", 
                sets: 5, 
                reps: 10, 
                rest: "120s", 
                desc: "Lean forward for chest emphasis. Control descent to 90 degrees.", 
                image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Front Squats", 
                sets: 5, 
                reps: 6, 
                rest: "150s", 
                desc: "Bar on front delts. Upright torso. Requires core and upper back strength.", 
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Incline Barbell Bench Press", 
                sets: 4, 
                reps: 8, 
                rest: "120s", 
                desc: "Focus on upper chest. Control bar path, don't bounce off chest.", 
                image: "https://images.unsplash.com/photo-1534367524873-21c5484a397a?auto=format&fit=crop&q=80&w=500" 
            }
        ],
    },
    "general-fitness": {
        beginner: [
            { 
                name: "Cat-Cow Stretch", 
                sets: 2, 
                reps: 15, 
                rest: "30s", 
                desc: "On all fours. Inhale/Arch back, Exhale/Round back. Mobilize spine.", 
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Glute Bridges", 
                sets: 3, 
                reps: 15, 
                rest: "45s", 
                desc: "Lying on back. Drive hips up, squeeze glutes. Keep abs tight.", 
                image: "https://images.unsplash.com/photo-1562771242-a02d9090c90c?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Bird-Dog Stability", 
                sets: 3, 
                reps: 12, 
                rest: "45s", 
                desc: "Opposite arm/leg extension. Maintain level hips and flat back.", 
                image: "https://images.unsplash.com/photo-1518611012118-2960c8bad41d?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Standard Bodyweight Plank", 
                sets: 3, 
                reps: "45s", 
                rest: "45s", 
                desc: "Core endurance. Keep body in a straight line from head to heels.", 
                image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&q=80&w=500" 
            }
        ],
        intermediate: [
            { 
                name: "Bodyweight Lunges", 
                sets: 3, 
                reps: 20, 
                rest: "60s", 
                desc: "Step forward, drop back knee. Maintain vertical front shin.", 
                image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Turkish Get-up (Light)", 
                sets: 3, 
                reps: 5, 
                rest: "60s", 
                desc: "Total body mobility. Transition from floor to standing with weight up.", 
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Face Pulls (Cable/Band)", 
                sets: 4, 
                reps: 15, 
                rest: "45s", 
                desc: "Pull toward face, elbows out. Great for shoulder health and posture.", 
                image: "https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Farmer's Walk", 
                sets: 4, 
                reps: "40m", 
                rest: "60s", 
                desc: "Walk with heavy weights. Maintain upright posture. Grip strength focus.", 
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" 
            }
        ],
        advanced: [
            { 
                name: "Cossack Squats", 
                sets: 4, 
                reps: 12, 
                rest: "60s", 
                desc: "Lateral squat depth. Keeps toes of straight leg up. Lateral mobility.", 
                image: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Handstand Hold (Against Wall)", 
                sets: 4, 
                reps: "45s", 
                rest: "90s", 
                desc: "Vertical pressing stability. Keep shoulders active and core tight.", 
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Single-Arm Dumbbell Snatch", 
                sets: 5, 
                reps: 8, 
                rest: "90s", 
                desc: "Explosive ground-to-overhead. Use hips for power. Control descent.", 
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500" 
            },
            { 
                name: "Strict Toes to Bar", 
                sets: 4, 
                reps: 12, 
                rest: "60s", 
                desc: "Hang from bar, bring toes to touch. No swinging. Intense core.", 
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=500" 
            }
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
