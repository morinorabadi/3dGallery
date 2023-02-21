import * as THREE from 'three'
import {gsap} from 'gsap';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default class Wheel extends THREE.Group
{
  constructor(data){
    super()
    const { objects, event } = data

    // create object3d for each image
    objects.forEach(image => {
      image.object3d = new CSS3DObject(image.element)
      image.asActive = false
    });

    const radius = 6000
    
    let currentY = 0

    let orderedImages = []

    let categoriesTitle = []

    function calculatePositionWithAngle(angle, radius){
      const position = new THREE.Vector2(radius,0)
      position.rotateAround(new THREE.Vector2(), angle * (Math.PI/180))
      return new THREE.Vector3(position.x , 0, position.y)
    }

    let activeImageObject = undefined
    function activeImage(object){
      if (activeImageObject.image.id == object.image.id ) {return}
      console.log(":ok");
      // first deActive old image
      if (activeImageObject){
        activeImageObject.image.element.children[0].style.opacity = 0
        activeImageObject.image.object3d.position.copy(calculatePositionWithAngle(activeImageObject.angle + currentY, radius))
      }
      
      // update index
      activeImageObject = object
      activeImageObject.image.element.children[0].style.opacity = 1
      activeImageObject.image.object3d.position.copy(calculatePositionWithAngle(activeImageObject.angle + currentY, radius + 500))
      // event.callEvent('activeImage', activeImageObject.image)

    }


    this.rotateY = (angle) => {
      currentY += angle
      
      orderedImages.forEach(object => {
          if ( object ){
            const imageAngle = object.angle + currentY
            object.image.object3d.position.copy(calculatePositionWithAngle(imageAngle, radius))
            object.image.object3d.rotation.y = -imageAngle * (Math.PI/180)
            if ( imageAngle % 360 < 3){
              activeImage(object)
            }
          }
      })
      activeImageObject.image.object3d.position.copy(calculatePositionWithAngle(activeImageObject.angle + currentY, radius + 500))
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
      
      const imageScale = 2
      function setPositions(object, angle){
        // scale
        object.scale.set(-imageScale,imageScale,imageScale)
        
        // position
        // object.position.copy(calculatePositionWithAngle(angle, radius))
      
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
          const image = objects.find( object => object.id == id )
          
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
        activeImageObject = orderedImages[0]
      }

      // animate wheel
      // const rotationsY = { y : 0 }
      // gsap.to(rotationsY, { y : 1, duration : 5, onUpdate: () => {
        // console.log(rotationsY.y);
        // this.rotateY()
      // }})
    }
  }
}