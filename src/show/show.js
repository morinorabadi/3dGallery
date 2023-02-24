import {gsap} from "gsap";

export default class Show
{
  constructor(){
    this.domElement = document.getElementById("show")

    const title = document.createElement('p')
    title.classList.add('title')
    title.innerText = " category name "
    this.domElement.appendChild(title)


    let image;

    this.active = (object) => {
      image = object.element.cloneNode(true);
      image.removeAttribute('style')
      image.children[0].style.opacity = 1
      image.classList.remove('image-container')
      image.classList.add('image-show')
      this.domElement.appendChild(image)
      gsap.from(image, {
        opacity : 0,
        duration : 0.4,
      })
    }

    this.deActive = () => {
      if (image){
        let oldImage = image.cloneNode(true);
        image.remove()
        image = undefined
        gsap.to(oldImage, {
          opacity : 0,
          duration : 0.4,
          onComplete : () => {
            oldImage.remove()
            oldImage = undefined
          }
        })
      }
    }
  }
}