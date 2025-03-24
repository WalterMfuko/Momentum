/**
 * Protein Log System
 * Tracks protein intake history and provides analytics
 */

class ProteinLogger {
  constructor(userId) {
    this.userId = userId;
    this.logKey = `protein_log_${userId}`;
  }
  
  /**
   * Add a protein entry to the log
   * @param {number} amount - Amount of protein in grams
   * @param {string} source - Source of protein (optional)
   */
  logProtein(amount, source = '') {
    if (isNaN(amount) || amount <= 0) return false;
    
    const logs = this.getLogs();
    const now = new Date();
    
    logs.push({
      timestamp: now.toISOString(),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      amount: amount,
      source: source
    });
    
    localStorage.setItem(this.logKey, JSON.stringify(logs));
    return true;
  }
  
  /**
   * Get all protein logs
   */
  getLogs() {
    const logs = localStorage.getItem(this.logKey);
    return logs ? JSON.parse(logs) : [];
  }
  
  /**
   * Get logs for a specific date
   * @param {string} date - Date in local format
   */
  getLogsByDate(date) {
    const logs = this.getLogs();
    return logs.filter(log => log.date === date);
  }
  
  /**
   * Get logs for today
   */
  getTodayLogs() {
    const today = new Date().toLocaleDateString();
    return this.getLogsByDate(today);
  }
  
  /**
   * Get total protein for today
   */
  getTodayTotal() {
    const todayLogs = this.getTodayLogs();
    return todayLogs.reduce((total, log) => total + log.amount, 0);
  }
  
  /**
   * Reset today's logs
   */
  resetToday() {
    const logs = this.getLogs();
    const today = new Date().toLocaleDateString();
    const filteredLogs = logs.filter(log => log.date !== today);
    localStorage.setItem(this.logKey, JSON.stringify(filteredLogs));
  }
  
  /**
   * Get daily totals for the past week
   */
  getWeeklyTotals() {
    const logs = this.getLogs();
    const result = {};
    
    // Get dates for the past 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString();
      result[dateStr] = 0;
    }
    
    // Sum protein amounts for each day
    logs.forEach(log => {
      if (result.hasOwnProperty(log.date)) {
        result[log.date] += log.amount;
      }
    });
    
    return result;
  }
}

// Export the class if we're in a Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProteinLogger;
}