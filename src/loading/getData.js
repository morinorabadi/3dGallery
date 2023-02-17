export default async function getData(path){
    const response = await fetch(path)
    return await response.json()
}