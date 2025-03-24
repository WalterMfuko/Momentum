const urlParams = new URLSearchParams(window.location.search);
const currentUser = urlParams.get('user') || 'default';

let goal = localStorage.getItem(`${currentUser}Goal`) || 'No goal set.';
let proteinCount = parseInt(localStorage.getItem(`${currentUser}ProteinCount`) || '0', 10);
let workoutCount = parseInt(localStorage.getItem(`${currentUser}WorkoutCount`) || '0', 10);

function setGoal() {
    const newGoal = prompt('Enter your new goal:', goal);
    if (newGoal) {
        goal = newGoal;
        localStorage.setItem(`${currentUser}Goal`, goal);
        updateGoalDisplay();
    }
}

function updateProtein() {
    proteinCount += 10; // Example: Add 10g of protein
    localStorage.setItem(`${currentUser}ProteinCount`, proteinCount);
    document.getElementById('protein-count').textContent = `${proteinCount}g`;
}

function updateWorkouts() {
    workoutCount += 1; // Increment workout count
    localStorage.setItem(`${currentUser}WorkoutCount`, workoutCount);
    document.getElementById('workout-count').textContent = workoutCount;
}

function updateGoalDisplay() {
    const goalElements = document.querySelectorAll('#current-goal, #jordan-current-goal');
    goalElements.forEach(el => el.textContent = goal);
}

// Initialize displays on page load
document.addEventListener('DOMContentLoaded', () => {
    updateGoalDisplay();
    const proteinElement = document.getElementById('protein-count');
    if (proteinElement) proteinElement.textContent = `${proteinCount}g`;

    const workoutElement = document.getElementById('workout-count');
    if (workoutElement) workoutElement.textContent = workoutCount;
});
