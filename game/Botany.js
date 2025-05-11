class Botany extends Player {
  constructor({x, y, playerImgL, playerImgR}){
    super({ x, y, playerImgL, playerImgR});
  }

  update(){
    if (keyIsDown(65)) {
      this.currentPlayerImg = this.playerImgL;
      this.velocityX = -this.speed;
      this.direction = 'left';
      this.footsteps();
    } else if (keyIsDown(68)) {
      this.currentPlayerImg = this.playerImgR;
      this.velocityX = this.speed;
      this.direction = 'right';
      this.footsteps();
    } else {
      this.velocityX = 0;
    }
    super.update();
  }

  updateImages(images) {
    this.playerImgL = images.botanyLeftImg;
    this.playerImgR = images.botanyRightImg;
    this.currentPlayerImg =
    this.direction === 'left'
      ? images.botanyLeftImg
      : images.botanyRightImg;
  }
  
}