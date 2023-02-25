import * as THREE from 'three'
import {gsap, Power2} from 'gsap';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { lerp } from 'three/src/math/MathUtils';

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
    const activeRadius = 6500
    let currentY = 0
    const imageScale = 2

    let orderedImages = []

    let categories = []

    function calculatePositionWithAngle(angle, radius){
      const position = new THREE.Vector2(radius,0)
      position.rotateAround(new THREE.Vector2(), angle * (Math.PI/180))
      return new THREE.Vector3(position.x , 0, position.y)
    }

    let activeImageObject = {}
    function activeImage(object){
      if (!activeImageObject.image){ return }
      if (activeImageObject.image.id == object.image.id ) {return}
      // de active Old activeImageObject
      deActiveImage()

      // update index
      activeImageObject = object
      activeImageObject.image.element.children[0].style.opacity = 1
      activeImageObject.image.object3d.position.copy(calculatePositionWithAngle(activeImageObject.angle + currentY, activeRadius))
      event.callEvent('activeImage', activeImageObject)

    }

    function deActiveImage(){
      // first deActive old image
      if (activeImageObject.image){
        activeImageObject.image.element.children[0].style.opacity = 0
        activeImageObject.image.object3d.position.copy(calculatePositionWithAngle(activeImageObject.angle + currentY, radius))

        activeImageObject = {}
        event.callEvent('deActiveImage')
      }
    }

    let mode = ""
    this.setMode = (_mode) => {
      mode = _mode
    }

    this.rotateY = (angle) => {
      currentY += angle
      let isToMuch = angle > 8

      // update images position
      orderedImages.forEach(object => {
        if ( object.image !== undefined ){
          const imageAngle = object.angle + currentY
          object.image.object3d.position.copy(calculatePositionWithAngle(imageAngle, radius))
          object.image.object3d.rotation.y = -imageAngle * (Math.PI/180)
          if (!this.isGenerating && !isToMuch){
            if ( Math.abs(imageAngle % 360) < 1){
              activeImage(object)
            }
          }
        }
      })

      // update active image position
      if (activeImageObject.image !== undefined ){
        activeImageObject.image.object3d.position.copy(calculatePositionWithAngle(activeImageObject.angle + currentY, activeRadius))
      }
      // update categories position
      categories.forEach(category => {
        const categoryAngle = category.angle + currentY
        if (mode == "top"){
          category.object3d.position.copy(calculatePositionWithAngle(categoryAngle, radius + 1200))
          category.element.style.fontSize = 160 + "px"
          category.object3d.position.y += 800
          category.object3d.lookAt(new THREE.Vector3(0,8000,-10500))
          category.object3d.rotation.z = 0 
          category.object3d.scale.set(-imageScale,-imageScale,imageScale)
        } else {
          category.object3d.position.copy(calculatePositionWithAngle(categoryAngle, radius))
          category.element.style.fontSize = 40 + "px"
          category.object3d.position.y -= 400
          category.object3d.rotation.y = -categoryAngle * (Math.PI/180)
        }
      })
    }

    const fadeOUt = () => {
      return new Promise((resolve, _) => {

        // create object to hold rotation params
        const lorem = { amount : 0, rotateAmount : 0 }

        categories.forEach(category => {
          gsap.to(category.element,{
            opacity : 0,
            duration : 0.5,
            onComplete : () => {
            }
          })
        })

        // skip number
        const skip = Math.floor(orderedImages.length / 6)
        let parentAngles = []
        let useAngleIndex = 0
        
        // start animating
        gsap.to(lorem, {
          amount : 1,
          duration : 3,
          ease : Power2.easeIn,
          onStart : () => {
            orderedImages.forEach((object, index) => {
              if (index % skip == 0 ){
                parentAngles.push(object.angle)
              }
            })
            parentAngles.push(orderedImages[orderedImages.length-1].angle)
          },
          onUpdate : () => {

            useAngleIndex = 0
            const rotateAmount = 360 * lorem.amount

            this.rotateY(rotateAmount - lorem.rotateAmount)
            lorem.rotateAmount = rotateAmount

            orderedImages.forEach((object, index) => {
              // update useAngleIndex
              if (index % skip == 0 ){
                useAngleIndex++
              }
              
              object.angle = lerp(
                object.angle,
                parentAngles[useAngleIndex],
                lorem.amount
              )
              
            })
          },
          onComplete : () => { resolve() }
        })
      })
    }

    const fadeIn = () => {
      return new Promise((resolve, _) => {

        // create object to hold rotation params
        const lorem = { amount : 1, rotateAmount : 0 }

        // skip number
        const skip = Math.floor(orderedImages.length / 6)
        let parentAngles = []
        let useAngleIndex = 0

        const defaultAngles = orderedImages.map(object => object.angle)

        // start animating
        gsap.to(lorem, {
          amount : 0,
          duration : 3,
          ease : Power2.easeOut,
          onStart : () => {
            orderedImages.forEach((object, index) => {
              if (index % skip == 0 ){
                parentAngles.push(object.angle)
              }
            })
            parentAngles.push(orderedImages[orderedImages.length-1].angle)
          },
          onUpdate : () => {

            useAngleIndex = 0
            const rotateAmount = 360 * lorem.amount

            this.rotateY(-(rotateAmount - lorem.rotateAmount))
            lorem.rotateAmount = rotateAmount

            orderedImages.forEach((object, index) => {
              // update useAngleIndex
              if (index % skip == 0 ){
                useAngleIndex++
              }
              
              object.angle = lerp(
                defaultAngles[index],
                parentAngles[useAngleIndex],
                lorem.amount
              )
              
            })
          },
          onComplete : () => { 
            resolve()
            categories.forEach(category => {
              gsap.to(category.element,{
                opacity : 1,
                duration : 0.5,
                onComplete : () => {
                }
              })
            })    
          }
        })
      })
    }

    // for disable active image function
    this.isGenerating = false

    // create wheel
    this.generate = async (order) => {
      return new Promise( async (resolve, _) => {
        if (this.isGenerating) { return }

        // de active Image id exist
        deActiveImage()

        this.isGenerating = true
        if ( orderedImages.length > 0 ){
          await fadeOUt()
        }
        const imageIds = []
        this.clear()
        categories = []

        order.forEach( category => {
          let ifFirst = true
          category.objectsId.forEach( id => {
            if ( ifFirst ){
              ifFirst = false
              categories.push({
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
        
        let index = 0
        let currentCategoryText = ""
        for (let angle = 0; angle < 360; angle+= 360 / imageIds.length ) {

          // scale
          const id = imageIds[index]
          index++

          if (id !== undefined){


            const category = categories.find( lorem => lorem.id == id )
            if ( category ){
              category.element = document.createElement("p")
              category.element.classList.add("gategory")
              category.element.style.opacity = 0
              category.element.innerText =  category.text
              
              category.object3d = new CSS3DObject(category.element)

              category.object3d.scale.set(-imageScale,imageScale,imageScale)
              category.object3d.position.y += 150

              category.angle = angle

              this.add(category.object3d)

              currentCategoryText = category.text
            }

            // find image
            const image = objects.find( object => object.id == id )
            
            // set scale
            image.object3d.scale.set(-imageScale,imageScale,imageScale)

            this.add(image.object3d)
            orderedImages.push({ image, angle, category : currentCategoryText })

          } else {
            orderedImages.push({ angle })
          }
        }

        await fadeIn()
        activeImageObject = orderedImages[1]

        this.isGenerating = false
        resolve()
      })
      }
  }
}