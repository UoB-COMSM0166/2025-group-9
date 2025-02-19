// Manages the overall game state, win/loss conditions, game flow and resets the game when needed

class GameManager {
    constructor(gameController, uiManager, labX, labY) {
        this.state = "home"; // Possible states: "home", "playing", "gameOver", "won"
        this.gameController = gameController;
        this.uiManager = uiManager; 
        this.labX = labX; // X position of lab - player class will need to implement a method that detects when the player is at the lab
        this.labY = labY; // Y position of lab
    }

    updateGameStatus() {
        if (this.state === "playing") {
            if (this.gameController.isGameOver()) {
                this.state = "gameOver";
                this.triggerGameOver();
            } else if (this.checkWinCondition()) {
                this.state = "won";
                this.triggerWin();
            }
        }
    }

    // mousePressed() function within sketch.js detects the click on the Start button and will call the GameManager to run the startGame ()
    // game only starts when the player clicks the start button
    // when game starts the timer will start
    startGame() {
        console.log("Game Started!");
        this.state = "playing";
        this.uiManager.showStartScreen = false; // Hide start screen - need to ensure the home screen is displayed first before the game starts.
    }

    checkWinCondition() {
        return (
            this.gameController.allIngredientsCollected() &&
            this.gameController.players.every(player => player.isAtLab(this.labX, this.labY))
        );
    }

    triggerGameOver() {
        console.log("Game Over!");
        this.state = "gameOver";
        this.uiManager.showGameOverBanner = true; // Tell UIManager to show the GameOverBanner
        this.uiManager.showRestartButton = true; // Tell UIManager to show the restart button
    }

    triggerWin() {
        console.log("All ingredients collected & players reached the lab! YOU WIN!");
        this.state = "won";
        this.uiManager.showWinBanner = true; // Tell UIManager to show the win screen
    }

    // mousePressed() function within sketch.js detects the click and will call the GameManager to class the resetGame function
    // game only restarts when the player clicks the restart button
    resetGame() {
        console.log("Resetting game...");
        this.state = "playing";

        // Hide all UI banners/buttons on reset
        this.uiManager.showRestartButton = false;
        this.uiManager.showWinBanner = false;
        this.uiManager.showGameOverBanner = false; 

        this.uiManager.showStartScreen = true; // Show start screen again

        this.gameController.resetGame();
    }
}