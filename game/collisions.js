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
  window.collision = collision;