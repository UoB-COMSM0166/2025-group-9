// Handles all UI elements: menus, popups, HUD, and navigation
class UIManager {
    constructor(images, xOffset, yOffset) {
      this.images = images;
      this.xOffset = xOffset;
      this.yOffset = yOffset;
      this.currentSlide = 0;
      this.showInfo = false;
    }
  
    // Draws the home screen and info popup if enabled
    drawHomeScreen(width, height) {
      image(this.images.homeImage, (width - this.images.homeImage.width) / 2, (height - this.images.homeImage.height) / 2);
      if (this.showInfo) this.drawInfoPopup(width, height);
    }
  
    // Draws the current info popup slide centered on screen
    drawInfoPopup(width, height) {
      const popupW = 900;
      const popupH = 600;
      const popupX = (width - popupW) / 2;
      const popupY = (height - popupH) / 2;
      image(this.images.infoSlides[this.currentSlide], popupX, popupY, popupW, popupH);
    }
  
    nextSlide() {
      if (this.currentSlide < this.images.infoSlides.length - 1) {
        this.currentSlide++;
      }
    }
  
    exitSlides() {
      this.showInfo = false;
      this.currentSlide = 0;
    }
  
    drawDifficultyScreen(width, height) {
      image(this.images.gameDifficultyImage, (width - this.images.gameDifficultyImage.width) / 2, (height - this.images.gameDifficultyImage.height) / 2);
      this.drawBackButton();
    }
  
    drawWinScreen(width, height) {
      image(this.images.missionCompleteImage, (width - this.images.missionCompleteImage.width) / 2, (height - this.images.missionCompleteImage.height) / 2);
    }
  
    drawGameOverScreen(width, height) {
      image(this.images.gameOverImage, (width - this.images.gameOverImage.width) / 2, (height - this.images.gameOverImage.height) / 2);
    }
  
    // Draws the lift instruction popup
    drawLiftPopup(width, height) {
      const popupW = 900;
      const popupH = 600;
      const popupX = (width - popupW) / 2;
      const popupY = (height - popupH) / 2;
      image(this.images.liftInstructionImg, popupX, popupY, popupW, popupH);
    }

    // Draws the in-game HUD (time left and ingredients collected)
    drawHUD(collected, required, formattedTime, width) {
      fill(0);
      textSize(15);
      textFont('monospace');
      text(`Time Left: ${formattedTime}`, width - 120, this.yOffset + 10);
      text(`Ingredients: ${collected} / ${required}`, width - 120, this.yOffset + 25);
    }

    // Draws a "Back" button in the UI
    drawBackButton() {
      fill(255);
      stroke(0);
      rect(this.xOffset + 15, this.yOffset, 80, 40, 10);
      fill(0);
      noStroke();
      textSize(14);
      textAlign(CENTER, CENTER);
      textFont("monospace");
      text("Back", this.xOffset + 55, this.yOffset + 20);
    }
  
    setShowInfo(val) {
      this.showInfo = val;
    }
  
    shouldShowInfo() {
      return this.showInfo;
    }
  
    setCurrentSlide(index) {
      this.currentSlide = index;
    }
  
    getCurrentSlide() {
      return this.currentSlide;
    }
  }
  