import axios from 'axios'
const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337"

export async function fetchDataFromStrapi(route) {
    const url = `${BASE_URL}/${route}`

    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("Could not fetch data from " + route)
    }
}

export function processInfoBlock(data) {
    const processedData = data.map((infoblock) => ({
        id: infoblock.id,
        ...infoblock.attributes,
        imgSrc: BASE_URL + infoblock.attributes.image?.data?.attributes?.url
    }))

    return processedData 
}