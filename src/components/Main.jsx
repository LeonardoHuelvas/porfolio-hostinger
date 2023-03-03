import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img  
      className='w-full h-screen pbkect-cover object-left scale-x[-1]'
       src='https://img.freepik.com/vector-gratis/fondo-degradado-formas-coloridas-abstractas_23-2149120340.jpg?w=740&t=st=1677804587~exp=1677805187~hmac=6ecdeb10c7a4ca94dbe996c178d381c6dfb38eb97a018544eb6cf4e4464895d6'
      alt='/'
      />
      
      <div className='w-full h-screen absolute top-0 left-0  bg-slate-800'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-400 '>I'm Leonardo Huelvas</h1>
          <h2 className='flex  sm:text3xl text-3xl pt-4 items-center  text-gray-500'>    
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
           <div className='flex justify-between pt-6 max-w-[200] w-3/12'>
            <a href='https://twitter.com/@lejhubo'><FaTwitter  className='cursor-pointer' size={20}/></a>
            <a href='https://www.facebook.com/lejhubo'><FaFacebookF className='cursor-pointer' size={20}/></a>
            <a href='https://www.instagram.com/lejhubo/'><FaInstagram className='cursor-pointer' size={20}/></a>
            <a href='https://www.linkedin.com/in/leonardo-javier-huelvas/'><FaLinkedinIn className='cursor-pointer' size={20}/></a>

           </div>

        </div>


      </div>
    </div>
  )
}

export default Main
