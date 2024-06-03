import React from 'react'



export default function MemberItem({ email, imgUrl, name, description, info, projects, role }) {

  return (
    <div className='w-full flex justify-center '>
        <section className='flex flex-wrap justify-evenly w-11/12 border-t-2 border-t-ie-color-dark pt-10'>
          <div className='flex flex-col w-1/2 justify-between'>

            <div>
              <h2 className='inline text-xl font-bold text-ie-color-dark  pr-2'>{name}</h2>
              <h3 className='inline text-lg text-ie-color-dark'>{role}</h3>
              <p className='text-lg text-ie-color-dark pt-2'>{description}</p>
            </div>
            <div className=''>
                <p className='text-base text-ie-color-dark'>
                  Projects: 
                  { projects.map((project, index) => (
                    <span key={index} className='pl-2'>{project}</span>
                  )
                  )}
                </p>
            </div>

          </div>
          <div className='w-1/3 text-base text-right text-ie-color-dark '>
            <img className='rounded-lg' src={imgUrl} alt={name} width={600} height={400}/>
            <p className='mt-4'><a href={`mailto:${email}`} className='hover:underline'>{email}</a></p>
            <p className='mt-1'>{info}</p>
          </div>

        </section>

    </div>
  )
}
