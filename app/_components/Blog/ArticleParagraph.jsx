import '../../../public/styleUL.css';
import ReactMarkdown from "react-markdown";
export default function ArticleParagraph({paragraph}) {
    return (
        <ReactMarkdown className="mb-10 text-md font-semibold w-11/12">{paragraph.paragraph}</ReactMarkdown>
    )
}