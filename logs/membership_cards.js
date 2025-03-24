/**
 * Membership Card Manager
 * Manages multiple membership cards and allows switching between them
 */

class MembershipCardManager {
  constructor(userId) {
    this.userId = userId;
    this.cardsKey = `membership_cards_${userId}`;
    this.activeCardKey = `active_card_${userId}`;
  }
  
  /**
   * Get all saved membership cards
   */
  getAllCards() {
    const cards = localStorage.getItem(this.cardsKey);
    return cards ? JSON.parse(cards) : [];
  }
  
  /**
   * Add a new membership card
   * @param {Object} card - Card data object
   */
  addCard(card) {
    if (!card || !card.name) return false;
    
    const cards = this.getAllCards();
    
    // Create a new card with ID if it doesn't have one
    const newCard = {
      ...card,
      id: card.id || Date.now().toString(),
      dateAdded: card.dateAdded || new Date().toISOString()
    };
    
    cards.push(newCard);
    localStorage.setItem(this.cardsKey, JSON.stringify(cards));
    
    // If this is the first card, make it active
    if (cards.length === 1) {
      this.setActiveCard(newCard.id);
    }
    
    return newCard.id;
  }
  
  /**
   * Update an existing card
   * @param {string} cardId - ID of the card to update
   * @param {Object} updates - Properties to update
   */
  updateCard(cardId, updates) {
    const cards = this.getAllCards();
    const index = cards.findIndex(card => card.id === cardId);
    
    if (index === -1) return false;
    
    cards[index] = { ...cards[index], ...updates };
    localStorage.setItem(this.cardsKey, JSON.stringify(cards));
    return true;
  }
  
  /**
   * Delete a card
   * @param {string} cardId - ID of the card to delete
   */
  deleteCard(cardId) {
    const cards = this.getAllCards();
    const newCards = cards.filter(card => card.id !== cardId);
    
    if (newCards.length === cards.length) return false; // Card not found
    
    localStorage.setItem(this.cardsKey, JSON.stringify(newCards));
    
    // If we deleted the active card, set a new active card
    if (this.getActiveCardId() === cardId && newCards.length > 0) {
      this.setActiveCard(newCards[0].id);
    }
    
    return true;
  }
  
  /**
   * Set the active card
   * @param {string} cardId - ID of the card to make active
   */
  setActiveCard(cardId) {
    const cards = this.getAllCards();
    const cardExists = cards.some(card => card.id === cardId);
    
    if (!cardExists) return false;
    
    localStorage.setItem(this.activeCardKey, cardId);
    return true;
  }
  
  /**
   * Get the active card ID
   */
  getActiveCardId() {
    return localStorage.getItem(this.activeCardKey);
  }
  
  /**
   * Get the active card object
   */
  getActiveCard() {
    const activeId = this.getActiveCardId();
    if (!activeId) return null;
    
    const cards = this.getAllCards();
    return cards.find(card => card.id === activeId) || null;
  }
  
  /**
   * Get the next card in the list (for carousel)
   */
  getNextCard() {
    const cards = this.getAllCards();
    if (cards.length <= 1) return null;
    
    const activeId = this.getActiveCardId();
    const currentIndex = cards.findIndex(card => card.id === activeId);
    
    if (currentIndex === -1) return cards[0];
    
    const nextIndex = (currentIndex + 1) % cards.length;
    return cards[nextIndex];
  }
  
  /**
   * Get the previous card in the list (for carousel)
   */
  getPreviousCard() {
    const cards = this.getAllCards();
    if (cards.length <= 1) return null;
    
    const activeId = this.getActiveCardId();
    const currentIndex = cards.findIndex(card => card.id === activeId);
    
    if (currentIndex === -1) return cards[0];
    
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    return cards[prevIndex];
  }
}

// Export the class if we're in a Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MembershipCardManager;
}