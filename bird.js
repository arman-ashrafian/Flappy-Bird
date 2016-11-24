function Bird() {
    this.y = height/2;
    this.x = 30;

    this.gravity = .2;
    this.lift = -5
    this.velocity = 0;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 20, 20);
    }

    this.up = function() {
        this.velocity += (this.lift + this.gravity) * .9;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if(this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0 ) {
            this.velocty = 0;
        }
    }
}
