import '../../styles/Navbar.css';
import { LogoFilled } from './LogoFilled.jsx';

import { Logo } from './Logo.jsx';



import arm_icon from '../../assets/arm.svg';
import botzo_icon from '../../assets/botzo.svg';
import pow_icon from '../../assets/pow.svg';
import { useState, useEffect, useCallback } from 'react';
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

    const [ currentPath, setCurrentPath ] = useState(''); // for the current path [Home, Projects, Members, Events, Pows]
    const [ navLinks, setNavLinks ] = useState(["/home", "/projects", "/members", "/events", "/pows"]); // for the current path [Home, Projects, Members, Events, Pows

    const [ logoIsHovered, setLogoIsHovered ] = useState(false); // for the top left logo
    const [ navIsHovered, setNavIsHovered ] = useState(false);  // for the top right links

    const handleLogoHover = () => setLogoIsHovered(true);
    const handleLogoLeave = () => setLogoIsHovered(false);
    
    const handleNavHover = () => setNavIsHovered(true);
    const handleNavLeave = () => setNavIsHovered(false);

    const [ show, setShow ] = useState(true);

    useEffect(() => {
        if (location.pathname === currentPath.toLowerCase()) return;

        const newLocationPath = location.pathname !== '/' ? location.pathname : '/home';

        const nextNavLinks = [
            ...navLinks.filter(link => link !== newLocationPath),
            currentPath
        ]

        setNavLinks(nextNavLinks);   

        setCurrentPath(newLocationPath);
    }, [])

    useEffect(() => {
        const nav = document.getElementById('nav');
        const logo = document.getElementById('logo');
        
        if (location.pathname === '/') {
            if (show) {
                setTimeout(() => {
                    nav.classList.add('showNav');
                }, 2500)
            } else {
                nav.classList.add('showNav');
            }
            
        } else {
            nav.style.transition = 'opacity 0.5s ease-in-out';
            nav.classList.add('showNav')
        }

        if (logoIsHovered) {
            logo.classList.add('logoHovered');
        } else {
            logo.classList.remove('logoHovered');
        }

        
    })
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('scroll', handleScroll)

        return () => { 
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = useCallback(() => {
        const nav = document.getElementById('nav');
        nav.classList.add('showNav');
    })

    const handleKeyDown = useCallback((e) => {
        // set to false when escape is pressed
        if (e.key === 'Escape') setShow(false);
        const nav = document.getElementById('nav');
        nav.classList.add('showNav');
    })


    
    return (
        <nav id="nav" className='hideNav flex items-center justify-center sm:justify-end md:justify-between h-[12vh] sm:mr-8 md:ml-[5rem] md:mr-[10rem] md:mt-8'>
            <div id="navbarIconContainer" onMouseLeave={handleLogoLeave} className='hidden md:flex items-center gap-x-10 md:min-w-[20rem] lg:min-w-[30rem]'>
                
                <a id='logo' onMouseOver={handleLogoHover} href='/' className='logo'>
                    <Logo />
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

            <div onMouseLeave={handleNavLeave} className={`navigation_button py-10 ${navIsHovered ? 'shadow-2xl bg-slate-100' : ''} flex sm:flex-row-reverse gap-x-2 sm:gap-x-5 rounded-lg`}>                
                <p  className='current'>
                    <a onMouseOver={handleNavHover} href={`${currentPath === '/home' ? '/' : currentPath.toLowerCase()}`}>{currentPath}</a>
                </p> 
                
                {
                   navLinks.map((link, index) => {
                        return (
                            <p key={index} className={`link ${ navIsHovered ? 'showLinks' : ''}`}>
                                <a href={`${link === '/home' ? '/' : link.toLowerCase()}`}>{link}</a>
                            </p>
                        )
                   })
                }
            </div>
        </nav>
    )
}



export default Navbar;