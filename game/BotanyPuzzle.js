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
  
    // calls each frame to manage visuals and logic
    update() {
      // using temp player - delete later
      const nearNote = dist(player.x, player.y, 140 + xOffset, 169 + yOffset) < 60; 
      const nearPlant = dist(player.x, player.y, 1188 + xOffset, 203 + yOffset) < 60;

      /* UPDATED PLAYER 
      const nearNote = 
      dist(botany.position.x, botany.position.y, 140 + xOffset, 169 + yOffset) < 60 ||
      dist(chemistry.position.x, chemistry.position.y, 140 + xOffset, 169 + yOffset) < 60;

      const nearPlant = 
      dist(botany.position.x, botany.position.y, 1188 + xOffset, 203 + yOffset) < 60 ||
      dist(chemistry.position.x, chemistry.position.y, 1188 + xOffset, 203 + yOffset) < 60;
      */
    
      if (!nearNote && !this.showSuccess && !this.plantCollected) {
        this.showNotePopup = false;
      }
    
      if (!nearPlant && !this.showSuccess && !this.plantCollected) {
        this.showQuestion = false;
      }
    
      if (this.showSuccess && millis() - this.successTimer > 1500) {
        this.showSuccess = false;
      }
    
      if (this.showTryAgain && millis() - this.tryAgainTimer > 1500) {
        this.showTryAgain = false;
      }
    }

    drawPopups() {
      if (this.showNotePopup) {
        this.drawNotePopup();
      }
      if (this.showQuestion) {
        this.drawQuestionPopup();
      }
      if (this.showSuccess) {
        this.drawSuccessPopup();
      }
      if (this.showTryAgain) {
        this.drawTryAgainPopup();
      }
    }
    
      // draw notes pop up
      drawNotePopup() {
        const imgWidth = 600;
        const imgHeight = 300;
        const x = 138 + xOffset - imgWidth / 2 + 240;
        const y = 177 + yOffset - imgHeight / 2 + 255;
        imageMode(CORNER);
        image(botanyNoteImg, x, y, imgWidth, imgHeight);
      }
      
      // draw question pop up
      drawQuestionPopup() {
        const imgWidth = 600;
        const imgHeight = 300;
        const x = 1192 + xOffset - imgWidth / 2 - 150;
        const y = 199 + yOffset - imgHeight / 2 + 255;
        imageMode(CORNER);
        image(botanyQuestionImg, x, y, imgWidth, imgHeight);
      }
    
      // draw success pop up when player gets the question right
      drawSuccessPopup() {
        const imgWidth = 300;
        const imgHeight = 100;

        let x = 0;
        let y = 0;

        if (gameManager.getDifficulty() === "easy") {
          // Easy mode plant position
          x = 150 + xOffset - imgWidth / 2 + 30;
          y = 445 + yOffset - imgHeight - 10;
        } else {
          // Hard mode plant position
          x = 1192 + xOffset - imgWidth / 2 - 100;
          y = 199 + yOffset - imgHeight - 30;
        }
        imageMode(CORNER);
        image(botanyCongratsImg, x, y, imgWidth, imgHeight);
      }
  
      // draw try again pop up when player gets the question wrong
      drawTryAgainPopup() {
        const imgWidth = 300;
        const imgHeight = 100;
        const x = 1192 + xOffset - imgWidth / 2 - 100; 
        const y = 199 + yOffset - imgHeight - 30; 
        imageMode(CORNER);
        image(botanyTryAgainImg, x, y, imgWidth, imgHeight);
      }
  
    mousePressed(mx, my) {
      if (!this.showQuestion || this.plantCollected) return;
  
      const buttons = [
        { name: "TULIP", x: 810 + xOffset, y: 380 + yOffset, w: 180, h: 50 },
        { name: "LILY", x: 1080 + xOffset, y: 380 + yOffset, w: 180, h: 50 },
        { name: "ROSE", x: 810 + xOffset, y: 480 + yOffset, w: 180, h: 50 },
        { name: "CHERRY BLOSSOM", x: 1080 + xOffset, y: 480 + yOffset, w: 180, h: 50 }
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

  