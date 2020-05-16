
/*
Name : Junsu Jang
Assignment Name : Draw A Cat
Course Number : CS099
Term & Year : Spring/2020
*/
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100,150,150);
  strokeWeight(3);
  fill(100);
  arc(250,400,300,100,5,7,OPEN);//꼬리
  push();
  fill(100,150,150);
  arc(250,400,280,80,5,7,OPEN);
  pop();
  strokeJoin(BEVEL);
  triangle(160,400,340,400,250,200);//몸
  push();
  fill(255,180);
  arc(250,398,50,280,PI,0);//몸선
  pop();
  ellipse(250,200,160,140);//머리
  triangle(180,170,230,135,190,100);//귀
  triangle(320,170,270,135,310,100);//귀
  push();
  strokeWeight(10);
  line(220,170,220,190);//눈
  line(280,170,280,190);
  strokeWeight(12);
  point(299,443);
  point(296,443);
  strokeWeight(2)
  fill(255,180);
  triangle(190,163,220,141,194,110);//귀안
  triangle(310,163,280,141,306,110);//귀안
  noFill();
  strokeWeight(3);
  quad(240,210,240,230,260,230,260,210);//입
  pop();
  line(280,210,300,210);//수염
  line(280,215,300,220);
  line(280,220,300,230);
  line(220,210,200,210);
  line(220,215,200,220);
  line(220,220,200,230);

  rect(270,300,25,120,0,0,10,10);//앞발
  rect(205,300,25,120,0,0,10,10);
  push();
  noStroke();
  rect(207,298,21,10);
  rect(272,298,21,10);
  pop();
  rect(160,380,40,40,10);//뒷발
  rect(300,380,40,40,10);
  push();
  fill(208, 133, 132,200);
  circle(180,405,15);
  circle(320,405,15);
  circle(170,395,5);
  circle(180,390,5);
  circle(190,395,5);
  circle(310,395,5);
  circle(320,390,5);
  circle(330,395,5);
  pop();
}