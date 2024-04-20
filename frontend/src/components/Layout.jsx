import { Outlet, Link } from "react-router-dom";
import Navbar  from './Navbar';



function Layout() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet /> {/* This is where the child routes will be rendered */}
            </main>
        </>
    )
}


export default Layout;