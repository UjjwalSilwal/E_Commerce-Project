import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiOutlineShoppingCart
} from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Navigation.css'


const Navigation = () => {

    // for dropdown menu
    const [dropdownOpen, setDropdownOpen] = useState(false)
    // for Sidebar menu
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }

    return <div style={{ zIndex: 999 }} className={`${showSidebar ? "hidden" : "flex"}
     xl:flex lg-flex md:hidden sm:hidden flex-col justify-between p-4 text-white
      bg-black w-[4%] hover:w-[15%]
     h-[100vh] fixed
     `}
        id="navigation-container"
    >
        <div className="flex flex-col justify-center space-y-4">

            {/*For HOME */}
            <Link
                to="/"
                className="flex items-center transition-transform transform hover:translate-x-2"
            >
                <AiOutlineHome className="mt-[3rem]" size={26} />
                <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
            </Link>

             {/*For SHOP */}
             <Link
                to="/shop"
                className="flex items-center transition-transform transform hover:translate-x-2"
            >
                <AiOutlineShopping className="mt-[3rem]" size={26} />
                <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
            </Link>

             {/*For CART */}
             <Link
                to="/cart"
                className="flex items-center transition-transform transform hover:translate-x-2"
            >
                <AiOutlineShoppingCart className="mt-[3rem]" size={26} />
                <span className="hidden nav-item-name mt-[3rem]">CART</span>{" "}
            </Link>

             {/*For FAVOURITES */}
             <Link
                to="/favourite"
                className="flex items-center transition-transform transform hover:translate-x-2"
            >
                <FaHeart className="mt-[3rem]" size={26} />
                <span className="hidden nav-item-name mt-[3rem]">FAV</span>{" "}
            </Link>
            
        </div>

        <ul>

             {/*For LOGIN */}
            <li>
            <Link
                to="/login"
                className="flex items-center transition-transform transform hover:translate-x-2"
            >
                <AiOutlineLogin className="mt-[3rem]" size={26} />
                <span className="hidden nav-item-name mt-[3rem]">LOGIN</span>{" "}
            </Link>
            </li>

             {/*For REGISTER */}
            <li>
            <Link
                to="/register"
                className="flex items-center transition-transform transform hover:translate-x-2"
            >
                <AiOutlineUserAdd className="mt-[3rem]" size={26} />
                <span className="hidden nav-item-name mt-[3rem]">REGISTER</span>{" "}
            </Link>
            </li>

        </ul>

    </div>
};

export default Navigation
