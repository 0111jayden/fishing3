class Fish2 extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/fish2.png");
    this.Visiblity = 255;
    this.x = Math.random(330,1000);
    this.y = Math.random(360,230);
  }

  display(){

    var randomx = Math.round(Math.random(1,5));
    var randomy = Math.round(Math.random(1,5));

    if(this.body.position.x === 330){
      this.body.position.x += randomx;
    }
    if(this.body.position.x === 1000){
      this.position.x -= randomx;
    }
    if(this.body.position.y === 320){
      this.body.position.y -= randomy;
    }
    if(this.body.position.y === 230){
      this.body.position.y += randomy;
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

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }


  


};