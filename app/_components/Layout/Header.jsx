import Link from 'next/link'
function Header() {
    return (
        <div className="w-full px-8 md:px-16 py-8 flex gap-6 items-center justify-between" id="nav-bar">
            <div className="flex sm:gap-6 gap-2">
                <Link className="text-sm xs:text-base hover:underline underline-offset-2" href="/">Explore</Link>
                <Link className="text-sm xs:text-base hover:underline underline-offset-2" href="/news">News</Link>
                <Link className="text-sm xs:text-base hover:underline underline-offset-2" href="/registration">Join</Link>
            </div>
            <div className="flex sm:gap-6 gap-3">
                <Link className="text-sm xs:text-base px-4 py-2 font-bold border border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:cursor-pointer" href="/auth/login">Log in</Link>
                <Link className="text-sm xs:text-base px-4 py-2 font-bold border border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:cursor-pointer" href="/auth/signup">Sign up</Link>
            </div>
        </div>

    )
}

export default Header