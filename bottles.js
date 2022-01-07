img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('https://i1.wp.com/daniellamonet.com/wp-content/uploads/2015/01/FullSizeRender.jpg?resize=1024%2C712');
}

function draw() {
    image(img, 0, 0, 640, 420);
  
          if(status != "")
        {
            for (i = 0; i < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";

                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            }

        }
    fill("#FF0000");
      text("Bottle-1 31%", 95, 190);
    noFill();
    stroke("#FF0000");
    rect(40, 50, 160, 350 );
  
      fill("#FF0000");
      text("Bottle-2 42%", 170, 15);
    noFill();
    stroke("#FF0000");
    rect(170, 15, 160, 400 );
  
      fill("#FF0000");
      text("Bottle-3 12%", 340, 190);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 160, 300 );
  
      fill("#FF0000");
      text("Bottle-4 15%", 470, 80);
    noFill();
    stroke("#FF0000");
    rect(450, 90, 160, 300 );
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}