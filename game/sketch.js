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
let platforms = [];
let liftInstructionImg;
let showLiftPopup = false;
let liftPopupDismissed = false;
let startTimerAfterPopup = false;
let uiManager;
let gameLoop;
let liftLeverSwitchSound;
let gameMenuSelectionSound;
let backgroundMusic;

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
  liftLeverSwitchSound = new soundManager("assets/leverswitch.wav");
  gameMenuSelectionSound = new soundManager("assets/gamemenuselection.wav");
  backgroundMusic = new soundManager("assets/menubackground.wav");
}

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 813;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.play('loop');
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
  botanyPlayer = new Botany({ x: 750 + xOffset, y: 650 + yOffset, playerImgL : botanyLeftImg, playerImgR: botanyRightImg})
  chemistryPlayer = new Chemistry({ x: 650 + xOffset, y: 650 + yOffset, playerImgL : chemistryLeftImg, playerImgR: chemistryRightImg})

  uiManager = new UIManager({ homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, mazeFloorEasyImage, 
                            missionCompleteImage, infoSlides, liftInstructionImg}, xOffset, yOffset);
  
  const players = { botany: botanyPlayer, chemistry: chemistryPlayer };
  const platformFunctions = { reLoadHardPlatforms };

  gameLoop = new GameLoop({gameManager, gameController, uiManager, timeManager, chemistryPuzzle, botanyPuzzle, players, liftRef: lift,
                            images, platformFunctions});

}

function loadHardPlatforms() {

  platforms = loadPlatforms('hard', xOffset, yOffset, 0);
  lift = new Lift({x: 874 + xOffset, y: 723 + yOffset, width :111, height: 5,liftSpeed: 2, floorGround: 724 + yOffset, floorOne: 455 + yOffset, floorTwo: 260 + yOffset, mode: 1}); // hard level lift
  gameLoop.setPlatforms(platforms);
}

function reLoadHardPlatforms() {

  platforms = loadPlatforms('hard', xOffset, yOffset, 1);
  gameLoop.setPlatforms(platforms);
}

function loadEasyPlatforms() {

  platforms = loadPlatforms('easy', xOffset, yOffset, 0);
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
    backgroundMusic.stop();
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
      liftLeverSwitchSound.play('once');
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
      gameMenuSelectionSound.play('once');
      uiManager.nextSlide();
      return;
    }
    // EXIT button
    if (
      uiManager.getCurrentSlide() === 2 &&
      mouseX > 1095  + xOffset&& mouseX < 1155 + xOffset &&
      mouseY > 124 + yOffset&& mouseY < 182 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
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
      gameMenuSelectionSound.play('once');
      gameManager.goToDifficultyScreen();
    }
  
    // How to play button  - goes to info pop ups
    if (
      mouseX > 450 + xOffset&& mouseX < 666 + xOffset&&
      mouseY > 285  + yOffset&& mouseY < 373 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
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
      gameMenuSelectionSound.play('once');
      gameManager.startGame("hard");
    }
  
    // Easy button
    if (
      mouseX > 530 + xOffset&& mouseX < 681 + xOffset&&
      mouseY > 240  + yOffset&& mouseY < 428 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
      gameManager.startGame("easy");
    }

    // Back button on difficulty screen
    if (
      mouseX > xOffset + 15 && mouseX < xOffset + 95 && 
      mouseY > yOffset && mouseY < yOffset + 40
    ) {
      gameMenuSelectionSound.play('once');
      gameManager.setState("home");
    }

  // GAME OVER SCREEN
  }  else if (state === "gameOver") {
    gameMenuSelectionSound.play('once');
    // "Play Again" button - resets the game and goes back to difficulty select screen
    if (
      mouseX > 567 + xOffset&& mouseX < 823 + xOffset&&
      mouseY > 557  + yOffset&& mouseY < 660 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
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
      gameMenuSelectionSound.play('once');
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
      gameMenuSelectionSound.play('once');
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
        gameMenuSelectionSound.play('once');
        liftPopupDismissed = true;
        showLiftPopup = false;
      }      
    }
  }
}
