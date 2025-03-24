/**
 * Momentum Fitness - Challenges Database
 * A collection of fitness challenges that can be randomly assigned to users
 */

const fitnessChallenges = {
  // Cardio challenges
  cardio: [
    {
      id: "c1",
      title: "Jump Rope Challenge",
      description: "Jump rope for 2 minutes × 3 sets",
      difficulty: "beginner",
      focusArea: "cardio",
      calories: 80
    },
    {
      id: "c2",
      title: "HIIT Sprint",
      description: "30 seconds sprint + 30 seconds walk × 10 rounds",
      difficulty: "intermediate",
      focusArea: "cardio",
      calories: 150
    },
    {
      id: "c3",
      title: "Stair Climber",
      description: "Climb stairs for 10 minutes straight",
      difficulty: "intermediate",
      focusArea: "cardio",
      calories: 120
    },
    {
      id: "c4",
      title: "Jumping Jack Attack",
      description: "Complete 100 jumping jacks as fast as possible",
      difficulty: "beginner",
      focusArea: "cardio",
      calories: 70
    }
  ],
  
  // Upper body challenges
  upperBody: [
    {
      id: "u1",
      title: "Push-Up Challenge",
      description: "Complete 30 push-ups (take breaks if needed)",
      difficulty: "intermediate",
      focusArea: "chest",
      calories: 50
    },
    {
      id: "u2",
      title: "Tricep Burner",
      description: "20 chair dips × 3 sets",
      difficulty: "beginner",
      focusArea: "triceps",
      calories: 60
    },
    {
      id: "u3",
      title: "Shoulder Builder",
      description: "15 pike push-ups × 3 sets",
      difficulty: "advanced",
      focusArea: "shoulders",
      calories: 70
    },
    {
      id: "u4",
      title: "Pull Power",
      description: "Complete 10 doorway rows × 3 sets",
      difficulty: "intermediate",
      focusArea: "back",
      calories: 65
    }
  ],
  
  // Lower body challenges
  lowerBody: [
    {
      id: "l1",
      title: "Squat Master",
      description: "Complete 100 bodyweight squats",
      difficulty: "intermediate",
      focusArea: "legs",
      calories: 100
    },
    {
      id: "l2",
      title: "Lunge Walk",
      description: "Walking lunges across room × 5 rounds",
      difficulty: "intermediate",
      focusArea: "legs",
      calories: 90
    },
    {
      id: "l3",
      title: "Calf Builder",
      description: "30 single-leg calf raises (each leg) × 3 sets",
      difficulty: "beginner",
      focusArea: "calves",
      calories: 40
    },
    {
      id: "l4",
      title: "Glute Bridge Challenge",
      description: "Hold glute bridge for 45 seconds × 4 sets",
      difficulty: "beginner",
      focusArea: "glutes",
      calories: 50
    }
  ],
  
  // Core challenges
  core: [
    {
      id: "ab1",
      title: "Plank Master",
      description: "Hold plank for 2 minutes (can break into sections)",
      difficulty: "intermediate",
      focusArea: "core",
      calories: 60
    },
    {
      id: "ab2",
      title: "Crunch Time",
      description: "25 bicycle crunches × 3 sets",
      difficulty: "beginner",
      focusArea: "abs",
      calories: 45
    },
    {
      id: "ab3",
      title: "Russian Twist",
      description: "20 Russian twists (each side) × 3 sets",
      difficulty: "intermediate",
      focusArea: "obliques",
      calories: 55
    },
    {
      id: "ab4",
      title: "V-Up Challenge",
      description: "15 V-ups × 3 sets",
      difficulty: "advanced",
      focusArea: "abs",
      calories: 70
    }
  ],
  
  // Full body workouts
  fullBody: [
    {
      id: "f1",
      title: "Burpee Blast",
      description: "Complete 50 burpees as fast as possible",
      difficulty: "advanced",
      focusArea: "full body",
      calories: 150
    },
    {
      id: "f2",
      title: "Bodyweight Circuit",
      description: "5 push-ups, 10 squats, 15 sit-ups × 5 rounds",
      difficulty: "intermediate",
      focusArea: "full body",
      calories: 120
    },
    {
      id: "f3",
      title: "Tabata Challenge",
      description: "20s mountain climbers + 10s rest × 8 rounds",
      difficulty: "intermediate",
      focusArea: "full body",
      calories: 100
    },
    {
      id: "f4",
      title: "Four-Corner Fitness",
      description: "10 jumping jacks, 10 push-ups, 10 squats, 10 crunches × 3 rounds",
      difficulty: "beginner",
      focusArea: "full body",
      calories: 110
    }
  ],
  
  // Flexibility challenges
  flexibility: [
    {
      id: "flex1",
      title: "Morning Stretch",
      description: "Complete full-body 10-minute stretch routine",
      difficulty: "beginner",
      focusArea: "flexibility",
      calories: 30
    },
    {
      id: "flex2",
      title: "Yoga Flow",
      description: "Complete 5 sun salutations",
      difficulty: "intermediate",
      focusArea: "flexibility",
      calories: 50
    }
  ],
  
  // Balance challenges
  balance: [
    {
      id: "bal1",
      title: "Single Leg Stand",
      description: "Balance on each leg for 1 minute",
      difficulty: "beginner",
      focusArea: "balance",
      calories: 20
    },
    {
      id: "bal2",
      title: "Warrior Sequence",
      description: "Hold each warrior pose for 30 seconds on each side",
      difficulty: "intermediate",
      focusArea: "balance",
      calories: 40
    }
  ],
  
  // Get all challenges as a flat array
  getAllChallenges() {
    return [
      ...this.cardio,
      ...this.upperBody,
      ...this.lowerBody,
      ...this.core,
      ...this.fullBody,
      ...this.flexibility,
      ...this.balance
    ];
  },
  
  // Get a random challenge
  getRandomChallenge(type = null) {
    if (type && this[type]) {
      const challenges = this[type];
      return challenges[Math.floor(Math.random() * challenges.length)];
    } else {
      // Get random from all types
      const allChallenges = this.getAllChallenges();
      return allChallenges[Math.floor(Math.random() * allChallenges.length)];
    }
  },
  
  // Get challenges by difficulty
  getChallengesByDifficulty(difficulty) {
    return this.getAllChallenges().filter(
      challenge => challenge.difficulty === difficulty
    );
  },
  
  // Get challenges by focus area
  getChallengesByFocusArea(focusArea) {
    return this.getAllChallenges().filter(
      challenge => challenge.focusArea === focusArea
    );
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fitnessChallenges;
}