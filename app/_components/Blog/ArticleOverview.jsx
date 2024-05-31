import Link from "next/link";
export default function ArticleOverview({article}) {
    const headlines = article.articleContent.filter((component) => component.__component === "blog-article.headline");
    return (
        <div className="w-11/12 mb-10">
            <div className="w-full mt-10 flex flex-col 640:flex-row gap-7 640:gap-36" id="article-overview-info">
                <div className="w-full 640:w-7/12 flex flex-col gap-5">
                    <h3 className="font-bold text-3xl">In this blog</h3>
                    <p className="font-semibold text-md">{article.excerpt}</p>          
                </div>
                <div className="flex flex-col font-semibold text-md text-blue-500 underline underline-offset-2">
                    {headlines.map((headline, index) => (
                        <Link key={headline.id} href={`#${headline.slug}`}>
                            {`${index + 1}. ${headline.headline}`}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}