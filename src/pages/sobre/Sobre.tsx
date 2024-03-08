import sobreFundo from '../../assets/img/png/fundo-sobre-2.png'

function Sobre() {
  return (
    <div className='min-h-scree bg-gray-100 flex flex-col items-center justify-center space-y-8 p-8 fundoLogin'>

      <h2></h2>
      <h1 className='text-5xl font-bold text-[#A0D94A] mt-[-50px]'>Sobre nós</h1>
      <p className='text-2xl text-center font-semibold text-gray-700 max-w-prose mx-auto '>Somos um grupo de jovens dedicados, motivados pelo desejo comum de fazer a diferença no mundo da educação. Unimos forças durante nosso curso e, inspirados por um trabalho em grupo, demos vida a uma ideia que poderia impactar positivamente a jornada educacional de muitas crianças.</p>
      
        <h2 className='text-5xl font-bold text-[#A0D94A]'>Nossa missão</h2>

      <img className='size-100 class="border-solid border-2 border-[#A0D94A]' src={sobreFundo} alt="Fundo do sobre" />      
      

    </div>
  )
}

export default Sobre
