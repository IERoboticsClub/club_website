import '../styles/Navbar.css';
import logo from '../assets/robotics_club.svg';
import arm from '../assets/arm.svg';
import botzo from '../assets/botzo.svg';
import pow from '../assets/pow.svg';
import { useState, useEffect } from 'react';




const icons = [
    {
        name: 'arm',
        src: arm
    },
    {
        name: 'botzo',
        src: botzo
    },
    {
        name: 'pow',
        src: pow
    },
]


function Navbar() {

    const [ isHovered, setIsHovered ] = useState(false);;

    const handleHover = () => { 
        console.log('hovered');
        setIsHovered(true) 
    }

    const handleLeave = () => {
        console.log('mouse left');
        setIsHovered(false)
    }



    return (
        <nav id="nav" className='flex items-center justify-between min-h-[12vh] sm:mx-10 sm:mt-5'>
            <div id="navbarIconContainer" onMouseLeave={handleLeave} className='flex justify-evenly items-center gap-x-10'>
                <a onMouseOver={handleHover} href='/' className='cursor-pointer'>
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
                            <a href={`/projects/${icon.name}`} key={index} className={`${isHovered ? 'show': ''}`}>
                                <img 
                                    src={icon.src} 
                                    alt={icon.name} 
                                    width='auto' height='auto' 
                                    className={`max-h-[100px] ${ isHovered ? 'cursor-pointer' : 'cursor-default'} `}
                                />
                            </a>
                        )
                    })
                }
            </div>

            <div>
                <p><a className='text-lg'>Home</a></p>
            </div>
        </nav>
    )
}



export default Navbar;