class Paper {
    constructor(x,y,radius){
        var options={
        isStatic:false,
        'restiution':0.3,
        'friction':0.5,
        'density':1.2
}
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("paper1.png");
        this.radius=50
        World.add(world,this.body);
      
}
display(){

        var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		//strokeWeight(4);
		fill(255)
		imageMode(CENTER);
		
		image(this.image, 0,0,40,40)
		
		
		pop()
       
       
       
        
        
 
}}