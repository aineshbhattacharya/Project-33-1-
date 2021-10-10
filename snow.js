class Snow {
	constructor(x,y,r) {
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
		this.x=x;
		this.y=y;
		this.r=r
        this.image= loadImage("snow4.webp")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display() {
        var snowpos=this.body.position;
        push();
		imageMode(CENTER)
        image(this.image,snowpos.x,snowpos.y,this.r,this.r)
		pop();
	}
}