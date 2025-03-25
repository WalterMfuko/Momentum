/**
 * Workout Videos Database
 * This file contains all workout video data organized by categories
 * Add new videos in the appropriate category array
 */

const videoData = {
  // Featured/Latest video that appears at the top of videos.html
  featured: {
    id: "fbCjPEYDfNw",
    title: "30 Minute HIIT Cardio Workout - No Equipment",
    duration: "32:44",
    category: "hiit",
    difficulty: "intermediate",
    calories: 392,
    description: "An intense cardio workout that will help you burn calories and improve your cardiovascular fitness."
  },
  
  // All videos organized by category
  categories: {
    hiit: [
      {
        id: "o42lg27IBtg",
        title: "40 Min HIIT Workout Challenge",
        duration: "40:15",
        difficulty: "advanced",
        calories: 450,
        description: "High-intensity interval training to maximize calorie burn and cardiovascular fitness."
      },
      {
        id: "01uYbllyIt8",
        title: "10 Min HIIT Abs Workout",
        duration: "10:22",
        difficulty: "intermediate",
        calories: 125,
        description: "Quick and effective abs workout using HIIT principles."
      },
      {
        id: "CBWQGb4LyAM",
        title: "HIIT Cardio and Abs Workout",
        duration: "30:45",
        difficulty: "advanced",
        calories: 380,
        description: "Combine cardio and core training in this high-intensity workout."
      },
      {
        id: "U0u1-X8yZ48",
        title: "30 Min Dumbbell HIIT Workout",
        duration: "18:21",
        difficulty: "intermediate",
        calories: 280,
        description: "Add resistance to your HIIT workout with dumbbells for better strength and cardio benefits."
      },
      {
        id: "HWyFy8ftdNs",
        title: "15 Min Full Body HIIT - No Repeats",
        duration: "15:30",
        difficulty: "intermediate",
        calories: 200,
        description: "Keep things interesting with this no-repeat HIIT workout that targets your entire body."
      },
      {
        id: "XnyxRmfp8Ec",
        title: "20 Min HIIT Cardio - No Equipment",
        duration: "20:14",
        difficulty: "beginner",
        calories: 240,
        description: "Perfect beginner-friendly HIIT workout that requires no equipment."
      },
      {
        id: "zq13rZhWtpc",
        title: "25 Min HIIT Workout - Full Body",
        duration: "25:30",
        difficulty: "intermediate",
        calories: 310,
        description: "Complete full body HIIT workout to challenge all major muscle groups."
      },
      {
        id: "alYJomBsNPc",
        title: "HIIT Workout for Fat Loss",
        duration: "22:08",
        difficulty: "advanced",
        calories: 290,
        description: "Specifically designed to maximize fat burning through high intensity intervals."
      },
      // Adding 20 new HIIT videos below
      {
        id: "ml6cT4AZdqI",
        title: "Low Impact HIIT Workout - Apartment Friendly",
        duration: "20:15",
        difficulty: "beginner",
        calories: 210,
        description: "A quiet, low-impact HIIT workout perfect for apartments or when you need to be mindful of noise."
      },
      {
        id: "3K-0JpiJEgA",
        title: "HIIT Workout for Beginners | 20 Min No Equipment",
        duration: "22:30",
        difficulty: "beginner",
        calories: 245,
        description: "Perfect starter HIIT workout if you're new to high-intensity interval training."
      },
      {
        id: "UBMk30rjy0o",
        title: "HIIT & Core Workout - 30 Minutes",
        duration: "31:05",
        difficulty: "intermediate",
        calories: 355,
        description: "Combine HIIT cardio and core exercises for a complete workout that targets your abs and increases your heart rate."
      },
      {
        id: "rKkIRwEMJbg",
        title: "45 Minute Total Body HIIT Workout",
        duration: "45:22",
        difficulty: "advanced",
        calories: 520,
        description: "A challenging, extended HIIT session that will push your limits and maximize your calorie burn."
      },
      {
        id: "ZHADql9sk8o",
        title: "Morning HIIT Routine - Wake Up Workout",
        duration: "12:45",
        difficulty: "beginner",
        calories: 160,
        description: "Start your day with this energizing HIIT workout designed to boost your metabolism for the entire day."
      },
      {
        id: "xpzMJ3DQpEI",
        title: "HIIT Ladder Workout - 25 Minutes",
        duration: "26:10",
        difficulty: "intermediate",
        calories: 330,
        description: "This ladder-style HIIT workout gradually increases intensity and then scales back down for an effective fat-burning session."
      },
      {
        id: "mUYRc3VhTt8",
        title: "5 Minute HIIT Workout - Super Quick Burn",
        duration: "5:15",
        difficulty: "intermediate",
        calories: 85,
        description: "No time? No problem. This ultra-short HIIT session packs maximum effort into minimal time."
      },
      {
        id: "cZnsLVArIt8",
        title: "15 Minute HIIT Workout for Small Spaces",
        duration: "16:22",
        difficulty: "beginner",
        calories: 180,
        description: "Perfect for hotel rooms or small apartments, this compact HIIT workout requires minimal space."
      },
      {
        id: "MxfU_4q4ARM",
        title: "High Intensity Leg Day HIIT",
        duration: "35:00",
        difficulty: "advanced",
        calories: 410,
        description: "Focus on your lower body with this leg-centric HIIT workout that will build strength and endurance."
      },
      {
        id: "TkaIVKd0OSQ",
        title: "30 Day HIIT Challenge - Day 1",
        duration: "28:45",
        difficulty: "intermediate",
        calories: 320,
        description: "Start your HIIT journey with day one of this progressive 30-day challenge to transform your fitness."
      },
      {
        id: "Mvo2snJGhtM",
        title: "HIIT Boxing Workout",
        duration: "22:30",
        difficulty: "intermediate",
        calories: 310,
        description: "Combine boxing moves with HIIT principles for a fun, high-energy workout that improves coordination and stamina."
      },
      {
        id: "E0SiUVmJG8Y",
        title: "HIIT After Burn Workout",
        duration: "18:45",
        difficulty: "advanced",
        calories: 285,
        description: "Specifically designed to maximize EPOC (excess post-exercise oxygen consumption) to keep burning calories hours after your workout."
      },
      {
        id: "7nRo8lX00JQ",
        title: "HIIT for Seniors - Low Impact",
        duration: "25:10",
        difficulty: "beginner",
        calories: 220,
        description: "A gentle introduction to HIIT for seniors or those requiring lower impact options while still getting cardiovascular benefits."
      },
      {
        id: "iCQ2gC4DqJw",
        title: "HIIT Upper Body Blast",
        duration: "20:45",
        difficulty: "intermediate",
        calories: 270,
        description: "Focus on your arms, shoulders, and back with this upper-body targeted HIIT session."
      },
      {
        id: "Tz9d7By2ytQ",
        title: "EMOM HIIT Challenge",
        duration: "40:10",
        difficulty: "advanced",
        calories: 460,
        description: "Every Minute On the Minute (EMOM) format provides a structured HIIT workout that challenges your recovery capacity."
      },
      {
        id: "H2U3HwAyPSw",
        title: "HIIT for Weight Loss - 7 Day Program (Day 1)",
        duration: "32:20",
        difficulty: "intermediate",
        calories: 380,
        description: "Start your weight loss journey with this targeted HIIT program designed to maximize fat burning."
      },
      {
        id: "50kH47ZztHs",
        title: "Partner HIIT Workout - Train Together",
        duration: "28:15",
        difficulty: "intermediate",
        calories: 340,
        description: "Grab a friend and motivate each other through this partner-based HIIT workout with exercises designed for two."
      },
      {
        id: "OXr7PtYXIfs",
        title: "HIIT with Yoga Cool Down",
        duration: "34:50",
        difficulty: "intermediate",
        calories: 365,
        description: "Get the best of both worlds with an intense HIIT session followed by a calming yoga-based cool down."
      },
      {
        id: "PjHxB1JulKw",
        title: "Beach Body HIIT - Summer Ready Workout",
        duration: "24:30",
        difficulty: "advanced",
        calories: 320,
        description: "Target the areas you want to show off at the beach with this specially designed HIIT workout for summer fitness."
      },
      {
        id: "1f8yoJq9VeI",
        title: "HIIT vs LISS Hybrid Workout",
        duration: "45:00",
        difficulty: "intermediate",
        calories: 410,
        description: "Experience the benefits of both high-intensity intervals and steady-state cardio in this hybrid workout approach."
      },
      {
        id: "70tBpDD7nRQ",
        title: "HIIT Core Circuit - 6 Pack Focused",
        duration: "15:40",
        difficulty: "intermediate",
        calories: 210,
        description: "Target your abs and core with this specialized HIIT circuit designed to help define your midsection."
      }
    ],
    
    strength: [
      {
        id: "IODxDxX7oi4",
        title: "Bench Press Tutorial",
        duration: "8:24",
        difficulty: "beginner",
        calories: 90,
        description: "Learn proper bench press form with this comprehensive tutorial."
      },
      {
        id: "YaXPRqUwItQ",
        title: "Full Body Strength Workout",
        duration: "30:12",
        difficulty: "intermediate",
        calories: 310,
        description: "Complete strength training routine that targets all major muscle groups."
      },
      {
        id: "roMBGX2w7pk",
        title: "15 Min Dumbbell Workout",
        duration: "15:45",
        difficulty: "beginner",
        calories: 180,
        description: "Quick strength workout using only dumbbells - perfect for beginners."
      },
      {
        id: "LZrJsYrNhQ4",
        title: "Advanced Strength Training",
        duration: "45:30",
        difficulty: "advanced",
        calories: 420,
        description: "Challenge yourself with this intense strength training session for experienced lifters."
      },
      {
        id: "6pKC1MN3zHU",
        title: "Home Upper Body Workout",
        duration: "25:15",
        difficulty: "intermediate",
        calories: 240,
        description: "Target your upper body with this effective at-home strength routine."
      },
      {
        id: "UBMk30rjy0o",
        title: "Kettlebell Workout for Beginners",
        duration: "20:30",
        difficulty: "beginner",
        calories: 220,
        description: "Introduction to kettlebell training with fundamental movements and techniques."
      }
    ],
    
    yoga: [
      {
        id: "v7AYKMP6rOE",
        title: "Morning Yoga Flow",
        duration: "20:01",
        difficulty: "beginner",
        calories: 150,
        description: "Start your day with this energizing and gentle yoga flow sequence."
      },
      {
        id: "jsLAc-2y0bE",
        title: "Power Yoga Workout",
        duration: "30:22",
        difficulty: "intermediate",
        calories: 220,
        description: "More challenging yoga flow that builds strength and improves flexibility."
      },
      {
        id: "sTANio_2E0Q",
        title: "Relaxing Stretch Session",
        duration: "15:10",
        difficulty: "beginner",
        calories: 90,
        description: "Wind down and release tension with this calming stretch routine."
      },
      {
        id: "GLy2rYHwUqU",
        title: "Full Body Flexibility Routine",
        duration: "25:15",
        difficulty: "all",
        calories: 140,
        description: "Comprehensive stretching routine to improve overall flexibility."
      },
      {
        id: "b1H3xO3x_Js",
        title: "Yoga for Better Sleep",
        duration: "12:30",
        difficulty: "beginner",
        calories: 70,
        description: "Gentle yoga practice designed to help you relax before bedtime."
      },
      {
        id: "BPobdbmzY9o",
        title: "Yoga for Back Pain Relief",
        duration: "18:45",
        difficulty: "beginner",
        calories: 100,
        description: "Targeted yoga sequence to alleviate back pain and improve spinal health."
      }
    ],
    
    cardio: [
      {
        id: "7HF6-rNTomA",
        title: "Cardio Dance Workout",
        duration: "25:30",
        difficulty: "beginner",
        calories: 280,
        description: "Fun dance-based cardio routine that doesn't feel like exercise."
      },
      {
        id: "VWj8ZxCxrYk",
        title: "30 Minute Cardio Blast",
        duration: "30:00",
        difficulty: "intermediate",
        calories: 350,
        description: "Effective cardio workout to boost your heart rate and burn calories."
      },
      {
        id: "ml6cT4AZdqI",
        title: "Low Impact Cardio Workout",
        duration: "20:15",
        difficulty: "beginner",
        calories: 180,
        description: "Joint-friendly cardio routine that's perfect for beginners or recovery days."
      },
      {
        id: "50kH47ZztHs",
        title: "Cardio Kickboxing Workout",
        duration: "35:45",
        difficulty: "advanced",
        calories: 400,
        description: "High-energy kickboxing routine that combines martial arts and cardio."
      },
      {
        id: "jpizoUy4K9s",
        title: "Indoor Walking Workout",
        duration: "15:20",
        difficulty: "beginner",
        calories: 120,
        description: "Simple walking workout you can do at home with no equipment."
      },
      {
        id: "8DZktowJo8o",
        title: "Tabata Cardio Workout",
        duration: "22:45",
        difficulty: "intermediate",
        calories: 280,
        description: "Effective Tabata-style cardio intervals for maximum efficiency."
      }
    ]
  },
  
  // Recommended videos based on user preferences (could be customized)
  recommended: [
    "U0u1-X8yZ48",
    "v7AYKMP6rOE",
    "IODxDxX7oi4",
    "ml6cT4AZdqI"
  ],
  
  // Recently added videos
  recentlyAdded: [
    "o42lg27IBtg",
    "01uYbllyIt8",
    "CBWQGb4LyAM",
    "IODxDxX7oi4"
  ]
};

/**
 * Helper Functions
 */

// Get all videos in a flattened array
function getAllVideos() {
  const allVideos = [];
  
  // Add each category's videos to the array
  Object.keys(videoData.categories).forEach(category => {
    videoData.categories[category].forEach(video => {
      // Add category to each video object
      video.category = category;
      allVideos.push(video);
    });
  });
  
  return allVideos;
}

// Get videos by category
function getVideosByCategory(category) {
  return videoData.categories[category] || [];
}

// Get a single video by ID
function getVideoById(id) {
  // Check featured video
  if (videoData.featured.id === id) {
    return videoData.featured;
  }
  
  // Check all categories
  for (const category in videoData.categories) {
    const foundVideo = videoData.categories[category].find(video => video.id === id);
    if (foundVideo) {
      return foundVideo;
    }
  }
  
  return null; // Video not found
}

// Get featured video
function getFeaturedVideo() {
  return videoData.featured;
}

// Get recommended videos (full objects)
function getRecommendedVideos() {
  return videoData.recommended.map(id => getVideoById(id)).filter(video => video !== null);
}

// Get recently added videos (full objects)
function getRecentlyAddedVideos() {
  return videoData.recentlyAdded.map(id => getVideoById(id)).filter(video => video !== null);
}

// Add a new video
function addVideo(videoObject) {
  // Ensure the category exists
  if (!videoData.categories[videoObject.category]) {
    videoData.categories[videoObject.category] = [];
  }
  
  // Add to the appropriate category
  videoData.categories[videoObject.category].push(videoObject);
  
  // Add to recently added
  videoData.recentlyAdded.unshift(videoObject.id);
  
  // Keep recently added limited to a reasonable number
  if (videoData.recentlyAdded.length > 10) {
    videoData.recentlyAdded = videoData.recentlyAdded.slice(0, 10);
  }
  
  return videoObject;
}

