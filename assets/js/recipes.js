/**
 * Momentum Fitness - Recipe System
 * This script handles loading and displaying recipes
 */

// Recipe Database
const recipes = [
  {
    id: 1,
    title: 'Grilled Chicken Salad',
    image: 'https://source.unsplash.com/random/300x200/?chicken-salad',
    description: 'A protein-packed salad with grilled chicken, mixed greens, and light vinaigrette.',
    prepTime: 25,
    calories: 320,
    protein: 32,
    carbs: 12,
    fat: 15,
    rating: 4.8,
    tags: ['High Protein', 'Low Carb', 'Lunch', 'Dinner'],
    ingredients: [
      '6 oz chicken breast',
      '2 cups mixed greens',
      '1/4 cup cherry tomatoes, halved',
      '1/4 cucumber, sliced',
      '1 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Season chicken breast with salt and pepper',
      'Grill chicken until fully cooked (165°F internal temperature)',
      'Let chicken rest for 5 minutes, then slice',
      'Combine greens, tomatoes, and cucumber in a bowl',
      'Whisk olive oil and balsamic vinegar to make dressing',
      'Top salad with sliced chicken and drizzle with dressing'
    ]
  },
  {
    id: 2,
    title: 'Avocado Toast with Poached Egg',
    image: 'https://source.unsplash.com/random/300x200/?avocado-toast',
    description: 'Simple yet nutritious breakfast with whole grain toast, creamy avocado, and protein-rich poached egg.',
    prepTime: 15,
    calories: 290,
    protein: 12,
    carbs: 25,
    fat: 18,
    rating: 4.5,
    tags: ['Vegetarian', 'Breakfast', 'Quick Meals'],
    ingredients: [
      '1 slice whole grain bread',
      '1/2 ripe avocado',
      '1 egg',
      '1 tsp lemon juice',
      'Red pepper flakes (optional)',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Toast the bread until golden brown',
      'Mash avocado in a bowl with lemon juice, salt and pepper',
      'Spread avocado mixture on toast',
      'Poach egg in simmering water for 3-4 minutes',
      'Top toast with poached egg',
      'Sprinkle with red pepper flakes if desired'
    ]
  },
  {
    id: 3,
    title: 'Lemon Garlic Baked Salmon',
    image: 'https://source.unsplash.com/random/300x200/?salmon',
    description: 'Tender baked salmon fillet with lemon and garlic, perfect for a healthy dinner option.',
    prepTime: 30,
    calories: 380,
    protein: 36,
    carbs: 4,
    fat: 22,
    rating: 4.9,
    tags: ['High Protein', 'Low Carb', 'Dinner', 'Omega-3'],
    ingredients: [
      '6 oz salmon fillet',
      '1 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 lemon, sliced',
      '1 tsp dried dill',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 375°F',
      'Place salmon on a baking sheet lined with parchment paper',
      'Drizzle with olive oil and sprinkle with garlic',
      'Top with lemon slices and dill',
      'Season with salt and pepper',
      'Bake for 15-20 minutes until salmon flakes easily with a fork'
    ]
  },
  {
    id: 4,
    title: 'Berry Protein Smoothie Bowl',
    image: 'https://source.unsplash.com/random/300x200/?smoothie-bowl',
    description: 'A vibrant smoothie bowl packed with antioxidants, protein, and topped with granola and fresh fruit.',
    prepTime: 10,
    calories: 320,
    protein: 24,
    carbs: 42,
    fat: 8,
    rating: 4.7,
    tags: ['Vegetarian', 'Breakfast', 'High Protein'],
    ingredients: [
      '1 cup mixed berries (strawberries, blueberries, raspberries)',
      '1 banana, frozen',
      '1 scoop vanilla protein powder',
      '1/4 cup Greek yogurt',
      '1/4 cup almond milk',
      '1 tbsp chia seeds',
      '2 tbsp granola for topping',
      'Fresh berries for topping'
    ],
    instructions: [
      'Blend berries, banana, protein powder, yogurt, and almond milk until smooth',
      'Pour into a bowl (mixture should be thick)',
      'Top with chia seeds, granola, and fresh berries'
    ]
  },
  {
    id: 5,
    title: 'Chicken and Vegetable Stir Fry',
    image: 'https://source.unsplash.com/random/300x200/?stir-fry',
    description: 'Quick and nutritious stir fry with lean protein and colorful vegetables.',
    prepTime: 20,
    calories: 340,
    protein: 28,
    carbs: 24,
    fat: 14,
    rating: 4.6,
    tags: ['Quick Meals', 'Dinner', 'High Protein'],
    ingredients: [
      '4 oz chicken breast, sliced',
      '1 cup broccoli florets',
      '1 bell pepper, sliced',
      '1 carrot, julienned',
      '2 cloves garlic, minced',
      '1 tbsp ginger, grated',
      '2 tbsp low-sodium soy sauce',
      '1 tbsp sesame oil',
      '1 tsp honey'
    ],
    instructions: [
      'Heat sesame oil in a wok or large pan over medium-high heat',
      'Add chicken and cook until no longer pink, about 5 minutes',
      'Add garlic and ginger, stir for 30 seconds',
      'Add vegetables and stir fry for 3-4 minutes until crisp-tender',
      'Mix soy sauce and honey, then add to the pan',
      'Stir until everything is coated and heated through'
    ]
  },
  {
    id: 6,
    title: 'Greek Yogurt with Honey and Nuts',
    image: 'https://source.unsplash.com/random/300x200/?greek-yogurt',
    description: 'Simple, protein-rich breakfast or snack with creamy yogurt, natural sweetness, and crunchy nuts.',
    prepTime: 5,
    calories: 280,
    protein: 20,
    carbs: 28,
    fat: 12,
    rating: 4.3,
    tags: ['High Protein', 'Breakfast', 'Snack', 'Quick Meals'],
    ingredients: [
      '1 cup Greek yogurt',
      '1 tbsp honey',
      '2 tbsp mixed nuts, chopped',
      '1/2 tsp cinnamon',
      'Fresh berries (optional)'
    ],
    instructions: [
      'Add yogurt to a bowl',
      'Drizzle with honey',
      'Top with chopped nuts and cinnamon',
      'Add fresh berries if desired'
    ]
  }
];

