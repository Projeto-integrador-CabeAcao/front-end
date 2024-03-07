import React from 'react';
import '../navbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react';



function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }
   // Verifica se está na página de login
  const isLoginPage = window.location.pathname === '/login';

  const usuarioLogado = usuario.token !== '';

  if (usuarioLogado) {
  return (

    
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" href="Cabe Ação" target="_blank">
          <i className="fab fa-codepen"></i>CABE AÇÃO
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        
      </div>
      <div id="nav-content">
       
        
        <Link to='/sobre' className="nav-button"><i className="fas fa-thumbtack"></i><span>Sobre nós</span></Link>
    
    <Link to='/perfil'className="nav-button"><i className="fas fa-heart"></i><span>Perfil</span></Link>

    <Link to='/postagens'  className="nav-button"><i className="fas fa-chart-line"></i><span>Postagens</span></Link>

    <Link to='/temas' className="nav-button"><i className="fas fa-fire"></i><span>Temas</span></Link>

    <Link to='/cadastroTema' className="nav-button"><i className="fas fa-magic"></i><span>Cadastrar Temas</span></Link>
   

    <Link to='' onClick={logout} className="nav-button"><i className="hover:underline"></i><span>Sair</span></Link>

    <div id="nav-content-highlight"></div>
        {/* Resto do seu código permanece o mesmo */}
        {/* ... */}
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src= "src\assets\img\png\logo-novo.png" alt="Logo CabeAção" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" href="" target="_blank">
              
            </a>
            <span id="nav-footer-subtitle"></span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          {/* Adicione o conteúdo do rodapé aqui */}
        </div>

         <div className='flex gap-4'>

            
          </div>
      </div>
    </div>
  );
  
}
return null;
}
export default Navbar;
