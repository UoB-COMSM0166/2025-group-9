let gameManager;
let gameController;
let timeManager;

// Images
let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, missionCompleteImage;

// Load assets
function preload() {
  homeImage = loadImage("assets/homepage.png");
  gameDifficultyImage = loadImage("assets/gamedifficulty.png");
  gameOverImage = loadImage("assets/gameover.png");
  mazeFloorHardImage = loadImage("assets/mazefloorhard.png");
  missionCompleteImage = loadImage("assets/missioncomplete.png");
}

function setup() {
  createCanvas(1040, 800);

  timeManager = new TimeManager(300);
  gameController = new GameController(3, timeManager); 
  gameManager = new GameManager(gameController, uiManager); 
}

function draw() {
  background(0);

  // Show correct screen based on game state
  switch (gameManager.getState()) {
    case "home":
      image(homeImage, 0, 0, width, height);
      break;

    case "difficulty":
      image(gameDifficultyImage, 0, 0, width, height);
      break;

    case "playing":
      image(mazeFloorHardImage, 0, 0, width, height);
      gameManager.updateGameStatus();
      break;

    case "won":
      image(missionCompleteImage, 0, 0, width, height);
      break;

    case "gameOver":
      image(gameOverImage, 0, 0, width, height);
      break;
  }
}

function mousePressed() {
  switch (gameManager.getState()) {
    case "home":
      gameManager.goToDifficultyScreen();
      break;

    case "difficulty":
      gameManager.startGame();
      break;

    case "won":
    case "gameOver":
      gameManager.resetGame();
      break;
  }
}
