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
                        <p className="w-40 md:w-64">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, esse?</p>
                        <div className="text-lg text-white flex flex-row gap-5">
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaTiktok />
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Company</h2>
                        <div className="flex flex-col gap-1">
                            <p>About us</p>
                            <p>Services</p>
                            <p>Community</p>
                            <p>Testimonial</p>
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Support</h2>
                        <div className="flex flex-col gap-1">
                            <p>Contact us</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>    
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Links</h2>
                        <div className="flex flex-col gap-1">
                            <p>Courses</p>
                            <p>Become teacher</p>
                            <p>Service</p>
                            <p>All in one</p>
                        </div>   
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Contact us</h2>
                        <div className="flex flex-col gap-1">
                            <p>(+84) 0123456789</p>
                            <p>example@gmail.com</p>
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, esse?</p>
                        <div className="text-xl text-white flex flex-row gap-5">
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaTiktok />
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Company</h2>
                        <div className="flex flex-col gap-1">
                            <p>About us</p>
                            <p>Services</p>
                            <p>Community</p>
                            <p>Testimonial</p>
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Support</h2>
                        <div className="flex flex-col gap-1">
                            <p>Contact us</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>    
                        </div>
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Links</h2>
                        <div className="flex flex-col gap-1">
                            <p>Courses</p>
                            <p>Become teacher</p>
                            <p>Service</p>
                            <p>All in one</p>
                        </div>   
                    </div>
            
                    <div className="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 className="font-bold text-xl">Contact us</h2>
                        <div className="flex flex-col gap-1">
                            <p>(+84) 0123456789</p>
                            <p>example@gmail.com</p>
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

