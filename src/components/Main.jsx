import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img  
      className='w-full h-screen pbkect-cover object-left scale-x[-1]'
       src='https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
      alt='/'
      />
      
      <div className='w-full h-screen absolute top-0 left-0  bg-white/5'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-400 '>I'm Leonardo Huelvas</h1>
          <h2 className='flex  sm:text3xl text-3xl pt-4 items-center  text-gray-300'>    
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
                 style={{ fontSize: '2em', padding:'5px' }}
                />
           </h2>
           <div className='flex justify-between pt-6 max-w-[200] w-full'>
            <FaTwitter  className='cursor-pointer' size={20}/>
            <FaFacebookF className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>

           </div>

        </div>


      </div>
    </div>
  )
}

export default Main
