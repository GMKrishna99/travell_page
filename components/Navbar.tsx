import Link from "next/link"
import SiteLogo from '../public/images/hilink-logo.svg'
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import UserSVG from '../public/images/user.svg'
import HamBurgerIcon from '../public/images/menu.svg'
const Navbar = () => {
    return (
        <nav className=" flexBetween items-center  max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src={SiteLogo} alt="logo" width={74} height={29} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-[#30AF5B] ">{link.label}</Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Login"
                    icon={UserSVG}
                    variant="btn_dark_green"
                />
            </div>

            <Image src={HamBurgerIcon} alt="Menu" width={24} height={24} className="inline-block cursor-pointer lg:hidden" />
        </nav>
    )
}

export default Navbar