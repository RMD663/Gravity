let bodies = [];

class Core {
    constructor() {
    }
    
    addBody(body) {
        bodies.push(body);
    }

update(dt) {
    for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
            if (bodies[j].mass < bodies[i].mass) {
                this.attract(bodies[i], bodies[j]);
            } else {
                this.attract(bodies[j], bodies[i]);
            }
        }
    }

    for (let body of bodies) {
        body.update(dt); 
    }
}
    render() {
        for (let body of bodies) {
            body.render();
        }
    }

    attract(bodyA, bodyB){
        bodyA.attract(bodyB);
    }

    get_active_bodies() {
        return bodies.length;
    }

}