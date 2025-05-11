function collision(player, platform) {
    // check if the player and platform intersect.
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y < platform.y + platform.height &&
      player.y + player.height > platform.y
    ) {
      // find how much the player and platform are intersecting horizontally and vertically
      let overlapX =
        Math.min(player.x + player.width, platform.x + platform.width) -
        Math.max(player.x, platform.x);
      let overlapY =
        Math.min(player.y + player.height, platform.y + platform.height) -
        Math.max(player.y, platform.y);
      
      // resolve the collision based on whether the overlap(interaction) is more horizontal or vertical
      if (overlapX < overlapY) {
        // side collision resolution
        if (player.x + player.width / 2 < platform.x + platform.width / 2) {
          // if the player is more to the left, move them to the left-side of platform
          player.x = platform.x - player.width;
        } else {
          // if the player centre is more to the right, move them to the right of the platform
          player.x = platform.x + platform.width;
        }
        player.velocityX = 0; //halt horizontal movement
      } else {
        // vertical collision resolution
        if (player.y + player.height / 2 < platform.y + platform.height / 2) {
          // if the player is above the platform, keep them on top of the platform
          player.y = platform.y - playerObj.height;
          player.velocityY = 0; // halt vertical movement
          player.onPlatform = true; //indicate that the player is on a platform
        } else {
          // if the player hits the platform from below
          player.y = platform.y + platform.height;
          // reverse and reduce the players vertical speed to simulate a slight bounce off of platform.
          player.velocityY = -player.velocityY * 0.08;
        }
      }
    } 
  }
  window.collision = collision;