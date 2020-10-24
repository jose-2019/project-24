class Block1{

    constructor(x,y,width,height){
    
    var opt={
        isStatic:true
    }
    
    this.Bottombody=Bodies.rectangle(x,y,width,height,opt);
    this.width=width;
    this.height=height;
    World.add(world,this.Bottombody)

    }
    
    display(){
    
    var posit =this.Bottombody.position;
    rectMode(CENTER);
    fill("yellow");
    rect(posit.x, posit.y, this.width, this.height);
    
    

    
    
    }
    
    
    }