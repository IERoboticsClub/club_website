import { Outlet, Link } from "react-router-dom";
import Navbar  from './Navbar';



function Layout() {

    return (
        <>
            <header className="sm:fixed sm:w-full z-50">
                <Navbar />
            </header>
            <main>
                <Outlet /> {/* This is where the child routes will be rendered */}
            </main>
        </>
    )
}


export default Layout;