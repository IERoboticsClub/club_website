import ProjectItem from '../components/projects/ProjectItem'
import projects from '../data/projects'

function Projects() {
    return (
        <>
        <div className='pt-48 px-5 sm:px-0 sm:pl-8 mb-16'>
            <div className='sm:mx-32 lg:mx-48 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 '>
                { projects.map((project) => (
                    <ProjectItem 
                        key={project.id} 
                        title={project.name} 
                        description={project.description} 
                        image={project.cover_image_link} 
                        />
                ))}
            </div>
        </div>
        </>
        
    )
}

export default Projects