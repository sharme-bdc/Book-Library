import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({

    rounded,
    setBooks,
    allBooks

}) => {

    const handleChange = (e) => {
        const filteredBooks = allBooks.filter(book => {
            return book.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setBooks(filteredBooks)
    }

    return(
        <div className= {`flex items-center border gap-4 px-4 ${ rounded ? 'rounded-full' : 'rounded-md'}`}>
            <FaSearch size={20}/>
            <input type="text" onChange={handleChange} className="bg-transparent py-3 w-full outline-none" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar