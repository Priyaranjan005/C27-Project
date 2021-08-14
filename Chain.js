class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffess:0.01,
            length:250,
        }

        this.pointB=pointB;
        this.chain = Constraint.create(options);

        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        stroke("red")
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}