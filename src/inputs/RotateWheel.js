export default class RotateWheel
{
  constructor(redlibcore, wheel){

    let isActiveUp = false
    this.activeUp = () => { isActiveUp = true }
    this.deActiveUp = () => { isActiveUp = false }

    let isActiveLeft = true
    this.activeLeft = () => { isActiveLeft = true }
    this.deActiveLeft = () => { isActiveLeft = false }

    const delta = 0.02

    let startTouch
    redlibcore.globalEvent.addCallBack('touchStart', (touch) => {
        startTouch = touch

    })

    // todo add smooth touch
    redlibcore.globalEvent.addCallBack("touchDrag", (touch) => {
        if (isActiveUp){ wheel.rotateY((startTouch.y - touch.y) * delta) }
        if (isActiveLeft){ wheel.rotateY(-(startTouch.x - touch.x) * delta) }
    })
    
  }
}