/**
 * Momentum Universal Navigation System
 */

// Define all navigation configurations in one place
const navigationConfig = {
  // Adult navigation
  adult: [
    { id: 'home', icon: 'fa-home', label: 'Home', basePath: 'profiles/adult/' },
    { id: 'dashboard', icon: 'fa-chart-line', label: 'Dashboard', path: 'workouts/dashboard.html' },
    { id: 'workouts', icon: 'fa-dumbbell', label: 'Workouts', path: 'workouts/index.html' },
    { id: 'recipes', icon: 'fa-utensils', label: 'Recipes', path: 'workouts/recipes.html' },
    { id: 'videos', icon: 'fa-video', label: 'Videos', path: 'workouts/videos.html' }
  ],
  
  // Malachi navigation
  Malachi: [
    { id: 'home', icon: 'fa-home', label: 'Home', basePath: 'momentum-kids-dashboard\malachi\home.html' },
    { id: 'progress', icon: 'fa-chart-line', label: 'Progress', path: 'momentum-kids-dashboard\malachi\dashboard.html' },
    { id: 'activities', icon: 'fa-heart', label: 'Activities', path: 'momentum-kids-dashboard\malachi\activities.html' },
    { id: 'rewards', icon: 'fa-gift', label: 'Rewards', path: 'momentum-kids-dashboard\malachi\rewards.html' },
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
  document.body.insertAdjacentHTML('beforeend', navHTML);
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
      // Insert navigation
      insertUniversalNavigation();
    }
  }
});