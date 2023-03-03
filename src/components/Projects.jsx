import React from 'react';
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/property.jpg'
import cryptoImg from '../assets/crypto.jpg'
import netflixImg from '../assets/netflix.jpg'
import twichImg from '../assets/twich.jpg'
 
 


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto  md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
          Projects
        </h1>
      <p className='text-center py-8 ui-monospace'>
      Proyectos realizados en ReactJs + Vite +TailWind Css - SPA - enfocados en eccomerce de compra de productos y venta.  También desarrollo Web de página hecha en Hml - Css- Java Script. Algunas de estás con funciones de login y control de usuarios, formularios de productos.
      </p>  
      <div className='grid sm:grid-cols-2 gap-12'>
      <a href='https://leonardohuelvas.github.io/'><ProjectItem img={cryptoImg} title='Restaurant Web' /></a>
      <a href='https://shop-shoes-comerce.netlify.app/'><ProjectItem img={propertyImg} title='EccomerceShoes' /></a>
      <a><ProjectItem img={netflixImg} title='Netflix App' /></a>
      <a href='https://eccomerce-tienda-venta.netlify.app/'><ProjectItem img={twichImg} title='Eccomerce' /></a>
      </div>
      
    </div>
  );
};

export default Projects
