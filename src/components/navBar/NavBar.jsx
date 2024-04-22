import InputSearch from "../input/InputSearch";
import Links from "./links/Links";
import './navBar.css'
import CartWidget from "../ui/CartWidget";
import UserIcon from "@/app/icons/UserIcon";

const NavBar = () => {
    return(
        <div className="containerNav">
        
            <Links />
            <div className="flex ml-60 gap-10" >
                <InputSearch />
                <button className="bg-gray-500"> apreta</button>
                <div className="flex gap-6 items-center">
            <UserIcon />
            <CartWidget />
            </div>
            </div>

        </div>
    )
}

export default NavBar;