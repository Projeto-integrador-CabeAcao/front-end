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

  // Verifica se o usuário está logado
  const usuarioLogado = usuario.token !== ""

  // Se o usuário estiver logado, renderiza a barra de navegação
  if (usuarioLogado) {
    return (
      <nav className=' w-full bg-[#B99AD9] text-white flex justify-center py-4'>
        <div className="container flex justify-between items-center text-lg">

          <div className='flex justify-center items-center '>
            <Link to='/home' className='hover:underline'><div className='w-20'>
              <img src="./src/assets/Logo-sem-fundo.png" alt="logo projeto cabe ação" />
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
  } else {
    // Se o usuário não estiver logado, retorna null para não renderizar a barra de navegação
    return null;
  }
}

export default Navbar