// Add more recipes here as needed
// Recipe 7, 8, etc.

// Add CSS styles to the document
function addRecipeStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Recipe page styling */
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0 0 80px 0;
      color: #333;
    }
    
    .page-header {
      background: linear-gradient(to right, #4CAF50, #2E7D32);
      color: white;
      padding: 20px;
      text-align: center;
      position: relative;
    }
    
    .page-title {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
    }
    
    .recipe-categories {
      display: flex;
      overflow-x: auto;
      padding: 15px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .category-btn {
      background-color: #f0f0f0;
      border: none;
      padding: 8px 15px;
      margin-right: 10px;
      border-radius: 20px;
      white-space: nowrap;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s;
    }
    
    .category-btn.active {
      background-color: #4CAF50;
      color: white;
    }
    
    .recipe-container {
      padding: 15px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .recipe-card {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
      cursor: pointer;
    }
    
    .recipe-card:hover {
      transform: translateY(-5px);
    }
    
    .recipe-image {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    
    .recipe-content {
      padding: 15px;
    }
    
    .recipe-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 10px;
    }
    
    .recipe-tag {
      background-color: #f0f0f0;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.7rem;
      color: #666;
    }
    
    .recipe-title {
      margin: 0 0 8px 0;
      font-size: 1.2rem;
    }
    
    .recipe-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #666;
    }
    
    .recipe-rating {
      display: flex;
      align-items: center;
      color: #FFB300;
      font-weight: bold;
    }
    
    .recipe-rating i {
      margin-right: 3px;
    }
    
    .recipe-duration {
      display: flex;
      align-items: center;
    }
    
    .recipe-duration i {
      margin-right: 3px;
    }
    
    .search-bar {
      padding: 15px;
      display: flex;
      background-color: white;
      border-bottom: 1px solid #eee;
    }
    
    .search-input {
      flex-grow: 1;
      padding: 10px 15px;
      border: 1px solid #ddd;
      border-radius: 25px;
      font-size: 1rem;
    }
    
    /* Recipe detail modal */
    .recipe-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.7);
      z-index: 1000;
      overflow-y: auto;
    }
    
    .modal-content {
      background-color: white;
      margin: 5% auto;
      width: 90%;
      max-width: 800px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
    }
    
    .modal-header {
      position: relative;
    }
    
    .modal-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    
    .modal-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: rgba(0,0,0,0.5);
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
    }
    
    .modal-body {
      padding: 20px;
    }
    
    .modal-title {
      font-size: 1.8rem;
      margin: 0 0 10px 0;
    }
    
    .modal-description {
      color: #666;
      margin-bottom: 20px;
    }
    
    .nutrition-info {
      display: flex;
      justify-content: space-between;
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    
    .nutrition-item {
      text-align: center;
    }
    
    .nutrition-value {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .nutrition-label {
      font-size: 0.8rem;
      color: #666;
    }
    
    .ingredients-section, .instructions-section {
      margin-bottom: 20px;
    }
    
    .section-title {
      font-size: 1.3rem;
      margin-bottom: 10px;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 5px;
      display: inline-block;
    }
    
    .ingredients-list {
      list-style-type: none;
      padding: 0;
    }
    
    .ingredients-list li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    
    .instructions-list {
      padding-left: 20px;
    }
    
    .instructions-list li {
      margin-bottom: 10px;
    }
    
    .loading-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }
    
    .loading-spinner:after {
      content: " ";
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 6px solid #4CAF50;
      border-color: #4CAF50 transparent #4CAF50 transparent;
      animation: spinner 1.2s linear infinite;
    }
    
    @keyframes spinner {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleElement);
}

