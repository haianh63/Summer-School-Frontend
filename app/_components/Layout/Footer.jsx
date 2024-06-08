import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className="bg-black hidden 740:flex flex-col" id="footer">
                <div className="h-52 p-5 flex flex-row gap-5 md:gap-10 lg:gap-20 justify-center items-center">
                    <div className="h-full text-white flex flex-col gap-2 justify-start" id="social-media">
                        <h2 className="font-bold text-xl">SOCIAL MEDIA</h2>
                        <p className="w-40 md:w-64">Follow us on social media!</p>
                        <div className="text-lg text-white flex flex-row gap-5">
                            <FaFacebook className="hover:opacity-65 hover:cursor-pointer"/>
                            <FaTwitter className="hover:opacity-65 hover:cursor-pointer"/>
                            <FaInstagram className="hover:opacity-65 hover:cursor-pointer"/>
                            <FaTiktok className="hover:opacity-65 hover:cursor-pointer"/>
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Company</h2>
                        <div className="flex flex-col gap-1">
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">About us</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Services</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Community</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Testimonial</p>
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Support</h2>
                        <div className="flex flex-col gap-1">
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Contact us</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">FAQ</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Privacy Policy</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Terms of Service</p>    
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Links</h2>
                        <div className="flex flex-col gap-1">
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Courses</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Become teacher</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Service</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">All in one</p>
                        </div>   
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Contact us</h2>
                        <div className="flex flex-col gap-1">
                            <p>(+84) 349172864</p>
                            <p>SummerSchool@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr className="text-white" />
                <div className="text-white p-5 text-center flex flex-row justify-center gap-2 items-center">
                    <FaCopyright />
                    <p>Copyright by Summer School. All rights reserved.</p>
                </div>
            </div>
        
            <div className="bg-black 740:hidden flex flex-col" id="footer">
                <div className="p-10 flex flex-col gap-5 md:gap-10 lg:gap-16 justify-center items-start">
                    <div className="text-white flex flex-col gap-2" id="social-media">
                        <h2 className="font-bold text-xl">SOCIAL MEDIA</h2>
                        <p>Follow us on social media!</p>
                        <div className="text-xl text-white flex flex-row gap-5">
                            <FaFacebook className="hover:opacity-65 hover:cursor-pointer"/>
                            <FaTwitter className="hover:opacity-65 hover:cursor-pointer"/>
                            <FaInstagram className="hover:opacity-65 hover:cursor-pointer"/>
                            <FaTiktok className="hover:opacity-65 hover:cursor-pointer"/>
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Company</h2>
                        <div className="flex flex-col gap-1">
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">About us</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Services</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Community</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Testimonial</p>
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Support</h2>
                        <div className="flex flex-col gap-1">
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Contact us</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">FAQ</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Privacy Policy</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Terms of Service</p>    
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Links</h2>
                        <div className="flex flex-col gap-1">
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Courses</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Become teacher</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">Service</p>
                            <p className="hover:cursor-pointer hover:underline underline-offset-2">All in one</p>
                        </div>   
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Contact us</h2>
                        <div className="flex flex-col gap-1">
                            <p>(+84) 349172864</p>
                            <p>SummerSchool@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr className="text-white" />
                <div className="text-white p-6 flex flex-row justify-center gap-2 items-center">
                    <FaCopyright />
                    <p>Copyright by Summer School. All rights reserved.</p>
                </div>
            </div>
    </>
    )
}

