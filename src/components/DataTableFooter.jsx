import React from "react";

const DataTableFooter = () => {
    return(
        <div className="absolute left-0 bottom-0 w-full bg-gray-100/80 py-10 px-5 z-10">
            <div className="flex justify-between items-center">
                <p>1-10 of 90</p>

                <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-3">
                        <p>Rows Per Page:</p>
                        <select name="" id="">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTableFooter