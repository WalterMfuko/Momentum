<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Healthy Recipes - Momentum</title>
  <link rel="stylesheet" href="../assets/css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    body {
      font-family: 'Nunito', sans-serif;
      background-color: white;
      margin: 0;
      padding: 0;
      color: #333;
    }
    #app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .content-area {
      flex: 1;
      padding: 20px;
      padding-bottom: 80px; /* Space for bottom nav */
      max-width: 800px;
      margin: 0 auto;
    }
    .recipe-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .back-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #555;
      font-size: 0.9rem;
      margin-right: 15px;
    }
    .back-link i {
      margin-right: 5px;
    }
    .recipe-title {
      font-size: 1.5rem;
      margin: 0;
      flex-grow: 1;
      text-align: center;
    }
    .recipe-card {
      background-color: #f9f9f9;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .recipe-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    .recipe-name {
      font-size: 1.2rem;
      margin-bottom: 10px;
      color: #4CAF50;
    }
    .recipe-details {
      display: flex;
      margin-bottom: 10px;
      color: #666;
      font-size: 0.9rem;
    }
    .recipe-time, .recipe-calories {
      display: flex;
      align-items: center;
      margin-right: 15px;
    }
    .recipe-time i, .recipe-calories i {
      margin-right: 5px;
    }
    .recipe-description {
      margin-bottom: 15px;
      line-height: 1.5;
    }
    .recipe-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;
      display: block;
      width: 100%;
      text-align: center;
      text-decoration: none;
    }
    .bottom-nav {
      background-color: white;
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    .nav-button {
      text-align: center;
      padding: 10px;
      color: #555;
      text-decoration: none;
      font-size: 1.2rem;
    }
    .nav-button.active {
      color: #4CAF50;
    }
  </style>
</head>
<body>
  <div id="app">
    <main class="content-area">
      <div class="recipe-header">
        <a href="../profiles/adult/walter.html" class="back-link">
          <i class="fas fa-arrow-left"></i> Back
        </a>
        <h1 class="recipe-title">Healthy Recipes</h1>
      </div>
      <!-- Recipe Cards -->
      <div class="recipe-card">
        <img src="https://source.unsplash.com/random/800x600/?salad" alt="Mediterranean Salad" class="recipe-img">
        <h2 class="recipe-name">Mediterranean Quinoa Salad</h2>
        <div class="recipe-details">
          <div class="recipe-time">
            <i class="fas fa-clock"></i> 15 mins
          </div>
          <div class="recipe-calories">
            <i class="fas fa-fire"></i> 320 calories
          </div>
        </div>
        <p class="recipe-description">A protein-packed salad with fresh vegetables, feta cheese, and a zesty lemon dressing. Perfect for lunch or as a light dinner.</p>
        <a href="#" class="recipe-button">View Recipe</a>
      </div>
      <div class="recipe-card">
        <img src="https://source.unsplash.com/random/800x600/?chicken" alt="Grilled Chicken" class="recipe-img">
        <h2 class="recipe-name">Herb Grilled Chicken</h2>
        <div class="recipe-details">
          <div class="recipe-time">
            <i class="fas fa-clock"></i> 25 mins
          </div>
          <div class="recipe-calories">
            <i class="fas fa-fire"></i> 280 calories
          </div>
        </div>
        <p class="recipe-description">Juicy grilled chicken breasts with a flavorful herb marinade. Serve with a side of steamed vegetables for a complete meal.</p>
        <a href="#" class="recipe-button">View Recipe</a>
      </div>
      <div class="recipe-card">
        <img src="https://source.unsplash.com/random/800x600/?smoothie" alt="Protein Smoothie" class="recipe-img">
        <h2 class="recipe-name">Post-Workout Protein Smoothie</h2>
        <div class="recipe-details">
          <div class="recipe-time">
            <i class="fas fa-clock"></i> 5 mins
          </div>
          <div class="recipe-calories">
            <i class="fas fa-fire"></i> 240 calories
          </div>
        </div>
        <p class="recipe-description">A refreshing blend of banana, berries, Greek yogurt, and protein powder. Perfect for muscle recovery after intense workouts.</p>
        <a href="#" class="recipe-button">View Recipe</a>
      </div>
    </main>
  </div>
  <!-- Bottom Navigation -->
  <script src="../assets/js/navigation.js"></script>
  <script>
    /**
     * Momentum Universal Navigation System
     */

    // Define all navigation configurations in one place
    const navigationConfig = {
      // Adult navigation
      adult: [
        { id: 'home', icon: 'fa-home', label: 'Home', basePath: '/profiles/adult/' },
        { id: 'dashboard', icon: 'fa-chart-line', label: 'Dashboard', path: '/workouts/dashboard.html' },
        { id: 'workouts', icon: 'fa-dumbbell', label: 'Workouts', path: '/workouts/index.html' },
        { id: 'recipes', icon: 'fa-utensils', label: 'Recipes', path: '/workouts/recipes.html' },
        { id: 'videos', icon: 'fa-video', label: 'Videos', path: '/workouts/videos.html' }
      ],
      
      // Kids navigation
      kids: [
        { id: 'home', icon: 'fa-home', label: 'Home', basePath: '/profiles/kids/' },
        { id: 'progress', icon: 'fa-chart-line', label: 'Progress', path: '/workouts/dashboard.html' },
        { id: 'activities', icon: 'fa-heart', label: 'Activities', path: '/workouts/index.html' },
        { id: 'rewards', icon: 'fa-gift', label: 'Rewards', path: '/workouts/recipes.html' },
        { id: 'profiles', icon: 'fa-users', label: 'Profiles', path: '/profiles/kids/index.html' }
      ]
    };

    // Auto-detect user type and active page based on URL
    function detectUserAndPage() {
      const path = window.location.pathname.toLowerCase();
      
      // Determine user type
      let userType = 'adult'; // default
      if (path.includes('/profiles/kids/')) {
        userType = 'kids';
      }
      
      // Determine active page
      let activePageId = 'home'; // default
      let username = null;
      
      if (path.includes('/workouts/index.html')) {
        activePageId = userType === 'adult' ? 'workouts' : 'activities';
      } else if (path.includes('/workouts/dashboard.html')) {
        activePageId = userType === 'adult' ? 'dashboard' : 'progress';
      } else if (path.includes('/workouts/recipes.html')) {
        activePageId = userType === 'adult' ? 'recipes' : 'rewards';
      } else if (path.includes('/workouts/videos.html')) {
        activePageId = 'videos';
      } else if (path.includes('/profiles/')) {
        activePageId = 'home';
        // Extract username from path
        const matches = path.match(/\/profiles\/(kids|adult)\/([a-z]+)\.html/);
        if (matches && matches.length > 2) {
          username = matches[2];
        }
      }
      
      return { userType, activePageId, username };
    }

    // Universal navigation insertion
    function insertUniversalNavigation() {
      // Auto-detect user type and active page
      const { userType, activePageId, username } = detectUserAndPage();
      
      // Call the regular insertNavigation with detected parameters
      insertNavigation(userType, activePageId, username);
      
      // Add a class to body for styling based on user type
      document.body.classList.add(userType);
    }

    // Original navigation insertion function
    function insertNavigation(userType, activePageId, username = null) {
      // Get the correct navigation configuration
      const navItems = navigationConfig[userType] || navigationConfig.adult;
      
      // Create the navigation HTML
      let navHTML = '<nav class="bottom-nav">';
      
      navItems.forEach(item => {
        // Determine if this item is active
        const isActive = (item.id === activePageId) ? 'active' : '';
        
        // Determine the correct path
        let itemPath = item.path;
        
        // Handle special case for home pages which depend on username
        if (item.id === 'home' && username) {
          itemPath = `${item.basePath}${username.toLowerCase()}.html`;
        }
        
        // Create the navigation item HTML
        navHTML += `
          <a href="${getRelativePath(itemPath)}" class="nav-button ${isActive}">
            <i class="nav-icon fas ${item.icon}"></i>
            <span>${item.label}</span>
          </a>
        `;
      });
      
      navHTML += '</nav>';
      
      // Insert the navigation into the page
      document.write(navHTML);
    }

    // Helper function to convert absolute paths to relative
    function getRelativePath(absolutePath) {
      // Remove leading slash if present
      let path = absolutePath.startsWith('/') ? absolutePath.substring(1) : absolutePath;
      
      // Get the current path depth
      const currentPath = window.location.pathname;
      const pathParts = currentPath.split('/').filter(part => part.length > 0);
      
      // Adjust for depth (each level needs ../)
      if (pathParts.length > 1) { // If we're at least one folder deep
        // Count folders, but ignore the file name
        const folderDepth = pathParts.length - 1;
        path = '../'.repeat(folderDepth) + path;
      }
      
      return path;
    }

    // Auto-initialize when the DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      // If the body has a data-no-nav attribute, don't add navigation
      if (document.body.getAttribute('data-no-nav') !== 'true') {
        // Check if navigation is already in the page
        if (!document.querySelector('.bottom-nav')) {
          // Create a container for the navigation if it doesn't exist
          const navContainer = document.createElement('div');
          navContainer.id = 'nav-container';
          document.body.appendChild(navContainer);
          
          // Insert the navigation
          const script = document.createElement('script');
          script.textContent = 'insertUniversalNavigation();';
          navContainer.appendChild(script);
        }
      }
    });
  </script>
</body>
</html>