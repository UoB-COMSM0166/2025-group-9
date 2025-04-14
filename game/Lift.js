const LiftDirection = {
  UP:-1,
  DOWN: 1
};

class Lift {
  constructor( x, y, width, height, liftSpeed, liftMaxY, liftMinY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.liftSpeed = liftSpeed;
    this.direction = LiftDirection.UP;
    this.liftOn = true;
    this.liftMaxY = liftMaxY;
    this.liftMinY = liftMinY;
    this.prevY = this.prevY;
  }

  update() {
    this.prevY = this.y;
    this.y += this.liftSpeed * this.direction;
      
    // lift is moving upwards and reaches the max sweep position
    if (this.direction === LiftDirection.UP && this.y <= this.liftMaxY) {
      this.y = this.liftMaxY;
      this.direction = LiftDirection.DOWN;
    }
      // lift is moving downwards and reaches min sweep position
    else if (this.direction === LiftDirection.DOWN && this.y + this.height >= this.liftMinY) {
      this.y = this.liftMinY - this.height;
      this.direction = LiftDirection.UP;
    }
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
    const tolerance = 5;
    let overlapX = (player.x < this.x + this.width) && (player.x + player.width > this.x);
    let contactX = abs((player.y + player.height) - this.y) < tolerance;
    return overlapX && contactX;
  }
}






    
