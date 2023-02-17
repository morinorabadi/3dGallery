export default function imageContainer(object)
{
  return new Promise((resolve, reject) => {
    const image = document.createElement('img')
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.classList.add('image-container')
    image.src = object.src
    image.setAttribute('id', `image_${object.id}`)
  })
}