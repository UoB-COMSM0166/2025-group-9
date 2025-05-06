const LiftDirection = {
  UP:-1,
  DOWN: 1
};

class Lift {
  constructor({x, y, width, height, liftSpeed, floorGround, floorOne, floorTwo, mode}){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.liftSpeed = liftSpeed;
    this.initialLiftSpeed = liftSpeed;
    this.direction = LiftDirection.UP;
    this.floorGround = floorGround;
    this.floorOne = floorOne;
    this.floorTwo = floorTwo;
    this.prevY = y;
    this.mode = mode;
    if (mode === 1) {
      this.currentMaxFloor = this.floorTwo;
      this.currentMinFloor = this.floorGround;
      this.levelMode = null;
    } 
    else {
      this.currentMaxFloor = this.floorGround;
      this.currentMinFloor = this.floorGround;
      this.liftSpeed = 0;
      this.levelMode = 0;
    }
    this.inTransition = false;
    this.targetFloor = null;
    this.nextMinFloor = null;
    this.nextMaxFloor = null;
  }

  update() {

    if(this.inTransition){
      this.prevY = this.y;
      this.y += this.initialLiftSpeed * this.direction;

      if((this.direction === LiftDirection.UP && this.y <= this.targetFloor)|| (this.direction === LiftDirection.DOWN && this.y >= this.targetFloor)){
        this.y = this.targetFloor;
        this.inTransition = false;
        this.currentMinFloor = this.nextMinFloor;
        this.currentMaxFloor = this.nextMaxFloor;
        this.liftSpeed = this.initialLiftSpeed;
        this.direction = LiftDirection.UP;
      }
      return;
    }

    if(this.liftSpeed === 0){
      return;
    }
    else{
      this.prevY = this.y;
      this.y += this.liftSpeed * this.direction;

      // lift is moving upwards and reaches the max sweep position
      if (this.direction === LiftDirection.UP && this.y <= this.currentMaxFloor) {
        this.y = this.currentMaxFloor;
        this.direction = LiftDirection.DOWN;
      }
        // lift is moving downwards and reaches min sweep position
      else if (this.direction === LiftDirection.DOWN && this.y + this.height >= this.currentMinFloor) {
        this.y = this.currentMinFloor - this.height;
        this.direction = LiftDirection.UP;
      }
    }
  }

  levels() {
    if (this.mode === 1) {
      return;
    }
    if (this.levelMode === 1) {
      this.levelMode = 2;
      this.nextMinFloor = this.floorOne;
      this.nextMaxFloor = this.floorTwo;
      if(this.y > this.nextMaxFloor){
          this.inTransition = true;
          this.targetFloor = this.nextMaxFloor;
          this.direction = LiftDirection.UP;
      }
      else{
        this.resetLevels();
      }
    } 
    else {
      this.levelMode = 1;
      this.nextMinFloor = this.floorGround;
      this.nextMaxFloor = this.floorOne;
      if(this.y + this.height < this.nextMaxFloor){
        this.inTransition = true;
        this.targetFloor = this.nextMaxFloor;
        this.direction = LiftDirection.DOWN;
      }
      else{
        this.resetLevels();
      }
    }
  }
  
  resetLevels() {
    this.inTransition   = false;
    this.currentMinFloor = this.nextMinFloor;
    this.currentMaxFloor = this.nextMaxFloor;
    this.liftSpeed       = this.initialLiftSpeed;
    this.direction       = LiftDirection.UP;
  }
    
  displacement() {
    return this.y - this.prevY;
  }
    
  create() {
    fill(150);
    rect(this.x, this.y, this.width, this.height);

    if(liftImg) {
      image(liftImg,this.x, this.y - 125, this.width, 130);
    }
  }
  
    
  isPlayerOnLift(player) {
    const tolerance = 10;
    let overlapX = (player.x < this.x + this.width) && (player.x + player.width > this.x);
    let contactX = abs((player.y + player.height) - this.y) < tolerance;
    return overlapX && contactX;
  }
}






    
