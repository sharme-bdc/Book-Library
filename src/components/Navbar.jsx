import React from "react";
import { Link, NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";

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
        icon: <FaHome />
    },

    {
        id: 3,
        name: "Books",
        path: "/books",
        icon: <MdOutlineLibraryBooks />
    },

    {
        id: 4,
        name: "Contact",
        path: "/contact",
        icon: <MdOutlineLibraryBooks />
    }
]

const Navbar = () => {
    return(
        <nav className="list-none flex flex-col gap-3">
            {
                Navigation.map(navItem => (
                    <NavLink key={navItem.id} name={navItem.name} path={navItem.path} icon={navItem.icon}/>
                ))
            }
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/books">Books</Link></li>
        </nav>
    )
}

export default Navbar