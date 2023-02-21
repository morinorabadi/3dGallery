export default function imageContainer(object, event)
{
  return new Promise((resolve, reject) => {
    const parent = document.createElement('div')
    parent.classList.add('image-container')
    parent.setAttribute('id', `image_${object.id}`)
    
    const text = document.createElement('p')
    text.innerText = object.title
    parent.appendChild(text)
    
    const image = document.createElement('img')
    image.addEventListener('load', () => { resolve(parent) })
    image.src = object.src
    parent.appendChild(image)


    image.addEventListener("mouseover", () => {
      // event.callEvent("imageHover", object)
    });
  })
}