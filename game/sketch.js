let gameManager;
let gameController;
let timeManager;
let lift;
let botanyPuzzle;
let chemistryPuzzle;
let mazeImage;
let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, maze,FloorEasyImage, missionCompleteImage;
let chemInfoPopupImg, vialQuestionImg, vialCongratsImg, vialTryAgainImg;
let plantInfoImg, plantQuestionImg, plantCongratsImg, plantTryAgainImg;
let keyReminderPopupImg;
let selectedDifficulty;
let infoSlides = [];
let currentSlides = 0;
let showInfo = false;

// temporary player and platforms for collision testing
let player;
let platforms = [];

function preload() {
  homeImage = loadImage("assets/homepage.png");
  gameDifficultyImage = loadImage("assets/gamedifficulty.png");
  gameOverImage = loadImage("assets/gameover.png");
  mazeFloorHardImage = loadImage("assets/mazefloorhard.png");
  mazeFloorEasyImage = loadImage("assets/mazeflooreasy.png");
  missionCompleteImage = loadImage("assets/missioncomplete.png");
  infoSlides[0] = loadImage("assets/infopage1.png");
  infoSlides[1] = loadImage("assets/infopage2.png");
  infoSlides[2] = loadImage("assets/infopage3.png");
  chemInfoPopupImg = loadImage("assets/chem-info-popup.png");
  vialQuestionImg = loadImage("assets/chem-question.png");
  vialCongratsImg = loadImage("assets/vial-congrats.png");
  vialTryAgainImg = loadImage("assets/try-again.png");
  botanyNoteImg = loadImage("assets/plant-info-popup.png");
  botanyQuestionImg = loadImage("assets/plant-question-popup.png");
  botanyCongratsImg = loadImage("assets/plant-congrats.png");
  botanyTryAgainImg = loadImage("assets/plant-try-again.png");
  keyReminderPopupImg = loadImage("assets/key-reminder.png");
}

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 813;

function setup() {
  createCanvas(windowWidth, windowHeight);

  xOffset = (windowWidth - BASE_WIDTH)/2;
  yOffset = (windowHeight - BASE_HEIGHT)/2;
  timeManager = new TimeManager();
  gameController = new GameController(2, timeManager); // 2 ingredients needed
  gameManager = new GameManager(gameController);
  chemistryPuzzle = new ChemistryPuzzle();
  botanyPuzzle = new BotanyPuzzle();
}

