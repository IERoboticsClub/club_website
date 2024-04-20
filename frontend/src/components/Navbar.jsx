import '../styles/Navbar.css';
import logo from '../assets/robotics_club.svg';
import arm_icon from '../assets/arm.svg';
import botzo_icon from '../assets/botzo.svg';
import pow_icon from '../assets/pow.svg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



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
    const location = useLocation();
    console.log('location.pathname',location.pathname)

    const [ currentPath, setCurrentPath ] = useState(''); // for the current path [Home, Projects, Members, Events, Pows]
    const [ navLinks, setNavLinks ] = useState(["Home", "Projects", "Members", "Events", "Pows"]); // for the current path [Home, Projects, Members, Events, Pows

    const [ logoIsHovered, setLogoIsHovered ] = useState(false); // for the top left logo
    const [ navIsHovered, setNavIsHovered ] = useState(false);  // for the top right links

    const handleLogoHover = () => setLogoIsHovered(true);
    const handleLogoLeave = () => setLogoIsHovered(false);
    
    const handleNavHover = () => setNavIsHovered(true);
    const handleNavLeave = () => setNavIsHovered(false);

    useEffect(() => {
        if (location.pathname === currentPath.toLowerCase()) return;

        const newLocationPath = location.pathname === '/' ? 'Home' : location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1);

        const nextNavLinks = [
            ...navLinks.filter(link => link !== newLocationPath),
            currentPath
        ]

        setNavLinks(nextNavLinks);   

        setCurrentPath(newLocationPath);
    }, [])
    
    return (
        <nav id="nav" className='flex items-center justify-center sm:justify-end md:justify-between h-[12vh] sm:mr-8 md:ml-[5rem] md:mr-[10rem] md:mt-8'>
            <div id="navbarIconContainer" onMouseLeave={handleLogoLeave} className='hidden md:flex items-center gap-x-10 md:min-w-[20rem] lg:min-w-[30rem]'>
                {/* <div className='max-h-[200px] min-h-[150px] w-[120px]'> */}
                    <a onMouseOver={handleLogoHover} href='/' className='cursor-pointer'>
                        <img 
                            id="navbar-logo"
                            src={logo} 
                            alt="IE Robotics Club Logo" 
                            // width='auto' height='10' 
                            className='h-[120px] w-[120px] cursor-pointer'
                        />
                    </a>
                
                {
                    icons.map((icon, index) => {
                        return (
                            <a href={`/projects/${icon.name}`} key={index} className={`hoverIcons  ${logoIsHovered ? 'showIcons block': ''}`}>
                                <img 
                                    src={icon.src} 
                                    alt={icon.name} 
                                    width='auto' height='auto' 
                                    className={`h-[120px] w-[120px] ${ logoIsHovered ? 'cursor-pointer' : 'cursor-default'} `}
                                />
                            </a>
                        )
                    })
                }
            </div>

            <div onMouseLeave={handleNavLeave} className='navigation_button relative flex sm:flex-row-reverse gap-x-4 '>
                
                
                <p  className='current'>
                    <a onMouseOver={handleNavHover} href={`/${currentPath === 'Home' ? '' : currentPath.toLowerCase()}`}>{currentPath}</a>
                </p> 
                
                {
                   navLinks.map((link, index) => {
                        return (
                            <p key={index} className={`link ${ navIsHovered ? 'showLinks' : ''}`}>
                                <a href={`/${link === 'Home' ? '' : link.toLowerCase()}`}>{link}</a>
                            </p>
                        )
                   })
                }
            </div>
        </nav>
    )
}



export default Navbar;