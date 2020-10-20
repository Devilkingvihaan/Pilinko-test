class Pilinko{
    constructor(x,y){
        var options ={
            restitution:1,
            friction:0,
            isStatic:true
        }
        this.radius=10;
        this.body=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
         translate(pos.x,pos.y);
         rotate(angle)
         ellipseMode(RADIUS)
         fill(255)
         ellipse(0,0,this.radius,this.radius)
         pop()
    }
   }