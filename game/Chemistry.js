class Chemistry extends Player {
  constructor({x, y, playerImgL, playerImgR}){
    super({ x, y, playerImgL, playerImgR});
  }

  update(){
    if (keyIsDown(LEFT_ARROW)) {
      this.currentPlayerImg = this.playerImgL;
      this.velocityX = -this.speed;
      this.footsteps();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.currentPlayerImg = this.playerImgR;
      this.velocityX = this.speed;
      this.footsteps();
    } else {
      this.velocityX = 0;
    }
    super.update();
  }
}

