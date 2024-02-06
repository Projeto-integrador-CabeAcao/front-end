import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './context/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagem/ListaPostagem';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import Perfil from './pages/perfil/Perfil';
import Sobre from './pages/sobre/Sobre';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh] bg-gray-100'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;