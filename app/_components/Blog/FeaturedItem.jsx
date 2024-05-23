import { formatDate } from "@/utils/strapi.utils"
export default function FeaturedItem({data}) {
    return (
        <div className="flex flex-col gap-0 bg-[#EADBC8] rounded-3xl">
                <img className="object-cover rounded-t-3xl" src={data.featuredImage} alt="" />
                <div className="p-6 flex flex-col gap-5">
                    <h2 className="text-xl font-bold">{data.headline}</h2>
                    <p>{formatDate(data.publishedAt)}</p>
                </div>
        </div>
    )
}