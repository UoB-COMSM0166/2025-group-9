class GameController {
    constructor(requiredIngredients, timeManager) {
      this.requiredIngredients = requiredIngredients;
      this.collectedIngredients = 0;
      this.labReached = false;
      this.hasKey = false;
      this.timeManager = timeManager;
      this.difficulty = "hard"; // default
    }

    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    }

    // Called every frame to show key popup if active
    update() {
      if (this.showKeyReminderPopup) {
        this.drawKeyReminderPopup();
        if (millis() - this.keyReminderTimer > 8000) {
          this.showKeyReminderPopup = false;
        }
      }
    }
  
    isGameWin() {
      if (this.difficulty === "easy") {
          return this.collectedIngredients >= this.requiredIngredients && this.labReached;
      } else {
          return this.collectedIngredients >= this.requiredIngredients &&
                 this.labReached &&
                 this.hasKey &&
                 !this.timeManager.hasTimeRunOut();
      }
    }

    isGameOver() {
      return this.timeManager.hasTimeRunOut() && !this.isGameWin();
    }
  
    // call when player collects an ingredient
    collectIngredient() {
      if (this.collectedIngredients < this.requiredIngredients) {
        this.collectedIngredients++;
  
        // Show popup if 2 ingredients are collected but key hasn't been found
        if (
          this.collectedIngredients === this.requiredIngredients &&
          !this.hasKey
        ) {
          this.showKeyReminderPopup = true;
          this.keyReminderTimer = millis();
        }
      }
    }
  
    //call when player reaches the lab
    reachLab() {
      this.labReached = true;
    }

    // call when player collects the key
    collectKey() {
      this.hasKey = true;
    }

    // draws a popup image reminding the player to collect the key
    drawKeyReminderPopup() {
      const imgWidth = 300;
      const imgHeight = 100;
      const x = 1253 + xOffset - imgWidth / 2 - 100; 
      const y = 668 + yOffset - imgHeight - 30; 
      imageMode(CORNER);
      image(keyReminderPopupImg, x, y, imgWidth, imgHeight);
    }
  
    resetGame() {
      this.collectedIngredients = 0;
      this.labReached = false;
      this.hasKey = false;
      this.showKeyReminderPopup = false;
      this.keyReminderTimer = 0;
      this.timeManager.resetTime();
    }
  }
  


