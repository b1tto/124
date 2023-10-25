var rightwristX = 0;
var leftwristX = 0;
var difference = 0;
function setup(){
canvas = createCanvas(500, 500);
video = createCapture(VIDEO);
video.size(500, 500);
posenet = ml5.poseNet(video, modelloaded);
posenet.on('pose', gotposes);
}
function modelloaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX-rightwristX);
    console.log("leftwristX = "+leftwristX+"rightwristX = "+rightwristX+"difference = "+difference);
}
}
function preload(){

}
function draw(){
background('#F54037');
fill('#E8D05C');
stroke('#E8D05C');
textSize(difference);
text('Bitto', 100, 250);
}