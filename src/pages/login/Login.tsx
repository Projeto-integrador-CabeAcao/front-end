import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import './Login.css';


function Login() {
  let navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    
    <div className="flex items-center justify-between h-screen bg-gray-200 p-10">
      {/* <div className="fundoLogin2 hidden lg:block justify-end"></div> */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Entrar</h2>
        <form onSubmit={login} className="mt-4">
          <div className="flex flex-col mb-2">
            <label htmlFor="usuario" className="mb-1 text-sm font-medium text-gray-600">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuarioLogin.usuario} 
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="senha" className="mb-1 text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuarioLogin.senha} 
              onChange={atualizarEstado}
            />
          </div>
          <button type='submit' className="flex justify-center w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-md">
            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : 'Entrar'}
          </button>
        </form>
        <hr className="my-4" />
        <p className="text-sm text-center text-gray-500">
          Ainda não tem uma conta?{' '}
          <Link to="/cadastro" className="text-indigo-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
      <div className="fundoLogin hidden lg:block justify-end"></div>
    </div>  
    
  );
}

export default Login;
