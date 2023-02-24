import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";

export default class Renderer extends CSS3DRenderer {
  constructor(redlibcore, scene, camera) {
    const domElement = document.getElementById("scene")
    super({ element: domElement });
    this.domElement = domElement

    redlibcore.globalEvent.addCallBack("process", () => { 
        this.render(scene,camera)
    },1)

  }
}