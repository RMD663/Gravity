const objects = []; 

function save_simulation() {
    objects.length = 0;
    let simulation_name = document.getElementById("sim_name").value;

    for (let item of bodies) {

        objects.push(JSON.stringify(item));
    }
    
    localStorage.setItem(simulation_name, JSON.stringify(objects));
}


function load_simulation(){
    const simulation_name = document.getElementById("sim_name").value;
    const load_objects  = localStorage.getItem(simulation_name);
    let parsed_objects = JSON.parse(load_objects);
    bodies.length = 0;
    for(let item = 0; item < parsed_objects.length; item += 1){
        let obj = parsed_objects[item];
        const body = JSON.parse(obj);
        let new_body = new Body(body.position.x, body.position.y, body.radius, body._color, body.mass);
        new_body.velocity = createVector(body.velocity.x, body.velocity.y);
        bodies.push(new_body);
    }
    
}

function list_saves(){
    let save_list = get_saves();
    
    const select = document.getElementById("save_list");

    for(let i = 0; i < save_list.length; i++){
        const opt = document.createElement("option"); 
        opt.value = save_list[i];
        opt.innerHTML = save_list[i];
        select.appendChild(opt);
    }
}

function get_saves(){
    let saves = [];

    for(let i = 0; i < localStorage.length; i++){
        const storage_key = localStorage.key(i); 
        saves.push(localStorage.getItem(storage_key));
    }
    
    print(saves[0])

    return saves
}

function clear_bodies() {
    for(let item = bodies.length; item > 0; item--){
        bodies.length = 0;
    }
    cam.setPosition(0, 0, cam.eyeZ);
}


function create_body(){
    let new_body;
    let x_pos = document.getElementById("planet_pos_x").value;
    let y_pos = document.getElementById("planet_pos_y").value;
    let radius = document.getElementById("planet_rad").value;
    let col = document.getElementById("planet_col").value;
    let mass = document.getElementById("planet_mass").value;
    let inertia = document.getElementById("planet_inertia").value;

    x_pos = parseInt(x_pos);
    y_pos = parseInt(y_pos);
    radius = parseInt(radius);
    mass = parseInt(mass);
    inertia = parseFloat(inertia);

    if(!Number.isInteger(x_pos) || !Number.isInteger(y_pos) ||
        !Number.isInteger(radius) || !Number.isInteger(mass) ||
        !Number.isInteger(inertia)){
            alert("Invalid values on Create Plantet");
            return;
    } else {
        new_body = new Body(x_pos, y_pos, radius, col, mass);
        new_body.velocity.y = inertia;
        bodies.push(new_body);
    }
}

function move_camera(){

    let new_x_pos = document.getElementById("cam_pos_x").value;
    let new_y_pos = document.getElementById("cam_pos_y").value;

    let x_pos = parseInt(new_x_pos);
    let y_pos = parseInt(new_y_pos);
    
    if(!Number.isNaN(x_pos) && !Number.isNaN(y_pos)){
        cam.move(x_pos, y_pos, 0);
    }
    else if(!Number.isNaN(x_pos) && Number.isNaN(y_pos)){
        cam.move(x_pos, 0, 0);
    }
    else if(Number.isNaN(x_pos) && !Number.isNaN(y_pos)){
        cam.move(0, y_pos, 0);
    }
    else {
        cam.move(0, 0, 0);
    }

}

function hide_stats() {
    camera.show_stats = !camera.show_stats;
}
