/*
  100 things
*/
var cellSize = 50;

function setup(){
  createCanvas(windowWidth,windowHeight);
//lines in background
var lineColor = "black";
  line(10,10,2000,1000);
  line(1370,15,10,700);
  line(10,350,1355,350);

//pinkstripes
  for(var row = 0; row <20;row++){
  for(var column =0; column <20;column++){
      noStroke();
      fill("pink");
      rect((cellSize+20)*column, cellSize*row, cellSize, cellSize);
//squares
var rectColor = "red";
  fill(rectColor);
  rect(140,330,50,50);
  rect(1190,330,50,50);
//stars
var starColor = "black";
  fill(starColor);
  stroke(100);
  //top point
  line(685,570,710,620);
  line(685,570,660,620);
  //left top point
  line(660,620,620,620);
  line(620,620,660,650);
  //left bottom point
  line(660,650,640,690);
  line(640,690,685,670);
  //right bottom point
  line(685,670,730,690);
  line(730,690,710,650)
  //right top point
  line(710,650,750,620);
  line(710,620,750,620);


//bluedots
var dotColor = "blue";
var diameter = 50;

  fill(dotColor);
  noStroke();
  ellipse(25,100,diameter,diameter);
  ellipse(95,100,diameter,diameter);
  ellipse(165,100,diameter,diameter);
  ellipse(235,100,diameter,diameter);
  ellipse(305,100,diameter,diameter);
  ellipse(375,100,diameter,diameter);
  ellipse(445,100,diameter,diameter);
  ellipse(515,100,diameter,diameter);
  ellipse(585,100,diameter,diameter);
  ellipse(655,100,diameter,diameter);
  ellipse(725,100,diameter,diameter);
  ellipse(795,100,diameter,diameter);
  ellipse(865,100,diameter,diameter);
  ellipse(935,100,diameter,diameter);
  ellipse(1005,100,diameter,diameter);
  ellipse(1075,100,diameter,diameter);
  ellipse(1145,100,diameter,diameter);
  ellipse(1215,100,diameter,diameter);
  ellipse(1285,100,diameter,diameter);
  ellipse(1355,100,diameter,diameter);
  ellipse(25,600,diameter,diameter);
  ellipse(25,600,diameter,diameter);
  ellipse(95,600,diameter,diameter);
  ellipse(165,600,diameter,diameter);
  ellipse(235,600,diameter,diameter);
  ellipse(305,600,diameter,diameter);
  ellipse(375,600,diameter,diameter);
  ellipse(445,600,diameter,diameter);
  ellipse(515,600,diameter,diameter);
  ellipse(585,600,diameter,diameter);
  ellipse(655,600,diameter,diameter);
  ellipse(725,600,diameter,diameter);
  ellipse(795,600,diameter,diameter);
  ellipse(865,600,diameter,diameter);
  ellipse(935,600,diameter,diameter);
  ellipse(1005,600,diameter,diameter);
  ellipse(1075,600,diameter,diameter);
  ellipse(1145,600,diameter,diameter);
  ellipse(1215,600,diameter,diameter);
  ellipse(1285,600,diameter,diameter);
  ellipse(1355,600,diameter,diameter);

//triangles
var triangleColor = "green";
  fill(triangleColor);
  triangle(30,75,58,20,86,75);
  triangle(169,75,198,20,226,75);
  triangle(308,75,337,20,365,75);
  triangle(448,75,479,20,510,75);
  triangle(588,75,619,20,650,75);
  triangle(728,75,759,20,790,75);
  triangle(868,75,899,20,930,75);
  triangle(1010,75,1039,20,1066,75);
  triangle(1149,75,1178,20,1205,75);
  triangle(1289,75,1318,20,1345,75);

//star
var pointColor = "green"
  triangle(235,140,205,195,265,195);
  triangle(205,160,235,220,265,160);

  triangle(235,460,205,520,265,520);
  triangle(205,475,235,540,265,475);
//star 2
  triangle(1145,140,1115,195,1175,195);
  triangle(1115,160,1145,220,1175,160);


  triangle(1145,460,1115,520,1175,520);
  triangle(1115,475,1145,540,1175,475);

//big circle
var targetColor = "orange";
var diameter = 400;
  fill(targetColor);
  ellipse(677.5,350,diameter,diameter);

//middle yellow circle
var middleColor = "yellow";
var diameter = 200;
  fill(middleColor);
  ellipse(677.5,350,diameter,diameter);
var diameter = 100;
//moon shape
  fill(targetColor);
  ellipse(677.5,350,diameter,diameter);

//smaller yellow circles
var circleColor = "yellow";
for(var i = 0; i < 20; i = i+1){
  fill(circleColor);
  ellipse(350*i,350,90,90)


}

    }
  }
}
