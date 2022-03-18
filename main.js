img = "";
Status = "";

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Objects";
}

function preload(){
    img = loadImage('Tiger.webp');
}

function draw(){
    image(img,0,0,640,420);
    fill("#00fbff");
    text("Tiger",45,75);
    noFill();
    stroke("#00fbff");
    rect(30,60,500,350);
    noFill();
    fill("#00fbff");
    text("Tiger",45,155);
    noFill();
    stroke("#00fbff");
    rect(30,130,450,300);
}

function modelLoaded(){
    console.log("Modal Loaded");
    Status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(){
    if(error) {
        console.log(error);
    }
    console.log(results);
}