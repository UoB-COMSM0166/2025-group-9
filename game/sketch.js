let gameManager;
let gameController;
let timeManager;
let lift;
let botanyPuzzle;
let chemistryPuzzle;
let mazeImage;
let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, mazeFloorEasyImage, missionCompleteImage;
let chemInfoPopupImg, vialQuestionImg, vialCongratsImg, vialTryAgainImg;
let plantInfoImg, plantQuestionImg, plantCongratsImg, plantTryAgainImg;
let lockTreeImg, flowerImg, keyImg, flaskImg;
let keyReminderPopupImg;
let selectedDifficulty;
let hurryToLabImg;
let infoSlides = [];
let currentSlides = 0;
let showInfo = false;
let liftImg;
let botanyPlayer;
let botanyLeftImg;
let botanyRightImg;
let chemistryPlayer;
let chemistryLeftImg;
let chemistryRightImg;
let nearLiftLever1Bot;
let nearLiftLever1Chem;
let nearLiftLever2Bot;
let nearLiftLever2Chem;
let chemistryPuzzleSolved = false;
let botanyPuzzleSolved = false;
// temporary player and platforms for collision testing
//let player;
let platforms = [];
let liftInstructionImg;
let showLiftPopup = false;
let liftPopupDismissed = false;
let startTimerAfterPopup = false;
let uiManager;
let gameLoop;

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
  hurryToLabImg = loadImage("assets/hurry-to-lab.png");
  liftImg = loadImage("assets/lift.png");
  botanyLeftImg = loadImage("assets/botanyLeft80.png");
  botanyRightImg = loadImage("assets/botanyRight80.png");
  chemistryLeftImg = loadImage("assets/chemistryLeft80.png");
  chemistryRightImg = loadImage("assets/chemistryRight80.png");
  lockTreeImg = loadImage("assets/lock.png");
  flowerImg = loadImage("assets/flower.png");
  keyImg = loadImage("assets/key.png");
  flaskImg = loadImage("assets/flask.png");
  liftInstructionImg = loadImage("assets/lift-popup.png");
}

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 813;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xOffset = (windowWidth - BASE_WIDTH)/2;
  yOffset = (windowHeight - BASE_HEIGHT)/2;

  const images = {
    chemInfoPopupImg,
    vialQuestionImg,
    vialCongratsImg,
    vialTryAgainImg,
    botanyNoteImg,
    botanyQuestionImg,
    botanyCongratsImg,
    botanyTryAgainImg,
    keyReminderPopupImg,
    hurryToLabImg,
    liftImg,
    botanyLeftImg,
    botanyRightImg,
    chemistryLeftImg,
    chemistryRightImg,
    lockTreeImg,
    flowerImg,
    keyImg,
    flaskImg
  };

  timeManager = new TimeManager();
  gameController = new GameController(2, timeManager); // 2 ingredients needed
  gameManager = new GameManager(gameController);
  chemistryPuzzle = new ChemistryPuzzle(images);
  botanyPuzzle = new BotanyPuzzle(images);
  botanyPlayer = new BotanyTrial({ x: 750 + xOffset, y: 650 + yOffset, playerImgL : botanyLeftImg, playerImgR: botanyRightImg})
  chemistryPlayer = new ChemistryTrial({ x: 650 + xOffset, y: 650 + yOffset, playerImgL : chemistryLeftImg, playerImgR: chemistryRightImg})

  uiManager = new UIManager({ homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, mazeFloorEasyImage, 
                            missionCompleteImage, infoSlides, liftInstructionImg}, xOffset, yOffset);
  
  const players = { botany: botanyPlayer, chemistry: chemistryPlayer };
  const platformFunctions = { reLoadHardPlatforms };

  gameLoop = new GameLoop({gameManager, gameController, uiManager, timeManager, chemistryPuzzle, botanyPuzzle, players, liftRef: lift,
                            images, platformFunctions});

}

