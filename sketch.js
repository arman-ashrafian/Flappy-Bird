var bird;
var pipes = [];

function setup() {
    var canvas = createCanvas(500,600);
    canvas.parent('mysketch');
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    for(var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();


        pipes[i].hits(bird);

        // remove pipe afterdd passing through
        if(pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if(frameCount % 100 == 0) {
        // new pipe every 100 frames
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if(key == ' ') {
        bird.up()
    }
}
