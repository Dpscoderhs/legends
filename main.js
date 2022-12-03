function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 240)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    circle(30, 30, 70);
    rect(60, 25, 515, 20);
    circle(605, 30, 70);

    circle(30, 470, 70);
    rect(60, 470, 515, 20);
    circle(605, 470, 70);
    rect(20, 50, 20, 400);
    rect(60, 470, 515, 20);
    rect(590, 50, 20, 400);
}

function take_snapshot() {
    save('photo_shop.png');
}