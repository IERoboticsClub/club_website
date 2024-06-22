import React from 'react'

function ProjectItem({ id, title, description, image, progress, video }) {
  return (
    <div className='rounded-lg shadow-lg overflow-hidden max-w-96 cursor-pointer hover:-translate-y-2 transition-transform ease-in-out duration-300'>
        <img src={image} alt={title} className='w-full h-48 object-cover' />
        <div className='p-4 h-full'>
            <h3 className='text-xl font-bold font-mono'>{title}</h3>
            <p className='text-sm text-gray-500'>{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{progress}</p>
            </div>
        </div>
       
    </div>
  )
}

export default ProjectItem