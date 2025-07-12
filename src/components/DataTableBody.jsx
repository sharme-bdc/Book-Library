import React from "react";
import {Td, Th} from "../Utils/TableUtils";

const books = [
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

const DataTableBody = () => {
    return(
        <div className="w-full py-5">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Author</Th>
                        <Th>Status</Th>
                        <Th>Price</Th>
                        <Th>Offer Price</Th>
                        <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => (
                            <tr key={book.id} className={book.bgColor}>
                                <Td>{book.name}</Td>
                                <Td>{book.description}</Td>
                                <Td>{book.author}</Td>
                                <Td className={book.status === "Available" ? "text-green-500" : "text-red-500"}>{book.status}</Td>
                                <Td>{book.price}</Td>
                                <Td>{book.offerPrice}</Td>
                                <Td>

                                </Td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )     
}

export default DataTableBody

