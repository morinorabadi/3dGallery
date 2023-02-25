import {gsap} from "gsap";

export default class Show
{
  constructor(){
    this.domElement = document.getElementById("show")
    
    const startParent = document.createElement('div')
    startParent.classList.add('start')

    const startTitle = document.createElement('h2')
    startTitle.innerText = "| this is 3D Gallery"
    startParent.appendChild(startTitle)

    this.domElement.appendChild(startParent)


    let isStartActive = true
    const activeStart = () => {
      if ( isStartActive ) { return } 
      isStartActive = true
      gsap.to(startParent,{ duration : 0.2, opacity : 1 })
      gsap.to(categoryElement,{ duration : 0.2, opacity : 0 })
    }

    const deActiveStart = () => {
      if ( !isStartActive ) { return } 
      isStartActive = false
      gsap.to(startParent,{ duration : 0.2, opacity : 0 })
      gsap.to(categoryElement,{ duration : 0.2, opacity : 1 })
    }


    let imageClone;

    const categoryElement = document.createElement('p')
    categoryElement.classList.add('title')
    categoryElement.innerText = "."
    categoryElement.style.opacity = 0
    this.domElement.appendChild(categoryElement)

    this.active = (object) => {
      deActiveStart()

      const {image, category} = object

      // update category
      categoryElement.innerText = category

      // update image
      imageClone = image.element.cloneNode(true);
      imageClone.removeAttribute('style')
      imageClone.children[0].style.opacity = 1
      imageClone.classList.remove('image-container')
      imageClone.classList.add('image-show')
      this.domElement.appendChild(imageClone)
      gsap.from(imageClone, {
        opacity : 0,
        duration : 0.4,
      })
    }

    this.deActive = () => {
      if (imageClone){
        let oldImage = imageClone.cloneNode(true);
        imageClone.remove()
        imageClone = undefined
        gsap.to(oldImage, {
          opacity : 0,
          duration : 0.4,
          onComplete : () => {
            oldImage.remove()
            oldImage = undefined
            if ( !imageClone ) {
              activeStart()
            }
          }
        })
      }
    }
  }
}