class Body{
  constructor(x=0, y=0, radius=10, _color="blue", mass=1){
    this.position = createVector(x, y);
    this.radius = radius ;
    this.mass = mass;
    this._color = _color;
    this.velocity = createVector(0, 0);
    this.trail = [];
    this.trailLen = 35;
    this.should_draw_trail = true;

    for (let i=0; i < this.trailLen; i++){
      let point = createVector(this.position.x, this.position.y);
      this.trail.push(point);
    }

  };

  render(){
    stroke(2)
    fill(this._color);
    circle(this.position.x, this.position.y, this.radius);
    stroke('white');
    this.drawTrail();
  }

  update(dt){
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  applyForce(force){
    this.velocity.x += force.x / this.mass;
    this.velocity.y += force.y / this.mass;
  }

  attract(child){
    let r = dist(this.position.x, this.position.y, child.position.x, child.position.y);
    if (r != 0 || r < 2000){
    let f = this.position.copy().sub(child.position);
    f.setMag((GRAVITY * this.mass * child.mass) / (r*r));
    child.applyForce(f);  
    }
  }

  drawTrail(){
    if (this.should_draw_trail){
    if(dist(this.position.x, this.position.y, cam.eyeX, cam.eyeY) < 500){
    this.trail.shift();

    if(this.velocity.magSq() > 0.01){
    let point = createVector(this.position.x, this.position.y);
    this.trail.push(point);
    }

      stroke(255);
      strokeWeight(0.75);
      noFill();
      beginShape();
        for(let i=0; i<this.trail.length; i++){
          let pt = this.trail[i];
          curveVertex(pt.x, pt.y);
        }
      endShape();
    }
  }
  }
  }
