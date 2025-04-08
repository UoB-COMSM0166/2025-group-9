class BotanyPuzzle {
    constructor() {
      this.showNotePopup = false;
      this.showQuestion = false;
      this.showSuccess = false;
      this.showTryAgain = false;
      this.plantCollected = false;
      // pop up duration
      this.tryAgainTimer = 0;
      this.successTimer = 0; 

    }
  
    // player interacts with note
    interactWithNote() {
        if (!this.plantCollected) {
            this.showNotePopup = true;
        }
    }
  
    // player interacts with flower
    interactWithFlower() {
        if (!this.plantCollected) {
            this.showQuestion = true;
        }
    }
  
    // cals each fram to manage visuals and logic
    update() {
        const nearNote = dist(player.x, player.y, 267, 137) < 100;
        const nearPlant = dist(player.x, player.y, 1141, 174) < 100;
    
        if (!nearNote && !this.showSuccess && !this.plantCollected) {
          this.showNotePopup = false;
        }
    
        if (!nearPlant && !this.showSuccess && !this.plantCollected) {
          this.showQuestion = false;
        }
    
        if (this.showNotePopup) {
          this.drawNotePopup();
        }
        if (this.showQuestion) {
          this.drawQuestionPopup();
        }
        if (this.showSuccess) {
            this.drawSuccessPopup();
          
            // Hide after 1.5 seconds
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
      }
  
      // draw notes pop up
      drawNotePopup() {
        const imgWidth = 500;
        const imgHeight = 200;
        const x = 264; // aligned to click
        const y = 232; // adjusted to match top-left target
        imageMode(CORNER);
        image(botanyNoteImg, x, y, imgWidth, imgHeight);
      }
    
      // draw question pop up
      drawQuestionPopup() {
        const imgWidth = 500;
        const imgHeight = 200;
        const x = 933; // aligned to click
        const y = 223; // adjusted to match top-left target
        imageMode(CORNER);
        image(botanyQuestionImg, x, y, imgWidth, imgHeight);
      }
    
  
      // draw success pop up when player gets the question right
      drawSuccessPopup() {
        const imgWidth = 250;
        const imgHeight = 65;
        const x = 1103;
        const y = 174 - 120;
        imageMode(CORNER);
        image(botanyCongratsImg, x, y, imgWidth, imgHeight);
      }
  
      // draw try again pop up when player gets the question wrong
      drawTryAgainPopup() {
        const imgWidth = 250;
        const imgHeight = 65;
        const x = 1103;
        const y = 174 - 120;
        imageMode(CORNER);
        image(botanyTryAgainImg, x, y, imgWidth, imgHeight);
      }
  
    mousePressed(mx, my) {
      if (!this.showQuestion || this.plantCollected) return;
  
      const buttons = [
        { name: "TULIP", x: 1078 - 60, y: 294 - 20, w: 120, h: 40 },
        { name: "LILY", x: 1290 - 60, y: 292 - 20, w: 120, h: 40 },
        { name: "ROSE", x: 1067 - 60, y: 361 - 20, w: 120, h: 40 },
        { name: "CHERRY BLOSSOM", x: 1297 - 90, y: 357 - 20, w: 180, h: 40 }
      ];
      
  
      for (let btn of buttons) {
        if (
          mx > btn.x && mx < btn.x + btn.w &&
          my > btn.y && my < btn.y + btn.h
        ) {
          if (btn.name === "CHERRY BLOSSOM") {
            this.showSuccess = true;
            this.successTimer = millis();
            this.showTryAgain = false;
            this.showQuestion = false;
            this.plantCollected = true;
            gameController.collectIngredient();
          } else {
            this.showTryAgain = true;
            this.showSuccess = false;
            this.tryAgainTimer = millis();
            }
            return;
          }
      } 
  }
}

  