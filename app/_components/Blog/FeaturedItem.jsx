import { formatDate } from "@/utils/strapi.utils"
import Link from "next/link";
export default function FeaturedItem({data}) {
    return (
        <Link href={"/news/" + data.slug}>
            <div className="flex flex-col gap-0 bg-[#EADBC8] rounded-3xl">
                    <img className="h-56 object-cover rounded-t-3xl" src={data.featuredImage} alt="" />
                    <div className="p-6 h-60 640:h-48 flex flex-col gap-5 justify-between">
                        <h2 className="text-xl font-bold">{data.headline}</h2>
                        <p>{formatDate(data.publishedAt)}</p>
                    </div>
            </div>
        </Link>
    )
}