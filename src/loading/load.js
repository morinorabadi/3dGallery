import getData from './getData';
import imageContainer from './Image'

export default async function load()
{
  try {
    const data = await getData(process.env.API_PATH)
    console.log(data);

    let count = 0
    const all = data.objects.length

    let imgElement = []

    const loadingElement = document.querySelector('#loading p')

    await Promise.all(data.objects.map( async (object) => {
        imgElement.push(await imageContainer(object))
        count++
        const percent = count / all * 100
        loadingElement.innerText = `loading ${Math.floor(percent)} %`
    }))

  } catch (error) {
    console.error(error);
    console.error("something go wrong with connection try again later");
  }
}