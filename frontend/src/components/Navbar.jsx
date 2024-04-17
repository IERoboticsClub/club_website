import '../styles/Navbar.css';
import logo from '../assets/robotics_club.svg';
import arm_icon from '../assets/arm.svg';
import botzo_icon from '../assets/botzo.svg';
import pow_icon from '../assets/pow.svg';
import { useState, useEffect } from 'react';




const icons = [
    {
        name: 'arm',
        src: arm_icon
    },
    {
        name: 'botzo',
        src: botzo_icon
    },
    {
        name: 'pow',
        src: pow_icon
    },
]

function Navbar() {
    const [ currentPath, setCurrentPath ] = useState('Home'); // for the current path [Home, Projects, Members, Events, Pows]
    const [ navLinks, setNavLinks ] = useState(["Projects", "Members", "Events", "Pows"]); // for the current path [Home, Projects, Members, Events, Pows

    const [ logoIsHovered, setLogoIsHovered ] = useState(false); // for the top left logo
    const [ navIsHovered, setNavIsHovered ] = useState(false);  // for the top right links

    const handleLogoHover = () => setLogoIsHovered(true);
    const handleLogoLeave = () => setLogoIsHovered(false);
    
    const handleNavHover = () => setNavIsHovered(true);
    const handleNavLeave = () => setNavIsHovered(false);

    
    return (
        <nav id="nav" className='flex items-center justify-between min-h-[12vh] sm:ml-[5rem] sm:mr-[10rem] sm:mt-8'>
            <div id="navbarIconContainer" onMouseLeave={handleLogoLeave} className='flex justify-evenly items-center gap-x-10'>
                <a onMouseOver={handleLogoHover} href='/' className='cursor-pointer'>
                    <img 
                        
                        id="navbar-logo"
                        src={logo} 
                        alt="IE Robotics Club Logo" 
                        width='auto' height='auto' 
                        className='max-h-[100px]'
                    />
                </a>
                {
                    icons.map((icon, index) => {
                        return (
                            <a href={`/projects/${icon.name}`} key={index} className={`${logoIsHovered ? 'showIcons': ''}`}>
                                <img 
                                    src={icon.src} 
                                    alt={icon.name} 
                                    width='auto' height='auto' 
                                    className={`max-h-[100px] ${ logoIsHovered ? 'cursor-pointer' : 'cursor-default'} `}
                                />
                            </a>
                        )
                    })
                }
            </div>

            <div onMouseLeave={handleNavLeave} className='navigation_button relative flex flex-row-reverse gap-x-4'>
                

                <p  className='current'>
                    <a onMouseOver={handleNavHover} href={`/${currentPath === 'Home' ? '' : currentPath}`}>{currentPath}</a>
                </p> 

                {
                   navLinks.map((link, index) => {
                        return (
                            <p key={index} className={`link ${ navIsHovered ? 'showLinks' : ''}`}>
                                <a href={`/${link}`}>{link}</a>
                            </p>
                        )
                   })
                }
            </div>
        </nav>
    )
}



export default Navbar;