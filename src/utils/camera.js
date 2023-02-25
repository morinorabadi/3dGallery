import { PerspectiveCamera, Vector3 } from 'three'
import { gsap } from 'gsap'
export default class Camera extends PerspectiveCamera
{
  constructor(){
    super(45,window.innerWidth/window.innerHeight, 0.1, 100)

    // start position and lookAt
    this.position.set(8000,18000,-50000)
    let startLookAt = new Vector3(0,0,-8000)
    this.lookAt(startLookAt)

    this.isStarted = false
    let currentMode = ""
    this.setMode = (mode) => {
      
      if (!this.isStarted){ return }
      if ( currentMode == mode ){ return } 
      
      currentMode = mode

      let toPosition;
      let toLookAt;

      switch (mode) {
        case "top":
          // camera position
          toPosition = new Vector3(0,11000,-14500)
          // camera look at position
          toLookAt =   new Vector3(0,0,-2000)
          break;

        case "mid":
          // camera position
          toPosition = new Vector3(7500,1200,-3000)
          // camera look at position
          toLookAt =   new Vector3(6500,0,0)
          break;
      }

      // part one go to center
      gsap.to(this.position,{
        duration : 3,
        x : toPosition.x,
        y : toPosition.y,
        z : toPosition.z,
      })

      // let startLookAt = startLookAt.clone()
      gsap.to(startLookAt,{
        duration : 3,
        x : toLookAt.x,
        y : toLookAt.y,
        z : toLookAt.z,
        onUpdate : () => {
          this.lookAt(toLookAt)
        }
      })
    }
    
  }
}