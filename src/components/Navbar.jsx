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
        icon: "house",
        color: "black"
    },

    {
        id: 2,
        name: "About",
        path: "/about",
        icon: "info",
        color: "black"
    },

    {
        id: 3,
        name: "Books",
        path: "/books",
        icon: "book",
        color: "black"
    },

    {
        id: 4,
        name: "Contact",
        path: "/contact",
        icon: "phone",
        color: "black"
    }
]

const Navbar = () => {
    return(
        <nav className="list-none flex flex-col gap-3">
            {
                Navigation.map(navItem => (
                    <NavLink key={navItem.id} name={navItem.name} path={navItem.path} icon={navItem.icon} color={navItem.color} />
                ))
            }
        </nav>
    )
}

export default Navbar