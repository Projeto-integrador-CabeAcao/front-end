import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe os estilos do carrossel
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

import sobreFundo from 'src/assets/background.jpg';



function Sobre() {
  
  return (
    
    <div   className='min-h-screen bg-[#F3E0D3] flex flex-col items-center justify-center space-y-8 p-8 bg-src/assets/background.jpg fundoLogin'>

      <h1 className='text-5xl font-bold text-[#EA9050] mt-[-50px]'>Sobre nós</h1>
      <p className='text-2xl text-center font-semibold text-[#442915] max-w-prose mx-auto'>
        Somos um grupo de jovens dedicados, motivados pelo desejo comum de fazer a diferença no mundo da educação. Unimos forças durante nosso curso e, inspirados por um trabalho em grupo, demos vida a uma ideia que poderia impactar positivamente a jornada educacional de muitas crianças.
      </p>
      
      {/* Carrossel de fotos */}
      <Carousel className="w-64 h-32"> 



     {/* <div className="relative">
      <div className="absolute top-0 left-0">
      <div className="flex justify-center">  <LinkedinLogo size={28} weight='bold'  /> 
              <InstagramLogo size={28} weight='bold' />
              <GithubLogo size={28} weight='bold' />

      </div>
      <div className="absolute top-0 left-0">
      <a href="https://github.com/Taylanbs">
          <img src="src\assets\img\png\Taylan.png" alt="Igor" />
        </a>
       </div>
      </div>
      </div> */}

      
<div className="relative">
<div className="absolute top-6 left-20 flex justify-center space-x-2 -mt-4">
    <LinkedinLogo className="text-orange-500" size={28} weight="bold" />
    <InstagramLogo className="text-orange-500" size={28} weight="bold" />
    <GithubLogo className="text-orange-500" size={28} weight="bold" />
  </div>
  <a href="https://github.com/Taylanbs">
    <img src="src\assets\img\png\Igor.png" alt="Igor" />
  </a>
</div>


        <div className="relative">
        <div className="absolute top-6 left-20 flex justify-center space-x-2 -mt-4">
         <LinkedinLogo className="text-orange-500" size={28} weight="bold" />
       <InstagramLogo className="text-orange-500" size={28} weight="bold" />
           <GithubLogo className="text-orange-500" size={28} weight="bold" />
       </div>
        <a href="https://github.com/Taylanbs">
          <img src="src\assets\img\png\Sabrina.png" alt="Sabrina" />
        </a>
        </div>

         <div className="relative">
         <div className="absolute top-6 left-20 flex justify-center space-x-2 -mt-4">
    <LinkedinLogo className="text-orange-500" size={28} weight="bold" />
    <InstagramLogo className="text-orange-500" size={28} weight="bold" />
    <GithubLogo className="text-orange-500" size={28} weight="bold" />
  </div>
        <a href="https://github.com/Taylanbs">
          <img src="src\assets\img\png\Taylan.png" alt="Taylan" />
        </a>
        </div>
        
        <div className="relative">
  <a href="https://github.com/Taylanbs">
    <img src="src/assets/img/png/Vitoria.png" alt="Vitória" />
  </a>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center space-x-4">
    <LinkedinLogo className="text-orange-500" size={28} weight="bold" />
    <InstagramLogo className="text-orange-500" size={28} weight="bold" />
    <GithubLogo className="text-orange-500" size={28} weight="bold" />
  </div>
</div>

        {/* Adicione mais imagens conforme necessário */}
      </Carousel>

      <div><h2 className='text-5xl font-bold text-[#EA9050]'>Nossa missão</h2>
      {/* <img className='size-100 border-solid border-2 border-[#A0D94A]' src={sobreFundo} alt="Fundo do sobre" /> */}</div>
    </div>
  );
}

export default Sobre;
