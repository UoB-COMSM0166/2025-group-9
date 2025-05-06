class Botany extends Player {
  constructor({x, y, playerImgL, playerImgR}){
    super({ x, y, playerImgL, playerImgR});
  }

  update(){
    if (keyIsDown(65)) {
      this.currentPlayerImg = this.playerImgL;
      this.velocityX = -this.speed;
    } else if (keyIsDown(68)) {
      this.currentPlayerImg = this.playerImgR;
      this.velocityX = this.speed;
    } else {
      this.velocityX = 0;
    }
    super.update();
  }

}