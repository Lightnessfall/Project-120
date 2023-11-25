function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(800, 500);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
  console.log("ml 5 version is: "+ ml5.version);
}

function draw(){

  image(video, 0, 0, 500, 500);
  classifier.classify(video, gotResult);
}

function gotResult(error, results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
  }
}


