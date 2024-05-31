import FeaturedArticle from "@/app/_components/Blog/FeaturedArticle"
import HighlightedArticle from "@/app/_components/Blog/HighlightedArticle"
import { fetchBlogArticles } from "@/utils/strapi.utils"
export default async function Page() {
    const blogArticles = await fetchBlogArticles()
    let highlightedArticle = blogArticles.find((article) => article.isHighlightArticle)
    //console.log(highlightedArticle);
    let featuredArticle = null
    if (highlightedArticle == null) {
        highlightedArticle = blogArticles[0]
        featuredArticle = blogArticles.filter((article) => article.id !== highlightedArticle.id)
    } else {
        featuredArticle = blogArticles.filter((article) => !article.isHighlightArticle)
    }
    //console.log(highlightedArticle)
    return (
        <>
            <HighlightedArticle data={highlightedArticle}/>
            <FeaturedArticle data={featuredArticle} headline="Our featured articles" />
        </>
        
    )
}

export const revalidate = 300;