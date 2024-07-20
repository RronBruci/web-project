"use strict";

let ctx;
let x = 15;
let y = 27;
let xBatterySpeed = 400;
let yBatterySpeed = 100;
let animateInterval;
let netCollectedOrNot = false;
let playerWithBattery = false;
let batteriesCollected = 0;
let xBatterySpeedTwo = -100;
let yBatterySpeedTwo = -100; //second additional battery.
let batteryCounter = 0;
let xSpeed = 5;
let ySpeed = 10;
let keysWork = true;//for when the game ends.

//setup function which is called in the html
function setup() {
  ctx = document.getElementById("circlesCanvasId").getContext("2d");
  player(x, y);
  animateInterval = setInterval(drawNextFrame, 25);
  //draw();//might have to comment this out.
}

//our robot player
function player(x, y) {
  
  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.rect(x, y, 50, 30);
  ctx.fill();
  //Outer rectangle of robot

  ctx.beginPath();
  ctx.fillStyle = "cyan";
  ctx.rect(x + 5, y + 5, 40, 20);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x, y, 50, 30);
  ctx.stroke();
  //Outer rectangle of robot

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x + 5, y + 5, 40, 20);
  ctx.stroke();
  //inner rectangle of robot

  ctx.beginPath();
  ctx.fillStyle = "cyan";
  ctx.rect(x + 15, y - 5, 20, 5);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x + 15, y - 5, 20, 5);
  ctx.stroke();
  //top rectangle where the come antennes from

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x + 15, y + 10, 4, 0, 2 * Math.PI);
  ctx.fill();
  //left eye

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x + 35, y + 10, 4, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  //right eye

  ctx.beginPath();
  ctx.lineTo(x + 15, y + 20);
  ctx.lineTo(x + 35, y + 20);
  ctx.stroke();
  //mouth

  ctx.beginPath();
  ctx.lineTo(x + 20, y - 5);
  ctx.lineTo(x + 10, y - 15);
  ctx.lineTo(x + 15, y - 35);
  ctx.stroke();
  ctx.closePath();
  //first antennes

  ctx.beginPath();
  ctx.lineTo(x + 30, y - 5);
  ctx.lineTo(x + 25, y - 10);
  ctx.lineTo(x + 35, y - 25);
  ctx.lineTo(x + 33, y - 35);
  ctx.stroke();
  ctx.beginPath();
  // second antennes
}

//our robot player with the holster on top of it, ready to capture a battery
function playerWithNet(x, y) {
  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.rect(x, y, 50, 30);
  ctx.fill();
  //Outer rectangle of robot

  ctx.beginPath();
  ctx.fillStyle = "cyan";
  ctx.rect(x + 5, y + 5, 40, 20);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x, y, 50, 30);
  ctx.stroke();
  //Outer rectangle of robot

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x + 5, y + 5, 40, 20);
  ctx.stroke();
  //inner rectangle of robot

  ctx.beginPath();
  ctx.fillStyle = "cyan";
  ctx.rect(x + 15, y - 5, 20, 5);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x + 15, y - 5, 20, 5);
  ctx.stroke();
  //top rectangle where the come antennes from

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x + 15, y + 10, 4, 0, 2 * Math.PI);
  ctx.fill();
  //left eye

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x + 35, y + 10, 4, 0, 2 * Math.PI);
  ctx.fill();
  //right eye

  ctx.beginPath();
  ctx.lineTo(x + 15, y + 20);
  ctx.lineTo(x + 35, y + 20);
  ctx.stroke();
  //mouth

  ctx.stroke();
  //ctx.restore();

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.lineTo(x - 5, y - 5);
  ctx.lineTo(x + 55, y - 5);
  ctx.lineTo(x + 55, y - 25);
  ctx.lineTo(x + 45, y - 25);
  ctx.lineTo(x + 45, y - 15);
  ctx.lineTo(x + 5, y - 15);
  ctx.lineTo(x + 5, y - 25);
  ctx.lineTo(x - 5, y - 25);
  ctx.lineTo(x - 5, y - 5);
  ctx.closePath();
  ctx.fill();
  //the part of the holster which we filled

  ctx.beginPath();
  ctx.lineTo(x - 5, y - 5);
  ctx.lineTo(x + 55, y - 5);
  ctx.lineTo(x + 55, y - 25);
  ctx.lineTo(x + 45, y - 25);
  ctx.lineTo(x + 45, y - 15);
  ctx.lineTo(x + 5, y - 15);
  ctx.lineTo(x + 5, y - 25);
  ctx.lineTo(x - 5, y - 25);
  ctx.lineTo(x - 5, y - 5);
  ctx.closePath();
  ctx.stroke();
  //the part of the holster which the stroked
}

