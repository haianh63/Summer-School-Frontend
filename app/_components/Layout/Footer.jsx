export default function Footer() {
    return (
        <>
            <div class="bg-black hidden 740:flex flex-col" id="footer">
                <div class="h-52 p-5 flex flex-row gap-5 md:gap-10 lg:gap-20 justify-center items-center">
                    <div class="h-full text-white flex flex-col gap-2 justify-start" id="social-media">
                        <h2 class="font-bold text-xl">SOCIAL MEDIA</h2>
                        <p class="w-40 md:w-64">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, esse?</p>
                        <div class="flex flex-row gap-5">
                            <i class="text-lg fa-brands fa-facebook text-white"></i>
                            <i class="text-lg fa-brands fa-twitter text-white"></i>
                            <i class="text-lg fa-brands fa-instagram text-white"></i>
                            <i class="text-lg fa-brands fa-tiktok text-white"></i>
                        </div>
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Company</h2>
                        <div class="flex flex-col gap-1">
                            <p>About us</p>
                            <p>Services</p>
                            <p>Community</p>
                            <p>Testimonial</p>
                        </div>
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Support</h2>
                        <div class="flex flex-col gap-1">
                            <p>Contact us</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>    
                        </div>
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Links</h2>
                        <div class="flex flex-col gap-1">
                            <p>Courses</p>
                            <p>Become teacher</p>
                            <p>Service</p>
                            <p>All in one</p>
                        </div>   
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Contact us</h2>
                        <div class="flex flex-col gap-1">
                            <p>(+84) 0123456789</p>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr class="text-white" />
                <div class="text-white p-5 text-center">
                    <p><i class="fa-regular fa-copyright"></i> Copyright by Summer School. All rights reserved.</p>
                </div>
            </div>
        
            <div class="bg-black 740:hidden flex flex-col" id="footer">
                <div class="p-10 flex flex-col gap-5 md:gap-10 lg:gap-16 justify-center items-start">
                    <div class="text-white flex flex-col gap-2" id="social-media">
                        <h2 class="font-bold text-xl">SOCIAL MEDIA</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, esse?</p>
                        <div class="flex flex-row gap-5">
                            <i class="text-xl fa-brands fa-facebook text-white"></i>
                            <i class="text-xl fa-brands fa-twitter text-white"></i>
                            <i class="text-xl fa-brands fa-instagram text-white"></i>
                            <i class="text-xl fa-brands fa-tiktok text-white"></i>
                        </div>
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Company</h2>
                        <div class="flex flex-col gap-1">
                            <p>About us</p>
                            <p>Services</p>
                            <p>Community</p>
                            <p>Testimonial</p>
                        </div>
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Support</h2>
                        <div class="flex flex-col gap-1">
                            <p>Contact us</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>    
                        </div>
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Links</h2>
                        <div class="flex flex-col gap-1">
                            <p>Courses</p>
                            <p>Become teacher</p>
                            <p>Service</p>
                            <p>All in one</p>
                        </div>   
                    </div>
            
                    <div class="h-full text-white flex flex-col gap-4 justify-start">
                        <h2 class="font-bold text-xl">Contact us</h2>
                        <div class="flex flex-col gap-1">
                            <p>(+84) 0123456789</p>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>

                <hr class="text-white" />
                <div class="text-white p-10 text-center">
                    <p><i class="fa-regular fa-copyright"></i> Copyright by Summer School. All rights reserved.</p>
                </div>
            </div>
    </>
    )
}