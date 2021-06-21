class Launcher {
    constructor(bodyA, pointB) {

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }

    attach(body){
        this.launcher.bodyA = body;
    }

    fly() {
        this.launcher.bodyA = null;
    }

    display() {
        if (this.launcher.bodyA) {
            var bodyA1 = this.bodyA.position;
            var pointB1 = this.pointB;
            strokeWeight(4);
            line(bodyA1.x,bodyA1.y,pointB1.x,pointB1.y);
        }

    }
}