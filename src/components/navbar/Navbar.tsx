import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaInfo, FaRegNewspaper, FaTags, FaPlusSquare, FaUser, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  // Verifica se o usuário está logado
  const usuarioLogado = usuario.token !== '';

  // Se o usuário estiver logado, renderiza a barra de navegação
  if (usuarioLogado) {
    return (
      <nav className='w-16 bg- text-[#EA9050} fixed left-0 top-0 h-screen flex flex-col items-center justify-center'>
        <Link to='/home' className='navbar-link'>
          
        </Link>
        <Link to='/sobre' className='navbar-link'>
          <FaInfo />

          <p>
            
            
          </p>
          <span></span>
        </Link>
        <Link to='/postagens' className='navbar-link'>
          <FaRegNewspaper />
          <span></span>
        </Link>
        <Link to='/temas' className='navbar-link'>
          <FaTags />
          <span></span>
        </Link>
        <Link to='/cadastroTema' className='navbar-link'>
          <FaPlusSquare />
          <span></span>
        </Link>
        <Link to='/perfil' className='navbar-link'>
          <FaUser />
          <span></span>
        </Link>
        <div>|</div>
        <Link to='' onClick={logout} className='navbar-link'>
          <FaSignOutAlt />
          <span></span>
        </Link>
      </nav>
    );
  }

  return null; // Renderiza nada se o usuário não estiver logado
}

export default Navbar;
