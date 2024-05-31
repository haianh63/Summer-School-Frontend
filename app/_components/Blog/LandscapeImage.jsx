import { extractImageUrl } from "@/utils/strapi.utils";
export default function LandscapeImage({component}) {
    return (
        <div className="w-11/12 mb-10 flex flex-row items-center justify-center">
            <div className="w-full 740:w-9/12 md:w-7/12 flex flex-col">
                    <img className="w-full h-44 xs:h-56 460:h-72 object-cover rounded-xl" src={extractImageUrl(component.image)} alt="" />
                    {component.imageCaption && <p className="text-sm font-semibold text-gray-400">{component.imageCaption}</p>}
            </div>
        </div> 
    )
}