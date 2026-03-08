const objects = []; 

function save_simulation() {

    objects.length = 0;
    
    for (let item of bodies) {

        objects.push(JSON.stringify(item));
    }

    localStorage.setItem('simulation', JSON.stringify(objects))

}


function load_simulation(){
    const load_objects  = localStorage.getItem("simulation");
    let parsed_objects = JSON.parse(load_objects)
    for(let item = bodies.length; item > 0; item--){
        bodies.pop(item)
    }
    for(let item = 0; item < parsed_objects.length; item += 1){
        let obj = parsed_objects[item];
        const body = JSON.parse(obj)
        let new_body = new Body(body.position.x, body.position.y, body.radius, body._color, body.mass);
        new_body.velocity = body.velocity
        bodies.push(new_body)
    }
    
}

function clear_bodies() {
    for(let item = bodies.length; item > 0; item--){
        bodies.pop(item)
    }
    cam.setPosition(0, 0, cam.eyeZ)
}


function create_body(){
    let new_body 
    let x_pos = document.getElementById("planet_pos_x").value
    let y_pos = document.getElementById("planet_pos_y").value
    let radius = document.getElementById("planet_rad").value
    let col = document.getElementById("planet_col").value
    let mass = document.getElementById("planet_mass").value

    x_pos = parseInt(x_pos)
    y_pos = parseInt(y_pos)
    radius = parseInt(radius)
    mass = parseInt(mass)

    if(typeof x_pos != "number" || typeof y_pos != "number" ||
        typeof radius != "number" || typeof mass != "number"){
        return
    } else {
        new_body = new Body(x_pos, y_pos, radius, col, mass);
        if(new_body.mass < 20){
        new_body.velocity.y = -1.5
        }
        bodies.push(new_body)
        console.log("GG EZ")
    }
}

function move_camera(){
        
    

    let new_x_pos = document.getElementById("cam_pos_x").value
    let new_y_pos = document.getElementById("cam_pos_y").value

    let x_pos = parseInt(new_x_pos)
    let y_pos = parseInt(new_y_pos)
    
    if(!Number.isNaN(x_pos) && !Number.isNaN(y_pos)){
        cam.move(x_pos, y_pos, 0)
    }
    else if(!Number.isNaN(x_pos) && Number.isNaN(y_pos)){
        cam.move(x_pos, 0, 0)
    }
    else if(Number.isNaN(x_pos) && !Number.isNaN(y_pos)){
        cam.move(0, y_pos, 0)
    }
    else {
        cam.move(0, 0, 0)
    }

}
