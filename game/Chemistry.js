class Chemistry{ // add extends Sprite
  constructor(){
      this.position = { 
        x: 150, 
        y: 150 
      }
      this.velocity = { x: 0, y: 0 }
      this.width = 100
      this.height = 100
      this.sides = {
        bottom: this.position.y + this.height
      }
      this.gravity = 1;
    }
      
      draw(){
        // for testing purposes only -- remove later
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
  
     update(){
      this.position.x += this.velocity.x;  
      this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;
        // above the bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height){
          this.velocity.y += this.gravity;
          //this.velocity.y = this.velocity + this.gravity;
        } else this.velocity.y = 0;
      } 
}
