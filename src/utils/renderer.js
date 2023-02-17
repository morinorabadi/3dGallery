import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";

export default class Renderer extends CSS3DRenderer {
  constructor(redlibcore, scene, camera) {
    const container = document.getElementById("scene");
    super({ element: container });

    redlibcore.globalEvent.addCallBack("process", () => { 
        this.render(scene,camera)
    },1)

    // handel resize event
    redlibcore.globalEvent.addCallBack("resize", (sizes) => {
      const { x, y } = sizes;
      if (x > y) {
        this.setSize(y, y);
        container.style.left = (x - y) / 2 + "px";
      } else {
        this.setSize(x, x);
      }
    });
  }
}