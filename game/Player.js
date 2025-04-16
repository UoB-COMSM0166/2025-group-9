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
        this.width = this.currentPlayerImg.width || 80;
        this.height = this.currentPlayerImg.height || 80;
       // this.image.onload = () => {
          //  this.width = this.image.width;
          //  this.height = this.image.height;
      //  }
    }
    
     update() {
        /*
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y + this.height < height) {
            this.velocity.y += this.gravity;
        }
        else{
            this.velocity.y = 0;
            this.position.y = height - this.height;
        }

        if(this.position.x < 0){
            this.position.x = 0;
        }
        else if(this.position.x + this.width > width){
            this.position.x = width - this.width;
        }
        if (this.position.y < 0){
            this.position.y = 0;
            this.velocity.y = 0
        }
     }*/
/*
    if (keyIsDown(LEFT_ARROW)) {
        this.currentPlayerImg = this.playerImgL;
        this.velocityX = -this.speed;
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.currentPlayerImg = this.playerImgR;
        this.velocityX = this.speed;
      } else {
        this.velocityX = 0;
      }
*/        
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