let vid;
var puzzle;
let link;

function preload(){
    loadJSON(
    'https://api.chess.com/pub/puzzle',
    gotData
  );
  brush1 = loadImage('assets/Brush1.png');
  brush2 = loadImage('assets/Brush2.png');
  brush3 = loadImage('assets/Brush3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  video = createVideo(
    ['assets/MorningMoodLong.mp4'],
    load
    
  );
  



  //video.size(windowWidth,windowHeight);
  video.hide();
  
  input = createInput();
  input.size(145,20);
  input.position(width/4-75,height-150);
  
  link = createA(puzzle.url, "Chess Puzzle");
  link.position(width/2-40,height-150);
}

// This function is called when the video loads
function load() {
  video.loop();
  video.volume(1);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(windowWidth,windowHeight);
  //input.position(width/4-75,height-150);
  //link.position(width/2-40,height-150);
}

function gotData(data) {
  puzzle = data;
  //Let's see what our object looks like
  console.log(puzzle);
}

function draw() {
  background(0);
  let currentWindowW = windowWidth;
  let currentWindowH = windowHeight; 
  
  imageMode(CORNER);
  image(video,0,0, windowWidth,windowHeight)
  
  let h = hour();
  let m = minute();
  let s = second();
  
  let noon = h < 12 ? " AM":" PM";
  //let timeZone = api here;
  
  fill(225);
  stroke(0);
  textSize(100);
  textAlign(CENTER,CENTER);
  
  if(m < 10)
    m = "0"+m
  //if(h < 10)
    //h = "0"+h
  //if (s < 10)
    //s = "0"+s
  
  text(h +":"+ m, width/2, height/4);
  textSize(20);
  text(noon, width/2 - 300,height/4);
  textSize(15);
  text("EST", width/2 + 306, height/4 +1);
  
  textSize(30);
  imageMode(CENTER);
  if (mouseX<windowWidth/3){
    image(brush1,width/4,height-200,150,70);
  }
  text("Daily Goals", width/4,height-200);
  if (mouseX>windowWidth/3 && mouseX<windowWidth/1.3){
    image(brush2,width/2,height-200,150,70);
  }
  text("Chess Puzzle",width/2, height -200)
  if (mouseX>windowWidth/1.3){
    image(brush3,width/1.33,height-200,150,70);
  }
  text("Turn Off", width/1.33,height-200);
  


  //let scurrent = map(s, 0, 60, 0, 360)
  //let mcurrent = map(m, 0, 60, 0,360)
  //let hcurrent = map(h, 0, 12, 0, 360)
  
}