import * as THREE from 'three'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default class Wheel extends THREE.Group
{
  constructor(images){
    super()
    // create wheel
    const imageCount = images.length
    this.generate = (order) => {
        this.clear()

        let index = 0
        for (let angle = 0; angle < 360; angle+= 360/imageCount) {

            const position = new THREE.Vector2(5000,0)
            position.rotateAround(new THREE.Vector2(), angle * (Math.PI/180))
            
            const image = new CSS3DObject(images[index].element)
            index++

            image.position.x = position.x
            image.position.z = position.y
            image.rotation.y = -angle * (Math.PI/180)

            this.add(image)
    
        }
    }
  }
}