import './style.sass'
import * as THREE from 'three'

import RedLib from './redlib/core'

import Camera from './utils/camera';
import Renderer from './utils/renderer';
import load from './loading/load';
import Wheel from './utils/wheel';

import RotateWheel from './inputs/RotateWheel'
import Show from './show/show';
import Menu from './show/Menu';

let data;

function init(){
    // create red lib
    const redlibcore = new RedLib()

    // create scene
    const scene = new THREE.Scene()

    // wheel
    const wheel = new Wheel(data)
    scene.add(wheel)

    // create menu
    let currentOrder = undefined
    const changeOrder = (order) => {
        if ( currentOrder ){ currentOrder.element.classList.remove('active') }
        wheel.generate(data.categories[order])
        currentOrder = data.categories[order]
        currentOrder.element.classList.add('active')
    }
    const menu = new Menu(data, changeOrder)

    // active first object
    changeOrder(Object.keys(data.categories)[0])

    // rotate Wheel
    const rotateWheel = new RotateWheel(redlibcore, wheel)


    // create show class and add events
    const show = new Show()

    data.event.addCallBack("activeImage", (object, isHover) => {
        show.active(object)
    })

    data.event.addCallBack("deActiveImage", () => {
        show.deActive()
    })

    // createCamera
    const camera = new Camera()

    // create renderer
    const renderer = new Renderer(redlibcore,scene,camera)

    function resize({x ,y ,showXY , showTop, showLeft, rendererTop, rendererLeft}){

      // show x and y
      show.domElement.style.width = showXY + "px";
      show.domElement.style.height = showXY + "px";

      // show top and left
      show.domElement.style.left = (showLeft || 0) + "px";
      show.domElement.style.top = (showTop || 0) + "px";

      // renderer x and y
      renderer.setSize(x , y)

      // renderer top and left
      renderer.domElement.style.top = (rendererTop || 0) + "px";
      renderer.domElement.style.left = (rendererLeft || 0) + "px";
    }

    redlibcore.globalEvent.addCallBack('resize', (sizes) => {
        const { x , y } = sizes
        if ( x > y * 1.4 ) {

          camera.setMode("top")
          resize({
            x: y * 1.4,
            y : y,
            rendererLeft : (x - y * 1.4 ) / 2,
            showXY : y * 0.5,
            showTop : y * 0.20, 
            showLeft : (x - y * 0.5 ) / 2
          })

        } else if ( x > y * 1.2 ) {

          camera.setMode("mid")
          resize({
            x: y * 0.65 ,
            y : y * 0.65 ,
            showXY : y * 0.65,
            rendererLeft : (x - y * 0.65 ),
            rendererTop : 0.15 * y ,
            showTop : y * 0.15, 
          })

        } else if ( x > y * 0.8 ) {

          camera.setMode("mid")
          resize({
            x: x * 0.6 ,
            y : x * 0.6 ,
            rendererLeft : x * 0.4,
            rendererTop : y - (x * 0.6),
            showXY : x * 0.6,
          })

        } else {
          // mobile
          camera.setMode("mid")
          if ( y > x * 2 ){

            const space = (y - (x * 2)) / 3
            resize({
              x: x,
              y : x,
              rendererTop : (space * 2) + x,
              showXY : x,
              showTop : space
            })

          } else {

            resize({
              x: y /2,
              y : y /2,
              rendererTop : y /2 ,
              rendererLeft : (x - y/2),
              showXY : y /2,
            })

          }
        }

        // resize menu
        menu.resize(x)

        // resize camera
        camera.aspect = x / y
        camera.updateProjectionMatrix();
    })


    redlibcore.sizes.resize()
}

load().then((_data) => {
    data = _data
    init()
})