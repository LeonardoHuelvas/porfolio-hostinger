import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/property.jpg';
import cryptoImg from '../assets/crypto.jpg';
import netflixImg from '../assets/netflix.jpg';
 

const PROJECTS_DATA = [
  { img: cryptoImg, title: 'Restaurant Web', url: 'https://leonardohuelvas.github.io/' },
  { img: propertyImg, title: 'EccomerceShoes', url: 'https://shop-shoes-comerce.netlify.app/' },
  { img: netflixImg, title: 'Eccomerce', url: 'https://eccomerce-tienda-venta.netlify.app/' },
];

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto  md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8 font-thin text-lg hover:font-bold'>
        Estos proyectos han sido desarrollados utilizando la pila tecnológica MERN. Esto significa que MongoDB se utiliza como base de datos, Express como servidor web, React para el frontend y Node.js como plataforma de ejecución del servidor. En el frontend, React se utilizó junto con la librería react-router-dom para la navegación entre las distintas páginas. Se implementaron rutas para diversas secciones de las aplicaciones, como la página de inicio de sesión, el registro y la página principal de la aplicación. Además, también desarrollo sitios web utilizando HTML, CSS y JavaScript.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {PROJECTS_DATA.map((project, index) => (
          <a key={index} href={project.url || '#'} target='_blank' rel='noopener noreferrer'>
            <ProjectItem img={project.img} title={project.title} alt={project.title} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
