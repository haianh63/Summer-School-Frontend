import Link from 'next/link'
function Header() {
    return (
        <div className="w-full px-8 md:px-16 py-8 flex gap-6 items-center justify-between" id="nav-bar">
            <div className="flex gap-6">
                <Link className="text-sm xs:text-base hover:underline underline-offset-2" href="/">Explore</Link>
                <Link className="text-sm xs:text-base hover:underline underline-offset-2" href="/news">News</Link>
                <Link className="text-sm xs:text-base hover:underline underline-offset-2" href="/registration">Join</Link>
            </div>
        </div>

    )
}

export default Header