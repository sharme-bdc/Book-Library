import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Sidebar = () => {
    return(
        <div className="bg-gray-100 p-5 min-h-screen">
            <div className="flex flex-col justify-between min-h-screen"> 
                <div>
                    <h1 className="mb-5 font-bold uppercase">BookSotre Dashboard</h1>
                    
                    <SearchBar />
                    <Navbar />
                </div>
                
               
                <p>Bottom Section</p>
            </div>
        </div>
    )
}

export default Sidebar