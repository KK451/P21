class Ground{
    constructor(x,y,width,height)
    {
        var groundOptions={
            isStatic:true
        };
    
        this.body=Bodies.rectangle(x,y,width,height,groundOptions);
        this.width=width;
        this.height=height;
    
        World.add(world, this.body);

    }

    display()
    {
        var pos=this.body.position

        rectMode(CENTER)
        stroke(255)
        fill(127)
        rect(pos.x,pos.y,this.width,this.height)
    }
}