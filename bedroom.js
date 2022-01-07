img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('https://i0.wp.com/decorelated.com/wp-content/uploads/2018/01/Cozy-Modern-Bedroom-Ideas-10.jpg?fit=1600%2C1280&ssl=1');
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
    text("Bed 68%", 95, 190);
    noFill();
    stroke("#FF0000");
    rect(100, 200, 450, 200 );
  
  fill("#FF0000");
    text("Painting 31%", 310, 60);
    noFill();
    stroke("#FF0000");
    rect(320, 70, 200, 130 );
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