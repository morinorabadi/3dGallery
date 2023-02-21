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

      // clear old style
      container.style.left = 0 + "px";
      container.style.top = 0 + "px";
      container.style.display = "block"
      
      
      if ( x > y * 1.4 ) {
        this.setSize(y * 1.4, y);
        container.style.left = (x - y * 1.4 ) / 2 + "px";
      } else if ( x > y * 1.2 ) {
        this.setSize(y * 0.7, y * 0.7);
        container.style.top = 0.15 * y + "px";
        container.style.left = (x - y * 0.7 ) + "px";
      } else if ( x > y * 0.5 ) {
        this.setSize(x * 0.6, x * 0.6);
        container.style.left = x * 0.4 + "px";
        container.style.top = y - (x * 0.6) + "px";
        
      } else {
        this.setSize(x , x);
        container.style.top = (y - x) + "px";
      }
    });
  }
}