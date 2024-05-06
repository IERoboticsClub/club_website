import projects from '../data/projects';


export default function ProjectsHome() {

    return (
        <section className='min-h-[50vh] flex items-center justify-center w-full mb-5'>
            <article className='w-full flex flex-col justify-center gap-y-5 pl-standard-1.5'>
                {
                    projects.map((project, index) => {
                        return (
                            <a href={project.path} key={project.id} >
                                <div 
                                    className='flex gap-x-3 bg-slate-300 px-4 py-2 rounded-xl items-end'
                                    style={{
                                        width: `${60 + index*8}%`
                                    }}
                                    >
                                    <h2 className='text-2xl font-mono '>{project.name}</h2>
                                    <p className=''>{project.teaser}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </article>
        </section>
    )
}