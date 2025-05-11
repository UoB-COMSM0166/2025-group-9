let gameManager;
let gameController;
let timeManager;
let lift;
let botanyPuzzle;
let chemistryPuzzle;
var mazeImage;
var homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, mazeFloorEasyImage, missionCompleteImage;
var chemInfoPopupImg, vialQuestionImg, vialCongratsImg, vialTryAgainImg;
var plantInfoImg, plantQuestionImg, plantCongratsImg, plantTryAgainImg;
var lockTreeImg, flowerImg, keyImg, flaskImg;
var keyReminderPopupImg;
let selectedDifficulty;
var hurryToLabImg;
var infoSlides = [];
let currentSlides = 0;
let showInfo = false;
var liftImg, liftInstructionImg;
let botanyPlayer, chemistryPlayer;
var botanyLeftImg, botanyRightImg, chemistryLeftImg, chemistryRightImg;
let nearLiftLever1Bot, nearLiftLever1Chem, nearLiftLever2Bot, nearLiftLever2Chem;
let chemistryPuzzleSolved = false;
let botanyPuzzleSolved = false;
let platforms = [];
let showLiftPopup = false;
let liftPopupDismissed = false;
let startTimerAfterPopup = false;
let uiManager;
let gameLoop;
let liftLeverSwitchSound;
let gameMenuSelectionSound;
let backgroundMusic;
let gameplayBackground;
let preloader;
var settingsGearImg;


function preload() {
  preloader = new ImagePreloader();
  preloader.preloadImages();
  preloader.loadSet('default');
  liftLeverSwitchSound = new SoundManager("assets/leverswitch.wav");
  gameMenuSelectionSound = new SoundManager("assets/gamemenuselection.wav");
  backgroundMusic = new SoundManager("assets/menubackground.wav");
  gameplayBackground = new SoundManager("assets/gameplaybackground.wav");
}

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 813;

