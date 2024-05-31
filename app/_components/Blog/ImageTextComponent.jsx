import { extractImageUrl } from "@/utils/strapi.utils";
import ReactMarkdown from "react-markdown";
import '../../../public/styleUL.css';
 
export default function ImageTextComponent({component}) {
    const {paragraph, imageCaption, isLandscape, imageShowsRight, image} = component;
    if (isLandscape) {
        return (
            <div className={`w-11/12 mb-10 flex flex-col-reverse ${imageShowsRight ? "740:flex-row" : "740:flex-row-reverse"} justify-between gap-7 740:gap-10`}>
                <ReactMarkdown className="text-md font-semibold w-full 740:w-5/12">{paragraph}</ReactMarkdown>
                <div className="w-full 740:w-6/12 flex flex-col">
                    <img className="w-full h-44 xs:h-56 460:h-72 object-cover rounded-xl" src={extractImageUrl(image)} alt="" />
                    {imageCaption && <p className="text-sm font-semibold text-gray-400">{imageCaption}</p>}
                </div> 
            </div>
        )
    } else {
        return (
            <div className={`w-11/12 mb-10 flex flex-col-reverse ${imageShowsRight ? "460:flex-row" : "460:flex-row-reverse"} justify-between items-center 460:items-start gap-7 460:gap-0`}>
                <ReactMarkdown className="text-md font-semibold w-full 460:w-6/12 740:w-8/12 list-disc">{paragraph}</ReactMarkdown>
                <div className="w-10/12 460:w-5/12 740:w-3/12 flex flex-col">
                    <img className="w-full h-[30rem] object-cover rounded-xl" src={extractImageUrl(image)} alt="" />
                    {imageCaption && <p className="text-sm font-semibold text-gray-400">{imageCaption}</p>}
                </div> 
            </div>
        )
    }
}