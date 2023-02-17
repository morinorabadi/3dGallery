import './style.sass'
import * as THREE from 'three'

import RedLib from './redlib/core'

import Camera from './utils/camera';
import Renderer from './utils/renderer';
import load from './loading/load';

function init(){

    // create red lib
    const redLibcore = new RedLib()

    // create scene
    const scene = new THREE.Scene()

    // create circle
    const group = new THREE.Group()
    scene.add(group)
    const imageCount = 40

    // for (let angle = 0; angle < 360; angle+= 360/imageCount) {
    //     const position = new THREE.Vector2(5000,0)
    //     position.rotateAround(new THREE.Vector2(), angle * (Math.PI/180))

    //     const testImage = new ImageContainer()
    //     testImage.position.y = (Math.random() - 0.5) * 100
    //     testImage.position.x = position.x
    //     testImage.position.z = position.y
    //     testImage.rotation.y = -angle * (Math.PI/180)
    //     group.add(testImage)

    // }


    redLibcore.globalEvent.addCallBack('process', (delta) => {
        group.rotateY(delta/5000)
    })


    // create camera
    const camera = new Camera(redLibcore)
    camera.position.set(0,5000,-14000)
    camera.lookAt(new THREE.Vector3())


    // create renderer
    const renderer = new Renderer(redLibcore,scene,camera)

    redLibcore.sizes.resize()
}
load().then(() => {init()})