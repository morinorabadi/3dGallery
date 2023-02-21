import * as THREE from 'three'
import {gsap} from 'gsap';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default class Wheel extends THREE.Group
{
  constructor(images){
    super()

    // create object3d for each image
    images.forEach(image => {
      image.object3d = new CSS3DObject(image.element)
      image.asActive = false
    });

    const radius = 6000
    
    let currentY = 0
    let rotateAmount = 999

    let activeImageIndex = 0
    let orderedImages = []

    let categoriesTitle = []

    function calculatePositionWithAngle(angle, radius){
      const position = new THREE.Vector2(radius,0)
      position.rotateAround(new THREE.Vector2(), angle * (Math.PI/180))
      return new THREE.Vector3(position.x , 0, position.y)
    }

    function activeImage(newIndex){
      // first deActive ol image
      const oldImage = orderedImages[activeImageIndex]
      if (oldImage){
        oldImage.image.element.children[0].style.opacity = 0
        oldImage.image.object3d.position.copy(calculatePositionWithAngle(oldImage.angle, radius))
      }
      
      // update index
      activeImageIndex += newIndex
      if (activeImageIndex < 0){
        activeImageIndex = orderedImages.length
      } 
      if (activeImageIndex > orderedImages.length ){
        activeImageIndex = 0
      } 

      const newImage = orderedImages[activeImageIndex]
      if (newImage){
        newImage.image.element.children[0].style.opacity = 1
        newImage.image.object3d.position.copy(calculatePositionWithAngle(newImage.angle, radius + 500))
      }
    }


    this.rotateY = (angle) => {
      // console.log("angle");
      super.rotateY(angle)
      // console.log(angle);

      currentY += angle
      if (Math.abs(currentY) > rotateAmount){
        if (currentY > 0){
          activeImage(1)
          currentY -= rotateAmount
        } else {
          activeImage(-1)
          currentY += rotateAmount
        }
      }
    }

    // create wheel
    this.generate = (order) => {
      
      const imageIds = []
      this.clear()

      order.forEach( category => {
        let ifFirst = true
        category.objectsId.forEach( id => {
          if ( ifFirst ){
            ifFirst = false
            categoriesTitle.push({
              id : id,
              text : category.name
            })
          }
          imageIds.push(id)
        })
        for (let pass = 0; pass < 1; pass++) {
          imageIds.push(undefined)
        }
      })

      orderedImages = []
      activeImageIndex = imageIds.length - 2

      
      const imageScale = 2
      function setPositions(object, angle){
        // scale
        object.scale.set(-imageScale,imageScale,imageScale)
        
        // position
        object.position.copy(calculatePositionWithAngle(angle, radius))
      
        // rotation
        object.rotation.y = -angle * (Math.PI/180)

      }

      let index = 0

      for (let angle = 0; angle < 360; angle+= 360 / imageIds.length ) {

        // scale
        const id = imageIds[index]
        index++

        if (id !== undefined){
          
          // find image
          const image = images.find( object => object.id == id )
          
          setPositions(image.object3d,angle)

          this.add(image.object3d)
          orderedImages.push({ image, angle })
          
          const categoriesPargeraf = categoriesTitle.find( lorem => lorem.id == id )
          if ( categoriesPargeraf ){
            
            const categoriesElement = document.createElement("p")
            categoriesElement.classList.add("gategory")
            categoriesElement.innerText = categoriesPargeraf.text
            
            const categoriesObject = new CSS3DObject(categoriesElement)
            setPositions(categoriesObject, angle)
            categoriesObject.position.y += 150

            this.add(categoriesObject)
          }

        } else {
          orderedImages.push(undefined)
        }

      }

      // animate wheel
      // const rotationsY = { y : 0 }
      // gsap.to(rotationsY, { y : 1, duration : 5, onUpdate: () => {
        // console.log(rotationsY.y);
        // this.rotateY()
      // }})

      rotateAmount = 360/imageIds.length * (Math.PI/180)
      console.log(imageIds.length);
    }
  }
}