class GameLoop {
    constructor({
      gameManager,
      gameController,
      uiManager,
      timeManager,
      chemistryPuzzle,
      botanyPuzzle,
      players,
      liftRef,
      images,
      platformFunctions
    }) {
      this.gameManager = gameManager;
      this.gameController = gameController;
      this.uiManager = uiManager;
      this.timeManager = timeManager;
      this.chemistryPuzzle = chemistryPuzzle;
      this.botanyPuzzle = botanyPuzzle;
      this.botanyPlayer = players.botany;
      this.chemistryPlayer = players.chemistry;
      this.lift = liftRef;
      this.images = images;
      this.platforms = [];
      this.platformFunctions = platformFunctions;
  
      this.keyCollected = false;
      this.removeLock = false;
      this.viewReloaded = false;
      this.collectedItemSound = new SoundManager("assets/collecteditem.wav");
    }
  
    update(width, height, xOffset, yOffset, showLiftPopup) {
      if (!this.botanyPlayer || !this.chemistryPlayer) {
        return;
      }
  
      const difficulty = this.gameManager.getDifficulty();
  
      // Run appropriate logic based on difficulty
      if (difficulty === "hard") {
        this.handleHardMode(xOffset, yOffset);
      } else {
        this.handleEasyMode(xOffset, yOffset);
      }
  
      // Check if players reached the lab
      this.checkLabArrival(difficulty, xOffset, yOffset);
  
      // Draw timer and collected ingredients info
      this.uiManager.drawHUD(
        this.gameController.collectedIngredients,
        this.gameController.requiredIngredients,
        this.timeManager.getFormattedTime(),
        width
      );
  
      // Update the countdown timer if lift popup is dismissed
      if (!showLiftPopup) {
        this.timeManager.updateTime();
      }
  
      // Check win/loss conditions
      this.gameManager.updateGameStatus();
  
      // Update player physics and movement
      this.botanyPlayer.update();
      this.chemistryPlayer.update();
  
      // Update lift movement and handle player interactions
      if (this.lift) {
        this.updateLift();
      }
  
      // Render players
      for (let plat of this.platforms) {
        collision(this.botanyPlayer, plat);
        collision(this.chemistryPlayer, plat);
      }
  
      this.botanyPlayer.create();
      this.chemistryPlayer.create();
  
      // Update hard mode puzzle popups
      if (difficulty === "hard") {
        this.botanyPuzzle.update();
        this.botanyPuzzle.drawPopups();
        this.chemistryPuzzle.update();
        this.chemistryPuzzle.drawPopups();
      }
    }
  
