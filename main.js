
function preload() 
{

}

function setup()
{ 
var canvas = createCanvas(700,600); 
canvas.parent('canvas'); video = createCapture(VIDEO); 
video.size(700, 600); 
video.hide(); 
poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses); 
}
function draw()
{
    image(video, 0, 0, 700 ,600);
}
function modelLoaded()
{
	console.log('Model Loaded!');
}

