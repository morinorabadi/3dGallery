export default class Show
{
  constructor(redlibcore){
    const parent = document.getElementById("show")

    const title = document.createElement('p')
    parent.appendChild(title)

    let image;
    
    redlibcore.globalEvent.addCallBack("resize", (sizes) => {
        console.log(sizes);
    })

    this.update = (object) => {
        title.innerText = object.title

        if (image){
            image.remove()
            image = undefined
        }

        image = object.element.cloneNode(true);
        image.removeAttribute("style")
        parent.appendChild(image)
    }
  }
}