function setup() {
  // Create a full-window canvas and start background music
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.play('loop');

  // Center the game content on the screen
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

  // Create the player characters with initial positions and sprites
  botanyPlayer = new Botany({ x: 750 + xOffset, y: 650 + yOffset, playerImgL : botanyLeftImg, playerImgR: botanyRightImg})
  chemistryPlayer = new Chemistry({ x: 650 + xOffset, y: 650 + yOffset, playerImgL : chemistryLeftImg, playerImgR: chemistryRightImg})

  // Initialise the UI manager with screen images and position offsets
  uiManager = new UIManager({ homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, mazeFloorEasyImage, 
                            missionCompleteImage, infoSlides, liftInstructionImg}, xOffset, yOffset);
  
  const players = { botany: botanyPlayer, chemistry: chemistryPlayer };
  const platformFunctions = { reLoadHardPlatforms };

  // Create the main game loop instance with all core components
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
    gameplayBackground.setVolume(1.0);
    gameplayBackground.play('loop');
    
    if (!botanyPlayer || !chemistryPlayer ) return; // prevent drawing if player hasn't loaded/been initialised        

    // choose correct maze based on difficulty
    let mazeImage;
    if (gameManager.getDifficulty() === "easy") {
      mazeImage = mazeFloorEasyImage;
    } else {
      mazeImage = mazeFloorHardImage;
    }
  
    // center and draw the maze image
    imageMode(CENTER);
    image(mazeImage, width / 2, height / 2);
    imageMode(CORNER);

  
    // update the game controller and game logic
    if (state === "playing" && gameController) {
      gameController.update();
      gameLoop.update(width, height, xOffset, yOffset, showLiftPopup);
    }

    // show the lift instruction popup (easy mode only)
    if (gameManager.getDifficulty() === "easy" && showLiftPopup && !liftPopupDismissed) {
      uiManager.drawLiftPopup(width, height);
    }
    
    uiManager.drawBackButton();
    uiManager.drawSettingsButton();

    if (uiManager.showSettings) {
      uiManager.drawSettingsPopup();
    }

  }
  else if (state === "won") {
    uiManager.drawWinScreen(width, height);
    gameplayBackground.stop();
  }
  else if (state === "gameOver") {
    uiManager.drawGameOverScreen(width, height);
    gameplayBackground.stop();
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

  // Setting button
  if (dist(mouseX, mouseY, width - 34, 27) < 20) {
    gameMenuSelectionSound.play('once');
    uiManager.showSettings = !uiManager.showSettings;
    return;
  }

  // Settings pop up
  if (uiManager.showSettings) {
    const popupX = (width - 300) / 2;
    const popupY = (height - 300) / 2;
    const modes = ['default', 'protanopia', 'deuteranopia'];

    for (let i = 0; i < modes.length; i++) {
        const modeY = popupY + 125 + i * 50;
        if (
            mouseX > popupX + 50 && mouseX < popupX + 250 &&
            mouseY > modeY - 12 && mouseY < modeY + 18
        ) {
            gameMenuSelectionSound.play('once');
            const newImgs = preloader.loadSet(modes[i]);
            uiManager.currentFilter = modes[i];
            uiManager.images         = newImgs;
            chemistryPuzzle.images  = newImgs;
            botanyPuzzle.images     = newImgs;
            if(gameLoop.updateImages)
              gameLoop.updateImages(newImgs);
              chemistryPlayer.updateImages(newImgs);
              botanyPlayer.updateImages(newImgs);
              
            return;
        }
    }
    return;
  }

  // HOME SCREEN
  // Handle info/how to play popup
  if (state === "home" && uiManager.shouldShowInfo()) {
    const mx = mouseX;
    const my = mouseY;
    // NEXT button
    if (
      uiManager.getCurrentSlide() < 2 &&
      mouseX > 1010 + xOffset && mouseX < 1108 + xOffset &&
      mouseY > 561 + yOffset && mouseY < 637 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
      uiManager.nextSlide();
      return;
    }
    // EXIT button
    if (
      uiManager.getCurrentSlide() === 2 &&
      mouseX > 1057 + xOffset && mouseX < 1155 + xOffset &&
      mouseY > 124 + yOffset && mouseY < 182 + yOffset
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
      mouseX > 760 + xOffset && mouseX < 1003 + xOffset &&
      mouseY > 245 + yOffset && mouseY < 379 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
      gameManager.goToDifficultyScreen();
    }
  
    // How to play button  - goes to info pop ups
    if (
      mouseX > 379 + xOffset && mouseX < 645 + xOffset &&
      mouseY > 240 + yOffset && mouseY < 377 + yOffset
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
      mouseX > 738 + xOffset && mouseX < 927 + xOffset &&
      mouseY > 211 + yOffset && mouseY < 442 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
      gameManager.startGame("hard");
    }
  
    // Easy button
    if (
      mouseX > 492 + xOffset && mouseX < 681 + xOffset &&
      mouseY > 221 + yOffset && mouseY < 447 + yOffset
    ) {
      gameMenuSelectionSound.play('once');
      gameManager.startGame("easy");
    }

    // Back button on difficulty screen
    if (dist(mouseX, mouseY, 34, 27) < 20) {
      gameMenuSelectionSound.play('once');
      gameManager.setState("home");
    }


  // GAME OVER SCREEN
  }  else if (state === "gameOver") {
    gameMenuSelectionSound.play('once');
    // "Play Again" button - resets the game and goes back to difficulty select screen
    if (
      mouseX > 502 + xOffset && mouseX < 888 + xOffset &&
      mouseY > 530 + yOffset && mouseY < 687 + yOffset
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
if (dist(mouseX, mouseY, 34, 27) < 20)
{
      gameMenuSelectionSound.play('once');
      gameplayBackground.stop();
      gameManager.resetGame();
      gameManager.setState("home");
    }
      // puzzle interactions
      chemistryPuzzle.mousePressed(mouseX, mouseY);
      botanyPuzzle.mousePressed(mouseX, mouseY);
    
    // info pop up for easy level - how to use the lift
    if (gameManager.getDifficulty() === "easy" && showLiftPopup && !liftPopupDismissed) {
      if (
        mouseX > 1057 + xOffset && mouseX < 1155 + xOffset &&
        mouseY > 124 + yOffset && mouseY < 182 + yOffset
      ) {
        gameMenuSelectionSound.play('once');
        liftPopupDismissed = true;
        showLiftPopup = false;
      }      
    }
  }
}

