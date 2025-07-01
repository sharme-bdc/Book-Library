import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return(
        <section className="flex">
            <div className="flex w-full min-h-screen">
                {/* <div className="w-3/6">
                    <Sidebar />
                </div> */}
                <main className="w-full"><Outlet /></main>
            </div>
        </section>
    )
}

export default Layout