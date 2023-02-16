import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default class Renderer extends CSS3DRenderer
{
    constructor(redlibcore, scene, camera){
        super({element : document.getElementById('scene')})

        redlibcore.globalEvent.addCallBack("process", () => {
            this.render(scene,camera)
        },1)

        // handel resize event
        redlibcore.globalEvent.addCallBack("resize", (sizes) => {
            this.setSize(sizes.x,sizes.y)
        })
    }
}