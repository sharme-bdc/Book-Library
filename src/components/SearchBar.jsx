import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return(
        <div className="flex items-center border gap-4 px-4 mb-5">
            <FaSearch size={20}/>
            <input className="bg-gray-100 py-3 w-full outline-none" type="text" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar