import React from "react";
import { CiLogout, CiSettings } from "react-icons/ci";
import NavLink from "./NavLink";

const UserDetails = {
    name: "Sharme Akter",
    image: 'src\assets\profile.jpg' ,
    email: "sharme@gmail.com",
    role: "admin"
}

const SidebarUserDetails = () => {
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-4">
                <img src={UserDetails.image} alt="" className="w-10 h-10 rounded-full"/>
                <div>
                    <h3 className="font-bold capitalize">{UserDetails.name}</h3>
                    <p>{UserDetails.email}</p>
                    <p className="bg-orange-200 text-center rounded-md px-3">{UserDetails.role}</p>
                </div>
            </div>
            <div>
                <NavLink name="Settings" icon={<CiSettings />} path='/settings'/>
            </div>
            <div>
                <NavLink name="Logout" icon={<CiLogout />} path='/logout' color="text-red-500" className="font-extrabold"/>
            </div>
        </div>
    )
}

export default SidebarUserDetails