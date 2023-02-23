import { PerspectiveCamera, Vector3 } from 'three'

export default class Camera extends PerspectiveCamera
{
  constructor(redlibcore){
    super(45,window.innerWidth/window.innerHeight, 0.1, 100)

    let currentMode = ""
    const changeCameraPosition = (mode) => {
      currentMode = mode
      switch (mode) {
        case "start":
          this.position.set(0,8000,-13000)
          this.lookAt(new Vector3(0,0,-1000))
          break

        case "top":
          this.position.set(0,8000,-10500)
          this.lookAt(new Vector3(0,0,-2000))
          break;

        case "mid":
          this.position.set(7000,1000,-3000)
          this.lookAt(new Vector3(6000,-500,0))
          break;
      }
    }

    this.setMode = (mode) => {
      if ( currentMode !== mode ){
        changeCameraPosition(mode)
      }
    }

    redlibcore.globalEvent.addCallBack('resize', (sizes) => { 
        this.aspect = sizes.x / sizes.y
        this.updateProjectionMatrix();
    })
    
  }
}