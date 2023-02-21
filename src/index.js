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
    const wheel = new Wheel(data)
    scene.add(wheel)
    wheel.generate(data.categories.order1)

    // rotate Wheel
    const rotateWheel = new RotateWheel(redlibcore, wheel)


    const show = new Show(redlibcore, data.event )
    // listen to hover effect
    data.event.addCallBack("activeImage", (object, isHover) => {
        // check if camera is in top mode
        if (data.cameraMode !== "top" && isHover){ return }
        show.update(object)
    })

    const camera = new Camera(redlibcore)
    data.event.addEvent('cameraMode')
    data.event.addCallBack("cameraMode", (mode) => {
        data.cameraMode = mode
        camera.setMode(mode)
    })
    data.event.callEvent("cameraMode", "mid")

    // create renderer
    const renderer = new Renderer(redlibcore,scene,camera)

    console.log(data);
    redlibcore.sizes.resize()
}

load().then((_data) => {
    data = _data
    init()
})