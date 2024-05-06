import './Home.css';
import spaceship from './assets/spaceship.svg';
import { useState, useEffect } from 'react';

import Terminal  from './components/Terminal.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import ProjectsHome from './components/ProjectsHome.jsx';


export default function Home() {
    const [translateY, setTranslateY] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        
        const oberver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.id !== 'welcome🦾') {
                    console.log(entry)
                    entry.target.classList.add('show')
                } else if (!entry.isIntersecting && entry.target.id !== 'welcome🦾') {
                    entry.target.classList.remove('show')
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hide');
        hiddenElements.forEach(element => oberver.observe(element))

        setTimeout(() => {
            const terminal = document.getElementById('welcome🦾');
            terminal.classList.add('show')
        
        }, 6000)
    })
    
    return (
        <>
            <div className='w-full min-h-[85vh] flex flex-col sm:pl-standard-1.5  pl-[2rem] justify-center relative mb-8 hide'>
                <h1 className={`bigTitle typewriter rightHover border-r-transparent sm:border-r-ie-color-light sm:border-r-[0.15em] cursor-pointer`}>Robotics and AI Club.</h1> 
                <a href="#welcome🦾" className='rightHover'><h2 className="bigSubtitle ">Check out what we do here !</h2></a>
            </div>

            {/* <img 
                id="spaceship" src={spaceship} 
                alt="spaceship" 
                className={`absolute bottom-0 right-0 w-[50%] h-[50%] z-0`}
            /> */}
            
            <div id="welcome🦾" className='hide'>
                <Terminal reduced={false} />
            </div>

            <div className='hide'>
                <ProjectsHome />
            </div>



            {/* club scoreboard */}
            <div className='hide'>
                <Scoreboard />
            </div>


                {/* word cloud but the words take you to a section of the page where we talk about it */}
                {/* or trending robotics & ai topics/curiosities */}


                
                {/* club about section*/}
                

            
        </>
    )
}
