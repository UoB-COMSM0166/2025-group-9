class GameController {
    constructor(requiredIngredients, timeManager) {
      this.requiredIngredients = requiredIngredients; 
      this.collectedIngredients = 0;
      this.labReached = false;
      this.timeManager = timeManager;
    }
  
    isGameWin() {
      return (
        this.collectedIngredients >= this.requiredIngredients &&
        this.labReached &&
        !this.timeManager.hasTimeRunOut()
      );
    }
  
    isGameOver() {
      return this.timeManager.hasTimeRunOut() && !this.isGameWin();
    }
  
    // call  when player collects an ingredient
    collectIngredient() {
      if (this.collectedIngredients < this.requiredIngredients) {
        this.collectedIngredients++;
      }
    }
  
    //call when player reaches the lab
    reachLab() {
      this.labReached = true;
    }
  
    resetGame() {
      this.collectedIngredients = 0;
      this.labReached = false;
      this.timeManager.resetTime();
    }
  }
  


