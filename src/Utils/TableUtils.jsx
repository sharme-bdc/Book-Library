import React from "react";

export function Td( {children, className=" "} ){
    return(
        <td className={ `${className} p-5 ` }> 
            {children}
        </td>
    )
}

export function Th( {children, className=" "} ){
    return(
        <td className={ `${className} p-5 ` }> 
            {children}
        </td>
    )
}