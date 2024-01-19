import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {

  return (
    <>
      <div className='w-full bg-[#0488AB] text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">

          <div className='flex justify-center items-center '>
          <Link to='/home' className='hover:underline'><div className='w-20'>
              <img src="https://cdn.discordapp.com/attachments/1180161484345585706/1197946685293334581/cabe-acao_-_transparente.png?ex=65bd1dca&is=65aaa8ca&hm=758e45a9d3d63ed018de54b9a4a08ad7dd4ac8d3203c33e867b9dd8a2314ec21&" alt="logo projeto cabe ação" />
            </div></Link>
            <Link to='/home' className=' text-2xl font-bold uppercase'>Cabe Ação</Link>
                     
          </div>


          <div className='flex gap-4'>

            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <div className='hover:underline'>Postagens</div>
            <div className='hover:underline'>Temas</div>
            <div className='hover:underline'>Cadastrar tema</div>
            <div className='hover:underline'>Perfil</div>
            <div>|</div>
            <div className='hover:underline'>Sair</div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar