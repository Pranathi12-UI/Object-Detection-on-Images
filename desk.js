img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('https://cdn.shopify.com/s/files/1/0522/7109/products/I_7144.jpg?v=1481922032');
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
      text("Desk 74%", 95, 190);
    noFill();
    stroke("#FF0000");
    rect(70, 130, 480, 250 );
  
     fill("#FF0000");
      text("Laptop 22%", 250, 60);
    noFill();
    stroke("#FF0000");
    rect(260, 70, 150, 130 );
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