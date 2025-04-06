let gameManager;
let gameController;
let timeManager;


let homeImage, gameDifficultyImage, gameOverImage, mazeFloorHardImage, missionCompleteImage;

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


    player = {
      x: 750,
      y: 550,
      width: 20,
      height: 50,
      velocityX: 0,
      velocityY: 0,
      speed: 2,
      jumpPower: -10,
      onPlatform: false
    };
    
    // platform definitions

    //ground floor 
    platforms.push({ x: 100 + 118, y: 400 + 350, width: 1054, height: 60 });
    platforms.push({ x: 100 + 118, y: 400 + 350 - 60 + 30, width: 200 + 142, height: 30 });
    platforms.push({ x: 100 + 118, y: 400 + 350 - 60 + 25 - 25, width: 200 + 102, height: 30 });

    //table
    platforms.push({ x: 100 + 118 + 935, y: 400 + 350 - 60 + 22, width: 42, height: 5 });


    //first floor
    platforms.push({ x: 100 + 118, y: 400 + 350 - 252 + 2, width: 650, height: 60 });
    platforms.push({ x: 100 + 118 + 651 + 90, y: 400 + 350 - 252 + 3, width: 1054 - 650 - 90, height: 60 });

    //additional first floor platforms
    platforms.push({ x: 100 + 118 + 334, y: 400 + 350 - 252 + 2 - 30, width: 193, height: 30 });
    platforms.push({ x: 100 + 118 + 334 + 20, y: 400 + 350 - 252 + 2 - 30 - 20, width: 153, height: 20 });
    platforms.push({ x: 100 + 118 + 334 + 20 + 211, y: 400 + 350 - 252 + 2 - 30 - 20 - 39, width: 55, height: 17 });
    platforms.push({ x: 100 + 118 + 334 + 20 + 211 + 156 + 54, y: 400 + 350 - 252 + 2 - 30 - 20 - 47, width: 30, height: 21 });
    platforms.push({ x: 100 + 118 + 334 + 20 + 211 + 156 + 132, y: 400 + 350 - 252 + 2 - 30 - 20 - 37, width: 30, height: 21 });
    platforms.push({ x: 100 + 118 + 50, y: 400 + 350 - 252 + 2 - 60, width: 40, height: 60 });
    platforms.push({ x: 100 + 118 + 1054 - 75, y: 400 + 350 - 252 + 2 - 55, width: 40, height: 57 });


    //second floor
    platforms.push({ x: 100 + 120, y: 400 + 350 - 254 - 244, width: 652, height: 60 });
    platforms.push({ x: 100 + 118 + 650 + 92, y: 400 + 350 - 254 - 244, width: 1054 - 650 - 92, height: 60 });

    //additional second floor platforms
    platforms.push({ x: 100 + 120 + 182, y: 400 + 350 - 254 - 244 - 30, width: 128, height: 30 });
    platforms.push({ x: 100 + 120, y: 400 + 350 - 254 - 244 - 60, width: 90, height: 60 });
    platforms.push({ x: 100 + 120 + 1054 - 90, y: 400 + 350 - 254 - 244 - 60, width: 88, height: 60 });
    platforms.push({ x: 100 + 120 + 1054 - 90 - 87, y: 400 + 350 - 254 - 244 - 60 + 10, width: 39, height: 21 });
    platforms.push({ x: 100 + 120 + 1054 - 90 - 87 - 49, y: 400 + 350 - 254 - 244 - 60 + 11 - 28, width: 39, height: 21 });
    platforms.push({ x: 100 + 120 + 1054 - 90 - 87 - 98, y: 400 + 350 - 254 - 244 - 60 + 11 - 60, width: 39, height: 21 });
    platforms.push({ x: 100 + 120 + 120, y: 400 + 350 - 254 - 244 - 60 - 25, width: 30, height: 21 });
    platforms.push({ x: 100 + 120 + 120 + 92, y: 400 + 350 - 254 - 244 - 60 - 23 - 47, width: 30, height: 21 });
    platforms.push({ x: 100 + 120 + 120 + 221, y: 400 + 350 - 254 - 244 - 60 - 23 + 11, width: 30, height: 21 });
    platforms.push({ x: 100 + 120 + 120 + 221 + 98, y: 400 + 350 - 254 - 244 - 60 - 23 + 11 - 18, width: 98, height: 19 });


    //building boundaries
    platforms.push({ x: 100 + 118, y: 0, width: 1054, height: 60 });
    platforms.push({ x: 100 + 113, y: 0, width: 5, height: 800 });
    platforms.push({ x: 100 + 118 + 1054, y: 0, width: 5, height: 800 });

  
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
  } else if (state === "won") {
    image(missionCompleteImage, 0, 0, width, height);

  } else if (state === "gameOver") {
    image(gameOverImage, 0, 0, width, height);
  }
}

/*
function checkCollision(player, platform) {
  let horizontalOverlap = player.x < platform.x + platform.width &&
                          player.x + player.width > platform.x;
  let verticalCollision = player.y + player.height > platform.y &&
                          player.y + player.height < platform.y + platform.height;
  return horizontalOverlap && verticalCollision;
}
*/

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

