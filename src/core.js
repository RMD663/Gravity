let bodies = [];

class Core {
    constructor() {
    }
    
    addBody(body) {
        bodies.push(body);
    }

    update(dt) {
        for (let body of bodies) {
            for(let i = 0; i < bodies.length; i++){
                for(let j = bodies.length - 1; j > i; j--){
                    if(i === j){
                        console.log(sabugou)
                    }
                    if(bodies[j].mass < bodies[i].mass){
                        this.attract(bodies[i], bodies[j])
                    } else {
                        this.attract(bodies[j], bodies[i])
                    }
                }
            }
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

}