import { Outlet, Link } from "react-router-dom";
import Navbar  from './Navbar';



function Layout() {

    return (
        <>
            <Navbar />
            <Outlet /> {/* This is where the child routes will be rendered */}
        </>
    )
}


export default Layout;