import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img  
      className='w-full h-screen pbkect-cover object-left scale-x[-1]'
       src='' // aqui va el link de la image 
      alt='/'
      />
      
      <div className='w-full h-screen absolute top-0 left-0' 
     style={{backgroundImage: "url('https://images.unsplash.com/photo-1549490316-686f9b5d359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk1fHx0ZXh0dXJhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')"}}>

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-green-900 '>I'm Leonardo Huelvas</h1>
          <h2 className='flex  sm:text3xl text-3xl pt-4 items-center  text-green-800'>    
            I'm a
            <TypeAnimation
              sequence={[
               'Developer', // Types 'One'
                2000, // Waits 1s
                'Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Tech Enthusiast', // Types 'Three' without deleting 'Two'
               ]}
                 wrapper="div"
                 cursor={true}
                 repeat={Infinity}
                 style={{ fontSize: '1em', padding:'5px' }}
                />
           </h2>
           <div className='flex justify-center space-x-4 pt-6 max-w-[200] w-3/12'>
                 <a href='https://twitter.com/@lejhubo' target="_blank" rel="noopener noreferrer">
                   <FaTwitter  className='cursor-pointer' size={20}/>
                   <span className="sr-only">Twitter</span>
                 </a>
                 <a href='https://www.facebook.com/lejhubo' target="_blank" rel="noopener noreferrer">
                   <FaFacebookF className='cursor-pointer' size={20}/>
                   <span className="sr-only">Facebook</span>
                 </a>
                 <a href='https://www.instagram.com/lejhubo/' target="_blank" rel="noopener noreferrer">
                   <FaInstagram className='cursor-pointer' size={20}/>
                   <span className="sr-only">Instagram</span>
                 </a>
                 <a href='https://www.linkedin.com/in/leonardo-javier-huelvas/' target="_blank" rel="noopener noreferrer">
                   <FaLinkedinIn className='cursor-pointer' size={20}/>
                   <span className="sr-only">LinkedIn</span>
                 </a>
          </div>


        </div>


      </div>
    </div>
  )
}

export default Main
