import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { RotatingLines } from 'react-loader-spinner'
import './Cadastro.css'

function Cadastro() {
  let navigate = useNavigate()
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")
  const [isLoading] = useState<boolean>(false)
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    dataNascimento: ''
  })
  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    dataNascimento: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }
    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <div className="flex items-center justify-center h-screen" style={{backgroundImage: "url('caminho/para/sua/imagem.jpg')", backgroundSize: 'cover'}}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Cadastrar</h2>
        <form onSubmit={cadastrarNovoUsuario} className="mt-4">
          <div className="flex flex-col mb-2">
            <label htmlFor="nome" className="mb-1 text-sm font-medium text-gray-600">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="usuario" className="mb-1 text-sm font-medium text-gray-600">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="dataNascimento" className="mb-1 text-sm font-medium text-gray-600">Data de Nascimento</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuario.dataNascimento}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="foto" className="mb-1 text-sm font-medium text-gray-600">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="senha" className="mb-1 text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="confirmarSenha" className="mb-1 text-sm font-medium text-gray-600">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="px-3 py-2 border rounded-md text-sm w-full focus:outline-none focus:border-indigo-500"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button onClick={back} className="py-2 px-4 bg-gray-500 hover:bg-gray-400 text-white text-sm font-medium rounded-md">
              Cancelar
            </button>
            <button type='submit' className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-md">
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
