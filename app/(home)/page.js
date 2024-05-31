import {fetchDataFromStrapi, processInfoBlock} from "@/utils/strapi.utils"
import InfoBlock from "../_components/InfoBlock"
export default async function Home() {
  const response = await fetchDataFromStrapi('api/info-blocks?populate=deep')
  const processedData = processInfoBlock(response.data)
  return (
    <main>
      <h1 className="text-4xl md:text-5xl text-center font-bold">DISCOVER THE WORLD OF AI</h1>
      <div className="mt-6 md:mt-16 w-full flex flex-col items-center" id="content">
          {processedData.map((data) => (<InfoBlock key={data.id} data={data}/>))}
      </div>
    </main>
  )
}

export const revalidate = 300;
