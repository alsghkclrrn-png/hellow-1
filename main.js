class WorkoutCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--card-background, #fff);
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    padding: 20px;
                    transition: all 0.3s ease;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 16px rgba(0,0,0,0.1);
                }
                h3 {
                    margin-top: 0;
                    color: var(--primary-color, #007bff);
                }
                p {
                    margin-bottom: 0;
                }
            </style>
            <div>
                <h3></h3>
                <p id="sets-reps"></p>
                <p id="rest"></p>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        shadow.querySelector('h3').innerText = this.getAttribute('name');
        shadow.querySelector('#sets-reps').innerText = `Sets: ${this.getAttribute('sets')} Reps: ${this.getAttribute('reps')}`;
        shadow.querySelector('#rest').innerText = `Rest: ${this.getAttribute('rest')}`;
    }
}

customElements.define('workout-card', WorkoutCard);

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
});
