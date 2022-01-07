img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('https://th.bing.com/th/id/OIP.dtfIGptH8pKJcHme4nfgQQHaHe?pid=ImgDet&rs=1');
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
    text("Banana 49%", 60, 240);
    noFill();
    stroke("#FF0000");
    rect(40, 90, 500, 200 );
  
     fill("#FF0000");
    text("Basket 38%", 40, 360);
    noFill();
    stroke("#FF0000");
    rect(40, 250, 550, 140 );
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