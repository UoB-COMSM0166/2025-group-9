// Manages the overall game state resets the game when needed
class GameManager {
    constructor(gameController, uiManager, labX, labY) {
        this.state = "home"; 
        this.gameController = gameController;
        this.difficulty = "hard"; // deafault 
    }

    startGame(difficulty) {
      console.log("Game Started!", difficulty);
      this.difficulty = difficulty;
      this.state = "playing";
      this.gameController.setDifficulty(difficulty); 
      this.gameController.timeManager.resetTime();

      if (difficulty === "hard") {
        loadHardPlatforms();
        lift = new Lift(869, 700, 89, 5, 2, 227, 750); // hard level lift
      } else {
        loadEasyPlatforms();
        lift = new Lift(500, 600, 80, 5, 1.5, 300, 600); // easy lift (example)
      }
    }

    getDifficulty() {
      return this.difficulty;
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
        console.log("Pick difficulty");
        this.state = "difficulty";
      }

    
    startGame(difficulty) {
        console.log(`Game Started! Difficulty: ${difficulty}`);
        this.state = "playing";
        this.selectedDifficulty = difficulty;  
        this.gameController.timeManager.resetTime();
      }

      getDifficulty() {
        return this.selectedDifficulty;
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