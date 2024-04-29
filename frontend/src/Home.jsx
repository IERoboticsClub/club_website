import './Home.css';
import spaceship from './assets/spaceship.svg';
import { useState, useEffect } from 'react';
import ProjectsForHome  from './components/ProjectsForHome.jsx';


function Home() {
    const [translateY, setTranslateY] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     const spaceshipSVG = document.getElementById('spaceship');

    //     function handleScroll() {
    //         setScrollY(window.scrollY);
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     setTranslateY(scrollY );

    //     spaceshipSVG.style.transform = `translateY(${translateY}px)`;

    //     return () => window.removeEventListener('scroll', handleScroll);
    
    // })
    
    return (
        <>
            <div className='w-full min-h-[90vh] flex flex-col sm:pl-standard  pl-[2rem] justify-center relative mb-8'>
                <h1 className={`bigTitle typewriter  border-r-transparent sm:border-r-ie-color-light sm:border-r-[0.15em]`}>Robotics and AI Club.</h1> 
                <a href="#"><h2 className="bigSubtitle">Check out what we do here !</h2></a>
            </div>
            {/* <img 
                id="spaceship" src={spaceship} 
                alt="spaceship" 
                className={`absolute bottom-0 right-0 w-[50%] h-[50%] z-0`}
            /> */}
            <div className='flex flex-col'>
                {/* cool animation */}



                {/* projects display */}

                <ProjectsForHome />

                {/* scoreboard */}


                {/* word cloud but the words take you to a section of the page where we talk about it */}


                
                {/* club about section*/}
                

            </div>
        </>
    )
}

export default Home