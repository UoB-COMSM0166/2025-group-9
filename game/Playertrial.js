class Player {
    constructor({image, x, y, gravity = 1}){
        this.position = { x, y};
        this.velocity = {x: 0 , y: 0};
        this.gravity = gravity;
        this.image = image;
        //this.image.src = imageSrc;
        this.width = image.width;
        this.height = image.height;
       // this.image.onload = () => {
          //  this.width = this.image.width;
          //  this.height = this.image.height;
      //  }
    }
    
     update() {
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
     }

     draw() {
        image(this.image, this.position.x, this.position.y, this.width, this.height);

     }
}