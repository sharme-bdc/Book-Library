import React from "react";

function FontEndLayout() {
    return(
        <div>
            <header>Header</header>

            <main><Outlet /></main>

            <Footer>Footer</Footer>
        </div>
    )
}

export default FontEndLayout