// Generate HTML for a single recipe card
function createRecipeCard(recipe) {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <div class="recipe-content">
        <div class="recipe-tags">
          ${recipe.tags.slice(0, 3).map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="recipe-title">${recipe.title}</h3>
        <div class="recipe-info">
          <div class="recipe-rating">
            <i class="fas fa-star"></i>
            <span>${recipe.rating}</span>
          </div>
          <div class="recipe-duration">
            <i class="far fa-clock"></i>
            <span>${recipe.prepTime} mins</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Generate HTML for recipe details modal
function createRecipeModal(recipe) {
  return `
    <div class="recipe-modal" id="recipe-modal-${recipe.id}">
      <div class="modal-content">
        <div class="modal-header">
          <img src="${recipe.image}" alt="${recipe.title}" class="modal-image">
          <div class="modal-close">&times;</div>
        </div>
        <div class="modal-body">
          <h2 class="modal-title">${recipe.title}</h2>
          <p class="modal-description">${recipe.description}</p>
          
          <div class="nutrition-info">
            <div class="nutrition-item">
              <div class="nutrition-value">${recipe.calories}</div>
              <div class="nutrition-label">Calories</div>
            </div>
            <div class="nutrition-item">
              <div class="nutrition-value">${recipe.protein}g</div>
              <div class="nutrition-label">Protein</div>
            </div>
            <div class="nutrition-item">
              <div class="nutrition-value">${recipe.carbs}g</div>
              <div class="nutrition-label">Carbs</div>
            </div>
            <div class="nutrition-item">
              <div class="nutrition-value">${recipe.fat}g</div>
              <div class="nutrition-label">Fat</div>
            </div>
            <div class="nutrition-item">
              <div class="nutrition-value">${recipe.prepTime}</div>
              <div class="nutrition-label">Minutes</div>
            </div>
          </div>
          
          <div class="ingredients-section">
            <h3 class="section-title">Ingredients</h3>
            <ul class="ingredients-list">
              ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
          </div>
          
          <div class="instructions-section">
            <h3 class="section-title">Instructions</h3>
            <ol class="instructions-list">
              ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Filter recipes by tag or search term
function filterRecipes(searchTerm = '', activeTag = 'All Recipes') {
  return recipes.filter(recipe => {
    // Check if recipe matches search term
    const matchesSearch = searchTerm === '' || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Check if recipe matches active tag
    const matchesTag = activeTag === 'All Recipes' || recipe.tags.includes(activeTag);
    
    return matchesSearch && matchesTag;
  });
}

// Initialize recipe page
function initializeRecipePage() {
  const recipeContainer = document.getElementById('recipe-container');
  if (!recipeContainer) return;
  
  // Add styles first
  addRecipeStyles();
  
  // Add FontAwesome for icons if not already included
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(linkElement);
  }
  
  // Create page structure
  recipeContainer.innerHTML = `
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="Search recipes...">
    </div>
    
    <div class="recipe-categories">
      <button class="category-btn active">All Recipes</button>
      <button class="category-btn">High Protein</button>
      <button class="category-btn">Low Carb</button>
      <button class="category-btn">Vegetarian</button>
      <button class="category-btn">Quick Meals</button>
      <button class="category-btn">Breakfast</button>
      <button class="category-btn">Lunch</button>
      <button class="category-btn">Dinner</button>
    </div>
    
    <div class="recipe-grid">
      <div class="loading-spinner"></div>
    </div>
  `;
  
  // Simulate loading (to show the spinner)
  setTimeout(() => {
    // Load all recipes initially
    displayRecipes(recipes);
    
    // Setup event listeners for filtering
    setupEventListeners();
    
    // Create modals for each recipe
    recipes.forEach(recipe => {
      document.body.insertAdjacentHTML('beforeend', createRecipeModal(recipe));
    });
  }, 800);
}

// Display recipes in the grid
function displayRecipes(recipesToShow) {
  const recipeGrid = document.querySelector('.recipe-grid');
  
  if (recipesToShow.length === 0) {
    recipeGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 30px;">
        <h3>No recipes found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }
  
  // Generate HTML for all recipe cards
  recipeGrid.innerHTML = recipesToShow.map(recipe => createRecipeCard(recipe)).join('');
  
  // Add click event to each recipe card
  document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', function() {
      const recipeId = this.getAttribute('data-id');
      document.getElementById(`recipe-modal-${recipeId}`).style.display = 'block';
    });
  });
  
  // Add close button functionality to all modals
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      this.closest('.recipe-modal').style.display = 'none';
    });
  });
  
  // Close modal when clicking outside of content
  document.querySelectorAll('.recipe-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
      }
    });
  });
}

// Setup event listeners for search and filters
function setupEventListeners() {
  // Category button clicks
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Get current search term
      const searchTerm = document.querySelector('.search-input').value;
      
      // Filter and display recipes
      const filteredRecipes = filterRecipes(searchTerm, this.textContent);
      displayRecipes(filteredRecipes);
    });
  });
  
  // Search input
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', function() {
    // Get active category
    const activeCategory = document.querySelector('.category-btn.active').textContent;
    
    // Filter and display recipes
    const filteredRecipes = filterRecipes(this.value, activeCategory);
    displayRecipes(filteredRecipes);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeRecipePage);