export default function InfoBlock({data}) {
    const {headline, text, imgSrc} = data
    return (
        <div className="py-10 w-full lg:h-80 xl:h-72 even:bg-[#efefef] flex flex-col odd:md:flex-row even:md:flex-row-reverse md:justify-center gap-10 md:gap-32">
              <div>
                  <h2 className="text-center md:text-left text-3xl font-bold">{headline}</h2>
                  <p className="px-20 md:px-0 text-center md:text-left md:w-[20rem] lg:w-[25rem] xl:w-[30rem] mt-4">{text}</p>
                  <button className="hidden md:inline px-4 py-2 mt-10 font-bold border border-2 border-gray-300 rounded-lg hover:bg-gray-300">Find out more</button>
              </div>
              <img className="mx-auto md:mx-0 w-[35rem] h-[13rem] md:h-auto md:w-[20rem] lg:w-[25rem] xl:w-[30rem] object-cover" src={imgSrc} alt="" />
              <button className="mx-24 md:hidden px-4 py-2 font-bold border border-2 border-gray-300 rounded-lg hover:bg-gray-300">Find out more</button>
        </div>
    )
}