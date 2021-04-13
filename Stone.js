class Stone{
   constructor(x,y,radius)
   {
       var options = {
           restitution:0.8,
           friction:1.0,
           density:1.0,
           isStatic:false
       }

      // this.stoneImage = loadImage(polygon.png);

       this.body = Bodies.circle(x,y,radius,options);
       //stone.x = x;
      // stone.y = y;
       //stone.width = width;
       //stone.height = height;
       this.radius=radius;
       World.add(world,this.body);


   }   

   display()
   {
      //image(this.stoneImage,200,height/2);
      var pos = this.body.position
      //translate(pos.x,pos.y);
      //push();
     // rectMode(CENTER);
      //rect(pos.x,pos.y,width,height);
      //pull();
      fill("green")
      ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.radius)



       
   }
}