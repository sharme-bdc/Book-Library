import React from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import DataTableFooter from "./DataTableFooter";

const DataTable = () => {
    return(
        <div className="w-full min-h-screen relative">
            <DataTableHeader />

            <DataTableBody />

            <DataTableFooter />
        </div>
    )
}

export default DataTable