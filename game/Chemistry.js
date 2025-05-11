class Chemistry extends Player {
  constructor({x, y, playerImgL, playerImgR}){
    super({ x, y, playerImgL, playerImgR});
  }

  update(){
    if (keyIsDown(LEFT_ARROW)) {
      this.currentPlayerImg = this.playerImgL;
      this.velocityX = -this.speed;
      this.direction = 'left';
      this.footsteps();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.currentPlayerImg = this.playerImgR;
      this.velocityX = this.speed;
      this.footsteps();
      this.direction = 'right';
    } else {
      this.velocityX = 0;
    }
    super.update();
  }

  updateImages(images) {
    this.playerImgL = images.chemistryLeftImg;
    this.playerImgR = images.chemistryRightImg;
    this.currentPlayerImg =
    this.direction === 'left'
      ? images.chemistryLeftImg
      : images.chemistryRightImg;

    
  }
  
}

