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

    //if lift in transition, move towards the target floor
    if(this.inTransition){
      this.prevY = this.y;
      this.y += this.initialLiftSpeed * this.direction;

      //lift has reached or passed target floor: lift no longer in transition, update the min and max sweep positions to reflect current sweep zone
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

      //lift is moving upwards and reaches the max sweep position, reverse direction
      if (this.direction === LiftDirection.UP && this.y <= this.currentMaxFloor) {
        this.y = this.currentMaxFloor;
        this.direction = LiftDirection.DOWN;
      }
        //lift is moving downwards and reaches min sweep position, reverse direction
      else if (this.direction === LiftDirection.DOWN && this.y + this.height >= this.currentMinFloor) {
        this.y = this.currentMinFloor - this.height;
        this.direction = LiftDirection.UP;
      }
    }
  }

  levels() {
    if (this.mode === 1) { //if lift mode is 1, do not run levels method on it
      return;
    }
    if (this.levelMode === 1) { //lift is sweeping between Ground Floor and Floor 1(level mode === 1)

      //prepare to sweep between Floor 1 and 2
      this.levelMode = 2;
      this.nextMinFloor = this.floorOne;
      this.nextMaxFloor = this.floorTwo;

      if(this.y > this.nextMaxFloor) { //lift floor is below the min sweep position of the new sweep zone(lift floor is below the platform of Floor 1)

        //transition gracefully to new sweep zone
        this.inTransition = true;
        this.targetFloor = this.nextMaxFloor;
        this.direction = LiftDirection.UP;
      }
      else{
        this.resetLevels();
      }
    } 

    else { //lift is stalled(level mode === 0) or sweeping between Floor 1 and Floor 2(level mode === 2)

      //prepare to sweep between Ground Floor and Floor 1
      this.levelMode = 1;
      this.nextMinFloor = this.floorGround;
      this.nextMaxFloor = this.floorOne;

      if(this.y + this.height < this.nextMaxFloor) { //top of the lift is above the max sweep position of the new sweep zone (top of lift is above the platform of Floor 1)

        //transition gracefully to into the next sweep zone
        this.inTransition = true;
        this.targetFloor = this.nextMaxFloor;
        this.direction = LiftDirection.DOWN;
      }
      else{
        this.resetLevels();
      }
    }
  }
  
  //exits transition state and operates within the new sweep zone
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
  
  //draw lift floor and overlay it with image of lift if available
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






    
