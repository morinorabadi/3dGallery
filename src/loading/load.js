import {gsap} from 'gsap';
import Events from '../redlib/utils/Events';
import getData from './getData';
import imageContainer from './Image'

export default async function load()
{
  return new Promise(async (resolve, reject) => {
    try {
      const data = await getData(process.env.API_PATH)
      
      let count = 0
      const all = data.objects.length
      
      // create Event object
      data.event = new Events()
      data.event.addEvent('activeImage')
      data.event.addEvent('deActiveImage')
      
      const loadingElement = document.querySelector('#loading p')
  
      await Promise.all(data.objects.map( async (object) => {
          object.element = await imageContainer(object,data.event)
          count++
          const percent = count / all * 100
          loadingElement.innerText = `loading ${Math.floor(percent)} %`
      }))
      resolve(data)
    } catch (error) {
      console.error("something go wrong with connection try again later");
    }

  } )
}