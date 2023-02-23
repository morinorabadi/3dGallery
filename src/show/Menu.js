export default class Menu
{
  constructor(data, onChange){
    const holder = document.querySelector('#menu .holder')
    // extract orders text
    const orders = Object.keys(data.categories)
    
    // set holder width
    const holderWidth = 480
    holder.style.width = holderWidth + "px"

    // calculate p and span width
    const spanWidth = (holderWidth / (orders.length-2 )) / 10
    const pWidth = (holderWidth / orders.length -1 ) - (spanWidth * (orders.length -2) )
    
    // generate menu button for each order
    orders.forEach((orderText, index) => {

        // create p element
        const order = document.createElement('p')
        order.innerText = orderText
        order.style.width = pWidth + "px"
        order.addEventListener('click', () => { onChange(orderText) })
        holder.appendChild(order)

        // save element in data object
        data.categories[orderText].element = order

        if (index !== orders.length -1){
            // create span element
            const span = document.createElement('span')
            span.innerText = "|"
            span.style.width = spanWidth + "px"
            holder.appendChild(span)
        }
    })

  }
}