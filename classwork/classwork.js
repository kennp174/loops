/*
  Classwork
*/

var cellSize = 50;

function setup(){
  createCanvas(windowWidth,windowHeight);

  for(var row = 0; row <20;row++){

    //fill with random greyscale - changes everytime you refresh
    for(var column =0; column <20;column++){
      noStroke();
      fill(random(255));
      rect(cellSize*column, cellSize*row, cellSize, cellSize);

      // individual boxes
      stroke("pink");
      strokeWeight(5);
      line(cellSize*column,cellSize*row,cellSize*row+cellSize,cellSize*column+cellSize);
      // the lines across the screen
      noStroke();
      fill("blue");
      arc(410,600,200,200,0, HALF_PI);
      //third arc
      // (x cord, y cord, width, height, start angle, stop angle, ??)
      arc(10,600,200,200,0, HALF_PI);
      //first arc
      arc(210,600,200,200,0, HALF_PI);
      //second arc
      arc(610,600,200,200,0, HALF_PI);
      arc(810,600,200,200,0, HALF_PI);
      fill("purple");
      ellipse(cellSize*column, cellSize*row, 25, 25);




    }
  }
}
