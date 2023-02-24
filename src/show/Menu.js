export default class Menu
{
  constructor(data, onChange){
    const holder = document.querySelector('#menu .holder')
    // extract orders text
    const orders = Object.keys(data.categories)
    


    // calculate p and span width
    this.resize = (x) => {
      let holderWidth;
      if (x > 800){
        holderWidth = 540
      } else {
        holderWidth = x * 0.6
      }

      const pWidth = (holderWidth / orders.length -1 ) - (spanWidth * (orders.length -2) )
      const spanWidth = (holderWidth / (orders.length-2 )) / 10

      // set holder width
      
      holder.style.width = holderWidth + "px"
      // resize menu
      

      for (var i = 0; i < holder.children.length; i++) {
        
        const element = holder.children[i]
        
        element.style.fontSize = spanWidth + "px"
        if (element.nodeName == "P"){
          element.style.width = pWidth + "px"
        } else {
          element.style.width = spanWidth + "px"
        }
        // Do stuff
      }

    }
    
    // generate menu button for each order
    orders.forEach((orderText, index) => {

        // create p element
        const order = document.createElement('p')
        order.innerText = orderText
        order.addEventListener('click', () => { onChange(orderText) })
        holder.appendChild(order)

        // save element in data object
        data.categories[orderText].element = order

        if (index !== orders.length -1){
            // create span element
            const span = document.createElement('span')
            span.innerText = "|"
            holder.appendChild(span)
        }
    })

  }
}