// Get difficulty label for display purposes
function getDifficultyLabel(difficulty) {
  switch (difficulty) {
    case 'beginner': return 'Beginner';
    case 'intermediate': return 'Intermediate';
    case 'advanced': return 'Advanced';
    case 'all': return 'All Levels';
    default: return 'All Levels';
  }
}

// Get category label for display purposes
function getCategoryLabel(category) {
  switch (category) {
    case 'hiit': return 'HIIT';
    case 'strength': return 'Strength';
    case 'yoga': return 'Yoga';
    case 'cardio': return 'Cardio';
    default: return category.charAt(0).toUpperCase() + category.slice(1);
  }
}

// Export everything needed
window.videoData = {
  raw: videoData,
  getAllVideos,
  getVideosByCategory,
  getVideoById,
  getDifficultyLabel,
  getCategoryLabel,
  addVideo: function(videoObject) {
    // Ensure the category exists
    if (!videoData.categories[videoObject.category]) {
      videoData.categories[videoObject.category] = [];
    }
    
    // Add to the appropriate category
    videoData.categories[videoObject.category].push(videoObject);
    
    // Add to recently added
    videoData.recentlyAdded.unshift(videoObject.id);
    
    // Keep recently added limited to a reasonable number
    if (videoData.recentlyAdded.length > 10) {
      videoData.recentlyAdded = videoData.recentlyAdded.slice(0, 10);
    }
    
    return videoObject;
  }
};