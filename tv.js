img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('https://th.bing.com/th/id/R.608e90953029f62b736a27daf2b0eb23?rik=HA0q1v0bejMh%2fw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-3u_Mq3DYJz0%2fTcjEz8kPtiI%2fAAAAAAAACXs%2fZwUMAYoveVI%2fs400%2ftv-room.jpg&ehk=HbHAA2511aDco%2bKOFjtVtJk6lNfVm2xGysbCB6m3Su4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1');
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
        text("TV 48%", 95, 190);
    noFill();
    stroke("#FF0000");
    rect(200, 70, 150 , 160 );
  
    fill("#FF0000");
        text("AC 16%", 490, 90);
    noFill();
    stroke("#FF0000");
    rect(500, 60, 130 , 60 );
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