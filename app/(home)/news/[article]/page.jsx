import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils"
import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
import FeaturedArticle from "@/app/_components/Blog/FeaturedArticle";

export default async function Page({params}) {
    const {article: slug} = params;
    const articles = await fetchBlogArticles();

    const article = articles.find((article) => article.slug === slug);
    const moreArticle = articles.filter((article) => article.slug !== slug);
    //console.log(article);
    return (
        <main className="flex flex-col items-center gap-0">
            <ArticleIntro article={article} />
            <ArticleOverview article={article} />
            {article.articleContent.map((component) => (
                <ArticleComponent key={component.id} component={component} />
            ))}
            <FeaturedArticle data={moreArticle} headline="Explore our other articles" />
        </main>
    )
}

export async function generateStaticParams() {
    const response = await fetchDataFromStrapi('api/blog-articles');
    const articles = response.data;
    return articles.map((article) => (
       {article: article.attributes.slug}
    ));
}

export const dynamicParams = false;