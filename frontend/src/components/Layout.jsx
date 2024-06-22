import { Outlet, Link } from "react-router-dom";
import Navbar  from './navbar/Navbar';
import { useCallback, useEffect, useState } from 'react';
import Terminal from './Terminal';


function Layout() {
    const [ show, setShow ] = useState(false);

    const handleKeyDown = useCallback((e) => {
        // e.preventDefault()
        // set to false when escape is pressed
        if (e.key === 'Escape') setShow(false);
        
        if (
            e.key.toLowerCase() === 'k'
            && e.ctrlKey
        ) {
            setShow(prev => !prev);
        }   
        
    
    })


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    return (
        <>
            <header className="sm:fixed sm:w-full z-50">
                <Navbar />
            </header>
            { show ? <Terminal reduced={true} /> : "" }
            <main className=""> 
                <Outlet /> {/* This is where the child routes will be rendered */}
            </main>
        </>
    )
}


export default Layout;