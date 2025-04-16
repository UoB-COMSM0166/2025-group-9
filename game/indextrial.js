/*
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const botany = new Botany({
  imageSrc: 'botanyLeft80.png'
})
const chemistry = new Chemistry({
  imageSrc: 'chemistryLeft80.png'
})



const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  arrowLeft:{
    pressed: false
  },
  arrowRight:{
    pressed: false
  },
  arrowUp: {
    pressed: false
  }

}

function animate(){
  //context.fillStyle = 'white';
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  if (keys.d.pressed){
    botany.velocity.x = 5;
  }else if (keys.a.pressed){
    botany.velocity.x = -5;
  }else botany.velocity.x = 0;

  if (keys.arrowRight.pressed){
    chemistry.velocity.x = 5;
  }else if (keys.arrowLeft.pressed){
    chemistry.velocity.x = -5;
  }else chemistry.velocity.x = 0;


  botany.update(canvas);
  botany.draw(context);
  chemistry.update(canvas);
  chemistry.draw(context);



 window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase(); // Convert key to lowercase
  switch(key) {
    case 'a':
        // move left
        console.log('pressed a - left');
        keys.a.pressed = true;
        //console.log('Left arrow key pressed');
      botany.image.src = 'botanyLeft80.png'
      break;
    case 'd':
      // move right
        //botany.velocity.x = 5;
        console.log('pressed d - right');
         keys.d.pressed = true;
        botany.image.src = 'botanyRight80.png'
      break;
    case 'w':
      // jump
      if (botany.velocity.y === 0) botany.velocity.y = -15;
      console.log('pressed w - up');
      botany.velocity.y = -10;
      break;
    case 'arrowleft':
      // move left
      //chemistry.velocity.x = -5;
      console.log('pressed arrow left - left');
      keys.arrowLeft.pressed = true;
      chemistry.image.src = 'chemistryLeft80.png'
      break;
    case 'arrowright':
      // move right
      //chemistry.velocity.x = 5;
      console.log('pressed arrow right - right');
      keys.arrowRight.pressed = true;
      chemistry.image.src = 'chemistryRight80.png'
      break;
    case 'arrowup':
      // jump
      if (chemistry.velocity.y === 0) chemistry.velocity.y = -15;
      console.log('pressed arrow up - up');
      chemistry.velocity.y = -10;
      break;
    default:
      break;
  }
 })
 // for sprtie to stop moving after the player stops pressing the key
 window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase(); // Convert key to lowercase
  switch(key) {
    case 'a':
      // stop moving left
      //botany.velocity.x = -5;
      console.log('pressed a - left');
      keys.a.pressed = false;
      break;
    case 'd':
      // stop moving right
      //botany.velocity.x = 5;
      console.log('pressed d - right');
      keys.d.pressed = false;
      break;
      case 'arrowleft':
      // stop moving left
      //chemistry.velocity.x = -5;
      console.log('pressed arrow left - left');
      keys.arrowLeft.pressed = false;
      break;
    case 'arrowright':
      // stop moving right
      //chemistry.velocity.x = 5;
      console.log('pressed arrow right - right');
      keys.arrowRight.pressed = false;
      break;
    default:
      break;
  }
 })
}
animate();
*/
// Global variables for the player instances and key states.

/*
let botany, chemistry;
const keys = {
  a: false,
  d: false,
  w: false,
  arrowLeft: false,
  arrowRight: false,
  arrowUp: false
};

function setup(){
  // Create the canvas using p5.
  createCanvas(windowWidth, windowHeight);

  // Create instances using the Botany and Chemistry classes.
  botany = new Botany({ imageSrc: 'assets/botanyLeft80.png' });
  chemistry = new Chemistry({ imageSrc: 'assets/chemistryLeft80.png' });
}

function draw(){
  // Clear the canvas.
  background(255);

  // Set horizontal velocity for botany.
  if(keys.d){
    botany.velocity.x = 5;
  } else if(keys.a){
    botany.velocity.x = -5;
  } else {
    botany.velocity.x = 0;
  }

  // Set horizontal velocity for chemistry.
  if(keys.arrowRight){
    chemistry.velocity.x = 5;
  } else if(keys.arrowLeft){
    chemistry.velocity.x = -5;
  } else {
    chemistry.velocity.x = 0;
  }

  // Update and draw both player types.
  botany.update();
  botany.draw();
  chemistry.update();
  chemistry.draw();
}

function keyPressed(){
  const k = key.toLowerCase();
  switch(k){
    case 'a':
      keys.a = true;
      botany.image.src = 'assets/botanyLeft80.png';
      break;
    case 'd':
      keys.d = true;
      botany.image.src = 'assets/botanyRight80.png';
      break;
    case 'w':
      // Jump for botany.
      if(botany.velocity.y === 0) botany.velocity.y = -15;
      break;
    case 'arrowleft':
      keys.arrowLeft = true;
      chemistry.image.src = 'assets/chemistryLeft80.png';
      break;
    case 'arrowright':
      keys.arrowRight = true;
      chemistry.image.src = 'assets/chemistryRight80.png';
      break;
    case 'arrowup':
      // Jump for chemistry.
      if(chemistry.velocity.y === 0) chemistry.velocity.y = -15;
      break;
  }
}

function keyReleased(){
  const k = key.toLowerCase();
  switch(k){
    case 'a':
      keys.a = false;
      break;
    case 'd':
      keys.d = false;
      break;
    case 'arrowleft':
      keys.arrowLeft = false;
      break;
    case 'arrowright':
      keys.arrowRight = false;
      break;
  }
}

*/