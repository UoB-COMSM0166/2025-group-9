// Manages the overall game state resets the game when needed
class GameManager {
    constructor(gameController, uiManager, labX, labY) {
        this.state = "home"; // Possible states: "home", "playing", "gameOver", "won"
        this.gameController = gameController;
        this.uiManager = uiManager; 

        this.uiManager.showHomeScreen = true;
        this.uiManager.showDifficultyScreen = false;
        this.uiManager.showGameOverBanner = false;
        this.uiManager.showWinBanner = false;
    }

    // monitor game status while game is running and checks for win/lost
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
    
        this.uiManager.showHomeScreen = false;
        this.uiManager.showDifficultyScreen = true;
      }

    
    startGame() {
        console.log("Game Started!");
        this.state = "playing";

        this.uiManager.showHomeScreen = false;
        this.uiManager.showStartScreen = false;
        this.uiManager.showDifficultyScreen = false;
        this.uiManager.showGameOverBanner = false;
        this.uiManager.showWinBanner = false;

        this.gameController.timeManager.resetTime();
    }

    triggerGameOver() {
        console.log("Game Over!");
        this.state = "gameOver";
        this.uiManager.showGameOverBanner = true;
    }

    triggerWin() {
        console.log("All components collected & players reached the lab! YOU WIN!");
        this.state = "won";
        this.uiManager.showWinBanner = true;
    }

    
    resetGame() {
        console.log("Resetting game...");
        this.state = "home";

        this.uiManager.showHomeScreen = true;
        this.uiManager.showDifficultyScreen = false;
        this.uiManager.showWinBanner = false;
        this.uiManager.showGameOverBanner = false; 

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