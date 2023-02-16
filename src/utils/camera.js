import { PerspectiveCamera } from 'three'

export default class Camera extends PerspectiveCamera
{
  constructor(redlibcore){
    super(45,window.innerWidth/window.innerHeight, 0.1, 100)
    
    redlibcore.globalEvent.addCallBack('resize', (sizes) => { 
        this.aspect = sizes.x / sizes.y
        this.updateProjectionMatrix();
    })
    
  }
}