export default function imageContainer(object, event)
{
  return new Promise((resolve, reject) => {
    const image = document.createElement('img')
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.classList.add('image-container')
    image.src = object.src
    image.setAttribute('id', `image_${object.id}`)

    image.addEventListener("mouseover", () => {
      event.callEvent("imageHover", object)
    });
  })
}