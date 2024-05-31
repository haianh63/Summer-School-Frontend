import { formatDate } from "@/utils/strapi.utils"
export default function ArticleIntro({article}) {
    //console.log(article);
    return (
        <div className="w-11/12 mt-10 flex flex-col items-center" id="article-overview">
            <h1 className="text-center font-bold text-4xl w-11/12 640:w-9/12 md:w-7/12">{article.headline}</h1>
            <div className="mt-3 flex flex-row gap-7">
                <p className="font-semibold text-gray-400">{formatDate(article.publishedAt)}</p>
                <p className="font-semibold text-gray-400">{article.author}</p>
            </div>
            <img className="mt-10 object-cover object-center w-full h-[15rem] 460:h-[20rem] 640:h-[25rem] 740:h-[30rem] rounded-2xl" src={article.featuredImage} alt="" />
        </div>

    )
}