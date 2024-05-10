
import Links from "./links/Links";
import './navBar.css'
import CartWidget from "../ui/CartWidget";
import UserIcon from "@/app/icons/UserIcon";
import Link from "next/link";

const NavBar = () => {
    return(
        <div className="containerNav">
        
            <Links />
            <div className="flex ml-60 gap-10" >

            <div className="flex gap-6 items-center">
            <Link href="/admin">
            <UserIcon />
            </Link>
            <CartWidget />
            </div>
            </div>

        </div>
    )
}

export default NavBar;