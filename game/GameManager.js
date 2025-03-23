// Manages the overall game state resets the game when needed
class GameManager {
    constructor(gameController, uiManager, labX, labY) {
        this.state = "home"; // Possible states: "home", "playing", "gameOver", "won"
        this.gameController = gameController;
    }

    updateGameStatus() {
        if (this.state === "playing") {
            if (this.gameController.isGameOver()) {
                this.triggerGameOver();
            } else if (this.gameController.isGameWin()) {
                this.triggerWin();
            }
        }
    }

    goToDifficultyScreen() {
        console.log("pick difficulty");
        this.state = "difficulty";
      }

    
    startGame() {
        console.log("Game Started!");
        this.state = "playing";
        this.gameController.timeManager.resetTime();
    }

    triggerGameOver() {
        console.log("Game Over!");
        this.state = "gameOver";
    }

    triggerWin() {
        console.log("All components collected & players reached the lab! YOU WIN!");
        this.state = "won";
    }

    
    resetGame() {
        console.log("Resetting game...");
        this.state = "home";
        this.gameController.resetGame(); // resetting all game components
    }

    isPlaying() {
        return this.state === "playing";
      }
    
      getState() {
        return this.state;
      }
    
      setState(newState) {
        this.state = newState;
      }
}