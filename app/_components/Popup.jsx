import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

export default function Popup() {
    return (
        <div className="h-[100vh] bg-[#e7e7e7] flex justify-center items-center">
            <div className="w-9/12 640:w-11/12 md:w-[51rem] h-auto 640:h-[16rem] 740:h-[18rem] flex flex-col 640:flex-row bg-white px-14 740:px-16 py-16 rounded-xl gap-10">
                <img className="hidden 640:block w-[8rem] 740:w-[10rem] object-cover" src="./assets/image/cryingDog.png" alt="" />
                <div className="flex flex-col justify-between items-center 640:items-start gap-10 640:gap-0" >
                    <div className="flex flex-col gap-1 md:gap-3">
                        <h2 className="text-center 640:text-left text-2xl 740:text-3xl font-bold">REGISTRATION IS NOW CLOSED!!!</h2>
                        <p className="text-center 640:text-left text-md 740:text-lg font-semibold">Don't worry, we'll come back later</p>
                    </div>
                    <img className="block 640:hidden w-[8rem] object-cover" src="./assets/image/cryingDog.png" alt="" />
                    <Link className="bg-[#DF8989] px-4 py-2 text-md 740:text-lg font-bold w-[10rem] rounded-xl hover:bg-[#FE99AE] flex gap-2" href="/">
                        <p>Go home</p>
                        <div className="flex items-center">
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div> 
    )
}