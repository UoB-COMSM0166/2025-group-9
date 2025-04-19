// Manages the overall game state resets the game when needed
class GameManager {
    constructor(gameController, uiManager, labX, labY) {
        this.state = "home"; 
        this.gameController = gameController;
        this.difficulty = "hard"; // deafault 
    
    }

    startGame(difficulty) {
      console.log("Game Started!", difficulty);
      this.selectedDifficulty = difficulty; 
      this.state = "playing";
      this.gameController.setDifficulty(difficulty); 
      this.gameController.timeManager.resetTime();
/*
      // temp player
      player = {
        x: 750,
        y: 550,
        width: 20,
        height: 50,
        velocityX: 0,
        velocityY: 0,
        speed: 2,
        jumpPower: -12,
        onPlatform: false
      };
*/
      if (difficulty === "hard") {
        loadHardPlatforms();
      } else {
        loadEasyPlatforms();
      }
    }

    getDifficulty() {
      return this.selectedDifficulty;
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