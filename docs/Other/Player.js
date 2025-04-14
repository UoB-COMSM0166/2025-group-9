class Player {
    constructor(characterType, PlayerSpeed, positionX, positionY) {
        this.characterType = characterType; // chemist or botanist
        this.PlayerSpeed = PlayerSpeed; // player movement speed
        this.positionX = positionX; // player's starting position 'horizontally'
        this.positionY = positionY; // player's starting position 'vertically'
        this.isAlive = true; // track if the player is still alive
        this.collectedComponents = []; // list for collected cure components
        this.isJumping = false; // track if the player is jumping
        this.velocityY = 0; // vertical velocity
        this.gravityCoefficient = 0.05; // gravity effect
        this.jumpPower = -50; // initial jumping force
        this.jumpTime = 0; // time in the air
        this.playerHealth = 100; // player's life bar
        this.isOnFire = false; // track if the player is standing in 
        this.isHit = false;
    }

    // method to collect cure components and notify cureManager
    collectComponent(cureComponent) {
        // check if the cure has already been collected
        if (!this.collectedComponents.includes(cureComponent)) {
        this.collectedComponents.push(cureComponent); // add component into array
        console.log(`${this.characterType} collected ${cureComponent}`);
        this.cureManager.trackCureCollection(); // / notify the CureManager that a new cure has been collected
        }
    }

    // method to move the player left
    moveLeft() {
        this.positionX -= this.PlayerSpeed;
        console.log(`${this.characterType} moved left to position: ${this.positionX}`);
    }

    // method to move the player right
    moveRight() {
        this.positionX += this.PlayerSpeed;
        console.log(`${this.characterType} moved right to position: ${this.positionX}`);
    }

   // jump
   jump() {
    if (this.isOnPlatform && !this.isJumping) { // check if the player is already jumping to prevent double jumping
        this.isJumping = true;
        this.isOnPlatform = false;
        this.velocityY = this.jumpPower;
        this.jumpTime = 0; // reset jump counter
        this.applyJumpPhysics(); //jumping animation 
    }
}

// non-linear jump physics
applyJumpPhysics() {
    if (this.isJumping) {
        this.jumpTime += 1; // Track time in air
        this.velocityY += 0.5 * this.gravityCoefficient * this.jumpTime ** 2; //  gravity effect
        this.positionY += this.velocityY; // Apply velocity

        console.log(`${this.characterType} is at Y: ${this.positionY}, velocity: ${this.velocityY}`);

        if (this.positionY >= 200 || this.isOnPlatform) { // check if landed
            this.isJumping = false;
            console.log(`${this.characterType} landed.`);
        } else {
            requestAnimationFrame(() => this.applyJumpPhysics()); // Continue animation
        }
    }
}


// useLift()?
takeDamage() {
    if (this.velocityY >= 50 || this.isOnPlatform){ //if player hits the ground too hard
        this.playerHealth -= 30;
        this.PlayerSpeed *= 0.92; //reduced mobility
        this.jumpPower *= 0.92; //reduced jumping power
    }
    //work in the hits and burning conditions similarly
}
// isFailed() puzzle
}


// creating two different players with initial positions
const player1 = new Player ("chemist", 5, 100, 200); // chemist speed, x, y
const player2 = new Player ("botanist", 5, 150, 200); // botanist speed, x, y

console.log(player1);
console.log(player2);
player1.jump();

// listen for key presses
document.addEventListener("keydown", function(event) {
   
    // controlling chemist
    if (event.key === "LeftArrow") {
        chemist.moveLeft();
    } else if (event.key === "RightArrow") {
        chemist.moveRight();
    } else if (event.key === "UpArrow") {
        chemist.jump();
    }

    // controlling botanist
    if (event.key === "z" || event.key === "Z") {
        botanist.moveLeft();
    } else if (event.key === "c" || event.key === "C") {
        botanist.moveRight();
    } else if (event.key === "d" || event.key === "D") {
        botanist.jump();
    }
});
