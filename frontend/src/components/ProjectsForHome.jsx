import getProjects from '../utils/projects.js';
import '../Home.css';


function ProjectsForHome() {
    const projects = getProjects();
    
    return (
        <section id="projectsForHome" className='min-h-[40vh] w-full flex flex-col gap-y-12 ml-3 mr-3 sm:mr-0 sm:pr-3 md:pl-standard-1.5 mb-12'>
            {/* <h1 className=' font-mono text-ie-color-light'>
                <span className='pythonOperator'>class{` `}</span>
                ClubProjects(Project):
            </h1> */}
            {
                // last 3 projects
                projects.map((project, index) => {
                    return (
                        <div key={`home-${project.id}-${index}`} 
                            className=' md:basis-1/4 '
                            
                            > 
                            <h2 className='projectHomeTitle pb-2 font-mono text-ie-color-light text-2xl'>
                                <a className='' href={`/projects/${project.id}`}>
                                    <span className='pythonOperator'>def{` `}</span>
                                    {project.id}():
                                </a>
                            </h2>
                            {/* concept art */}
                            <p className='pl-indent text-lg'>
                                <span className='pythonOperator'>return </span>
                                {` `}"{project.teaser}"
                            </p>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default ProjectsForHome;