    handleHardMode(xOffset, yOffset) {
    // chemistry puzzle
      if (
        !this.chemistryPuzzle.vialCollected &&
        !this.chemistryPuzzle.showQuestion &&
        !this.chemistryPuzzle.showSuccess
      ) {
        // interact with book
        const nearBook =
          dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 1316 + xOffset, 419 + yOffset) < 60 ||
          dist(this.botanyPlayer.x, this.botanyPlayer.y, 1316 + xOffset, 419 + yOffset) < 60;
        if (nearBook) {
          this.chemistryPuzzle.interactWithBook();
        }
        // interact with vial
        const nearVial =
          dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 167 + xOffset, 422 + yOffset) < 60;
        if (nearVial) {
          this.chemistryPuzzle.interactWithVial();
          this.chemistryPuzzle.showTryAgain = false;
          this.chemistryPuzzleSolved = false;
        }
      }
       // botany puzzle
      if (!this.botanyPuzzle.plantCollected) {
        const nearNote =
          dist(this.botanyPlayer.x, this.botanyPlayer.y, 138 + xOffset, 177 + yOffset) < 60 ||
          dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 138 + xOffset, 177 + yOffset) < 60;
        const nearPlant =
          dist(this.botanyPlayer.x, this.botanyPlayer.y, 1150 + xOffset, 199 + yOffset) < 60;
  
        if (nearNote) {
          this.botanyPuzzle.interactWithNote();
        }
        if (nearPlant) {
          this.botanyPuzzle.interactWithFlower();
        }
    }
    
  
      // collision detection for hard mode obstacles
      const hitWaterChem =
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 582 + xOffset, 680 + yOffset) < 25;
      const hitWaterBot =
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 582 + xOffset, 680 + yOffset) < 25;
      const hitFlowerChem =
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 515 + xOffset, 220 + yOffset) < 30;
      const hitFlowerBot =
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 515 + xOffset, 220 + yOffset) < 30;
      const hitFlower2Chem =
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 184.5 + xOffset, 185 + yOffset) < 15 ||
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 180 + xOffset, 215 + yOffset) < 15;
      const hitFlower2Bot =
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 184.5 + xOffset, 185 + yOffset) < 15 ||
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 180 + xOffset, 215 + yOffset) < 15;
      const hitBombChem =
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 1082 + xOffset, 455 + yOffset) < 20;
      const hitBombBot =
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 1082 + xOffset, 455 + yOffset) < 20;
  
      // reset player positions and puzzle state if hazard is hit
      if (hitWaterChem || hitWaterBot || hitBombChem || hitBombBot 
        || hitFlowerChem ||hitFlowerBot 
       || hitFlower2Bot || hitFlower2Chem) {
        this.gameController.triggerPlayerDied();
        this.chemistryPlayer.x = 750 + xOffset;
        this.chemistryPlayer.y = 150 + yOffset;
        this.keyCollected = false;
        this.botanyPlayer.x = 650 + xOffset;
        this.botanyPlayer.y = 640 + yOffset;
        this.viewReloaded = false;
        this.removeLock = false;
        this.gameManager.updateGameStatus();
      }
  
      // Key and Lock Interaction for both players
      const nearKey =
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 1240 + xOffset, 670 + yOffset) < 30 ||
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 1240 + xOffset, 670 + yOffset) < 30;
      const nearLock =
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 380 + xOffset, 620 + yOffset) < 30 ||
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 380 + xOffset, 620 + yOffset) < 30;
  
      if (!this.keyCollected && nearKey) {
        this.keyCollected = true;
        this.collectedItemSound.play('once');
        this.gameController.collectKey();
      }
  
      if (!this.removeLock && this.keyCollected && nearLock) {
        this.removeLock = true;
      }
  
      // draw key image if not collected
      if (!this.keyCollected) {
        const imgWidth = 70;
        const imgHeight = 40;
        const x = 1415 + xOffset - imgWidth / 2 - 170;
        const y = 585 + yOffset + 50;
        image(this.images.keyImg, x, y, imgWidth, imgHeight);
      }
  
      // draw lock image if not removed
      if (!this.removeLock) {
        const imgWidth = 20;
        const imgHeight = 120;
        const x = 540 + xOffset - imgWidth / 2 - 170;
        const y = 495 + yOffset + 50;
        image(this.images.lockTreeImg, x, y, imgWidth, imgHeight);
      }
  
      // reload platforms if lock removed
      if (this.removeLock && !this.viewReloaded) {
        this.viewReloaded = true;
        this.platformFunctions.reLoadHardPlatforms();
      }
    }
  
    handleEasyMode(xOffset, yOffset) {
      if (this.gameManager.getDifficulty() !== "easy") {
        return;
      }
  
      if (
        !this.chemistryPuzzle.vialCollected &&
        dist(this.chemistryPlayer.x, this.chemistryPlayer.y, 210 + xOffset, 150 + yOffset) < 30
      ) {
        this.chemistryPuzzle.vialCollected = true;
        this.collectedItemSound.play('once');
        this.gameController.collectIngredient();
        this.chemistryPuzzle.showSuccess = true;
        this.chemistryPuzzle.successTimer = millis();
      }
  
      if (!this.chemistryPuzzle.vialCollected  && this.images.flaskImg) {
        const imgWidth = 80;
        const imgHeight = 80;
        const x = 405 + xOffset - imgWidth / 2 - 170;
        const y = 70 + yOffset + 50;
        image(this.images.flaskImg, x, y, imgWidth, imgHeight);
      }
  
      if (
        this.chemistryPuzzle.showSuccess &&
        millis() - this.chemistryPuzzle.successTimer < 1500 && this.images.vialCongratsImg
      ) {
        const imgWidth = 300;
        const imgHeight = 100;
        const x = 280 + xOffset - imgWidth / 2 + 30;
        const y = 160 + yOffset - imgHeight - 10;
        image(this.images.vialCongratsImg, x, y, imgWidth, imgHeight);
      }
  
      const nearPlant =
        dist(this.botanyPlayer.x, this.botanyPlayer.y, 240 + xOffset, 463 + yOffset) < 60;
  
      if (!this.botanyPuzzle.plantCollected && nearPlant) {
        this.botanyPuzzle.plantCollected = true;
        this.collectedItemSound.play('once');
        this.gameController.collectIngredient();
        this.botanyPuzzle.showSuccess = true;
        this.botanyPuzzle.successTimer = millis();
      }
  
      if (!this.botanyPuzzle.plantCollected && this.images.flowerImg) {
        const imgWidth = 30;
        const imgHeight = 30;
        const plantX = 240 + xOffset;
        const plantY = 463 + yOffset;
        image(this.images.flowerImg, plantX - imgWidth / 2, plantY - imgHeight / 2, imgWidth, imgHeight);
      }
  
      if (
        this.botanyPuzzle.showSuccess &&
        millis() - this.botanyPuzzle.successTimer < 1500 &&
        this.images.botanyCongratsImg
      ) {
        console.log("Showing chemistry success popup");

        const imgWidth = 300;
        const imgHeight = 100;
        const x = 240 + xOffset - imgWidth / 2;
        const y = 463 + yOffset - imgHeight - 20;
        image(this.images.botanyCongratsImg, x, y, imgWidth, imgHeight);
      }
    }
  
    checkLabArrival(difficulty, xOffset, yOffset) {
      if (difficulty === "easy") {
        const easyLabX = 1324;
        const easyLabY = 205;
  
        if (
          !this.gameController.labReached &&
          dist(this.botanyPlayer.x, this.botanyPlayer.y, easyLabX + xOffset, easyLabY + yOffset) < 60 &&
          dist(this.chemistryPlayer.x, this.chemistryPlayer.y, easyLabX + xOffset, easyLabY + yOffset) < 60
        ) {
          this.gameController.reachLab();
        }
      } else {
        const hardLabX = 230;
        const hardLabY = 623;
  
        if (
          !this.gameController.labReached &&
          dist(this.botanyPlayer.x, this.botanyPlayer.y, hardLabX + xOffset, hardLabY + yOffset) < 60 &&
          dist(this.chemistryPlayer.x, this.chemistryPlayer.y, hardLabX + xOffset, hardLabY + yOffset) < 60
        ) {
          this.gameController.reachLab();
        }
      }
    }
  
    updateLift() {
      this.lift.update();
      this.lift.create();
  
      if (this.lift.isPlayerOnLift(this.botanyPlayer)) {
        this.botanyPlayer.y = this.lift.y - this.botanyPlayer.height;
        this.botanyPlayer.velocityY = 0;
        this.botanyPlayer.y += this.lift.displacement();
        this.botanyPlayer.onPlatform = true;
      }
  
      if (this.lift.isPlayerOnLift(this.chemistryPlayer)) {
        this.chemistryPlayer.y = this.lift.y - this.chemistryPlayer.height;
        this.chemistryPlayer.velocityY = 0;
        this.chemistryPlayer.y += this.lift.displacement();
        this.chemistryPlayer.onPlatform = true;
      }
    }
  
    setPlatforms(platforms) {
      this.platforms = platforms;
    }
  }
  
  