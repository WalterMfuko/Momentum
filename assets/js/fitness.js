// Weekly workout schedule - global variable
const weeklyWorkouts = {
  'Monday': {
    title: 'Upper Body Strength',
    category: 'Upper Body',
    duration: 45,
    exercises: ['Bench Press', 'Overhead Press', 'Pull-ups', 'Bicep Curls', 'Tricep Extensions'],
    notes: "Follow with 15-20 min of basketball drills or treadmill incline walk"
  },
  'Tuesday': {
    title: 'HIIT Cardio',
    category: 'Cardio',
    duration: 30,
    exercises: ['Sprints', 'Jumping Jacks', 'Mountain Climbers', 'Burpees', 'Jump Rope']
  },
  'Wednesday': {
    title: 'Core & Flexibility',
    category: 'Core',
    duration: 40,
    exercises: ['Planks', 'Russian Twists', 'Leg Raises', 'Yoga Stretches', 'Roll-ups']
  },
  'Thursday': {
    title: 'Lower Body Power',
    category: 'Lower Body',
    duration: 50,
    exercises: ['Squats', 'Deadlifts', 'Lunges', 'Leg Press', 'Calf Raises']
  },
  'Friday': {
    title: 'Full Body Circuit',
    category: 'Full Body',
    duration: 45,
    exercises: ['Kettlebell Swings', 'Push-ups', 'Squat Jumps', 'Dumbbell Rows', 'Shoulder Press']
  },
  'Saturday': {
    title: 'Active Recovery',
    category: 'Recovery',
    duration: 30,
    exercises: ['Light Jogging', 'Swimming', 'Cycling', 'Foam Rolling', 'Stretching', 'Push-ups', 'Bodyweight Squats'],
    notes: "Start with 30-40 min brisk walk or light jog"
  },
  'Sunday': {
    title: 'Rest Day',
    category: 'Rest',
    duration: 0,
    exercises: ['Stretching', 'Walking', 'Meditation']
  }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  
  // Dashboard
  const weightChart = document.getElementById('weightChart');
  const progressChart = document.getElementById('progressChart');
  const weightInput = document.getElementById('weight-value');
  const weightUnit = document.getElementById('weight-unit');
  const logWeightBtn = document.querySelector('.weight-input .secondary-btn');
  const startWorkoutBtn = document.querySelector('.primary-btn');
  
  // Workout Section
  const createWorkoutBtn = document.querySelector('#workouts .primary-btn');
  const categoryFilter = document.getElementById('category-filter');
  const equipmentFilter = document.getElementById('equipment-filter');
  
  // Progress Section
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const weightHistoryChart = document.getElementById('weightHistoryChart');
  const measurementsChart = document.getElementById('measurementsChart');
  const strengthChart = document.getElementById('strengthChart');
  const exerciseSelect = document.getElementById('exercise-select');
  
  // Videos Section
  const videoUploadForm = document.getElementById('video-upload-form');
  const videoFile = document.getElementById('video-file');
  const videoTitle = document.getElementById('video-title');
  const videoCategory = document.getElementById('video-category');
  const videoCategoryFilter = document.getElementById('video-category-filter');
  const videoSearch = document.getElementById('video-search');
  
  // Settings Section
  const unitToggles = document.querySelectorAll('.toggle-btn');
  const userName = document.getElementById('user-name');
  const goalWeight = document.getElementById('goal-weight');
  const saveSettingsBtn = document.querySelector('#settings .primary-btn');
  const exportDataBtn = document.querySelector('.data-management .secondary-btn');
  const clearDataBtn = document.querySelector('.data-management .danger-btn');
  
  // Modals
  const workoutModal = document.getElementById('workout-modal');
  const logWorkoutModal = document.getElementById('log-workout-modal');
  const closeModalBtns = document.querySelectorAll('.close-modal');
  const workoutForm = document.getElementById('workout-form');
  const addExerciseBtn = document.getElementById('add-exercise');
  const exerciseList = document.querySelector('.exercise-list');
  const completeWorkoutBtn = document.getElementById('complete-workout');
  
  // Predefined Workout Plan
  const workoutPlan = [
    {
      day: "Monday",
      title: "Upper Body Strength + Cardio",
      category: "strength",
      sections: [
        {
          name: "Warm-Up (10 min)",
          exercises: [
            {
              name: "Jump rope or rowing machine",
              sets: 1,
              reps: "10 minutes",
              weight: 0
            }
          ]
        },
        {
          name: "Strength Training (50 min)",
          exercises: [
            {
              name: "Barbell Bench Press",
              sets: 5,
              reps: 5,
              weight: 0,
              notes: "heavy"
            },
            {
              name: "Pull-Ups or Lat Pulldown",
              sets: 4,
              reps: "8-10",
              weight: 0
            },
            {
              name: "Incline Dumbbell Press",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Barbell Rows",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Face Pulls",
              sets: 3,
              reps: 12,
              weight: 0
            },
            {
              name: "Hanging Leg Raises or Weighted Abs",
              sets: 3,
              reps: 12,
              weight: 0
            }
          ]
        },
        {
          name: "Cardio (15-20 min HIIT or Basketball)",
          exercises: [
            {
              name: "Treadmill Sprints: 30 sec sprint / 1 min walk (8 rounds)",
              sets: 8,
              reps: "30 sec sprint / 1 min walk",
              weight: 0
            }
          ]
        }
      ]
    },
    {
      day: "Tuesday",
      title: "Lower Body Strength + HIIT",
      category: "strength",
      sections: [
        {
          name: "Warm-Up (10 min)",
          exercises: [
            {
              name: "Dynamic stretches + bodyweight squats",
              sets: 1,
              reps: "10 minutes",
              weight: 0
            }
          ]
        },
        {
          name: "Strength Training (50 min)",
          exercises: [
            {
              name: "Back Squats",
              sets: 5,
              reps: 5,
              weight: 0,
              notes: "heavy"
            },
            {
              name: "Romanian Deadlifts",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Bulgarian Split Squats",
              sets: 3,
              reps: "10 per leg",
              weight: 0
            },
            {
              name: "Seated Calf Raises",
              sets: 3,
              reps: 15,
              weight: 0
            },
            {
              name: "Hanging Leg Raises",
              sets: 3,
              reps: 12,
              weight: 0
            }
          ]
        },
        {
          name: "HIIT Cardio (15-20 min)",
          exercises: [
            {
              name: "Battle Ropes & Box Jumps",
              sets: 4,
              reps: "rounds",
              weight: 0
            }
          ]
        }
      ]
    },
    {
      day: "Wednesday",
      title: "Active Recovery or Light Cardio",
      category: "recovery",
      sections: [
        {
          name: "Recovery",
          exercises: [
            {
              name: "Sauna & Stretching",
              sets: 1,
              reps: "20-30 minutes",
              weight: 0
            },
            {
              name: "Swimming or Light Basketball Drills",
              sets: 1,
              reps: "30 minutes",
              weight: 0
            }
          ]
        }
      ]
    },
    {
      day: "Thursday",
      title: "Push Day (Chest, Shoulders, Triceps) + Cardio",
      category: "strength",
      sections: [
        {
          name: "Strength Training (50 min)",
          exercises: [
            {
              name: "Incline Barbell Press",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Overhead Shoulder Press",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Weighted Dips",
              sets: 3,
              reps: "8-10",
              weight: 0
            },
            {
              name: "Lateral Raises",
              sets: 3,
              reps: 12,
              weight: 0
            },
            {
              name: "Cable Tricep Pushdowns",
              sets: 3,
              reps: 12,
              weight: 0
            }
          ]
        },
        {
          name: "Cardio (20 min steady state)",
          exercises: [
            {
              name: "Elliptical or Stair Climber",
              sets: 1,
              reps: "20 minutes",
              weight: 0,
              notes: "moderate intensity"
            }
          ]
        }
      ]
    },
    {
      day: "Friday",
      title: "Pull Day (Back, Biceps) + HIIT",
      category: "strength",
      sections: [
        {
          name: "Strength Training (50 min)",
          exercises: [
            {
              name: "Deadlifts",
              sets: 5,
              reps: 5,
              weight: 0,
              notes: "heavy"
            },
            {
              name: "Chin-Ups",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Seated Cable Rows",
              sets: 4,
              reps: 10,
              weight: 0
            },
            {
              name: "Dumbbell Bicep Curls",
              sets: 3,
              reps: 12,
              weight: 0
            },
            {
              name: "Reverse Flys",
              sets: 3,
              reps: 12,
              weight: 0
            }
          ]
        },
        {
          name: "HIIT Cardio (15-20 min)",
          exercises: [
            {
              name: "Treadmill Sprints or Jump Rope",
              sets: 5,
              reps: "rounds",
              weight: 0
            }
          ]
        }
      ]
    },
    {
      day: "Saturday",
      title: "Outdoor/Bodyweight Training (No Gym Day)",
      category: "cardio",
      sections: [
        {
          name: "Outdoor Cardio",
          exercises: [
            {
              name: "Hill Sprints or Jogging",
              sets: 1,
              reps: "30-40 minutes",
              weight: 0
            }
          ]
        },
        {
          name: "Bodyweight Strength (Optional)",
          exercises: [
            {
              name: "Push-ups",
              sets: 3,
              reps: 20,
              weight: 0
            },
            {
              name: "Bodyweight Squats",
              sets: 3,
              reps: 15,
              weight: 0
            },
            {
              name: "Core Work (Planks, Bicycle Crunches)",
              sets: 3,
              reps: "30-60 seconds",
              weight: 0
            }
          ]
        },
        {
          name: "Recovery",
          exercises: [
            {
              name: "Sauna & Stretching",
              sets: 1,
              reps: "20 minutes",
              weight: 0
            }
          ]
        }
      ]
    },
    {
      day: "Sunday",
      title: "Legs & Core",
      category: "strength",
      sections: [
        {
          name: "Strength Training (50 min)",
          exercises: [
            {
              name: "Front Squats",
              sets: 4,
              reps: 8,
              weight: 0
            },
            {
              name: "Leg Press",
              sets: 4,
              reps: 10,
              weight: 0
            },
            {
              name: "Hip Thrusts",
              sets: 3,
              reps: 10,
              weight: 0
            },
            {
              name: "Seated Calf Raises",
              sets: 3,
              reps: 15,
              weight: 0
            },
            {
              name: "Weighted Ab Rollouts",
              sets: 3,
              reps: 12,
              weight: 0
            }
          ]
        },
        {
          name: "Light Cardio (15 min)",
          exercises: [
            {
              name: "Swimming or Stationary Bike",
              sets: 1,
              reps: "15 minutes",
              weight: 0
            }
          ]
        }
      ]
    }
  ];
  
  // Initialize App Data
  // Removed duplicate declaration of appData
  
  // Extract unique exercises from workout plan
  function getExercisesFromWorkoutPlan(plan) {
    const exercises = new Set();
    
    plan.forEach(day => {
      day.sections.forEach(section => {
        section.exercises.forEach(exercise => {
          exercises.add(exercise.name);
        });
      });
    });
    
    return Array.from(exercises).map(name => ({
      name,
      category: getExerciseCategory(name)
    }));
  }
  
  // Helper to categorize exercises
  function getExerciseCategory(exerciseName) {
    const lowerName = exerciseName.toLowerCase();
    
    if (lowerName.includes('bench') || lowerName.includes('chest') || lowerName.includes('press') || 
        lowerName.includes('fly') || lowerName.includes('push') || lowerName.includes('dip')) {
      return 'chest';
    }
    
    if (lowerName.includes('squat') || lowerName.includes('leg') || lowerName.includes('lunge') || 
        lowerName.includes('deadlift') || lowerName.includes('calf') || lowerName.includes('hip')) {
      return 'legs';
    }
    
    if (lowerName.includes('row') || lowerName.includes('pull') || lowerName.includes('lat') || 
        lowerName.includes('back') || lowerName.includes('chin')) {
      return 'back';
    }
    
    if (lowerName.includes('shoulder') || lowerName.includes('lateral') || lowerName.includes('front raise') || 
        lowerName.includes('overhead')) {
      return 'shoulders';
    }
    
    if (lowerName.includes('curl') || lowerName.includes('bicep')) {
      return 'biceps';
    }
    
    if (lowerName.includes('tricep') || lowerName.includes('extension')) {
      return 'triceps';
    }
    
    if (lowerName.includes('crunch') || lowerName.includes('sit up') || lowerName.includes('plank') || 
        lowerName.includes('leg raise') || lowerName.includes('abs') || lowerName.includes('core')) {
      return 'abs';
    }
    
    if (lowerName.includes('cardio') || lowerName.includes('run') || lowerName.includes('sprint') || 
        lowerName.includes('jump') || lowerName.includes('rope') || lowerName.includes('bike') || 
        lowerName.includes('elliptical') || lowerName.includes('swim')) {
      return 'cardio';
    }
    
    return 'other';
  }
  
  // Load data from localStorage
  function loadAppData() {
    const savedData = localStorage.getItem('fittrackData');
    if (savedData) {
      appData = JSON.parse(savedData);
      
      // Ensure our workout plan is always included
      if (!appData.workouts || appData.workouts.length === 0) {
        appData.workouts = workoutPlan;
        appData.exercises = getExercisesFromWorkoutPlan(workoutPlan);
      }
      
      updateUI();
    } else {
      // First time initialization
      saveAppData();
      updateUI();
    }
  }
  
  // Save data to localStorage
  function saveAppData() {
    localStorage.setItem('fittrackData', JSON.stringify(appData));
  }
  
  // Update UI with current data
  function updateUI() {
    updateWorkoutList();
    updateExerciseDropdowns();
    updateWeightChart();
    updateRecentWorkouts();
    updateProgressCharts();
    updateUserSettings();
    
    // Set today's day of week in UI
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todaysWorkout = appData.workouts.find(workout => workout.day === today);
    if (todaysWorkout) {
      const workoutInfo = document.createElement('div');
      workoutInfo.classList.add('today-workout-info');
      workoutInfo.innerHTML = `
        <h3>Today's Workout: ${todaysWorkout.title}</h3>
        <p>${todaysWorkout.sections.length} sections, focusing on ${todaysWorkout.category}</p>
        <button class="primary-btn" id="start-today-workout">Start Today's Workout</button>
      `;
      
      const dashboardCard = document.querySelector('#dashboard .dashboard-card:first-child');
      const existingInfo = dashboardCard.querySelector('.today-workout-info');
      if (existingInfo) {
        dashboardCard.removeChild(existingInfo);
      }
      dashboardCard.appendChild(workoutInfo);
      
      document.getElementById('start-today-workout').addEventListener('click', () => {
        openWorkoutLogger(todaysWorkout);
      });
    }
  }
  
  // Navigation
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // Update active nav link
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      
      // Show target section, hide others
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden-section');
          section.classList.add('active-section');
        } else {
          section.classList.add('hidden-section');
          section.classList.remove('active-section');
        }
      });
    });
  });
  
  // Display workouts in the workouts section
  function updateWorkoutList() {
    const workoutsGrid = document.querySelector('.workouts-grid');
    const emptyState = workoutsGrid.querySelector('.empty-state');
    
    if (appData.workouts.length === 0) {
      if (!emptyState) {
        workoutsGrid.innerHTML = `
          <div class="empty-state">
            <p>You don't have any workouts yet.</p>
            <button class="primary-btn">Create Your First Workout</button>
          </div>
        `;
      }
      return;
    }
    
    if (emptyState) {
      workoutsGrid.removeChild(emptyState);
    }
    
    // Clear existing cards (except empty state)
    workoutsGrid.querySelectorAll('.workout-card').forEach(card => card.remove());
    
    // Add workout cards
    appData.workouts.forEach(workout => {
      const card = document.createElement('div');
      card.classList.add('workout-card');
      
      // Count total exercises
      let totalExercises = 0;
      workout.sections.forEach(section => {
        totalExercises += section.exercises.length;
      });
      
      card.innerHTML = `
        <h3>${workout.day}: ${workout.title}</h3>
        <div class="workout-info">
          <span>${totalExercises} exercises</span>
          <span class="workout-category">${workout.category}</span>
        </div>
        <div class="workout-actions">
          <button class="primary-btn start-workout" data-day="${workout.day}">Start</button>
          <button class="secondary-btn view-workout" data-day="${workout.day}">Details</button>
        </div>
      `;
      
      workoutsGrid.appendChild(card);
    });
    
    // Add event listeners to new buttons
    document.querySelectorAll('.start-workout').forEach(button => {
      button.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        const workout = appData.workouts.find(w => w.day === day);
        openWorkoutLogger(workout);
      });
    });
    
    document.querySelectorAll('.view-workout').forEach(button => {
      button.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        const workout = appData.workouts.find(w => w.day === day);
        viewWorkoutDetails(workout);
      });
    });
  }
  
  // Open workout logger modal
  function openWorkoutLogger(workout) {
    const loggerContainer = document.querySelector('.workout-logger');
    loggerContainer.innerHTML = `
      <h3>${workout.day}: ${workout.title}</h3>
      <div class="workout-sections">
        ${workout.sections.map(section => `
          <div class="workout-section">
            <h4>${section.name}</h4>
            <div class="exercise-log-list">
              ${section.exercises.map(exercise => `
                <div class="exercise-log-item">
                  <div class="exercise-log-header">
                    <span class="exercise-name">${exercise.name}</span>
                    <span class="exercise-goal">${exercise.sets} sets × ${exercise.reps} reps</span>
                  </div>
                  ${Array(exercise.sets).fill().map((_, i) => `
                    <div class="exercise-set-row">
                      <span class="set-number">Set ${i+1}</span>
                      <input type="number" class="weight-input" placeholder="Weight" data-exercise="${exercise.name}" data-set="${i+1}">
                      <input type="number" class="reps-input" placeholder="Reps" data-exercise="${exercise.name}" data-set="${i+1}">
                      <button class="set-complete-btn">✓</button>
                    </div>
                  `).join('')}
                  <div class="exercise-notes">
                    <textarea placeholder="Notes (optional)" data-exercise="${exercise.name}"></textarea>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="workout-duration">
        <span>Duration: </span>
        <span id="workout-timer">00:00:00</span>
      </div>
    `;
    
    // Show the modal
    logWorkoutModal.style.display = 'block';
    
    // Start timer
    startWorkoutTimer();
    
    // Add event listeners to set complete buttons
    document.querySelectorAll('.set-complete-btn').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('completed');
        this.parentElement.classList.toggle('completed-set');
      });
    });
    
    // Complete workout button listener
    document.getElementById('complete-workout').addEventListener('click', function() {
      completeWorkout(workout);
    });
  }
  
  // Handle workout completion
  function completeWorkout(workout) {
    const now = new Date();
    
    // Collect all logged sets
    const exerciseLogs = {};
    document.querySelectorAll('.exercise-log-item').forEach(item => {
      const exerciseName = item.querySelector('.exercise-name').textContent;
      const sets = [];
      
      item.querySelectorAll('.exercise-set-row').forEach(row => {
        if (row.querySelector('.set-complete-btn').classList.contains('completed')) {
          const weight = row.querySelector('.weight-input').value || 0;
          const reps = row.querySelector('.reps-input').value || 0;
          
          sets.push({
            weight: parseFloat(weight),
            reps: parseInt(reps)
          });
        }
      });
      
      const notes = item.querySelector('textarea').value;
      
      if (sets.length > 0) {
        exerciseLogs[exerciseName] = {
          sets,
          notes
        };
      }
    });
    
    // Get workout duration
    const durationEl = document.getElementById('workout-timer');
    const duration = durationEl.textContent;
    
    // Create workout log entry
    const workoutLog = {
      date: now.toISOString(),
      workout: workout.title,
      day: workout.day,
      duration,
      exercises: exerciseLogs
    };
    
    // Add to workout logs
    appData.workoutLogs.unshift(workoutLog);
    
    // Save data
    saveAppData();
    
    // Close the modal
    logWorkoutModal.style.display = 'none';
    
    // Update UI
    updateRecentWorkouts();
    updateProgressCharts();
    
    // Show success message
    alert('Workout completed! Great job!');
  }
  
  // Start workout timer
  // Ensure workoutTimerInterval is declared only once
  function startWorkoutTimer() {
    const timerEl = document.getElementById('workout-timer');
    let seconds = 0;
    
    clearInterval(workoutTimerInterval);
    
    workoutTimerInterval = setInterval(() => {
      seconds++;
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      
      timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  }
  
  // View workout details
  function viewWorkoutDetails(workout) {
    const modal = document.getElementById('workout-modal');
    const modalTitle = modal.querySelector('h2');
    modalTitle.textContent = `${workout.day}: ${workout.title}`;
    
    const form = document.getElementById('workout-form');
    form.innerHTML = `
      <div class="form-group">
        <label>Category: ${workout.category}</label>
      </div>
      
      ${workout.sections.map(section => `
        <div class="workout-section-details">
          <h3>${section.name}</h3>
          <div class="exercise-list">
            ${section.exercises.map(exercise => `
              <div class="exercise-item">
                <div class="exercise-header">
                  <span class="exercise-name">${exercise.name}</span>
                  <span class="exercise-prescription">${exercise.sets} × ${exercise.reps}</span>
                </div>
                ${exercise.notes ? `<div class="exercise-note">${exercise.notes}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
      
      <button type="button" class="primary-btn start-workout-btn" data-day="${workout.day}">Start Workout</button>
      <button type="button" class="secondary-btn close-details-btn">Close</button>
    `;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Add event listeners
    modal.querySelector('.start-workout-btn').addEventListener('click', function() {
      modal.style.display = 'none';
      openWorkoutLogger(workout);
    });
    
    modal.querySelector('.close-details-btn').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  
  // Update recent workouts on dashboard
  function updateRecentWorkouts() {
    const recentWorkoutsList = document.querySelector('.recent-workouts');
    
    if (appData.workoutLogs.length === 0) {
      recentWorkoutsList.innerHTML = '<li class="no-workouts">No recent workouts</li>';
      return;
    }
    
    recentWorkoutsList.innerHTML = '';
    
    // Show the 5 most recent workouts
    const recentLogs = appData.workoutLogs.slice(0, 5);
    
    recentLogs.forEach(log => {
      const date = new Date(log.date);
      const formattedDate = date.toLocaleDateString();
      
      const li = document.createElement('li');
      li.classList.add('recent-workout-item');
      
      // Count completed exercises
      const exerciseCount = Object.keys(log.exercises).length;
      
      li.innerHTML = `
        <div class="recent-workout-header">
          <span class="recent-workout-name">${log.workout}</span>
          <span class="recent-workout-date">${formattedDate}</span>
        </div>
        <div class="recent-workout-info">
          <span>${exerciseCount} exercises</span>
          <span>Duration: ${log.duration}</span>
        </div>
      `;
      
      recentWorkoutsList.appendChild(li);
    });
  }
  
  // Charts and Progress Tracking
  function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
    }
    return days;
  }
  
  function getLast30Days() {
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    return days;
  }
  
  function getWeightData(numDays) {
    if (appData.weights.length === 0) {
      return Array(numDays).fill(null);
    }
    
    const data = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = numDays - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const weightEntry = appData.weights.find(entry => {
        const entryDate = new Date(entry.date);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === date.getTime();
      });
      
      data.push(weightEntry ? weightEntry.weight : null);
    }
    
    return data;
  }
  
  function getWorkoutCountLastWeek() {
    const data = [0, 0, 0, 0, 0, 0, 0]; // Mon to Sun
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Find Sunday
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - today.getDay());
    
    // Get workouts for last week
    appData.workoutLogs.forEach(log => {
      const logDate = new Date(log.date);
      logDate.setHours(0, 0, 0, 0);
      
      // Check if log is from last week
      if (logDate >= sunday && logDate < today) {
        const dayOfWeek = logDate.getDay(); // 0 = Sunday, 6 = Saturday
        data[dayOfWeek]++;
      }
    });
    
    return data;
  }
  
  // Update weight chart
  function updateWeightChart() {
    if (!weightChart) return;
    
    const ctx = weightChart.getContext('2d');
    const days = getLast7Days();
    const weights = getWeightData(7);
    
    // Create or update chart
    if (weightChart.chart) {
      weightChart.chart.data.labels = days;
      weightChart.chart.data.datasets[0].data = weights;
      weightChart.chart.update();
    } else {
      weightChart.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: days,
          datasets: [{
            label: 'Weight',
            data: weights,
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 2,
            tension: 0.3,
            pointBackgroundColor: 'rgba(76, 175, 80, 1)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  }
  
  // Update progress charts
  function updateProgressCharts() {
    if (!weightHistoryChart || !measurementsChart || !strengthChart) return;
    
    // Weight History Chart
    const weightCtx = weightHistoryChart.getContext('2d');
    const days30 = getLast30Days();
    const weights30 = getWeightData(30);
    
    // Create or update weight history chart
    if (weightHistoryChart.chart) {
      weightHistoryChart.chart.data.labels = days30;
      weightHistoryChart.chart.data.datasets[0].data = weights30;
      weightHistoryChart.chart.update();
    } else {
      weightHistoryChart.chart = new Chart(weightCtx, {
        type: 'line',
        data: {
          labels: days30,
          datasets: [{
            label: 'Weight',
            data: weights30,
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
    
    // Measurements Chart (assuming measurements are stored in appData.measurements)
    if (appData.measurements.length > 0 && measurementsChart) {
      const measurementCtx = measurementsChart.getContext('2d');
      const measurementDates = appData.measurements.map(m => 
        new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      );
      
      // Get all measurement types
      const measurementTypes = Object.keys(appData.measurements[0]).filter(key => 
        key !== 'date' && typeof appData.measurements[0][key] === 'number'
      );
      
      const datasets = measurementTypes.map((type, index) => {
        const colors = [
          'rgba(76, 175, 80, 1)', // green
          'rgba(33, 150, 243, 1)', // blue
          'rgba(255, 152, 0, 1)',  // orange
          'rgba(156, 39, 176, 1)', // purple
          'rgba(244, 67, 54, 1)'   // red
        ];
        
        return {
          label: type.charAt(0).toUpperCase() + type.slice(1),
          data: appData.measurements.map(m => m[type]),
          borderColor: colors[index % colors.length],
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.3
        };
      });
      
      // Create or update measurements chart
      if (measurementsChart.chart) {
        measurementsChart.chart.data.labels = measurementDates;
        measurementsChart.chart.data.datasets = datasets;
        measurementsChart.chart.update();
      } else {
        measurementsChart.chart = new Chart(measurementCtx, {
          type: 'line',
          data: {
            labels: measurementDates,
            datasets: datasets
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    }
    
    // Strength Chart (based on selected exercise)
    if (exerciseSelect && strengthChart) {
      const selectedExercise = exerciseSelect.value;
      const strengthData = getStrengthDataForExercise(selectedExercise);
      
      const strengthCtx = strengthChart.getContext('2d');
      
      // Create or update strength chart
      if (strengthChart.chart) {
        strengthChart.chart.data.labels = strengthData.dates;
        strengthChart.chart.data.datasets[0].data = strengthData.weights;
        strengthChart.chart.update();
      } else {
        strengthChart.chart = new Chart(strengthCtx, {
          type: 'line',
          data: {
            labels: strengthData.dates,
            datasets: [{
              label: 'Weight (kg)',
              data: strengthData.weights,
              backgroundColor: 'rgba(33, 150, 243, 0.2)',
              borderColor: 'rgba(33, 150, 243, 1)',
              borderWidth: 2,
              tension: 0.3,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    }
  }
  
  // Get strength data for a specific exercise
  function getStrengthDataForExercise(exerciseName) {
    const data = {
      dates: [],
      weights: []
    };
    
    // Filter workout logs that contain the exercise
    const relevantLogs = appData.workoutLogs.filter(log => 
      log.exercises && log.exercises[exerciseName]
    );
    
    // Sort by date
    relevantLogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Extract data
    relevantLogs.forEach(log => {
      const sets = log.exercises[exerciseName].sets;
      if (sets && sets.length > 0) {
        // Find max weight used in this workout for this exercise
        const maxWeight = Math.max(...sets.map(set => set.weight || 0));
        
        if (maxWeight > 0) {
          data.dates.push(new Date(log.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
          data.weights.push(maxWeight);
        }
      }
    });
    
    return data;
  }
  
  // Update exercise dropdowns
  function updateExerciseDropdowns() {
    if (exerciseSelect) {
      // Clear current options
      exerciseSelect.innerHTML = '';
      
      // Get all exercises that have been logged
      const loggedExercises = new Set();
      appData.workoutLogs.forEach(log => {
        Object.keys(log.exercises || {}).forEach(exercise => {
          loggedExercises.add(exercise);
        });
      });
      
      // Add options for each logged exercise
      Array.from(loggedExercises).sort().forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise;
        option.textContent = exercise;
        exerciseSelect.appendChild(option);
      });
      
      // If no exercises have been logged, add options from workout plan
      if (loggedExercises.size === 0) {
        appData.exercises.forEach(exercise => {
          const option = document.createElement('option');
          option.value = exercise.name;
          option.textContent = exercise.name;
          exerciseSelect.appendChild(option);
        });
      }
    }
  }
  
  // Update user settings UI
  function updateUserSettings() {
    if (userName) userName.value = appData.user.name;
    if (goalWeight) goalWeight.value = appData.user.goalWeight;
    
    // Update unit toggles
    unitToggles.forEach(toggle => {
      if ((toggle.getAttribute('data-unit') === 'metric' && appData.user.units === 'metric') ||
          (toggle.getAttribute('data-unit') === 'imperial' && appData.user.units === 'imperial')) {
        toggle.classList.add('active');
      } else {
        toggle.classList.remove('active');
      }
    });
  }
  
  // Log weight event handler
  if (logWeightBtn) {
    logWeightBtn.addEventListener('click', function() {
      if (weightInput && weightInput.value) {
        const weight = parseFloat(weightInput.value);
        if (!isNaN(weight) && weight > 0) {
          appData.weights.push({
            date: new Date().toISOString(),
            weight: weight
          });
          
          saveAppData();
          updateWeightChart();
          updateProgressCharts();
          
          weightInput.value = '';
          alert('Weight logged successfully!');
        }
      }
    });
  }
  
  // Exercise selection change handler
  if (exerciseSelect) {
    exerciseSelect.addEventListener('change', function() {
      updateProgressCharts();
    });
  }
  
  // Tab navigation
  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-tab');
        
        // Update active tab button
        tabBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show target tab content
        tabContents.forEach(content => {
          if (content.id === targetId) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        });
        
        // Update charts if needed
        updateProgressCharts();
      });
    });
  }
  
  // Handle unit toggle in settings
  unitToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const unit = this.getAttribute('data-unit');
      appData.user.units = unit;
      
      // Update UI
      unitToggles.forEach(toggle => toggle.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Save settings
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', function() {
      if (userName && goalWeight) {
        appData.user.name = userName.value;
        appData.user.goalWeight = parseFloat(goalWeight.value) || appData.user.goalWeight;
        
        saveAppData();
        alert('Settings saved!');
      }
    });
  }
  
  // Export data
  if (exportDataBtn) {
    exportDataBtn.addEventListener('click', function() {
      const dataStr = JSON.stringify(appData);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileName = 'fitness4life_data_' + new Date().toISOString().split('T')[0] + '.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileName);
      linkElement.click();
    });
  }
  
  // Clear data
  if (clearDataBtn) {
    clearDataBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to clear all your data? This cannot be undone.')) {
        // Keep workout plans but clear personal data
        appData.weights = [];
        appData.measurements = [];
        appData.workoutLogs = [];
        appData.videos = [];
        
        saveAppData();
        updateUI();
        
        alert('All personal data has been cleared.');
      }
    });
  }
  
  // Modal handling
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Find the parent modal
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        
        // Clear workout timer if active
        if (workoutTimerInterval) {
          clearInterval(workoutTimerInterval);
        }
      }
    });
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
      
      // Clear workout timer if active
      if (workoutTimerInterval) {
        clearInterval(workoutTimerInterval);
      }
    }
  });
  
  // Load and initialize app
  loadAppData();
  
  // Set default active tab
  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns[0].click();
  }
  
  // Set default active nav section
  if (navLinks.length > 0) {
    navLinks[0].click();
  }

  // Bottom navigation functionality
  const navButtons = document.querySelectorAll('.nav-button');
  const appSections = document.querySelectorAll('.app-section');
  
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      navButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show the appropriate section
      const sectionName = this.getAttribute('data-section');
      const targetSection = document.getElementById(`${sectionName}-section`);
      
      // Hide all sections and show the target one
      appSections.forEach(section => {
        section.classList.remove('active-section');
      });
      
      if (targetSection) {
        targetSection.classList.add('active-section');
        
        // Update UI elements in the section if needed
        if (sectionName === 'workouts') {
          updateWorkoutList();
        } else if (sectionName === 'dashboard') {
          updateWeightChart();
          updateRecentWorkouts();
        } else if (sectionName === 'progress') {
          updateProgressCharts();
        }
      }
    });
  });
  
  // Settings button functionality
  const settingsButton = document.querySelector('.settings-button');
  if (settingsButton) {
    settingsButton.addEventListener('click', function() {
      // Hide all sections and show settings
      appSections.forEach(section => {
        section.classList.remove('active-section');
      });
      
      // If settings section exists, show it; otherwise create it
      let settingsSection = document.getElementById('settings-section');
      if (!settingsSection) {
        settingsSection = document.createElement('section');
        settingsSection.id = 'settings-section';
        settingsSection.className = 'app-section';
        settingsSection.innerHTML = `
          <h2 class="section-title">Settings</h2>
          <div class="settings-card">
            <div class="form-group">
              <label for="user-name">Your Name</label>
              <input type="text" id="user-name" placeholder="Enter your name">
            </div>
            <div class="form-group">
              <label for="goal-weight">Goal Weight</label>
              <input type="number" id="goal-weight" placeholder="Enter goal weight">
            </div>
            <div class="form-group">
              <label>Units</label>
              <div class="toggle-group">
                <button class="toggle-btn active" data-unit="metric">Metric (kg, cm)</button>
                <button class="toggle-btn" data-unit="imperial">Imperial (lb, in)</button>
              </div>
            </div>
            <button class="primary-btn">Save Settings</button>
            
            <div class="data-management">
              <h3>Data Management</h3>
              <div class="button-group">
                <button class="secondary-btn">Export Data</button>
                <button class="danger-btn">Clear All Data</button>
              </div>
            </div>
          </div>
        `;
        
        document.querySelector('.content-area').appendChild(settingsSection);
        
        // Initialize settings UI
        updateUserSettings();
      }
      
      settingsSection.classList.add('active-section');
    });
  }
  
  // Sample workout data - this would typically come from a database
  const sampleWorkouts = [
    {
      id: 1,
      title: "Full Body Strength",
      category: "strength",
      day: "Monday",
      duration: 45,
      sections: [
        {
          name: "Warm-up",
          exercises: [
            { name: "Jumping Jacks", sets: 1, reps: "30 sec" },
            { name: "Arm Circles", sets: 1, reps: "20 each" }
          ]
        },
        {
          name: "Main Workout",
          exercises: [
            { name: "Squats", sets: 3, reps: 12, notes: "Focus on form" },
            { name: "Push-ups", sets: 3, reps: 10, notes: "Modify on knees if needed" },
            { name: "Lunges", sets: 3, reps: "10 each leg" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, notes: "Use 10-15lb weights" }
          ]
        },
        {
          name: "Cool Down",
          exercises: [
            { name: "Stretch", sets: 1, reps: "5 min" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "HIIT Cardio",
      category: "cardio",
      day: "Wednesday",
      duration: 30,
      sections: [
        {
          name: "Warm-up",
          exercises: [
            { name: "Light Jog", sets: 1, reps: "3 min" },
            { name: "High Knees", sets: 1, reps: "30 sec" }
          ]
        },
        {
          name: "Circuit (repeat 3x)",
          exercises: [
            { name: "Burpees", sets: 3, reps: "30 sec" },
            { name: "Rest", sets: 3, reps: "15 sec" },
            { name: "Mountain Climbers", sets: 3, reps: "30 sec" },
            { name: "Rest", sets: 3, reps: "15 sec" },
            { name: "Jumping Jacks", sets: 3, reps: "30 sec" },
            { name: "Rest", sets: 3, reps: "15 sec" }
          ]
        },
        {
          name: "Cool Down",
          exercises: [
            { name: "Walking", sets: 1, reps: "2 min" },
            { name: "Stretching", sets: 1, reps: "3 min" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Recovery Day",
      category: "recovery",
      day: "Friday",
      duration: 20,
      sections: [
        {
          name: "Mobility",
          exercises: [
            { name: "Cat-Cow Stretch", sets: 1, reps: "10 reps" },
            { name: "Child's Pose", sets: 1, reps: "30 sec" },
            { name: "Downward Dog", sets: 1, reps: "30 sec" }
          ]
        },
        {
          name: "Stretching",
          exercises: [
            { name: "Hamstring Stretch", sets: 1, reps: "30 sec each" },
            { name: "Quad Stretch", sets: 1, reps: "30 sec each" },
            { name: "Shoulder Stretch", sets: 1, reps: "30 sec each" }
          ]
        }
      ]
    }
  ];
  
  // Initialize app data if it doesn't exist
  let appData = {
    workouts: sampleWorkouts,
    workoutLogs: [],
    weights: [],
    measurements: [],
    exercises: [],
    videos: [],
    user: {
      name: "User",
      goalWeight: 0,
      units: "metric"
    }
  };
  
  // Load app data from localStorage
  function loadAppData() {
    const savedData = localStorage.getItem('fitness4lifeData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        appData = { ...appData, ...parsedData };
      } catch (e) {
        console.error("Error loading app data", e);
      }
    }
    
    // Ensure workouts exist even if data was loaded
    if (!appData.workouts || appData.workouts.length === 0) {
      appData.workouts = sampleWorkouts;
    }
  }
  
  // Save app data to localStorage
  function saveAppData() {
    localStorage.setItem('fitness4lifeData', JSON.stringify(appData));
  }
  
  // Update workout list in the UI
  function updateWorkoutList() {
    const workoutsGrid = document.querySelector('.workouts-grid');
    const categoryFilter = document.getElementById('category-filter');
    
    if (!workoutsGrid) return;
    
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    
    // Filter workouts by category
    const filteredWorkouts = selectedCategory === 'all' 
      ? appData.workouts 
      : appData.workouts.filter(workout => workout.category === selectedCategory);
    
    // Clear current content
    workoutsGrid.innerHTML = '';
    
    if (filteredWorkouts.length === 0) {
      workoutsGrid.innerHTML = `
        <div class="empty-state">
          <p>No workouts found. Create your first workout!</p>
        </div>
      `;
      return;
    }
    
    // Add workout cards
    filteredWorkouts.forEach(workout => {
      const exerciseCount = workout.sections.reduce((total, section) => 
        total + section.exercises.length, 0);
      
      const workoutCard = document.createElement('div');
      workoutCard.className = 'workout-card';
      workoutCard.innerHTML = `
        <h3>${workout.title}</h3>
        <div class="workout-info">
          <span>${workout.day}</span>
          <span class="workout-category">${workout.category}</span>
          <span>${workout.duration} min</span>
        </div>
        <p>${exerciseCount} exercises</p>
        <div class="workout-actions">
          <button class="secondary-btn view-workout" data-id="${workout.id}">View</button>
          <button class="primary-btn start-workout" data-id="${workout.id}">Start</button>
        </div>
      `;
      
      workoutsGrid.appendChild(workoutCard);
      
      // Add event listeners to buttons
      workoutCard.querySelector('.view-workout').addEventListener('click', () => {
        viewWorkoutDetails(workout);
      });
      
      workoutCard.querySelector('.start-workout').addEventListener('click', () => {
        openWorkoutLogger(workout);
      });
    });
  }
  
  // View workout details
  function viewWorkoutDetails(workout) {
    const modal = document.getElementById('workout-modal');
    if (!modal) return;
    
    const modalTitle = modal.querySelector('h2');
    modalTitle.textContent = `${workout.day}: ${workout.title}`;
    
    const form = document.getElementById('workout-form');
    form.innerHTML = `
      <div class="form-group">
        <label>Category: ${workout.category}</label>
      </div>
      
      ${workout.sections.map(section => `
        <div class="workout-section-details">
          <h3>${section.name}</h3>
          <div class="exercise-list">
            ${section.exercises.map(exercise => `
              <div class="exercise-item">
                <div class="exercise-header">
                  <span class="exercise-name">${exercise.name}</span>
                  <span class="exercise-prescription">${exercise.sets} × ${exercise.reps}</span>
                </div>
                ${exercise.notes ? `<div class="exercise-note">${exercise.notes}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
      
      <button type="button" class="primary-btn start-workout-btn" data-id="${workout.id}">Start Workout</button>
      <button type="button" class="secondary-btn close-details-btn">Close</button>
    `;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Add event listeners
    modal.querySelector('.start-workout-btn').addEventListener('click', function() {
      modal.style.display = 'none';
      openWorkoutLogger(workout);
    });
    
    modal.querySelector('.close-details-btn').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  
  // Open workout logger modal
  function openWorkoutLogger(workout) {
    const modal = document.getElementById('log-workout-modal');
    if (!modal) return;
    
    const modalTitle = modal.querySelector('h2');
    modalTitle.textContent = `Log: ${workout.title}`;
    
    const workoutLogger = modal.querySelector('.workout-logger');
    workoutLogger.innerHTML = `
      <div id="workout-timer" class="workout-timer">00:00:00</div>
      
      ${workout.sections.map(section => `
        <div class="workout-section-logger">
          <h3>${section.name}</h3>
          <div class="exercise-log-list">
            ${section.exercises.map(exercise => `
              <div class="exercise-log-item">
                <div class="exercise-log-header">
                  <span class="exercise-name">${exercise.name}</span>
                  <span class="exercise-prescription">${exercise.sets} × ${exercise.reps}</span>
                </div>
                ${exercise.sets > 1 ? `
                  <div class="set-tracking">
                    ${Array(exercise.sets).fill().map((_, i) => `
                      <div class="set-item">
                        <span class="set-number">Set ${i + 1}</span>
                        <label>
                          <input type="checkbox" name="${exercise.name}_set_${i + 1}" class="set-completed">
                          Done
                        </label>
                        ${exercise.category !== 'cardio' ? `
                          <input type="number" placeholder="Weight" class="weight-input small-input">
                          <span>kg</span>
                        ` : ''}
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <label class="single-set">
                    <input type="checkbox" name="${exercise.name}_completed" class="exercise-completed">
                    Completed
                  </label>
                `}
                <textarea placeholder="Notes" class="exercise-notes"></textarea>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Start workout timer
    startWorkoutTimer();
    
    // Add event listener to complete button
    const completeBtn = document.getElementById('complete-workout');
    if (completeBtn) {
      completeBtn.addEventListener('click', function() {
        completeWorkout(workout);
        modal.style.display = 'none';
      });
    }
  }
  
  // Start workout timer
  let workoutTimerInterval;
  function startWorkoutTimer() {
    const timerEl = document.getElementById('workout-timer');
    let seconds = 0;
    
    clearInterval(workoutTimerInterval);
    
    workoutTimerInterval = setInterval(() => {
      seconds++;
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      
      timerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  }
  
  // Handle workout completion
  function completeWorkout(workout) {
    // Clear workout timer
    clearInterval(workoutTimerInterval);
    
    // Create workout log entry
    const now = new Date();
    const logEntry = {
      id: Date.now(),
      workoutId: workout.id,
      title: workout.title,
      category: workout.category,
      date: now.toISOString(),
      exercises: {} // This would typically contain the weights/reps completed
    };
    
    // In a real app, we would collect data from the form inputs
    // For this demo, just add the log
    appData.workoutLogs.unshift(logEntry);
    
    saveAppData();
    updateRecentWorkouts();
    
    alert(`Workout "${workout.title}" completed and logged!`);
  }

  // Add this to your existing JavaScript for workout tracking

  // Define the workouts for each day of the week
  const weeklyWorkouts = {
    Monday: {
      title: "Full Body Strength + Cardio",
      exercises: [
        "Squats", "Bench Press", "Bent-over Rows", "Planks", "Seated Shoulder Press"
      ],
      notes: "Follow with 15-20 min of basketball drills or treadmill incline walk"
    },
    Tuesday: {
      title: "Pool Workout",
      exercises: [
        "Lap swimming", "Water jogging", "Pool resistance exercises", "Treading water"
      ],
      notes: "Optional: 10-15 min sauna for recovery"
    },
    Wednesday: {
      title: "Full Body Strength + HIIT",
      exercises: [
        "Deadlifts", "Pull-Ups/Lat Pulldown", "Lunges", "Dumbbell Chest Press", "Core Exercises"
      ],
      notes: "Follow with 15 min HIIT: 30 sec sprint, 1 min walk (repeat 6-8 times)"
    },
    Thursday: {
      title: "Basketball & Pool Recovery",
      exercises: [
        "Shooting drills", "Defensive drills", "Full-court sprints", "Light swimming"
      ],
      notes: "Focus on technique and recovery"
    },
    Friday: {
      title: "Strength + Elliptical",
      exercises: [
        "Leg Press", "Incline Dumbbell Press", "Seated Cable Rows", "Hammer Curls", "Abs"
      ],
      notes: "Follow with 15-20 min elliptical (resistance level 5-7)"
    },
    Saturday: {
      title: "Outdoor/Bodyweight Training",
      exercises: [
        "Push-ups", "Bodyweight Squats", "Lunges", "Plank Hold", "Jump Rope/Stair Climbs"
      ],
      notes: "Start with 30-40 min brisk walk or light jog"
    },
    Sunday: {
      title: "Rest or Pool Recovery",
      exercises: [
        "Light swimming", "Water jogging", "Stretching", "Sauna"
      ],
      notes: "Focus on recovery and preparation for next week"
    }
  };

  // Handle day button clicks on home screen
  function setupDayButtons() {
    // Add event listeners to day buttons
    const dayButtons = document.querySelectorAll('.day-btn');
    dayButtons.forEach(button => {
      button.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        showDayWorkout(day);
      });
    });
  }

  // Function to show the day-specific workout
  function showDayWorkout(day) {
    // Ensure the `weeklyWorkouts` object has data for the selected day
    if (!weeklyWorkouts[day]) {
      console.error(`No workout found for ${day}`);
      alert(`No workout found for ${day}.`);
      return;
    }
  
    // Hide all sections and show the day workout section
    const appSections = document.querySelectorAll('.app-section');
    appSections.forEach(section => {
      section.classList.remove('active-section');
    });
  
    const dayWorkoutSection = document.getElementById('day-workout-section');
    if (!dayWorkoutSection) {
      console.error('Missing #day-workout-section element in the HTML.');
      return;
    }
  
    dayWorkoutSection.classList.add('active-section');
  
    // Update the title and notes for the selected day
    const dayTitle = document.getElementById('day-title');
    const workoutNotes = document.getElementById('workout-notes');
  
    dayTitle.textContent = `${day}: ${weeklyWorkouts[day].title}`;
    workoutNotes.textContent = weeklyWorkouts[day].notes || 'No additional notes for this workout.';
  
    // Generate the workout table for the selected day
    generateWorkoutTable(day);
  }

  // Generate workout table for a specific day
  function generateWorkoutTable(day) {
    const workoutTable = document.querySelector('.workout-table');
    const thead = workoutTable.querySelector('thead tr');
    const tbody = workoutTable.querySelector('tbody');

    // Clear existing headers except the first one
    while (thead.children.length > 1) {
      thead.removeChild(thead.lastChild);
    }

    // Clear existing rows
    tbody.innerHTML = '';

    // Ensure the selected day has exercises
    if (!weeklyWorkouts[day] || !weeklyWorkouts[day].exercises || weeklyWorkouts[day].exercises.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="100%">No exercises found for ${day}.</td>
        </tr>
      `;
      return;
    }

    // Add exercise headers
    weeklyWorkouts[day].exercises.forEach(exercise => {
      const th = document.createElement('th');
      th.textContent = exercise;
      thead.appendChild(th);
    });

    // Add rows for tracking weights/reps
    for (let week = 1; week <= 6; week++) {
      const weekRow = document.createElement('tr');
      weekRow.classList.add('week-separator');
      const weekHeader = document.createElement('td');
      weekHeader.colSpan = weeklyWorkouts[day].exercises.length + 1;
      weekHeader.textContent = `Week ${week}`;
      weekRow.appendChild(weekHeader);
      tbody.appendChild(weekRow);

      for (let i = 1; i <= 2; i++) {
        const dayRow = document.createElement('tr');

        // Add week/day cell
        const dayCell = document.createElement('td');
        dayCell.classList.add('week-col');
        dayCell.textContent = `Week ${week}, Day ${i}`;
        dayRow.appendChild(dayCell);

        // Add input cells for each exercise
        weeklyWorkouts[day].exercises.forEach((exercise, index) => {
          const cell = document.createElement('td');
          const input = document.createElement('input');
          input.type = 'number';
          input.min = '0';
          input.step = '2.5';
          input.id = `weight-${day}-${week}-${i}-${index}`;
          input.className = 'weight-input';
          input.dataset.day = day;
          input.dataset.week = week;
          input.dataset.dayNum = i;
          input.dataset.exercise = exercise;

          // Load saved value if exists
          const savedValue = getSavedWeight(day, week, i, exercise);
          if (savedValue) {
            input.value = savedValue;
          }

          // Save weight on change
          input.addEventListener('change', function () {
            saveWeight(this.dataset.day, this.dataset.week, this.dataset.dayNum, this.dataset.exercise, this.value);
          });

          cell.appendChild(input);
          dayRow.appendChild(cell);
        });

        tbody.appendChild(dayRow);
      }
    }
  }
  
  // Get saved weight from local storage
  function getSavedWeight(day, week, dayNum, exercise) {
    if (!appData.weightTracking) {
      appData.weightTracking = {};
    }
    
    const key = `${day}-${week}-${dayNum}-${exercise}`;
    return appData.weightTracking[key] || '';
  }
  
  // Save weight to local storage
  function saveWeight(day, week, dayNum, exercise, weight) {
    if (!appData.weightTracking) {
      appData.weightTracking = {};
    }
    
    const key = `${day}-${week}-${dayNum}-${exercise}`;
    appData.weightTracking[key] = weight;
    saveAppData();
  }

  // Add this to your original DOMContentLoaded callback at the end
  // Add right before the final closing });
  setupDayButtons();
});
