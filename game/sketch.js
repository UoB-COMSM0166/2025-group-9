let gameManager;
let gameController;
let timeManager;


let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, missionCompleteImage;

function preload() {
  homeImage = loadImage("assets/homepage.png");
  gameDifficultyImage = loadImage("assets/gamedifficulty.png");
  gameOverImage = loadImage("assets/gameover.png");
  mazeFloorHardImage = loadImage("assets/mazefloorhard.png");
  missionCompleteImage = loadImage("assets/missioncomplete.png");
}

function setup() {
  createCanvas(1040, 800);

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

    timeManager.updateTime();

    fill(0);
    textSize(20);
    text(`Time Left: ${timeManager.getFormattedTime()}`, 20, 30);
    text(`Ingredients: ${gameController.collectedIngredients} / ${gameController.requiredIngredients}`, 20, 60);

    gameManager.updateGameStatus();

  } else if (state === "won") {
    image(missionCompleteImage, 0, 0, width, height);

  } else if (state === "gameOver") {
    image(gameOverImage, 0, 0, width, height);
  }
}

function mousePressed() {
  const state = gameManager.getState();

  if (state === "home") {
    gameManager.goToDifficultyScreen();

  } else if (state === "difficulty") {
    gameManager.startGame();

  } else if (state === "won" || state === "gameOver") {
    gameManager.resetGame();
  }
}

