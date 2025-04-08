class ChemistryPuzzle {
    constructor() {
      this.showInfoPopup = false;
      this.showQuestion = false;
      this.showSuccess = false;
      this.showTryAgain = false;
      this.vialCollected = false;
      // timers to control how long success/try again popups remain on screen
      this.tryAgainTimer = 0;
      this.successTimer = 0;
    }
  
    // triggered when the player interacts with the book
    interactWithBook() {
      if (!this.vialCollected) {
        this.showInfoPopup = true;
        this.showSuccess = false;
      }
    }
  
    // triggered when the player interacts with the vial
    interactWithVial() {
      if (!this.vialCollected) {
        this.showQuestion = true;
        // Don't hide try again here
      }
    }
  
    // called every frame to draw current state and handle timeouts
    update() {
      if (this.showInfoPopup) {
        this.drawInfoPopupImage();
      }
      if (this.showQuestion) {
        this.drawQuestionPopup();
      }
      if (this.showSuccess) {
        this.drawSuccessPopup();
        if (millis() - this.successTimer > 1500) {
          this.showSuccess = false;
        }
      }
      if (this.showTryAgain) {
        this.drawTryAgainPopup();
        if (millis() - this.tryAgainTimer > 1500) {
          this.showTryAgain = false;
        }
      }
  
    //hide popups if player walks away from both book and vial (unless success is showing or vial collected)
      const nearBook = dist(player.x, player.y, 1244, 420) < 100;
      const nearVial = dist(player.x, player.y, 293, 424) < 100;
  
      if (!nearBook && !nearVial && !this.showSuccess && !this.vialCollected) {
        this.showInfoPopup = false;
        this.showQuestion = false;
      }
    }
  
    // draw the popup image shown when interacting with the book
    drawInfoPopupImage() {
      const imgWidth = 650;
      const imgHeight = 350;
      const x = 1060;
      const y = 360;
      imageMode(CORNER);
      image(chemInfoPopupImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the question popup that asks which vial color is missing
    drawQuestionPopup() {
      const imgWidth = 800;
      const imgHeight = 600;
      const x = 293;
      const y = 260;
      imageMode(CORNER);
      image(vialQuestionImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the congratulatory popup when the correct answer is chosen
    drawSuccessPopup() {
      const imgWidth = 300;
      const imgHeight = 100;
      const x = 222;
      const y = 332;
      imageMode(CORNER);
      image(vialCongratsImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the "try again" popup when an incorrect answer is selected
    drawTryAgainPopup() {
      const imgWidth = 300;
      const imgHeight = 100;
      const x = 222;
      const y = 332;
      imageMode(CORNER);
      image(vialTryAgainImg, x, y, imgWidth, imgHeight);
    }
  
    // handles player mouse clicks on the vial color question popup
    mousePressed(mx, my) {
      if (!this.showQuestion || this.vialCollected) return;
  
      const buttons = [
        { color: "green", x: 356, y: 586, w: 60, h: 40 },
        { color: "red", x: 444, y: 585, w: 60, h: 40 },
        { color: "yellow", x: 517, y: 586, w: 60, h: 40 },
        { color: "purple", x: 595, y: 589, w: 60, h: 40 },
      ];
  
      for (let btn of buttons) {
        if (
          mx > btn.x && mx < btn.x + btn.w &&
          my > btn.y && my < btn.y + btn.h
        ) {
          if (btn.color === "green") {
            this.showSuccess = true;
            this.showTryAgain = false;
            this.showQuestion = false;
            this.vialCollected = true;
            this.successTimer = millis();
            gameController.collectIngredient(); // notify game controller
          } else {
            this.showSuccess = false;
            this.showTryAgain = true;
            this.showQuestion = true;
            this.tryAgainTimer = millis();
          }
          return;
        }
      }
    }
  }