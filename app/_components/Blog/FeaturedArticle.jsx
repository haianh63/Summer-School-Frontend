import FeaturedItem from "./FeaturedItem"
export default function FeaturedArticle() {
    const data = [{
        id:1,
        headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam',
        publishAt: 'Monday, June 05, 2023'
    },{
        id:2,
        headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam',
        publishAt: 'Monday, June 05, 2023'
    },{
        id:3,
        headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam',
        publishAt: 'Monday, June 05, 2023'
    },{
        id:4,
        headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam',
        publishAt: 'Monday, June 05, 2023'
    }]
    return (
        <div className="w-full mt-8 px-8 md:px-16 flex flex-col gap-16">
            <h1 className="text-3xl 460:text-4xl font-bold">Our featured articles</h1>
            <div className="grid grid-cols-1 460:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10" id="featured-article">
                {data.map((article) => {
                    return <FeaturedItem key= {article.id} data={article} />
                })}
            </div>
            <button className="text-white w-[150px] mx-auto font-semibold text-lg bg-[#14A998] px-8 py-3 rounded-full hover:bg-[#6BCE8C]">See more</button>
        </div>
    )
}