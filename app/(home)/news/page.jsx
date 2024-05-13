import FeaturedArticle from "@/app/_components/Blog/FeaturedArticle"
import HighlightedArticle from "@/app/_components/Blog/HighlightedArticle"
function Page() {
    const data = {
        headline: "3 tips for a super fast takeoff",
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, temporibus, quos consectetur earum cumque fugiat corrupti eaque tempora atque ipsum deserunt, asperiores id fugit non itaque praesentium omnis dolorum possimus."
    }
    return (
        <>
            <HighlightedArticle data={data}/>
            <FeaturedArticle />
        </>
        
    )
}

export default Page