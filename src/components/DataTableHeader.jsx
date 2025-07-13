import React from "react";
import { CiFilter } from "react-icons/ci";
import SearchBar from "./SearchBar";

const DataTableHeader = ({setBooks, allBooks}) => {
    return(
       <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
                <div className="bg-white shadow-md rounded-md p-4">
                    <CiFilter />
                </div>
                <SearchBar setBooks={setBooks} allBooks={allBooks} rounded/>
            </div>
            <div >
                <button className="bg-blue-500 text-white shadow px-5 py-4 rounded-md">
                    + Add Book
                </button>
            </div>
        </div>
    )
}

export default DataTableHeader