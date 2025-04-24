class ChemistryPuzzle {
    constructor() {
      this.showInfoPopup = false;
      this.showQuestion = false;
      this.showSuccess = false;
      this.showTryAgain = false;
      this.vialCollected = false;
      this.flastCollected = false;
      this.keyCollected = false;
      this.removeLock = false;
      this.viewRealoded =false;
      this.viewVapour = true;
      
      // timers to control how long success/try again popups remain on screen
      this.tryAgainTimer = 0;
      this.successTimer = 0;
    }
  
    // triggered when the player interacts with the book - info pop up gets shown
    interactWithBook() {
      if (!this.vialCollected) {
        this.showInfoPopup = true;
        this.showSuccess = false;
      }
    }
  
    // triggered when the player interacts with the vial - question pops up
    interactWithVial() {
      if (!this.vialCollected) {
        this.showQuestion = true;
      }
    }
  
    // called every frame to draw current state and handle timeouts
    update() {
      // Timers for hiding success / try again
      if (this.showSuccess && millis() - this.successTimer > 1500) {
        this.showSuccess = false;
      }
    
      if (this.showTryAgain && millis() - this.tryAgainTimer > 1500) {
        this.showTryAgain = false;
      }
    
      // Hide popups if player walks away from book and vial
      let nearFlask = false;
      const nearBook = dist(chemistryPlayer.x, chemistryPlayer.y, 1316 + xOffset, 419 + yOffset) < 60;
      const nearVial = dist(chemistryPlayer.x, chemistryPlayer.y, 145 + xOffset, 425 + yOffset) < 60;

      
      if (gameManager.getDifficulty() === "easy") {
        nearFlask = dist(chemistryPlayer.x, chemistryPlayer.y, 210 + xOffset, 150 + yOffset) < 60;

      } else {
       nearFlask = dist(chemistryPlayer.x, chemistryPlayer.y, 145 + xOffset, 425 + yOffset) < 60;
      }


      if (gameManager.getDifficulty() === "easy") {
        if(!this.flastCollected && nearFlask ){
          this.flastCollected = true;
        }

         //this.drawFlowerObsDownImage();
        if(!this.flastCollected ){
            this.drawFlaskImage();
        }
      
      }else{

        if(!this.flastCollected && nearFlask && this.vialCollected){
          this.flastCollected = true;
        }

         //this.drawFlowerObsDownImage();
        if(!this.flastCollected || !this.vialCollected){
            this.drawFlaskImage();
        }

      }
      
      if (!nearBook && !nearVial && !this.showSuccess && !this.vialCollected) {
        this.showInfoPopup = false;
        this.showQuestion = false;
      }
    
    }

    drawPopups() {
      if (this.showInfoPopup) {
        this.drawInfoPopupImage();
      }
      if (this.showQuestion) {
        this.drawQuestionPopup();
      }
      if (this.showSuccess) {
        this.viewVapour = false;
        this.drawSuccessPopup();
      }
      if (this.showTryAgain) {
        this.drawTryAgainPopup();
      }
    }
    
    
    drawKeyImage() {
      const imgWidth = 70;
      const imgHeight = 40;
      const x = 1415 + xOffset - imgWidth / 2 - 170;
      const y = 585 + yOffset + 50;
      image(keyImg, x, y, imgWidth, imgHeight);
    }


    drawFlaskImage() {
      const imgWidth = 80;
      const imgHeight = 80;
      let x = 0;
      let y = 0;
      if (gameManager.getDifficulty() === "easy") {
        x = 405 + xOffset - imgWidth / 2 - 170;
        y = 70 + yOffset + 50;
      }else{
       x = 325 + xOffset - imgWidth / 2 - 170;
       y = 315 + yOffset + 50;
      }
      image(flaskImg, x, y, imgWidth, imgHeight);
    }



    drawLockImage() {
      const imgWidth = 20;
      const imgHeight = 120;
      const x = 540 + xOffset - imgWidth / 2 - 170;
      const y = 495 + yOffset + 50;
      image(lockTreeImg, x, y, imgWidth, imgHeight);
    }
  

    // draw the popup image shown when interacting with the book
    drawInfoPopupImage() {
      const imgWidth = 600;
      const imgHeight = 300;
      const x = 1316 + xOffset - imgWidth / 2 - 170;
      const y = 419 + yOffset + 40;
      imageMode(CORNER);
      image(chemInfoPopupImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the question popup that asks which vial color is missing
    drawQuestionPopup() {
      const imgWidth = 600;
      const imgHeight = 300;
      const x = 167 + xOffset - imgWidth / 2 + 170;
      const y = 422 + yOffset + 50; 
      imageMode(CORNER);
      image(vialQuestionImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the congratulatory popup when the correct answer is chosen
    drawSuccessPopup() {
      const imgWidth = 300;
      const imgHeight = 100;

      let x = 0;
      let y = 0;

      if (gameManager.getDifficulty() === "easy") {
        // Easy mode vial position
        x = 280 + xOffset - imgWidth / 2 + 30;
        y = 160 + yOffset - imgHeight - 10;
      } else {
        // Hard mode vial position
        x = 167 + xOffset - imgWidth / 2 + 60;
        y = 422 + yOffset - imgHeight - 10;
      }

      imageMode(CORNER);
      image(vialCongratsImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the "try again" popup when an incorrect answer is selected
    drawTryAgainPopup() {
      const imgWidth = 300;
      const imgHeight = 100;
      const x = 167 + xOffset - imgWidth / 2 + 60;
      const y = 422 + yOffset - imgHeight - 10;
      imageMode(CORNER);
      image(vialTryAgainImg, x, y, imgWidth, imgHeight);
    }

    resetKey(){
      this.keyCollected =false;
    }
  
    // handles player mouse clicks on the vial color question popup
    mousePressed(mx, my) {
      if (!this.showQuestion || this.vialCollected) return;
  
      const buttons = [
        { color: "green",  x: 80 + xOffset, y: 680 + yOffset, w: 100, h: 30 },
        { color: "red",    x: 225 + xOffset, y: 680 + yOffset, w: 100, h: 30 },
        { color: "yellow", x: 360 + xOffset, y: 680 + yOffset, w: 100, h: 30 },
        { color: "purple", x: 485 + xOffset, y: 680 + yOffset, w: 100, h: 30 },
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