function loadHardPlatforms() {
  platforms = [];

  //ground floor 
  platforms.push({ x: 218 - 147 + xOffset, y: 750 - 32 + yOffset, width: 1298, height: 50 });
  platforms.push({ x: 218 - 147 + xOffset, y: 750 - 32 - 27 + yOffset, width: 421, height: 27 });
  platforms.push({ x: 218 - 147 + xOffset, y: 750 - 32 - 27 - 27 + yOffset, width: 373, height: 27 });

  //table
  platforms.push({ x: 1153 + 30 + 41 + xOffset, y: 712 - 27 + yOffset, width: 50, height: 5 });


  //first floor
  platforms.push({ x: 218 - 147 + xOffset, y: 500 - 7 + yOffset, width: 801, height: 54 });
  platforms.push({ x: 959 + 24 + xOffset, y: 501 - 7 + yOffset, width: 386, height: 54 });

  //additional first floor platforms
  platforms.push({ x: 552 - 72 + xOffset, y: 500 - 7 - 26 + yOffset, width: 240, height: 26 });
  platforms.push({ x: 572 - 70 + xOffset, y: 500 - 7 - 26 - 18 + yOffset, width: 193, height: 18 });
  //platforms.push({ x: 783, y: 411, width: 55, height: 17 });
  platforms.push({ x: 993 + 14  + xOffset, y: 403 + 37 + yOffset, width: 48, height: 19 });
  platforms.push({ x: 1070 + 12 + xOffset, y: 413 + 1 + yOffset, width: 48, height: 19 });
  platforms.push({ x: 218 - 147 + 58 + xOffset, y: 500 - 7 - 52 + yOffset, width: 52, height: 52 });
  platforms.push({ x: 1197 + 81 + xOffset, y: 501 - 7 - 49 + yOffset, width: 49, height: 49 });


  //second floor
  platforms.push({ x: 218 - 147 + xOffset, y: 252 + 18 + yOffset, width: 806, height: 54 });
  platforms.push({ x: 960 + 26 + xOffset, y: 252 + 19 + yOffset, width: 384, height: 54 });

  //additional second floor platforms
  platforms.push({ x: 402 - 107 + xOffset, y: 222 + 22 + yOffset, width: 158, height: 27 });
  platforms.push({ x: 218 - 147 + xOffset, y: 192 - 26 + 52 + yOffset, width: 110, height: 52 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + xOffset, y: 192 - 26 + 52 + yOffset, width: 107, height: 53 });
  platforms.push({ x: 1097 + 60 + xOffset, y: 202 + 24 + yOffset, width: 39 + 7, height: 18 });
  platforms.push({ x: 1048 + 49 + xOffset, y: 175 + 26 + yOffset, width: 39 + 8, height: 18 });
  platforms.push({ x: 999 + 38 + xOffset, y: 143 + 87 + yOffset, width: 39 + 8, height: 18 });
  platforms.push({ x: 340 - 117 + xOffset, y: 167 + 58 + yOffset, width: 30 + 9, height: 19 });
  platforms.push({ x: 432 + 54 + xOffset, y: 122 + 103 + yOffset, width: 30 + 9, height: 19 });
  platforms.push({ x: 218 - 147 + 262 + xOffset, y: 153 + yOffset, width: 30 + 7, height: 19 });
  platforms.push({ x: 659 - 47 + xOffset, y: 162 + 27 + yOffset, width: 122, height: 18 });


  //building boundaries
  platforms.push({ x: 218 - 147 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
  platforms.push({ x: 213 - 147 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
  platforms.push({ x: 1272 + 147 - 51 + xOffset, y: 0 + yOffset, width: 5, height: 820 });

  lift = new Lift(218 - 147 + 803 + xOffset, 750 - 32 + 5 + yOffset, 111, 5, 2, 260 + yOffset, 750 - 32 + 6 + yOffset); // hard level lift

}


function loadEasyPlatforms() {
  platforms = [];

  //ground floor 
  platforms.push({ x: 218 - 147 + xOffset, y: 750 - 32 + 3 + yOffset, width: 1298, height: 50 });
  //platforms.push({ x: 218 - 147 + xOffset, y: 750 - 32 - 27 + yOffset, width: 421, height: 27 });
  //platforms.push({ x: 218 - 147 + xOffset, y: 750 - 32 - 27 - 27 + yOffset, width: 373, height: 27 });

  //additional ground floor
  platforms.push({ x: 1097 + 60 - 23 - 596 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 505 + yOffset, width: 66, height: 16 });
  platforms.push({ x: 1097 + 60 - 23 - 596 - 66 + 2 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 506 - 44 + yOffset, width: 66, height: 16 });
  platforms.push({ x: 1097 + 60 - 23 - 596 - 66 - 196 + 1 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 506 - 44 + yOffset, width: 66, height: 16 });
  platforms.push({ x: 1097 + 60 - 23 - 596 - 333 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 503 - 1 + yOffset, width: 66, height: 16 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + 2 - 219 - 734 + 306 - 247 + xOffset, y:  500 - 7 + 15  - 53 - 44 + 267 + yOffset, width: 75, height: 43 });


  //table
  //platforms.push({ x: 1153 + 30 + 41 + xOffset, y: 712 - 27 + yOffset, width: 50, height: 5 });


  //first floor
  platforms.push({ x: 218 - 147 + xOffset, y: 500 - 7 + 15 + yOffset, width: 801, height: 54 });
  platforms.push({ x: 959 + 24 + 7 + xOffset, y: 500 - 7 + 15 + yOffset, width: 386 - 7, height: 54 });

  //additional first floor platforms
  platforms.push({ x: 1298 + 218 - 107 - 147 + 1 + xOffset, y:  500 - 7 + 15  - 53 + yOffset, width: 106, height: 53 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + 2 - 219 + xOffset, y:  500 - 7 + 15  - 53 + yOffset, width: 109, height: 53 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + 2 - 219 - 734 + xOffset, y:  500 - 7 + 15  - 53 + yOffset, width: 109, height: 53 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + 2 - 219 - 734 + 306 + xOffset, y:  500 - 7 + 15  - 53 - 44+ yOffset, width: 75, height: 50 });
  platforms.push({ x: 218 - 147 - 3 + xOffset, y: 500 - 7 + 15 - 52 + yOffset, width: 113, height: 52 });

  platforms.push({ x: 1097 + 60 - 23 - 344 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 264 - 1 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 1097 + 60 - 23 - 344 - 70 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 264 - 46 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 1097 + 60 - 23 - 344 - 70 - 204 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 264 - 46 + 5 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 1097 + 60 - 23 - 344 - 345 + xOffset, y: 202 + 24 - 50 + 2 + 1 + 264 + yOffset, width: 68, height: 16 });
  
  
  //second floor
  platforms.push({ x: 218 - 147 + xOffset, y: 252 + 18 + 5 + yOffset, width: 797, height: 54 });
  platforms.push({ x: 960 + 26 + xOffset, y: 252 + 19 + 10 + yOffset, width: 384, height: 54 });

  //additional second floor platforms
  platforms.push({ x: 402 - 107 + 10 + xOffset, y: 252 + 18 + 5 - 52 + yOffset, width: 202, height: 52 });
  platforms.push({ x: 218 - 147 - 3 + xOffset, y: 252 + 18 + 5 - 52 + yOffset, width: 110, height: 52 });
  platforms.push({ x: 402 - 107 + 10 + 391 + xOffset, y: 252 + 18 + 5 - 52 + yOffset, width: 172, height: 52 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + 2 + xOffset, y: 252 + 19 + 10 - 53 + yOffset, width: 105, height: 53 });
  platforms.push({ x: 1298 + 218 - 107 - 147 + 2 - 278 + xOffset, y: 252 + 19 + 10 - 53 + yOffset, width: 158, height: 53 });
  platforms.push({ x: 1097 + 60 - 23 + xOffset, y: 202 + 24 - 50 + 2 + 1 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 340 - 113 - 5 - 4 + xOffset, y: 167 + 58 - 30 + 3 + 2 + yOffset, width: 46, height: 47 });



  //building boundaries
  platforms.push({ x: 218 - 147 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
  platforms.push({ x: 213 - 147 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
  platforms.push({ x: 1272 + 147 - 51 + xOffset, y: 0 + yOffset, width: 5, height: 820 });

  lift = new Lift(218 - 147 + 803 + xOffset, 750 - 32 + 5 + yOffset, 111, 5, 2, 260 - 90 + yOffset, 750 - 32 + 6 + yOffset); // easy level lift

}


function draw() {
  //background(204, 221, 233); 
  background(255, 255, 255);
  const state = gameManager.getState();

  if (state === "home") {
    let x = (width - homeImage.width) / 2;
    let y = (height - homeImage.height) / 2;
    image(homeImage, x, y);

    if (showInfo) {
      const popupW = 900;
      const popupH = 600;
      const popupX = (width - popupW) / 2;
      const popupY = (height - popupH) / 2;
      image(infoSlides[currentSlide], popupX, popupY, popupW, popupH);
    }
  }

  else if (state === "difficulty") {
    let x = (width - gameDifficultyImage.width) / 2;
    let y = (height - gameDifficultyImage.height) / 2;
    image(gameDifficultyImage, x, y);
  }

  
  else if (state === "playing") {
    if (!player) return;

    let mazeImage;
    if (gameManager.getDifficulty() === "easy") {
      mazeImage = mazeFloorEasyImage;
    } else {
      mazeImage = mazeFloorHardImage;
    }
  
    let x = (width - mazeImage.width) / 2;
    let y = (height - mazeImage.height) / 2;
    image(mazeImage, x, y);
  
    if (gameManager.getDifficulty() === "hard") {
      chemistryPuzzle.update();
      botanyPuzzle.update();
    }
  
    if (state === "playing" && gameController) {
      gameController.update();
      updateGame();
    }
  }

  else if (state === "won") {
    let x = (width - missionCompleteImage.width) / 2;
    let y = (height - missionCompleteImage.height) / 2;
    image(missionCompleteImage, x, y);
  }

  else if (state === "gameOver") {
    let x = (width - gameOverImage.width) / 2;
    let y = (height - gameOverImage.height) / 2;
    image(gameOverImage, x, y);
  }
}

function updateGame() {
  if (!player) return;
  const difficulty = gameManager.getDifficulty();

  // HARD LEVEL PUZZLE LOGIC
  if (difficulty === "hard") {
    // chemistry puzzle
    if (
      !chemistryPuzzle.vialCollected &&
      !chemistryPuzzle.showQuestion &&
      !chemistryPuzzle.showSuccess
    ) {
      if (dist(player.x, player.y, 1316 + xOffset, 419 + yOffset) < 50){
        chemistryPuzzle.interactWithBook();
      }

      if (dist(player.x, player.y, 167 + xOffset, 422 + yOffset) < 50) {
        chemistryPuzzle.interactWithVial();
        chemistryPuzzle.showTryAgain = false;
      }
    }

    // botany puzzle
    if (!botanyPuzzle.plantCollected) {
      const nearNote = dist(player.x, player.y, 138 + xOffset, 177 + yOffset) < 100;
      const nearPlant = dist(player.x, player.y, 1192 + xOffset, 199 + yOffset) < 100;

      if (nearNote) {
        botanyPuzzle.interactWithNote();
      }
      if (nearPlant) {
        botanyPuzzle.interactWithFlower();
      }
    }
  }

  // GAME LOGIC FOR BOTH EASY AND HARD LEVEL

    // countdown and ingredients
    fill(0);
    textSize(15); 
    textFont('monospace'); 
    text(`Time Left: ${timeManager.getFormattedTime()}`, 30, 26);
    text(`Ingredients: ${gameController.collectedIngredients} / ${gameController.requiredIngredients}`, 30, 40);
    timeManager.updateTime();
    gameManager.updateGameStatus();

    // update and display the lift
    lift.update();
    lift.create();
      
    if (lift.isPlayerOnLift(player)) {
      player.y = lift.y - player.height
      player.velocityY = 0;
      player.y += lift.displacement();
      isOnPlatform = true;
    }

    // directional movement
    if (keyIsDown(LEFT_ARROW)) {
      player.velocityX = -player.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      player.velocityX = player.speed;
    } else {
      player.velocityX = 0;
    }
      
    // apply gravity
    let gravity = 0.5;
    player.velocityY += gravity;
      
    // update player's position
    player.x += player.velocityX;
    player.y += player.velocityY;
      
    // reset onPlatform bool before checking collisions
    player.onPlatform = false;
      
    // resolve collisions with all platforms.
    for (let i = 0; i < platforms.length; i++) {
      collision(player, platforms[i]);
    }

    // Draw the temporary player.
    fill(255, 0, 0);
    rect(player.x, player.y, player.width, player.height);
      
    /*
      // Draw the platforms.
      fill(0, 255, 0);
      for (let i = 0; i < platforms.length; i++) {
        rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
      }
    */
    
}

function collision(player, platform) {
  // check if the player and platform intersect.
  if (
    player.x < platform.x + platform.width &&
    player.x + player.width > platform.x &&
    player.y < platform.y + platform.height &&
    player.y + player.height > platform.y
  ) {
    // compute the overlap on the X and Y axes.
    let overlapX =
      Math.min(player.x + player.width, platform.x + platform.width) -
      Math.max(player.x, platform.x);
    let overlapY =
      Math.min(player.y + player.height, platform.y + platform.height) -
      Math.max(player.y, platform.y);
    
    // resolve the collision on the axis with the smallest overlap
    if (overlapX < overlapY) {
      // side collision resolution
      if (player.x + player.width / 2 < platform.x + platform.width / 2) {
        // player's centre is to the left of the platform's centre
        player.x = platform.x - player.width;
      } else {
        // player's centre is to the right of the platform's centre
        player.x = platform.x + platform.width;
      }
      player.velocityX = 0;
    } else {
      // vertical collision resolution
      if (player.y + player.height / 2 < platform.y + platform.height / 2) {
        // player's centre is above the platform's centre
        player.y = platform.y - player.height;
        player.velocityY = 0;
        player.onPlatform = true;
      } else {
        // player hits the platform from below
        player.y = platform.y + platform.height;
        player.velocityY = -player.velocityY * 0.08;
      }
    }
  } 
}

function keyPressed() {
  // only allow jumping during gameplay
  if (gameManager.getState() === "playing") {
    if ((keyCode === UP_ARROW || key === ' ') && player.onPlatform) {
      player.velocityY = player.jumpPower;
    }
  }
}

// fix mouse press for play again button, easy button, mission complete home button (mouse X and mouse Y)
function mousePressed() {
  console.log("Mouse clicked at:", mouseX, mouseY); // used to find the coordinates of the buttons

  const state = gameManager.getState();

  // Handle info popup (NEXT / EXIT) — only from home screen now
  if (state === "home" && showInfo) {

    // NEXT button
    if (
      currentSlide < 2 &&
      mouseX > 1051 + xOffset && mouseX < 1107  + xOffset&&
      mouseY > 597  + yOffset&& mouseY < 631 + yOffset
    ) {
      currentSlide++;
      return;
    }

    // EXIT button
    if (
      currentSlide === 2 &&
      mouseX > 1095  + xOffset&& mouseX < 1155 + xOffset &&
      mouseY > 124 + yOffset&& mouseY < 182 + yOffset
    ) {
      showInfo = false;
      return;
    }
  }

  if (state === "home") {
    // Start button
    if (
      mouseX > 798 + xOffset&& mouseX < 1003  + xOffset&&
      mouseY > 283  + yOffset && mouseY < 379 + yOffset
    ) {
      gameManager.goToDifficultyScreen();
    }
  
    // How to play button 
    if (
      mouseX > 450 + xOffset&& mouseX < 666 + xOffset&&
      mouseY > 285  + yOffset&& mouseY < 373 + yOffset
    ) {
      showInfo = true;
      currentSlide = 0;
    }
  }

  else if (state === "difficulty") {
    // Hard button
    if (
      mouseX > 776 + xOffset&& mouseX < 927 + xOffset&&
      mouseY > 249  + yOffset&& mouseY < 442 + yOffset
    ) {
      gameManager.startGame("hard");
    }
  
    // Easy button
    if (
      mouseX > 530 + xOffset&& mouseX < 681 + xOffset&&
      mouseY > 240  + yOffset&& mouseY < 428 + yOffset
    ) {
      gameManager.startGame("easy");
    }

  }  else if (state === "gameOver") {
    // Game Over - "Play Again" button
    if (
      mouseX > 567 + xOffset&& mouseX < 823 + xOffset&&
      mouseY > 557  + yOffset&& mouseY < 660 + yOffset
    ) {
      gameManager.resetGame();
      gameManager.goToDifficultyScreen();
    }
  }
  
  else if (state === "won") {
    // Win - "Home" button
    if (
      mouseX > 567  + xOffset&& mouseX < 823  + xOffset&&
      mouseY > 557  + yOffset&& mouseY < 660 + yOffset
    ) {
      gameManager.resetGame();
      gameManager.setState("home");
    }
  }
  
  // puzzle mouse clicks (only apply if you're in the playing state)
  if (state === "playing") {
    chemistryPuzzle.mousePressed(mouseX, mouseY);
    botanyPuzzle.mousePressed(mouseX, mouseY);
  }

}

