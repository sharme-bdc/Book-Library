import React from "react";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import NavLink from "./NavLink";

const Navigation = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: <FaHome />
    },

    {
        id: 2,
        name: "About",
        path: "/about",
        icon: <MdOutlineLibraryBooks />
    },

    {
        id: 3,
        name: "Books",
        path: "/books",
        icon: <IoBookSharp />
    },

    {
        id: 4,
        name: "Contact",
        path: "/contact",
        icon: <IoIosContact />
    }
]

const Navbar = () => {
    return(
        <nav className="list-none flex flex-col gap-3">
            {
                Navigation.map(navItem => (
                    <NavLink key={navItem.id} name={navItem.name} path={navItem.path} icon={navItem.icon} />
                ))
            }
        </nav>
    )
}

export default Navbar