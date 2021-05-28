class Ground2
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic : true,
            'density' : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        
    }

    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }

};