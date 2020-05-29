class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.00125,
            //length: 10
        }
        this.sling1 = loadImage('sprites/fishing guy.png');
        this.sling2 = loadImage('sprites/rod.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        //this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,120,50,120);
        image(this.sling2,230,60,150,150);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
                
           
            
            pop();
        }
    }
    
}