import './style.sass'
import * as THREE from 'three'

import RedLib from './redlib/core'

import Camera from './utils/camera';
import Renderer from './utils/renderer';
import load from './loading/load';
import Wheel from './utils/wheel';

import RotateWheel from './inputs/RotateWheel'
import Show from './show/show';

let data;

function init(){
    console.log(data);
    // create red lib
    const redlibcore = new RedLib()

    // create scene
    const scene = new THREE.Scene()

    // wheel
    const wheel = new Wheel(data.objects)
    scene.add(wheel)
    wheel.generate("test")

    // rotate Wheel
    const rotateWheel = new RotateWheel(redlibcore, wheel)


    const show = new Show(redlibcore)
    // listen to hover effect
    data.event.addCallBack("imageHover", (object) => {
        show.update(object)
    })
    

    // create camera
    const camera = new Camera(redlibcore)
    camera.position.set(0,9000,-14000)
    camera.lookAt(new THREE.Vector3())


    // create renderer
    const renderer = new Renderer(redlibcore,scene,camera)

    redlibcore.sizes.resize()
}

load().then((_data) => {
    data = _data
    init()
})