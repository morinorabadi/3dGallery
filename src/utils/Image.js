import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default class ImageContainer extends CSS3DObject
{
  constructor(){
    const element = document.createElement('div')
    element.innerText = "asdlask da;slkd a;sld a;slk das;"
    element.classList.add('image-container')
    super(element)
  }
}