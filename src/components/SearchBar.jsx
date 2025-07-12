import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({

    rounded

}) => {

    return(
        // <div className= {`mdflex items-center border gap-4 px-4 mb-5` ${ rounded ? 'rounded-full' : 'rounded-md'}`}>
        <div className= {`flex items-center border gap-4 px-4 ${ rounded ? 'rounded-full' : 'rounded-md'}`}>
            <FaSearch size={20}/>
            <input className="bg-transparent py-3 w-full outline-none" type="text" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar