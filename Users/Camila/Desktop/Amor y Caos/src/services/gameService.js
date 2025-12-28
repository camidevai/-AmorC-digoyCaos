// Simple in-memory game service for real-time voting
class GameService {
    constructor() {
        this.currentQuestion = 0;
        this.votes = {};
        this.gameState = 'waiting'; // waiting, voting, results
        this.listeners = [];
    }

    // Subscribe to changes
    subscribe(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(cb => cb !== callback);
        };
    }

    // Notify all listeners
    notify() {
        this.listeners.forEach(callback => callback(this.getState()));
    }

    // Get current state
    getState() {
        return {
            currentQuestion: this.currentQuestion,
            votes: this.votes,
            gameState: this.gameState,
            totalVotes: Object.values(this.votes).reduce((sum, count) => sum + count, 0)
        };
    }

    // Start a new question
    startQuestion(questionIndex) {
        this.currentQuestion = questionIndex;
        this.votes = { true: 0, false: 0 };
        this.gameState = 'voting';
        this.notify();
    }

    // Submit a vote
    vote(answer) {
        if (this.gameState !== 'voting') return false;
        
        const key = answer.toString();
        this.votes[key] = (this.votes[key] || 0) + 1;
        this.notify();
        return true;
    }

    // Show results
    showResults() {
        this.gameState = 'results';
        this.notify();
    }

    // Reset game
    reset() {
        this.currentQuestion = 0;
        this.votes = {};
        this.gameState = 'waiting';
        this.notify();
    }

    // Get vote percentage
    getPercentages() {
        const total = this.getState().totalVotes;
        if (total === 0) return { true: 0, false: 0 };
        
        return {
            true: Math.round((this.votes.true || 0) / total * 100),
            false: Math.round((this.votes.false || 0) / total * 100)
        };
    }
}

// Singleton instance
const gameService = new GameService();

export default gameService;

