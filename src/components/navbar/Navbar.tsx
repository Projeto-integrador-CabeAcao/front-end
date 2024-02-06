import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { FaHome, FaInfo, FaRegNewspaper, FaTags, FaPlusSquare, FaUser, FaSignOutAlt } from 'react-icons/fa'
import './Navbar.css' // Importando o arquivo CSS

function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  return (
    <nav className=' w-full bg-[#B99AD9] text-white flex justify-center py-4'>
      <div className="container flex justify-between items-center text-lg">

        <div className='flex justify-center items-center '>
          <Link to='/home' className='hover:underline'><div className='w-20'>
            <img src="https://cdn.discordapp.com/attachments/1180161484345585706/1197946685293334581/cabe-acao_-_transparente.png?ex=65bd1dca&is=65aaa8ca&hm=758e45a9d3d63ed018de54b9a4a08ad7dd4ac8d3203c33e867b9dd8a2314ec21&" alt="logo projeto cabe ação" />
          </div></Link>
          <Link to='/home' className=' text-2xl font-bold uppercase'>Cabe Ação</Link>
        </div>

        <div className='flex gap-4 items-center'>
          <Link to='/sobre' className='navbar-link'><FaInfo /><span>Sobre</span></Link>
          <Link to='/postagens' className='navbar-link'><FaRegNewspaper /><span>Postagens</span></Link>
          <Link to='/temas' className='navbar-link'><FaTags /><span>Temas</span></Link>
          <Link to='/cadastroTema' className='navbar-link'><FaPlusSquare /><span>Cadastrar tema</span></Link>
          <Link to='/perfil' className='navbar-link'><FaUser /><span>Perfil</span></Link>
          <div>|</div>
          <Link to='' onClick={logout} className='navbar-link'><FaSignOutAlt /><span>Sair</span></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
