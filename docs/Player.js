class Player {
    constructor(characterType, PlayerSpeed, positionX, positionY) {
        this.characterType = characterType; // chemist or botanist
        this.PlayerSpeed = PlayerSpeed; // player movement speed
        this.positionX = positionX; // player's starting position 'horizontally'
        this.positionY = positionY; // player's starting position 'vertically'
        this.isAlive = true; // track if the player is still alive
        this.cureCollected = []; // list for collected cure items
        this.isJumping = false; // track if the player is jumping
    }

    // method to collect cure components
    collectCureComp(component) {
        this.cureCollected.push(component);
        console.log(`${this.characterType} collected ${component}`);
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
        if (!this.isJumping) { // check if the player is already jumping to prevent double jumping
            this.isJumping = true;
            this.positionY -= 50; // moving up
            console.log(`${this.characterType} jumped to ${this.positionY}`);

            // falling back after 0.5 seconds
            setTimeout(() => {
                this.positionY += 50; // moving back down
                this.isJumping = false; // allowing to jump again
                console.log(`${this.characterType} landed at: ${this.positionY}`);
            }, 500);
        }      
    }

    // useLift()?
    // takeDamage()?
    // isFailed()?
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
