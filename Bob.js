class Bob {
    constructor(x, y,radius) {
        var options = {
            isStatic: false,
            'restitution':1,
            'friction':0,
            'density':0.8
     
       }
       this.x=x;
       this.y=y;
       this.radius=radius
       this.body=Bodies.circle(this.x,this.y,20,options)
      
       World.add(world,this.body)
       
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop ()
    }
}
