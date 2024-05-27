import '../styles/Projects.css'
import ProjectItem from '../components/projects/ProjectItem'
import projects from '../data/projects'

function Projects() {
    return (
        <>
        <div className='pt-48 pl-8'>
            <h1>Projects</h1>
            <div className='grid grid-cols-4 gap-8 mr-8'>
                {projects.map((project) => (
                    <ProjectItem key={project.id} title={project.name} description={project.description} image={project.cover_image_link} />
                ))}
            </div>
        </div>
        </>
        
    )
}

export default Projects