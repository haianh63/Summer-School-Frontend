export default function ArticleHeadline({headline}) {
    return (
        <h2 className = "w-11/12 mb-5 font-bold text-3xl" id={headline.slug}>{headline.headline}</h2>
    )
}