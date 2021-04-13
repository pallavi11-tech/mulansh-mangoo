class Block
{
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 1,
            friction : 2,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.height = height;
        //this.width = width;
        //this.x = x;
        //this.y =y;
        this.width = width;
        World.add(world,this.body);
      }

    display()
    {
        var pos = this.body.position;
       // translate(pos.x,pos.y);
        //push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
        //pull();
                                                                                                                                                                                                                                                                 
    }
}