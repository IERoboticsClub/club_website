
import '../Home.css';
import { useState, useEffect, useCallback } from 'react';

import InputBoxes from './InputBoxes';

/*
    options available:
    - help()
    - show_projects()
    - club_website()
    - luna()
    - orgone()
    - pepper()
    - botzo()
    - error_404()
*/


/*
    we can have the terminal be have the basic functions of a normal linux terminal 
    
    - show_project(id) will show the project with that id
    - show_projects() will show all projects on the page

    - clear will clear the terminal
    - help will show all available functions
    
    - `ls` will list all projects / sections of the page that can be accessed
    - pwd will show the current location
    - `cd /` will take you to the home page
    - `cd /projects` will take you to the projects page, and so on

*/

export default function Terminal({ reduced }) {      
    
    return reduced ? (
            // CSS rules in Home.css
                <section id="reducedTerminal" className='mb-5'>
                    <article className='flex flex-col items-center w-full gap-y-10 font-mono '>
                        <h1 className='text-xl leading-8'>
                            Welcome to our terminal!
                            <br/>Type <code className='text-base'>help</code> if you want to see the available commands
                            <br/>Pro tip: press <code className='text-base'>ctrl + enter</code> to submit your command
                        </h1>
                        <InputBoxes />
                    </article>
                </section>
            )
            :
            (
                <section className='flex flex-col items-center justify-center w-full mb-12'>
                    <article className='flex flex-col items-center justify-center w-full gap-y-10 font-mono '>
                        <h1 className='w-[85%] text-left tracking-wider text-2xl font-semibold leading-10'>
                            Welcome to the IE Robotics club website!
                            <br/>Here we will host events, showcase our projects, and other cool stuff.
                        </h1>
                        <h2 className='w-[85%] text-left text-2xl leading-10 font-'>
                            For easier navigation, we have a terminal for you to use.
                            <br/>Here you can directly access some of the functions of our website.
                            <br/>It works just like a normal terminal, feel free to type in some commands.
                            <br/>You can get started by typing <code>ls</code> to see the available projects.
                            <br/>Or by typing{" "}<code>help</code> to see all available commands.
                            <br/>
                            <br/>You can open it anytime by pressing <code>ctrl + shift + k</code>
                        </h2>
                        <InputBoxes />
                    </article>
                </section>
            )
        }









{/* <h1 className=' font-mono text-ie-color-light font-bold'>
    <span className='pythonOperator'>class{` `}</span>
    Club_Projects:
</h1> */}
{
    // last 3 projects
    // projects.map((project, index) => {
    //     return (
    //         <div key={`home-${project.id}-${index}`} 
    //             className=' md:basis-1/4 pl-indent'
                
    //             > 
    //             <h2 className='projectHomeTitle pb-2 font-mono text-ie-color-light text-2xl'>
    //                 <a className='' href={`/projects/${project.id}`}>
    //                     <span className='pythonOperator'>def{` `}</span>
    //                     {project.id}():
    //                 </a>
    //             </h2>
    //             {/* concept art */}
    //             <p className='pl-indent text-lg'>
    //                 <span className='pythonOperator'>name ={` `}</span>{` `}"{project.name}"
    //                 <br/><span className='pythonOperator'>description ={` `}</span>"{project.teaser}"
    //                 <br/><span className='pythonOperator'>progress_status ={` `}</span>{project.progress_status}
    //                 <br/><span className='pythonOperator'>demo ={` `}</span><a href={project.video_demo_link}>"www.roboticsvideos/{project.id}"</a>
    //                 <br/><span className='pythonOperator'>return {` `}</span>
    //             </p>
    //         </div>
    //     )
    // })
}