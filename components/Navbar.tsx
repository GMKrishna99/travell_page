import Link from "next/link"
import SiteLogo from '../public/images/hilink-logo.svg'
import Image from "next/image"
const Navbar = () => {
    return (
        <nav className=" flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src={SiteLogo} alt="logo" width={74} height={29} />
            </Link>
        </nav>
    )
}

export default Navbar