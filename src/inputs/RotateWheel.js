export default class RotateWheel
{
  constructor(redlibcore, wheel){

    let isActive = true
    this.active = () => { isActive = true }
    this.deActive = () => { isActive = false }


    let isRotateAround = false
    let rotateAmount = 0

    let startTouch
    redlibcore.globalEvent.addCallBack('touchStart', (touch) => {
      startTouch = touch
    })

    redlibcore.globalEvent.addCallBack("touchDrag", (touch) => {
      if ( isActive ){
        rotateAmount += startTouch.yPixel - touch.yPixel
        rotateAmount += startTouch.xPixel - touch.xPixel
        isRotateAround = true
        startTouch = touch
      }
    })


    // smooth rotate
    const RotateDelta = 0.001
    const wheelRotateAmount = 0.5

    redlibcore.globalEvent.addCallBack('process', (delta) => {
      if (!isRotateAround){ return }
      const rotate = rotateAmount * delta * RotateDelta
      rotateAmount -= rotate
      // wheel.rotation.y += rotate * wheelRotateAmount
      wheel.rotateY(rotate* wheelRotateAmount )
      // console.log(rotateAmount);
      if (Math.abs(rotateAmount) < 0.1){
        isRotateAround = false
      }
    })
    
  }
}