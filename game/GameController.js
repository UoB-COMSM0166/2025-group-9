class GameController {
    constructor(requiredIngredients, timeManager) {
      this.requiredIngredients = requiredIngredients; 
      this.collectedIngredients = 0;
      this.labReached = false;
      this.timeManager = timeManager;

      // Popup reminder to collect the key
      this.showKeyReminderPopup = false;
      this.keyReminderTimer = 0;
    }

    // Called every frame to show key popup if active
    update() {
      if (this.showKeyReminderPopup) {
        this.drawKeyReminderPopup();
        if (millis() - this.keyReminderTimer > 5000) {
          this.showKeyReminderPopup = false;
        }
      }
    }
  
    isGameWin() {
      return (
        this.collectedIngredients >= this.requiredIngredients &&
        this.labReached &&
        this.hasKey &&
        !this.timeManager.hasTimeRunOut()
      );
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
      const imgWidth = 250;
      const imgHeight = 65;
      const x = 1103;
      const y = 174 - 120;
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
  


