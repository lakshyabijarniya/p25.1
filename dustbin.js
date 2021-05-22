class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1

      }
      this.bottomBody = Bodies.rectangle(1000,560,170,20,options);
      this.leftBody=Bodies.rectangle(935,520,20,80,options)
      this.rightBody=Bodies.rectangle(1065,520,20,100,options)
      this.image=loadImage("dustbin.png");
      
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);    
    }
    display(){
      var pos =this.bottomBody.position;
      var pl=this.leftBody.position;
      var pla=this.rightBody.position;
      rectMode(CENTER);
      fill("red");
      imageMode(CENTER)
      
      rect(pos.x, pos.y,130,20);
      rect(pl.x,pl.y,20,100);
      rect(pla.x,pla.y,20,100);
      image(this.image,1005,465,210,210)
    }
  }