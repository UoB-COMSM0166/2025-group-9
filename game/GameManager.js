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
    
      // Reset player positions
      chemistryPlayer.resetPlayerPosition(650 + xOffset, 650 + yOffset);
      botanyPlayer.resetPlayerPosition(750 + xOffset, 650 + yOffset);
    
      if (difficulty === "hard") {
        loadHardPlatforms();
        gameLoop.setPlatforms(platforms);
        gameLoop.lift = lift;
        this.gameController.timeManager.resetTime();
      } else {
        loadEasyPlatforms();
        gameLoop.setPlatforms(platforms);
        gameLoop.lift = lift;
        showLiftPopup = true;
        liftPopupDismissed = false;
        startTimerAfterPopup = true;
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
      this.selectedDifficulty = null;
    
      // Reset the game controller (ingredients, lab, timer, etc.)
      this.gameController.resetGame();
    
      // Reset puzzle progress
      chemistryPuzzle = new ChemistryPuzzle(gameLoop.images);
      botanyPuzzle = new BotanyPuzzle(gameLoop.images);
      gameLoop.chemistryPuzzle = chemistryPuzzle;
      gameLoop.botanyPuzzle = botanyPuzzle;
      gameLoop.chemistryPlayer = chemistryPlayer;
      gameLoop.botanyPlayer = botanyPlayer;
      gameLoop.gameController = this.gameController;
    
      // Reset player positions
      chemistryPlayer.resetPlayerPosition(650 + xOffset, 650 + yOffset);
      botanyPlayer.resetPlayerPosition(750 + xOffset, 650 + yOffset);
    
      // Reset lift popup logic for easy mode
      showLiftPopup = false;
      liftPopupDismissed = false;
      startTimerAfterPopup = false;
    
      // Reset hard mode logic
      gameLoop.keyCollected = false;
      gameLoop.removeLock = false;
      gameLoop.viewReloaded = false;
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