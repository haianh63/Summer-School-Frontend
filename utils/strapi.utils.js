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

export async function fetchBlogArticles() {
    const response = await fetchDataFromStrapi('api/blog-articles?populate=deep')
    const processedBlogArticle = response.data.map(processBlogArticle)
    processedBlogArticle.sort((a, z) => new Date(z.publishedAt) - new Date(a.publishedAt))
    return processedBlogArticle
}

function processBlogArticle(article) {
    return {
        ...article.attributes,
        id:article.id,
        featuredImage: BASE_URL + article.attributes?.featuredImage?.data[0]?.attributes?.url
    }
}

export function formatDate(dateString) {
    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return date.toLocaleDateString('en-US', options);
}

export function extractImageUrl(imageData) {
    return BASE_URL + imageData?.data?.attributes?.url;
}