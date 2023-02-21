import React from 'react'
import WorkItem from '../components/WorkItem'

const data = [
    {
        year: 2017,
        title:"Quirutraumas",
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nihil maxime fugiat! Exercitationem voluptatibus distinctio consequatur quaerat? Saepe velit totam tempora unde eveniet suscipit atque quos molestiae et? Dolores, accusantium.'
    },
    {
        year: 2017,
        title:"Hospital San Rafael",
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nihil maxime fugiat! Exercitationem voluptatibus distinctio consequatur quaerat? Saepe velit totam tempora unde eveniet suscipit atque quos molestiae et? Dolores, accusantium.'
    },
    {
        year: 2017,
        title:"Sistemas Infotec",
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nihil maxime fugiat! Exercitationem voluptatibus distinctio consequatur quaerat? Saepe velit totam tempora unde eveniet suscipit atque quos molestiae et? Dolores, accusantium.'
    },
    {
        year: 2017,
        title:"Ingsolmed",
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nihil maxime fugiat! Exercitationem voluptatibus distinctio consequatur quaerat? Saepe velit totam tempora unde eveniet suscipit atque quos molestiae et? Dolores, accusantium.'
    },

    
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) =>(
            <WorkItem  
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}/>
        ))}
    </div>
  )
}

export default Work
