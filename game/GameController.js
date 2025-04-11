class GameController {
    constructor(requiredIngredients, timeManager) {
      this.requiredIngredients = requiredIngredients;
      this.collectedIngredients = 0;
      this.labReached = false;
      this.hasKey = false;
      this.timeManager = timeManager;
      this.difficulty = "hard"; // default
      this.showHurryPopup = false;
      this.hurryPopupTimer = 0;
    }

    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    }

    // Called every frame to show key popup if active
    update() {
      if (this.showKeyReminderPopup && this.showKeyReminderPopup) {
        this.drawKeyReminderPopup();
        if (millis() - this.keyReminderTimer > 8000) {
          this.showKeyReminderPopup = false;
        }
      }
      if (this.showHurryPopup) {
        this.drawHurryPopup();
        if (millis() - this.hurryPopupTimer > 5000) {
          this.showHurryPopup = false;
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

        if (
          this.difficulty === "easy" &&
          this.collectedIngredients === this.requiredIngredients
        ) {
          this.showHurryPopup = true;
          this.hurryPopupTimer = millis();
        }
    
  
        // ONLY show key popup if difficulty is hard and key not collected
        if (
          this.difficulty === "hard" &&
          this.collectedIngredients === this.requiredIngredients &&
          !this.hasKey
        ) {
          this.showKeyReminderPopup = true;
          this.keyReminderTimer = millis();
        }
      }
    }

    // easy level only to remind player to run to the lab
    drawHurryPopup() {
      const imgWidth = 300;
      const imgHeight = 100;
      const x = 1100 + xOffset;
      const y = 85 + yOffset;
      imageMode(CORNER);
      image(hurryToLabImg, x, y, imgWidth, imgHeight);
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
      if (this.difficulty === "easy") return;
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
      this.showHurryToLabPopup = false;
      this.keyReminderTimer = 0;
      this.timeManager.resetTime();
      chemistryPuzzle = new ChemistryPuzzle();
      botanyPuzzle = new BotanyPuzzle();
    }
  }
  


