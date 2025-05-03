class Chemistry{
  constructor({imageSrc}){
    this.position = {
      x: 150, 
      y: 150 
    }
    this.velocity = { x: 0, y: 0 }
    this.gravity = 1;
    this.image = new Image();
    this.image.src = imageSrc;
    this.image.onload = () => {
      this.width = this.image.width
      this.height = this.image.height;
    }
    console.log('chem iamge width', this.width, 'height', this.height);
  }
    
    draw(){
      if (this.image.complete){
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
      }
    }

   update(){
    // For keeping the sprite within canvas - boundries
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Apply gravity if the sprite is not touching the bottom of the canvas
    if (this.position.y + this.height < canvas.height) {
      this.velocity.y += this.gravity;  // Apply gravity downward
    } else {
      this.velocity.y = 0; // Stop vertical velocity when hitting the ground
      this.position.y = canvas.height - (this.height); // Place at the bottom of the canvas
    }

    // Handle horizontal boundary check
    if (this.position.x < 0) {
      this.position.x = 0; // Prevent sprite from going off the left
    }

    if (this.position.x + this.width > canvas.width) {
      this.position.x = canvas.width - this.width; // Prevent sprite from going off the right
    }

    // Handle top boundary: Prevent sprite from going off the top of the canvas
    if (this.position.y < 0) {
      this.position.y = 0; // Prevent sprite from going off the top
      this.velocity.y = 0; // Reset vertical velocity when hitting the top
    }
  }   
}
