let gameManager;
let gameController;
let timeManager;


let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, missionCompleteImage;

let infoSlides = [];
let currentSlides = 0;
let showInfo = false;

function preload() {
  homeImage = loadImage("assets/homepage.png");
  gameDifficultyImage = loadImage("assets/gamedifficulty.png");
  gameOverImage = loadImage("assets/gameover.png");
  mazeFloorHardImage = loadImage("assets/mazefloorhard.png");
  missionCompleteImage = loadImage("assets/missioncomplete.png");
  infoSlides[0] = loadImage("assets/infopage1.png");
  infoSlides[1] = loadImage("assets/infopage2.png");
  infoSlides[2] = loadImage("assets/infopage3.png");
}

function setup() {
  //createCanvas(1400, 800);
  createCanvas(windowWidth, windowHeight);

  timeManager = new TimeManager();
  gameController = new GameController(3, timeManager); // 3 ingredients needed
  gameManager = new GameManager(gameController);
}

function draw() {
  background(204, 221, 233);

  const state = gameManager.getState();

  if (state === "home") {
    image(homeImage, 0, 0, width, height);

  } else if (state === "difficulty") {
    image(gameDifficultyImage, 0, 0, width, height);

  } else if (state === "playing") {
    image(mazeFloorHardImage, 0, 0, width, height);

    if (showInfo) {
      const popupW = 900;
      const popupH = 600;
      const popupX = (width - popupW) / 2;
      const popupY = (height - popupH) / 2;
      image(infoSlides[currentSlide], popupX, popupY, popupW, popupH);
    } else {
        timeManager.updateTime();
        fill(0);
        textSize(20);
        text(`Time Left: ${timeManager.getFormattedTime()}`, 20, 30);
        text(`Ingredients: ${gameController.collectedIngredients} / ${gameController.requiredIngredients}`, 20, 60);
        gameManager.updateGameStatus();
      }
  } else if (state === "won") {
    image(missionCompleteImage, 0, 0, width, height);

  } else if (state === "gameOver") {
    image(gameOverImage, 0, 0, width, height);
  }
}

// fix mouse press for play again button, easy button, mission complete home button (mouse X and mouse Y)
function mousePressed() {
  console.log("Mouse clicked at:", mouseX, mouseY); // used to find the coordinates of the buttons

  const state = gameManager.getState();

  // if playing state and info pages are showing, go to next info page if 'next' button is clicked, go exit info pages if 'exit' button is clicked
  if (state === "playing" && showInfo) {
    console.log("Checking info popup clicks...");
  
    // NEXT button 
    if (
      currentSlide < 2 &&
      mouseX > 1024 && mouseX < 1074 &&
      mouseY > 576 && mouseY < 626
    ) {
      currentSlide++;
      return;
    }
  
    // EXIT button
    if (
      currentSlide === 2 &&
      mouseX > 1100 && mouseX < 1150 &&
      mouseY > 140 && mouseY < 170
    ) {
      showInfo = false;
      return;
    }
  }


  if (state === "home") {
    if (mouseX > 635 && mouseX < 732 && mouseY > 276 && mouseY < 348) {
      gameManager.goToDifficultyScreen();
    }

  } else if (state === "difficulty") {
    if (mouseX > 736 && mouseX < 833 &&mouseY > 294 && mouseY < 427) {
      gameManager.startGame("hard");
    }

  } else if (state === "won" || state === "gameOver") {
    gameManager.resetGame();
  }

  // if playing state and not showing info pop up, if mouse is on '?' button show info pages
  if (state === "playing" && !showInfo) {
    if (mouseX > width - 60 && mouseX < width - 20 && mouseY > 20 && mouseY < 60) {
      showInfo = true;
      currentSlide = 0;
    }
  }
}

