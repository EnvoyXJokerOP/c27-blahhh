class Chain{
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
       stifness:0.07583,
       length:10,

    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain)
    }
    display() {
   var pointA=this.chain.bodyA
   var pointB=this.chain.bodyB
   strokeWeight(6)
   line (pointA.x,pointA.y,pointB.x,pointB.y)
   
    }
}