import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  return (
    <>
      <div className=' w-full bg-[#0488AB] text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">

          <div className='flex justify-center items-center '>
            <Link to='/home' className='hover:underline'><div className='w-20'>
              <img src="https://cdn.discordapp.com/attachments/1180161484345585706/1197946685293334581/cabe-acao_-_transparente.png?ex=65bd1dca&is=65aaa8ca&hm=758e45a9d3d63ed018de54b9a4a08ad7dd4ac8d3203c33e867b9dd8a2314ec21&" alt="logo projeto cabe ação" />
            </div></Link>
            <Link to='/home' className=' text-2xl font-bold uppercase'>Cabe Ação</Link>

          </div>


          <div className='flex gap-4'>

            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
            <div className='hover:underline'>Perfil</div>
            <div>|</div>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar