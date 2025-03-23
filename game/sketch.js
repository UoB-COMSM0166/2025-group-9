let gameManager;
let gameController;
let timeManager;
let UIManager;

// images
let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, missionCompleteImage

// load the assets
function preload(){
  homeImage = loadImage("assets/homepage.png");
  gameDifficultyImage = loadImage("assets/gamedifficulty.png");
  gameOverImage = loadImage("assets/gameover.png");
  mazeFloorHardImage = loadImage("assets/mazefloowhard.png");
  missionCompleteImage = loadImager("assets/missioncomplete.png");
}

function setup() {
  createCanvas(1040, 800);
  gameManager = new GameManager(
    homeImage,
    gameDifficultyImage,
    gameOverImage,
    mazeFloorHardImage,
    missionCompleteImage,
  );
}

function draw() {
  background(0);

  gameManager.render();

  if (gameManager.isPlaying()) {
    if (uiManager) uiManager.display();

    // Check for loss
    if (timeManager && timeManager.isTimeUp()) {
      gameManager.setState("lose");
    }

    // Check for win
    if (gameController && gameController.hasWon()) {
      gameManager.setState("win");
    }
  }
}

function mousePressed() {
  switch (gameManager.state) {
    case "home":
      gameManager.setState("difficulty");
      break;

      // only added hard mode for now, can add easy mode later using if-else statements
    case "difficulty":
      gameManager.setState("playing");

      timeManager = new TimeManager(300); // 5 min
      timeManager.start();

      gameController = new GameController(4); // 4 ingredients needed
      uiManager = new UIManager(gameController, timeManager);
      break;

    case "win":
    case "lose":
      gameManager.setState("home");
      break;
  }

}
