import projects from '../utils/projects.js';
import { useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function InputBoxes() {
    const location = useLocation();
    const navigate = useNavigate();

    const [ inputContent, setInputContent ] = useState("");
    const [ codeOutput, setCodeOutput ] = useState();
    const [ cdPath, setCdPath ] = useState(location.pathname);

    const handleSubmit = (e) => {

        if (e.preventDefault) e.preventDefault(); // when using ctrl + k there is no event, it just submits the form

        const wordArray = inputContent.split("\n");
        const strippedArray = wordArray.filter(word => word !== "")

        // remove the '\n' from when the user presses enter
        for (let i = 0; i < strippedArray.length; i++) {
            strippedArray[i] = strippedArray[i].replace(/\n/g, "")
        }


        /*
            - help
            - ls
            - clear 
            - pwd
            - echo
            - cd /[path_name]
            - show [section_name]
            - takeme [section_name]
        */

        console.log(strippedArray)
        for (let i = 0; i < strippedArray.length; i++) {

            switch (strippedArray[i]) {
                case "ls":
                    setCodeOutput(ls());
                    break;
                case "help":
                    setCodeOutput(help());
                    break;
                case "clear":
                    setCodeOutput("");
                    break;
                case "pwd":
                    setCodeOutput(<p className='text-base'>{cdPath}</p>);
                    break;
                case "echo":
                    setCodeOutput(echo());
                    break;
                case "cd":
                    setCodeOutput(
                        setCdPath(strippedArray[i+1])
                    );
                    break;
                case "show":
                    setCodeOutput(show(strippedArray[i+1]));
                    break;
                case "takeme":
                    navigate(strippedArray[i+1]);
                    break;
                default:
                    setCodeOutput(<p className='text-base'>Command not recognized</p>);
                    break;
            }

            
        }

        setInputContent("");

        return false;
    }

    const handleKeyDown = useCallback((e) => {
        if (
            // e.ctrlKey
            e.key === 'Enter'
        ) {
            e.preventDefault(); // prevents from going to new line
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
            <div className='codeBoxes outputBox flex flex-col gap-y-5'>
                {codeOutput}
            </div>
        </div>
    )
}





// helper function for the output of the code
/*
    we can have the terminal be have the basic functions of a normal linux terminal 
    
    - show_project(id) will show the project with that id
    - show_projects() will show all projects on the page

    - clear will clear the terminal
    - help() will show all available functions
    
    - `ls` will list all projects / sections of the page that can be accessed

    - `cd /` will take you to the home page
    - `cd /projects` will take you to the projects page, and so on

*/

/*
    - ls
    - clear 
    - pwd
    - echo
    - cd /[path_name]
    - show [section_name]
*/


function help() {
    return (
        <>
            <h3 className='text-xl w-fit '>Here are all available commands:</h3>
            <ul className='flex flex-col items-start justify-start gap-y-2'>
                <li className=''>- ls</li>
                <li className=''>- clear</li>
                <li className=''>- pwd</li>
                <li className=''>- echo</li>
                <li className=''>- cd /[path_name]</li>
                <li className=''>- show [section_name]</li>
                <li className=''>- takeme [path_name]</li>
            </ul>
        </>
        
    )
}


function ls() {
    return (
        <>
            <ul className='flex flex-col gap-y-2'>
                {
                    projects.map(project => {
                        return (
                            <li key={project.id} className=''>{project.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

function pwd() {
    return (
        <>
            <p className=''></p>
        </>
    )
}

function echo(text) {
    return (
        <>
            <p>{text}</p>
        </>
    )
}

function cd(path) {
    return (
        <>

        </>
    )
}

function show(section) {
    const options = "projects club_website luna orgone pepper botzo"
    return (
        <>

        </>
    )
}


function takeme(path) {
    
    return (
        <>
        </>
    )
}