import React, { useState } from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import DataTableFooter from "./DataTableFooter";

const booksData = [
    {
        id: "1",
        name: "Book 1",
        description: "Book 1 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-white"
    },

    {
        id: "2",
        name: "Book 2",
        description: "Book 2 description",
        author: "John Doe",
        status: "Not Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-gray-100"
    },

    {
        id: "3",
        name: "Book 3",
        description: "Book 3 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-white"
    },

    {
        id: "4",
        name: "Book 4",
        description: "Book 4 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-gray-100"
    },

    {
        id: "5",
        name: "Book 5",
        description: "Book 5 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-white"
    },

    {
        id: "6",
        name: "Book 6",
        description: "Book 6 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-gray-100"
    },

    {
        id: "7",
        name: "Book 7",
        description: "Book 7 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-white"
    },

    {
        id: "8",
        name: "Book 8",
        description: "Book 8 description",
        author: "John Doe",
        status: "Available",
        price: "50.00",
        offerPrice: "40.00",
        bgColor: "bg-gray-100"
    }
]

const DataTable = () => {

    const [allBooks, setAllBooks] = React.useState(booksData)
    const [books, setBooks] = useState(booksData)

    return(
        <div className="w-full min-h-screen relative">
            <DataTableHeader setBooks={setBooks} allBooks={allBooks}/>

            <DataTableBody books={books}/>

            <DataTableFooter />
        </div>
    )
}

export default DataTable