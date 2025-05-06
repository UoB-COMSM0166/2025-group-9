class BotanyPuzzle {
    constructor(images) {
      this.images = images;
      this.showNotePopup = false;
      this.showQuestion = false;
      this.showSuccess = false;
      this.showTryAgain = false;
      this.flowerCollected = false;
      this.viewRealoded =false;
      this.tryAgainTimer = 0;
      this.successTimer = 0; 
      this.correctSelectionSound = new SoundManager("assets/correctselection.wav");
      this.wrongSelectionSound = new SoundManager("assets/wrongselection.wav");

    }
  
    // note will pop up if the player interacts with it
    interactWithNote() {
        if (!this.plantCollected) {
            this.showNotePopup = true;
        }
    }
  
    // question will pop up if the player interacts with the plant
    interactWithFlower() {
        if (!this.plantCollected) {
            this.showQuestion = true;
        }
    }
  
    // calls each frame to manage visuals and logic
    update() {
      const nearNote = dist(chemistryPlayer.x, chemistryPlayer.y, 140 + xOffset, 169 + yOffset) < 60 || 
                       dist(botanyPlayer.x, botanyPlayer.y, 140 + xOffset, 169 + yOffset) < 60;
      const nearPlant = dist(botanyPlayer.x, botanyPlayer.y, 1150 + xOffset, 200 + yOffset) < 60;

      // console.log("player x : ",botanyPlayer.x);
      // console.log("player y : ",botanyPlayer.y)
      // console.log("distance  : ", dist(botanyPlayer.x, botanyPlayer.y, 1180 + xOffset, 215 + yOffset) )
    
      if (!nearNote && !this.showSuccess && !this.plantCollected) {
        this.showNotePopup = false;
      }
    
      if (!nearPlant && !this.showSuccess && !this.plantCollected) {
        this.showQuestion = false;
      }
    
      // timers to hide success and try again pop up 
      if (this.showSuccess && millis() - this.successTimer > 1500) {
        this.showSuccess = false;
      }
    
      if (this.showTryAgain && millis() - this.tryAgainTimer > 1500) {
        this.showTryAgain = false;
      }

      // only show flower if not collected
      if (!this.plantCollected) {
        this.drawPlantImage();
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

      drawPlantImage() {
        const imgWidth = 30;
        const imgHeight = 30;
        const x = 1350 + xOffset - imgWidth / 2 - 170;
        const y = 140 + yOffset + 50;
        image(flowerImg, x, y, imgWidth, imgHeight);
      }

      // draw success pop up when player gets the question right
      drawSuccessPopup() {
        const imgWidth = 300;
        const imgHeight = 100;
        const x = 1150 + xOffset - imgWidth / 2 - 20;
        const y = 199 + yOffset - imgHeight - 10;
        imageMode(CORNER);
        image(this.images.botanyCongratsImg, x, y, imgWidth, imgHeight);
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
    
    // handles player mouse clicks on the  question popup
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
          if (btn.name === "CHERRY BLOSSOM") { // correct answer
            this.showSuccess = true;
            this.correctSelectionSound.play('once');
            this.successTimer = millis();
            this.showTryAgain = false;
            this.showQuestion = false;
            this.plantCollected = true;
            gameController.collectIngredient();
          } else {
            this.showTryAgain = true;
            this.wrongSelectionSound.play('once');
            this.showSuccess = false;
            this.tryAgainTimer = millis();
            }
            return;
          }
      } 
  }
}

  