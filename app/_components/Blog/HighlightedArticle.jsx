import Link from "next/link";

export default function HighlightedArticle({data}) {
    return (
        <div className="w-full mt-8 px-8 md:px-16 flex justify-between gap-16">
            <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-10">
                <h1 className="text-center sm:text-left text-3xl 460:text-4xl font-bold">{data.headline}</h1>
                <p className="text-center sm:text-left">{data.excerpt}</p>
                <div className="block sm:hidden w-full sm:w-1/2 flex justify-center">
                    <img className="inline sm:hidden h-[300px] rounded-3xl object-contain" src={data.featuredImage} alt=""/>
                </div>
                <Link className="text-white mx-auto sm:mx-0 font-semibold text-lg w-[153px] bg-[#14A998] px-8 py-3 rounded-full hover:bg-[#6BCE8C]" href={"/news/" + data.slug}>Read more</Link>
            </div>
            <div className="w-1/2 hidden sm:flex justify-end items-start">
                <img className="hidden sm:inline h-[300px] rounded-3xl object-contain" src={data.featuredImage} alt=""/>
            </div>
            
        </div>
    )
}
