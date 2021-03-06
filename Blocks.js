class Blocks {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
    display() {
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
      

   if(this.body.speed < 3) {
    super.display();
   }
  else {
  World.remove(world, this.body);
  push();
  this.visiblity = this.visiblity-5;
  tint(255, this.visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
      }
    }
  };