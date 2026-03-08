
class Camera {
    constructor(){
        this.current_pos = createVector(cam.eyeX, cam.eyeY)
        this.view = cam;
    }


    drawFPS(_show_fps){
        if(cam){
        if(_show_fps){
        fill("white")
        text(frameRate().toFixed(2), cam.eyeX - 249, cam.eyeY - 230)
        }}
    }

    drawCordinates(){
        if(cam){
            fill("white")
            text("x:", cam.eyeX - 249, cam.eyeY - 211)
            text(cam.eyeX,  cam.eyeX - 220, cam.eyeY - 210)
            text("y:", cam.eyeX - 249, cam.eyeY - 190)
            text(cam.eyeY,  cam.eyeX - 220, cam.eyeY - 190)
        }
    }


}