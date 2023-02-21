export default class Show
{
  constructor(redlibcore, event){
    const parent = document.getElementById("show")
    
    let image;
    
    this.setSize = (x, y) => {
      parent.style.width = x + "px";
      parent.style.height = y + "px";
    }

    redlibcore.globalEvent.addCallBack("resize", (sizes) => {
      const {x , y} = sizes

      // clear old style
      parent.style.left = 0 + "px";
      parent.style.top = 0 + "px";
      parent.style.display = "block"
      
      
      if ( x > y * 1.4 ) {
        event.callEvent("cameraMode", "top")
        this.setSize(y * 0.5, y * 0.5);
        parent.style.left = (x - y * 0.5 ) / 2 + "px";
        parent.style.top = y * 0.20 + "px";
      } else if ( x > y * 1.2 ) {
        event.callEvent("cameraMode", "mid")
        this.setSize(y * 0.7, y * 0.7);
        parent.style.top = 0.15 * y + "px";
      } else if ( x > y * 0.5 ) {
        this.setSize(x * 0.6, x * 0.6);
      } else {
        event.callEvent("cameraMode", "mid")
        this.setSize(x , x);
      }
    })

    this.update = (object) => {
      if (image){
        image.remove()
        image = undefined
      }

      image = object.element.cloneNode(true);
      image.removeAttribute('style')
      image.children[0].style.opacity = 1
      image.classList.remove('image-container')
      image.classList.add('image-show')
      parent.appendChild(image)
    }
  }
}