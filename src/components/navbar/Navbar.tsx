import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';
import './Navbar.css';

function Navbar() {
  const [minimizado, setMinimizado] = useState(false); // Estado para controlar se a Navbar está minimizada
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login');
  }

  // Verifica se o usuário está logado
  const usuarioLogado = usuario.token !== '';

  return (
    <div id="nav-bar" className={minimizado ? 'minimizado' : ''}> {/* Aplica a classe 'minimizado' quando a Navbar está minimizada */}
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <Link to="/" id="nav-title" >
          <i className="fab fa-codepen"></i>
          <div id="nav-footer-avatar">
            <Link to="/"><img src= "src\assets\img\png\logo-novo.png" alt="Logo CabeAção" /></Link>
          </div>
        </Link>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
      </div>
      <div id="nav-content">
        <Link to='/sobre' className="nav-button"><i className="fas fa-thumbtack"></i><span>Sobre nós</span></Link>
        <Link to='/perfil' className="nav-button"><i className="fas fa-heart"></i> <span>Perfil</span></Link>
        <Link to='/postagens'  className="nav-button"><i className="fas fa-chart-line"></i><span>Postagens</span></Link>
        <Link to='/temas' className="nav-button"><i className="fas fa-fire"></i><span>Temas</span></Link>
        <Link to='/cadastroTema' className="nav-button"><i className="fas fa-magic"></i><span>Cadastrar Temas</span></Link>
        <Link to='' onClick={logout} className="nav-button"><i className="hover:underline"></i><span>Sair</span></Link>
      </div>
    </div>
  );
}

export default Navbar;