//this is to update the robot player with the holster on top whenever an event is triggered by the user
function updatePlayerWithNet(e) {
  if (e.key == "ArrowUp") {
    y -= 10;
  }

  if (e.key == "ArrowDown") {
    y += 10;
  }

  if (e.key == "ArrowLeft") {
    x -= 10;
  }

  if (e.key == "ArrowRight") {
    x += 10;
  }
}

//the battery which moves around
function battery(x2, y2) {

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.rect(x2 + 5, y2 - 40, 40, 25);
  ctx.fill();

  ctx.beginPath();
  ctx.rect(x2 + 45, y2 - 30, 5, 5);
  ctx.fill();

  ctx.beginPath();
  ctx.rect(x2, y2 - 30, 5, 5);
  ctx.fill();

  ctx.fillStyle = "black";

  ctx.beginPath();
  ctx.rect(x2 + 5, y2 - 40, 40, 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(x2 + 45, y2 - 30, 5, 5);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(x2, y2 - 30, 5, 5);
  ctx.stroke();
}

//this is to update the robot player without the holster on top of it for whenever an event is triggered
function updatePlayerPosition(e) {
  if (e.key == "ArrowUp") {
    y -= 10;
  }

  if (e.key == "ArrowDown") {
    y += 10;
  }

  if (e.key == "ArrowLeft") {
    x -= 10;
  }

  if (e.key == "ArrowRight") {
    x += 10;
  }

  // Keep player within bounds
  let newPosition = keepPlayerWithinBounds(x, y);
  x = newPosition.x;
  y = newPosition.y;
}

//this function updates the battery location before the next frame of the battery
function drawNextFrame() {

  xBatterySpeed += xSpeed;
  yBatterySpeed += ySpeed;
  ctx.clearRect(0, 0, 500, 500);
  draw(); //draw the new image

  if (xBatterySpeed <= 0 || xBatterySpeed + 50 >= 500) {
    xSpeed *= -1;
  }

  if (yBatterySpeed <= 30 || yBatterySpeed >= 530) {
    ySpeed *= -1;
  }
}

//this is the function that draws everything and also handles a lot of the logic
function draw() {

  let RobotBatterydistance = calculateDistance(x,y,xBatterySpeed,yBatterySpeed);
  if (!netCollectedOrNot) {
    //if statement for before the user collects the holster and what to draw
    ctx.clearRect(0, 0, 600, 600);
    background();
    borderAndBatteriesCollected(batteriesCollected,netCollectedOrNot,playerWithBattery);
    netToCollectBatteries();

    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.rect(0, 0, 80, 80);
    ctx.fill();

    player(x, y);
    battery(xBatterySpeed, yBatterySpeed);

    if (RobotBatterydistance <= 25) {
      document.getElementById("test1").innerHTML ="TOO MUCH ENERGY!! YOU EXPLODED!!! You need to grab the battery holster first.";
      clearInterval(animateInterval);
     } 
     let RobotNetdistance = calculateDistance(x, y, 430, 410);
    //the distance needed to grab the battery is wonky. fix it by going to the net function. similar problem with battery. I didn't have time to fix this
    if (RobotNetdistance <= 70) {
      netCollectedOrNot = true;
    }
  }
  else {
    //else statement for after the user collects the holster and what to draw
    ctx.clearRect(0, 0, 600, 600);
    background();
    borderAndBatteriesCollected(batteriesCollected,netCollectedOrNot,playerWithBattery);

    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.rect(0, 0, 80, 80);
    ctx.fill();

    playerWithNet(x, y);
    battery(xBatterySpeed, yBatterySpeed);

    if (RobotBatterydistance <= 30) {
      playerWithBattery = true;
      xBatterySpeed = updateBatteryPosition();
      yBatterySpeed = updateBatteryPosition();
    }
 
    if (playerWithBattery) {
      xBatterySpeedTwo = x;
      yBatterySpeedTwo = y;
      battery(xBatterySpeedTwo,yBatterySpeedTwo);
      //canContainOneMoreBattery = false;
      if (RobotBatterydistance <= 30) {
        document.getElementById("test1").innerHTML ="TOO MUCH ENERGY!! YOU EXPLODED!!! You can't capture more than one battery at a time.";
        clearInterval(animateInterval);
        console.log(RobotBatterydistance);
        //couldn't get this to work, please have mercy on me, I think my logic wasn't too far and I was really close.
      }    
      if (x <= 80 && y <= 80) {
        batteriesCollected++;//increment number of batteries each time we bring one home
        borderAndBatteriesCollected(batteriesCollected,netCollectedOrNot,playerWithBattery);
        playerWithBattery = false;
        xBatterySpeedTwo = -100;
        yBatterySpeedTwo = -100;
        differentLevels(batteriesCollected);//call this when we have a certain number of batteries so we can move on to the next level
        //canContainOneMoreBattery = true;

      }
    }
    

    /*if (RobotBatterydistance <= 30&&playerWithBattery&&!canContainOneMoreBattery) {
      console.log(RobotBatterydistance);
      console.log(playerWithBattery);
      document.getElementById("test1").innerHTML ="TOO MUCH ENERGY!! YOU EXPLODED!!! You can't capture more than one battery at a time.";
      clearInterval(animateInterval);
      basically the same thing as above. Just gave up.
    }*/
  }
}

//function to update the speed when we collect enough batteries, hence different level.
function differentLevels(batteriesCollected) {
  if (batteriesCollected>=3&&batteriesCollected<=5) {
    xSpeed = 8;
    ySpeed = 13;
  }
  if (batteriesCollected>=6&&batteriesCollected<=8) {
    xSpeed = 11;
    ySpeed = 16;
  }
  if (batteriesCollected>=9&&batteriesCollected<=10) {
    xSpeed = 15;
    ySpeed = 20;
  }
}

//function to draw the line sepperating the number of batteries collected from the game.And also tells the player when they enter a new level.
function borderAndBatteriesCollected(counter,netCollectedOrNot,playerWithBattery) {

  ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.rect(500,0,100,500);
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.lineTo(500, 0);
  ctx.lineTo(500, 600);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "11px Arial";
  ctx.fillText("Batteries Collected", 505, 30);

  for (let i = 0; i < counter; i++) {
    ctx.save(); // Save the current transformation state
    ctx.translate(520, 100 + i * 40); // Translate the origin
    battery(0, 0); // Draw the battery at the translated position
    ctx.restore(); // Restore the previous transformation state
  }
  
  if (counter >= 10) {
    document.getElementById("test1").innerHTML = "Congragulations!! You won!!";
    clearInterval(animateInterval);
  } 
  else if (!netCollectedOrNot) {
    document.getElementById("test1").innerHTML ="Grab the holster (lower right corner)";
  }


  else if (netCollectedOrNot && !playerWithBattery&&counter<3) {
    document.getElementById("test1").innerHTML ="You have the holster, go collect a battery!";
  } 

  else if (netCollectedOrNot && !playerWithBattery&&counter==3) {
    document.getElementById("test1").innerHTML ="You reached level 2, Watch out batteries are moving faster!!";
  } 

  else if (netCollectedOrNot && !playerWithBattery&&counter==6) {
    document.getElementById("test1").innerHTML ="You reached level 3, Watch out batteries are moving faster!!";
  } 

  else if (netCollectedOrNot && !playerWithBattery&&counter==9) {
    document.getElementById("test1").innerHTML ="You reached the final level!!, Watch out batteries are moving really fast!!";
  } 


  else if (playerWithBattery) {
    document.getElementById("test1").innerHTML ="You have a battery!! Take it home, dont get shocked by toutching another battery!!!";
  } 
}

//function for the holster drawing
function netToCollectBatteries() {
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.lineTo(400, 450);
  ctx.lineTo(460, 450);
  ctx.lineTo(460, 430);
  ctx.lineTo(450, 430);
  ctx.lineTo(450, 440);
  ctx.lineTo(410, 440);
  ctx.lineTo(410, 430);
  ctx.lineTo(400, 430);
  ctx.lineTo(400, 450);
  ctx.fill();

  ctx.beginPath();
  ctx.lineTo(400, 450);
  ctx.lineTo(460, 450);
  ctx.lineTo(460, 430);
  ctx.lineTo(450, 430);
  ctx.lineTo(450, 440);
  ctx.lineTo(410, 440);
  ctx.lineTo(410, 430);
  ctx.lineTo(400, 430);
  ctx.lineTo(400, 450);
  ctx.stroke(); 
 
}

//this function returns a random value for the x and y cordinates of the battery when it gets caught.
function updateBatteryPosition() {
  let randomNumber = Math.random() * (450 - 80) + 80;
  return randomNumber;
}

//this function keeps the player in bounds. It changes the players x and y cordinates when they try to leave the canvas.
function keepPlayerWithinBounds(x, y) {
  let newX = x;
  let newY = y;

  if (x >= 455) {
    newX = 450; // Adjusted to keep player fully within bounds
  } 
  else if (x <= 0) {
    newX = 5; // Adjusted to keep player fully within bounds
  }

  if (y >= 460) {
    newY = 465; // Adjusted to keep player fully within bounds
  } 
  else if (y <= 0) {
    newY = 5; // Adjusted to keep player fully within bounds
  }

  return { x: newX, y: newY };
}

//this is the function used to calculate the distance between dofferent cordinates that represent drawings.
function calculateDistance(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

//this function clears everything and sets everything to the way it was in the beggining so we can reset the game.
function reset() {
  ctx.clearRect(0, 0, 600, 600); // Clear the canvas
  clearInterval(animateInterval); // Clear the animation interval

  // Reset all variables to their initial values
  x = 15;
  y = 27;
  xBatterySpeed = 400;
  yBatterySpeed = 100;
  animateInterval = null;
  netCollectedOrNot = false;
  playerWithBattery = false;
  batteriesCollected = 0;
  xBatterySpeedTwo = 200;
  yBatterySpeedTwo = 200;
  batteryCounter = 0;
  xSpeed = 5;
  ySpeed = 10;
  keysWork = true;

  // Call the setup function to initialize the game again
  setup();
}

//this is the background of the game. We call it at the beggining of our draw function.
function background() {
  ctx.fillStyle="wheat";
  ctx.rect(0,0,500,500);
  ctx.fill();

  ctx.save();
  let backgroundRepetition = 20
  for (let i = 1; i <= backgroundRepetition; i++) {
    //first loop we use to translete down a row and get ready to draw new robots
    for (let i = 0; i < backgroundRepetition; i++) {
          ctx.fillStyle = "yellow";
          ctx.beginPath();
          ctx.lineTo(50, 20);
          ctx.lineTo(45, 40);
          ctx.lineTo(55, 40);
          ctx.lineTo(55, 60);
          ctx.lineTo(60, 35);
          ctx.lineTo(50, 35);
          ctx.lineTo(50, 20);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = "blue";
          ctx.beginPath();
          ctx.lineTo(40, 20);
          ctx.lineTo(35, 40);
          ctx.lineTo(45, 40);
          ctx.lineTo(45, 60);
          ctx.lineTo(50, 35);
          ctx.lineTo(40, 35);
          ctx.lineTo(40, 20);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.lineTo(30, 20);
          ctx.lineTo(25, 40);
          ctx.lineTo(35, 40);
          ctx.lineTo(35, 60);
          ctx.lineTo(40, 35);
          ctx.lineTo(30, 35);
          ctx.lineTo(30, 20);
          ctx.closePath();
          ctx.fill();

          ctx.translate(70, 0);
    }
    ctx.translate(-(70*backgroundRepetition), 70);
  }
  ctx.restore();
}
