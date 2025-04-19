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
      // uses temp player - delete later
      const nearBook = dist(chemistryPlayer.x, chemistryPlayer.y, 620 + xOffset, 382 + yOffset) < 60;
      const nearVial = dist(chemistryPlayer.x, chemistryPlayer.y, 1316 + xOffset, 419 + yOffset) < 60;
      const nearLock = dist(chemistryPlayer.x, chemistryPlayer.y, 380 + xOffset, 590 + yOffset) < 30;
      const nearKey = dist(chemistryPlayer.x, chemistryPlayer.y, 1240 + xOffset, 670 + yOffset) < 30;
      const nearFlask = dist(chemistryPlayer.x, chemistryPlayer.y, 145 + xOffset, 425 + yOffset) < 30;

      // if(!this.keyCollected && nearKey){
      //   this.keyCollected = true;
      // }

      if(!this.flastCollected && nearFlask){
        this.flastCollected = true;
      }




      //console.log("x : ", 320 + xOffset);
      //console.log("y : ",  510 + yOffset)
      /* UPDATED PLAYER
      const nearBook = 
      dist(botany.position.x, botany.position.y, 167 + xOffset, 422 + yOffset) < 60 ||
      dist(chemistry.position.x, chemistry.position.y, 167 + xOffset, 422 + yOffset) < 60;

      const nearVial = 
      dist(botany.position.x, botany.position.y, 1316 + xOffset, 419 + yOffset) < 60 ||
      dist(chemistry.position.x, chemistry.position.y, 1316 + xOffset, 419 + yOffset) < 60;
      */
    
      if (!nearBook && !nearVial && !this.showSuccess && !this.vialCollected) {
        this.showInfoPopup = false;
        this.showQuestion = false;
      }

      if(gameManager.getDifficulty() != "easy"){
        
            this.drawFlowerObsDownImage();
            if(!this.flastCollected){
              this.drawFlaskImage();
            }

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

    drawVapourImage() {
      const imgWidth = 40;
      const imgHeight = 140;
      const x = 475 + xOffset - imgWidth / 2 - 170;
      const y = 310 + yOffset + 50;
      image(vapoursImg, x, y, imgWidth, imgHeight);
    }

    drawFlowerObsUpImage() {
      const imgWidth = 40;
      const imgHeight = 20;
      const x = 798 + xOffset - imgWidth / 2 - 170;
      const y = 634 + yOffset + 50;
      image(keyImg, x, y, imgWidth, imgHeight);
    }


    drawFlowerObsDownImage() {
      const imgWidth = 30;
      const imgHeight = 70;
      const x = 640 + xOffset - imgWidth / 2 - 170;
      const y = 155 + yOffset + 50;
      image(flowerObstacleDown, x, y, imgWidth, imgHeight);
    }
    

    drawDoubleFlowerImage() {
      const imgWidth = 30;
      const imgHeight = 200;
      const x = 1170 + xOffset - imgWidth / 2 - 170;
      const y = 30 + yOffset + 50;
      image(doubleFlower, x, y, imgWidth, imgHeight);
    }

    drawFlaskImage() {
      const imgWidth = 50;
      const imgHeight = 50;
      const x = 325 + xOffset - imgWidth / 2 - 170;
      const y = 344 + yOffset + 50;
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
        x = 620 + xOffset - imgWidth / 2 + 60;
        y = 382 + yOffset - imgHeight - 10;
      }

      imageMode(CORNER);
      image(vialCongratsImg, x, y, imgWidth, imgHeight);
    }
  
    // draw the "try again" popup when an incorrect answer is selected
    drawTryAgainPopup() {
      const imgWidth = 300;
      const imgHeight = 100;
      const x = 620 + xOffset - imgWidth / 2 + 60;
      const y = 382 + yOffset - imgHeight - 10;
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