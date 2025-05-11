// Handles all UI elements: menus, popups, HUD, and navigation
class UIManager {
    constructor(images, xOffset, yOffset) {
      this.images = images;
      this.xOffset = xOffset;
      this.yOffset = yOffset;
      this.currentSlide = 0;
      this.showInfo = false;
      this.showSettings = false;
      this.currentFilter = 'default';
      this.showSettings = false;
    }
  
    // Draws the home screen and info popup if enabled
    drawHomeScreen(width, height) {
      imageMode(CENTER);
      image(this.images.homeImage, width / 2, height / 2);
      imageMode(CORNER); 
      if (this.showInfo) this.drawInfoPopup(width, height);
      this.drawSettingsButton();
      if (this.showSettings) this.drawSettingsPopup();
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
      imageMode(CENTER);
      image(this.images.gameDifficultyImage, width / 2, height / 2); 
      imageMode(CORNER)
      this.drawBackButton();
      this.drawSettingsButton();
      if (this.showSettings) this.drawSettingsPopup();
    }
  
    drawWinScreen(width, height) {
      imageMode(CENTER);
      image(this.images.missionCompleteImage, width / 2, height / 2);
      imageMode(CORNER);
  }
  
  drawGameOverScreen(width, height) {
      imageMode(CENTER);
      image(this.images.gameOverImage, width / 2, height / 2);
      imageMode(CORNER);
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
      textSize(20);
      textFont('monospace');
      textAlign(CENTER, TOP); 
    
      const centerX = width / 2;
      const verticalY = this.yOffset + 10 - 11;
    
      text(`Time Left: ${formattedTime}`, centerX, verticalY);
      text(`Ingredients: ${collected} / ${required}`, centerX, verticalY + 20);
    }
    
    drawSettingsButton() {
      const centerX = width - 34;
      const centerY = 27;
      const radius = 20;
    
      // Draw circle background
      fill(255);
      stroke(0);
      strokeWeight(1);
      ellipse(centerX, centerY, radius * 2);
    
      // Draw gear icon centered inside the circle
      if (settingsGearImg) {
        imageMode(CENTER);
        image(settingsGearImg, centerX, centerY, 24, 24);
      }

      noStroke();
      fill(0);
      textAlign(LEFT, TOP);
    }
    
    drawSettingsPopup() {
      const popupW = 300;
      const popupH = 300;
      const popupX = (width - popupW) / 2;
      const popupY = (height - popupH) / 2;
  
      // Popup Background
      fill('#88a9c3');
      stroke('#2b4257');
      strokeWeight(20);
      rect(popupX, popupY, popupW, popupH, 15);
  
      // Top Dark Blue Header Bar
      fill('#2b4257');
      noStroke();
      rect(popupX, popupY, popupW, 45, 15, 15, 0, 0);
  
      // Settings Title in White
      fill(255);
      textFont('monospace');
      textSize(30);
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      text("SETTINGS", popupX + popupW / 2, popupY + 20); 
      textStyle(NORMAL);
  
      // Divider
      stroke('#646464');
      strokeWeight(1.5);
      line(popupX + 40, popupY + 90, popupX + popupW - 40, popupY + 90);

      // Colour Vision Subtitle
      noStroke();
      fill(0);
      textFont('monospace');
      textSize(18);
      textStyle(BOLD);
      textAlign(CENTER, TOP);
      text("Colour Vision Modes", popupX + popupW / 2, popupY + 65);
      textStyle(NORMAL);

      const modes = ['default', 'protanopia', 'deuteranopia'];
      const labels = ['Normal', 'Protanopia (Red)', 'Deuteranopia (Green)'];
  
      for (let i = 0; i < modes.length; i++) {
          const modeY = popupY + 125 + i * 50;
  
          // Button Highlight for Selected Mode
          if (this.currentFilter === modes[i]) {
              fill(200);
          } else {
              fill(255);
          }
  
          stroke('#2b4257');
          strokeWeight(0.5);
          rect(popupX + 50, modeY - 12, 200, 30, 8);
  
          // Button Text
          fill(0);
          noStroke();
          textAlign(CENTER, CENTER);
          textSize(15);
          textFont('monospace');
          text(labels[i], popupX + popupW / 2, modeY + 3);
      }
  
      // Exit Button
      const exitButtonX = popupX + popupW - 30; 
      const exitButtonY = popupY + 15;
      const exitButtonSize = 30;

      // Draw Circle for Exit Button
      fill(255);
      stroke(0);
      strokeWeight(1);
      ellipse(exitButtonX, exitButtonY, exitButtonSize);

      // Draw 'X' Symbol
    stroke(0);
    strokeWeight(1);
    line(exitButtonX - 5, exitButtonY - 5, exitButtonX + 5, exitButtonY + 5);
    line(exitButtonX - 5, exitButtonY + 5, exitButtonX + 5, exitButtonY - 5);

      // Reset Drawing Styles
      noStroke();
      fill(0);
      textAlign(LEFT, TOP);
  }
  

    // Draws a "Back" button in the UI
    drawBackButton() {
      const centerX = 34;
      const centerY = 27;
      const radius = 20;
    
      // Draw circle
      fill(255);
      stroke(0);
      strokeWeight(1);
      ellipse(centerX, centerY, radius * 2, radius * 2);
    
      // Draw back arrow
      stroke(0);
      strokeWeight(1);
      noFill();
      beginShape();
      vertex(centerX + 5, centerY - 10);
      vertex(centerX - 5, centerY);
      vertex(centerX + 5, centerY + 10);
      endShape();

      // Reset stroke and fill for other drawings
      noStroke();
      fill(0);
      textAlign(LEFT, TOP);
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
  