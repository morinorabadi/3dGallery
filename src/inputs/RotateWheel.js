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

    function isPositive(number){
      if (number > 0) {return true}
      else { return false }
    }

    function addRotateAmount(amount){
      if (isPositive(amount) !== isPositive(rotateAmount)){
        rotateAmount = 0
      }
      rotateAmount += amount
    }

    redlibcore.globalEvent.addCallBack("touchDrag", (touch) => {
      if ( isActive ){
        addRotateAmount(startTouch.y - touch.y)
        addRotateAmount(startTouch.x - touch.x)
        isRotateAround = true
      }
    })


    // smooth rotate
    const RotateDelta = 0.001
    const wheelRotateAmount = -0.05

    redlibcore.globalEvent.addCallBack('process', (delta) => {
      if (!isRotateAround){ return }
      const rotate = rotateAmount * delta * RotateDelta
      rotateAmount -= rotate
      wheel.rotateY(rotate* wheelRotateAmount )
      // console.log(rotateAmount);
      if (Math.abs(rotateAmount) < 0.1){
        isRotateAround = false
      }
    })
    
  }
}