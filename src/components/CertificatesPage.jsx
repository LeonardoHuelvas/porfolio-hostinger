import React, { useEffect, useState } from 'react';

function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/certificates')
      .then(response => response.json())
      .then(data => setCertificates(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-8'>Certificados</h1>
      {certificates.map((certificate) => (
        <div key={certificate.id} className='w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>{certificate.title}</h2>
          <a 
            href={certificate.pdfLink} 
            className='text-blue-500 hover:underline'
            target='_blank'
            rel='noreferrer'
          >
            Ver Certificado
          </a>
        </div>
      ))}
    </div>
  );
}

export default CertificatesPage;
