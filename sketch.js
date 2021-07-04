var input;
var button;

function setup(){
  createCanvas(480, 500);
  input = createInput();
  input.position(20, 50);
  button = createButton("Submit");
  button.position(180, 50);
  button.mousePressed(drawZip);
  background(100);
  noStroke();
  fill(255);
  textSize(15);
  text("Enter your Zip Code for data on Humidity and Cloud Cover", 20, 30);
}

function drawZip() {
  text("Enter your Zip Code for data on Humidity and Cloud Cover", 20, 30);
  var zip = input.value();
  loadJSON('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=56abf01c202c0ab0c48fef60c8c083d2', getData);
  background(100);
  textSize(30);
  fill(255,69,0);
  text(zip, 20, 120);
}

function getData(data) {
  fill(255);
  textSize(15);
  text("Enter your Zip Code for data on Humidity and Cloud Cover", 20, 30);
  textSize(30);
  cloudData = data;
  console.log(data.main.humidity);
  console.log(data.clouds.all);
  var humidity = data.main.humidity;
  var clouds = data.clouds.all;
  //visualization of Cloud Cover Percentage
  for (var i=0; i<clouds; i++) {
    fill(0, 0, 255, random(30, 100));
    ellipse(random(width), random(height), 30, 30);
  }
  //visualization of Humidity Percentage shown in opacity of green circle
  fill(0,255,0,humidity);
  ellipse(240, 250, 350, 350);
  //data stats for entered Zip Code
  fill(255,69,0);
  text(humidity + '% Humidity', 20, 160);
  text(clouds + '% Clouds', 20, 200);
}