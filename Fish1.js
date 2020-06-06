class Fish1 extends BaseClass {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':0,
      'density':0.005
      //'inertia':Infinity
    }
    super(x,y,50,50);
    this.image = loadImage("sprites/fish1.png");
    this.Visiblity = 255;
    this.xdir = 1//Math.random(-5,5);
    this.ydir = 1//Math.random(-5,5);
    
  }

  display(){
    //var randomx = Math.round(Math.random(1,5));
    //var randomy = Math.round(Math.random(1,5));

    //this.body.speed = Math.random(1,3);
    

    if(this.body.position.x < 390){
      this.xdir = this.xdir * -1;
    }
    if(this.body.position.x > 1150){
      this.xdir = this.xdir * -1;
    }
    if(this.body.position.y >= 320){
      this.ydir = this.ydir * -1;
    }
    if(this.body.position.y <= 230){
      this.ydir = this.ydir * -1;
    }
   //console.log(this.body.speed);
   //if(this.body.speed < 3){
    super.display();
   //}
   //else{
     //World.remove(world, this.body);
     push();
     //this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   //}
  }


  move(){
    this.body.position.x += this.xdir;
    this.body.position.y += this.ydir;
  }
  

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }

  



};