function loadHardPlatforms() {
  platforms = [];

  //ground floor 
  platforms.push({ x: 71 + xOffset, y: 718 + yOffset, width: 1298, height: 50 });
  platforms.push({ x: 71 + xOffset, y: 691 + yOffset, width: 421, height: 27 });
  platforms.push({ x: 71 + xOffset, y: 664 + yOffset, width: 373, height: 27 });

  //table
  platforms.push({ x: 1224 + xOffset, y: 684 + yOffset, width: 50, height: 5 });

  //lock
  platforms.push({ x: 320 + xOffset, y: 510 + yOffset, width: 60, height: 120 });
  
  //first floor
  platforms.push({ x: 71 + xOffset, y: 492 + yOffset, width: 801, height: 54 });
  platforms.push({ x: 983 + xOffset, y: 493 + yOffset, width: 386, height: 54 });

  //additional first floor platforms
  platforms.push({ x: 480 + xOffset, y: 466 + yOffset, width: 240, height: 26 });
  platforms.push({ x: 502 + xOffset, y: 448 + yOffset, width: 193, height: 18 });
  platforms.push({ x: 1007  + xOffset, y: 460 + yOffset, width: 48, height: 10 });
  platforms.push({ x: 1068 + xOffset, y: 445 + yOffset, width: 48, height:10 });
  platforms.push({ x: 129 + xOffset, y: 440 + yOffset, width: 52, height: 52 });
  platforms.push({ x: 1278 + xOffset, y: 445 + yOffset, width: 49, height: 49 });


  //second floor
  platforms.push({ x: 71 + xOffset, y: 271 + yOffset, width: 806, height: 54 });
  platforms.push({ x: 986 + xOffset, y: 272 + yOffset, width: 384, height: 54 });

  //additional second floor platforms
  platforms.push({ x: 296 + xOffset, y: 247 + yOffset, width: 158, height: 27 });
  platforms.push({ x: 71 + xOffset, y: 218 + yOffset, width: 110, height: 52 });
  platforms.push({ x: 1262 + xOffset, y: 216 + yOffset, width: 107, height: 53 });
  platforms.push({ x: 1159 + xOffset, y: 224 + yOffset, width: 46, height: 18 });
  platforms.push({ x: 1098 + xOffset, y: 200 + yOffset, width: 47, height: 18 });
  platforms.push({ x: 1039 + xOffset, y: 228 + yOffset, width: 47, height: 18 });
  platforms.push({ x: 225 + xOffset, y: 222 + yOffset, width: 39, height: 19 });
  platforms.push({ x: 480 + xOffset, y: 225 + yOffset, width: 39, height: 19 });
  platforms.push({ x: 335 + xOffset, y: 152 + yOffset, width: 37, height: 19 });
  platforms.push({ x: 613 + xOffset, y: 188 + yOffset, width: 122, height: 18 });


  //building boundaries
  platforms.push({ x: 71 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
  platforms.push({ x: 66 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
  platforms.push({ x: 1368 + xOffset, y: 0 + yOffset, width: 5, height: 820 });

  lift = new Lift({x: 874 + xOffset, y: 723 + yOffset, width :111, height: 5,liftSpeed: 2, floorGround: 724 + yOffset, floorOne: 455 + yOffset, floorTwo: 260 + yOffset, mode: 1}); // hard level lift

  gameLoop.setPlatforms(platforms);
}

function reLoadHardPlatforms() {
  platforms = [];

  //ground floor 
  platforms.push({ x: 71 + xOffset, y: 718 + yOffset, width: 1298, height: 50 });
  platforms.push({ x: 71 + xOffset, y: 691 + yOffset, width: 421, height: 27 });
  platforms.push({ x: 71 + xOffset, y: 664 + yOffset, width: 373, height: 27 });

  //table
  platforms.push({ x: 1224 + xOffset, y: 684 + yOffset, width: 50, height: 5 });

  //first floor
  platforms.push({ x: 71 + xOffset, y: 492 + yOffset, width: 801, height: 54 });
  platforms.push({ x: 983 + xOffset, y: 493 + yOffset, width: 386, height: 54 });

  //additional first floor platforms
  platforms.push({ x: 480 + xOffset, y: 466 + yOffset, width: 240, height: 26 });
  platforms.push({ x: 502 + xOffset, y: 448 + yOffset, width: 193, height: 18 });
  platforms.push({ x: 1007  + xOffset, y: 460 + yOffset, width: 48, height: 19 });
  platforms.push({ x: 1068 + xOffset, y: 445 + yOffset, width: 48, height:19 });
  platforms.push({ x: 129 + xOffset, y: 440 + yOffset, width: 52, height: 52 });
  platforms.push({ x: 1278 + xOffset, y: 445 + yOffset, width: 49, height: 49 });


  //second floor
  platforms.push({ x: 71 + xOffset, y: 269 + yOffset, width: 806, height: 54 });
  platforms.push({ x: 986 + xOffset, y: 270 + yOffset, width: 384, height: 54 });

  //additional second floor platforms
  platforms.push({ x: 296 + xOffset, y: 244 + yOffset, width: 158, height: 27 });
  platforms.push({ x: 71 + xOffset, y: 218 + yOffset, width: 110, height: 52 });
  platforms.push({ x: 1262 + xOffset, y: 216 + yOffset, width: 107, height: 53 });
  platforms.push({ x: 1159 + xOffset, y: 224 + yOffset, width: 46, height: 18 });
  platforms.push({ x: 1098 + xOffset, y: 200 + yOffset, width: 47, height: 18 });
  platforms.push({ x: 1039 + xOffset, y: 228 + yOffset, width: 47, height: 18 });
  platforms.push({ x: 225 + xOffset, y: 224 + yOffset, width: 39, height: 19 });
  platforms.push({ x: 487 + xOffset, y: 223 + yOffset, width: 39, height: 19 });
  platforms.push({ x: 335 + xOffset, y: 152 + yOffset, width: 37, height: 19 });
  platforms.push({ x: 613 + xOffset, y: 188 + yOffset, width: 122, height: 18 });


  //building boundaries
  platforms.push({ x: 71 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
  platforms.push({ x: 66 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
  platforms.push({ x: 1368 + xOffset, y: 0 + yOffset, width: 5, height: 820 });

  gameLoop.setPlatforms(platforms);
}

function loadEasyPlatforms() {
  platforms = [];

  //ground floor 
  platforms.push({ x: 71 + xOffset, y: 719 + yOffset, width: 1298, height: 50 });


  //additional ground floor
  platforms.push({ x: 537 + xOffset, y: 682 + yOffset, width: 67, height: 17 });
  platforms.push({ x: 473 + xOffset, y: 640 + yOffset, width: 67, height: 18 });
  platforms.push({ x: 277 + xOffset, y: 639 + yOffset, width: 66, height: 16 });
  platforms.push({ x: 204 + xOffset, y: 680 + yOffset, width: 66, height: 16 });
  platforms.push({ x: 370 + xOffset, y: 678 + yOffset, width: 75, height: 43 });


  //first floor
  platforms.push({ x: 71 + xOffset, y: 506 + yOffset, width: 801, height: 54 });
  platforms.push({ x: 990 + xOffset, y: 506 + yOffset, width: 379, height: 54 });

  //additional first floor platforms
  platforms.push({ x: 1263 + xOffset, y: 454 + yOffset, width: 106, height: 53 });
  platforms.push({ x: 1045 + xOffset, y: 454 + yOffset, width: 109, height: 53 });
  platforms.push({ x: 311 + xOffset, y: 454 + yOffset, width: 109, height: 53 });
  platforms.push({ x: 616 + xOffset, y: 411 + yOffset, width: 75, height: 50 });
  platforms.push({ x: 68 + xOffset, y: 455 + yOffset, width: 113, height: 52 });

  platforms.push({ x: 790 + xOffset, y: 441 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 720 + xOffset, y: 396 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 516 + xOffset, y: 401 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 445 + xOffset, y: 441 + yOffset, width: 68, height: 16 });
  
  
  //second floor
  platforms.push({ x: 71 + xOffset, y: 273 + yOffset, width: 797, height: 54 });
  platforms.push({ x: 986 + xOffset, y: 279 + yOffset, width: 384, height: 54 });

  //additional second floor platforms
  platforms.push({ x: 305 + xOffset, y: 222 + yOffset, width: 202, height: 52 });
  platforms.push({ x: 68 + xOffset, y: 222 + yOffset, width: 110, height: 52 });
  platforms.push({ x: 696 + xOffset, y: 222 + yOffset, width: 172, height: 52 });
  platforms.push({ x: 1264 + xOffset, y: 227 + yOffset, width: 105, height: 53 });
  platforms.push({ x: 986 + xOffset, y: 227 + yOffset, width: 158, height: 53 });
  platforms.push({ x: 1134 + xOffset, y: 178 + yOffset, width: 68, height: 16 });
  platforms.push({ x: 218 + xOffset, y: 199 + yOffset, width: 46, height: 48 });



  //building boundaries
  platforms.push({ x: 71 + xOffset, y: 44 + yOffset, width: 1298, height: 54 });
  platforms.push({ x: 66 + xOffset, y: 0 + yOffset, width: 5, height: 820 });
  platforms.push({ x: 1368 + xOffset, y: 0 + yOffset, width: 5, height: 820 });

  lift = new Lift({x: 874 + xOffset, y: 723 + yOffset, width: 111, height: 5, liftSpeed: 2, floorGround: 724 + yOffset, floorOne: 500 + yOffset , floorTwo: 195 + yOffset, mode: 2}); // easy level lift

  gameLoop.setPlatforms(platforms);
}

function draw() {
  //background(204, 221, 233); (original blue background)
  background(255, 255, 255);
  const state = gameManager.getState(); // get current state

  if (state === "home") {
    uiManager.drawHomeScreen(width, height);
  }
  else if (state === "difficulty") {
    uiManager.drawDifficultyScreen(width, height);
  }
  else if (state === "playing") {
    if (!botanyPlayer || !chemistryPlayer ) return; // prevent drawing if player hasn't loaded/been initialised

    // choose correct maze based on difficulty
    let mazeImage;
    if (gameManager.getDifficulty() === "easy") {
      mazeImage = mazeFloorEasyImage;
    } else {
      mazeImage = mazeFloorHardImage;
    }
  
    // center and draw the maze image
    let x = (width - mazeImage.width) / 2;
    let y = (height - mazeImage.height) / 2;
    image(mazeImage, x, y);
  
    // update the game controller
    if (state === "playing" && gameController) {
      gameController.update();
      gameLoop.update(width, height, xOffset, yOffset, showLiftPopup);
    }

    if (gameManager.getDifficulty() === "easy" && showLiftPopup && !liftPopupDismissed) {
      uiManager.drawLiftPopup(width, height);
    }
    
    uiManager.drawBackButton();
  }
  else if (state === "won") {
    uiManager.drawWinScreen(width, height);
  }
  else if (state === "gameOver") {
    uiManager.drawGameOverScreen(width, height);
  }
  
}

function collision(playerObj, platform) {
  // check if the player and platform intersect.
  if (
    playerObj.x < platform.x + platform.width &&
    playerObj.x + playerObj.width > platform.x &&
    playerObj.y < platform.y + platform.height &&
    playerObj.y + playerObj.height > platform.y
  ) {
    // find how much the player and platform are intersecting horizontally and vertically
    let overlapX =
      Math.min(playerObj.x + playerObj.width, platform.x + platform.width) -
      Math.max(playerObj.x, platform.x);
    let overlapY =
      Math.min(playerObj.y + playerObj.height, platform.y + platform.height) -
      Math.max(playerObj.y, platform.y);
    
    // resolve the collision based on whether the overlap(interaction) is more horizontal or vertical
    if (overlapX < overlapY) {
      // side collision resolution
      if (playerObj.x + playerObj.width / 2 < platform.x + platform.width / 2) {
        // if the player is more to the left, move them to the left-side of platform
        playerObj.x = platform.x - playerObj.width;
      } else {
        // if the player centre is more to the right, move them to the right of the platform
        playerObj.x = platform.x + platform.width;
      }
      playerObj.velocityX = 0; //halt horizontal movement
    } else {
      // vertical collision resolution
      if (playerObj.y + playerObj.height / 2 < platform.y + platform.height / 2) {
        // if the player is above the platform, keep them on top of the platform
        playerObj.y = platform.y - playerObj.height;
        playerObj.velocityY = 0; // halt vertical movement
        playerObj.onPlatform = true; //indicate that the player is on a platform
      } else {
        // if the player hits the platform from below
        playerObj.y = platform.y + platform.height;
        // reverse and reduce the players vertical speed to simulate a slight bounce off of platform.
        playerObj.velocityY = -playerObj.velocityY * 0.08;
      }
    }
  } 
}

function keyPressed() {

  const nearLiftLever1Chem = dist(chemistryPlayer.x, chemistryPlayer.y, 405 + xOffset , 654 + yOffset) < 40;
  const nearLiftLever1Bot = dist(botanyPlayer.x, botanyPlayer.y, 405 + xOffset , 654 + yOffset) < 40;
  const nearLiftLever2Chem = dist(chemistryPlayer.x, chemistryPlayer.y, 651 + xOffset , 395 + yOffset) < 40; 
  const nearLiftLever2Bot = dist(botanyPlayer.x, botanyPlayer.y, 651 + xOffset , 395 + yOffset) < 40;
  
  // only allow jumping during gameplay
  if (gameManager.getState() === "playing") {
    if ((keyCode === UP_ARROW || key === ' ') && chemistryPlayer.onPlatform) {
      chemistryPlayer.jump();
    }
    if ((keyCode === 87 || key === 'w') && botanyPlayer.onPlatform) {
      botanyPlayer.jump();
    }
    if ((keyCode === 83 || key === 's') && (nearLiftLever1Bot || nearLiftLever1Chem || nearLiftLever2Bot || nearLiftLever2Chem)) {
      lift.levels();
    }
  }
}

function mousePressed() {
  console.log("Mouse clicked at:", mouseX, mouseY); // used to find the coordinates of the buttons - for debugging purposes only
  const state = gameManager.getState(); // gets the current state of the game

  // HOME SCREEN
  // Handle info/how to play popup
  if (state === "home" && uiManager.shouldShowInfo()) {
    const mx = mouseX;
    const my = mouseY;
    // NEXT button
    if (
      uiManager.getCurrentSlide() < 2 &&
      mouseX > 1051 + xOffset && mouseX < 1107  + xOffset&&
      mouseY > 597  + yOffset&& mouseY < 631 + yOffset
    ) {
      uiManager.nextSlide();
      return;
    }
    // EXIT button
    if (
      uiManager.getCurrentSlide() === 2 &&
      mouseX > 1095  + xOffset&& mouseX < 1155 + xOffset &&
      mouseY > 124 + yOffset&& mouseY < 182 + yOffset
    ) {
      uiManager.exitSlides();
      return;
    }
  }

  // handles main home buttons
  if (state === "home") {
    // Start button - goes to select difficulty page
    if (
      mouseX > 798 + xOffset&& mouseX < 1003  + xOffset&&
      mouseY > 283  + yOffset && mouseY < 379 + yOffset
    ) {
      gameManager.goToDifficultyScreen();
    }
  
    // How to play button  - goes to info pop ups
    if (
      mouseX > 450 + xOffset&& mouseX < 666 + xOffset&&
      mouseY > 285  + yOffset&& mouseY < 373 + yOffset
    ) {
      uiManager.setShowInfo(true);
      uiManager.setCurrentSlide(0);
    }
  }

  // SELECT DIFFICULTY SCREEN
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

    // Back button on difficulty screen
    if (
      mouseX > xOffset + 15 && mouseX < xOffset + 95 && 
      mouseY > yOffset && mouseY < yOffset + 40
    ) {
      gameManager.setState("home");
    }

  // GAME OVER SCREEN
  }  else if (state === "gameOver") {
    // "Play Again" button - resets the game and goes back to difficulty select screen
    if (
      mouseX > 567 + xOffset&& mouseX < 823 + xOffset&&
      mouseY > 557  + yOffset&& mouseY < 660 + yOffset
    ) {
      gameManager.resetGame();
      gameManager.goToDifficultyScreen();
    }
  }
  
  // WON SCREEN
  else if (state === "won") {
    // "Home" button - resets the game and goes back to home screen
    if (
      mouseX > 560 + xOffset && mouseX < 800 + xOffset &&
      mouseY > 510 + yOffset && mouseY < 600 + yOffset
    ) {
      gameManager.resetGame();
      gameManager.setState("home");
    }
  }

  // IN-GAME STATE
  if (state === "playing") {
    // Back Button - resets the game and goes to home screen
    if (
      mouseX > xOffset + 15 && mouseX < xOffset + 95 && 
      mouseY > yOffset && mouseY < yOffset + 40 
    ) {
      gameManager.resetGame();
      gameManager.setState("home");
    }
      // puzzle interactions
      chemistryPuzzle.mousePressed(mouseX, mouseY);
      botanyPuzzle.mousePressed(mouseX, mouseY);
    
    // info pop up for easy level - how to use the lift
    if (gameManager.getDifficulty() === "easy" && showLiftPopup && !liftPopupDismissed) {
      if (
        mouseX > 1095 + xOffset && mouseX < 1155 + xOffset &&
        mouseY > 124 + yOffset && mouseY < 182 + yOffset
      ) {
        liftPopupDismissed = true;
        showLiftPopup = false;
      }      
    }
  }
}
