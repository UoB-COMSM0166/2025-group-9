class Player {
    constructor({x, y, playerImgL, playerImgR}){
        this.x = x;
        this.y = y;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.5;
        this.jumpPower = -12;
        this.speed = 2;
        this.onPlatform = false;
        this.playerImgL = playerImgL;
        this.playerImgR = playerImgR;
        this.currentPlayerImg = this.playerImgL;
        this.width = this.currentPlayerImg.width || 20;
        this.height = this.currentPlayerImg.height || 20;
    }
    
     update() {
        
      // apply gravity
      this.velocityY += this.gravity;
        
      // update player's position
      this.x += this.velocityX;
      this.y += this.velocityY;
    
      // reset onPlatform bool before checking collisions
      this.onPlatform = false;

    }

     create() {
        image(this.currentPlayerImg, this.x, this.y, this.width, this.height);
     }

     jump() {
        if (this.onPlatform) {
          this.velocityY = this.jumpPower;
        }
      }
}