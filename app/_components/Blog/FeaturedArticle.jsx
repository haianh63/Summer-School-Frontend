"use client"
import {useState} from 'react'
import FeaturedItem from "./FeaturedItem"
export default function FeaturedArticle({data, headline}) {

    const [itemNumber, setItemNumber] = useState(4)
    function onShowMore() {
        if (itemNumber > data.length) {
            return setItemNumber(data.length)
        }
        setItemNumber(itemNumber + 4)
    }
    return (
        <div className="w-full mb-7 mt-8 px-8 md:px-16 flex flex-col gap-16">
            <h1 className="text-3xl 460:text-4xl font-bold">{headline}</h1>
            <div className="grid grid-cols-1 460:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10" id="featured-article">
                {data.slice(0, itemNumber).map((article) => {
                    return <FeaturedItem key= {article.slug} data={article} />
                })}
            </div>
            {
            itemNumber < data.length &&  
            <button className="text-white w-[150px] mx-auto font-semibold text-lg bg-[#14A998] px-8 py-3 rounded-full hover:bg-[#6BCE8C]" onClick={onShowMore}>See more</button>
            }
        </div>
    )
}