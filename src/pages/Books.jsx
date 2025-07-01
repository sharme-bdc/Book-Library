import React from "react";
import { CiFilter } from "react-icons/ci";
import SearchBar from "../components/SearchBar";

const Books = () => {
    return(
        <div>
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <CiFilter />
                    <SearchBar rounded={true}/>
                </div>
                <h1>Right</h1>
            </div>
        </div>
    )
}

export default Books