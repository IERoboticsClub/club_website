import getProjects from '../utils/projects.js';
import { useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';


export default function InputBoxes() {
    const projects = getProjects();
    const [ inputContent, setInputContent ] = useState("");
    const [ codeOutput, setCodeOutput ] = useState([]);

    const handleSubmit = (e) => {

        if (e.preventDefault) e.preventDefault(); // when using ctrl + k there is no event, it just submits the form

        const wordArray = inputContent.split("\n");
        const strippedArray = wordArray.filter(word => word !== "")

        for (let i = 0; i < strippedArray.length; i++) {
            strippedArray[i] = strippedArray[i].replace(/\n/g, "")
        }

        for (let i = 0; i < strippedArray.length; i++) {
            if (strippedArray[i] === "help") {
                setCodeOutput(help())
            } else if (strippedArray[i] === "ls") {
                setCodeOutput(show_projects())
            } else if (strippedArray[i].includes("show_project()")) {
                const project_id = strippedArray[i].split("(")[1].split(")")[0];
                setCodeOutput(show_project(project_id))
            } else if (strippedArray[i].includes("clear")) {
                setCodeOutput([])
            } else {
                setCodeOutput(<p className='text-red-500'>Error: Function not found</p>)
            }
        }

        setInputContent("");

        return false;
    }

    const handleKeyDown = useCallback((e) => {
        if (
            e.ctrlKey
            && e.key === 'Enter'
        ) {
            console.log('ctrl + enter', inputContent);
            handleSubmit(inputContent);
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })


    return (
        <div className='w-full flex flex-col sm:flex-row px-2 sm:px-indent lg:px-standard-1.5 gap-x-5 gap-y-3 text-gray-100  text-lg'>
            <form onSubmit={handleSubmit} className='codeBoxes flex  gap-5 '>
                <button onClick={handleSubmit} className="h-fit py-1" >
                    <Play color="white" className=''/>
                </button>
                <textarea 
                    id="codeInput" 
                    name="codeInput"
                    value={inputContent}
                    onChange={e => setInputContent(e.target.value)}
                    placeholder="Code goes here..."
                    form="codeForm"
                    className='w-full resize-none bg-transparent border-none px-2 font-mono'
                    />
            </form>
            <div className='codeBoxes flex flex-col gap-y-5 '>
                {codeOutput}
            </div>
        </div>
    )
}





// helper function for the output of the code

function help() {
    return (
        <div className='flex flex-col  justify-center w-full gap-y-5'>
            <h3 className='text-2xl text-center'>Here are the available functions:</h3>
            <ul className='flex flex-col items-center justify-center gap-y-2'>
                <li className='text-lg'>ls</li>
                <li className='text-lg'>club_website()</li>
                <li className='text-lg'>luna()</li>
                <li className='text-lg'>orgone()</li>
                <li className='text-lg'>pepper()</li>
                <li className='text-lg'>botzo()</li>
            </ul>
        </div>
    )
}

function show_projects() {
    const projects = getProjects();
    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-5'>
            <h3 className='text-2xl text-center'>Here are the available projects:</h3>
            <ul className='flex flex-col items-center justify-center gap-y-2'>
                {projects.map((project, index) => {
                    return (
                        <li key={`home-${project.id}-${index}`} className='text-lg'>{project.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}


function show_project(project_id) {
    const projects = getProjects();
    const project = projects.find(project => project.id === project_id);
    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-5'>
            <h3 className='text-2xl text-center'>Here is the project:</h3>
            <ul className='flex flex-col items-center justify-center gap-y-2'>
                <li className='text-lg'>{project.name}</li>
                <li className='text-lg'>{project.teaser}</li>
                <li className='text-lg'>{project.progress_status}</li>
                <li className='text-lg'>{project.video_demo_link}</li>
            </ul>
        </div>
    )
}