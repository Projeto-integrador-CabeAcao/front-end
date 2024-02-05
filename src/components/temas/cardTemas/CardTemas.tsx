import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-2 my-2">
      <div className="flex flex-row justify-between p-4 bg-[#ffffff] border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <h2 className='text-lg font-bold'>{tema.descricao}</h2>
      </div>
      <div className="p-4 bg-white mb-2">
        <p className='text-base text-gray-700'>{tema.descricao}</p>
      </div>
      <div className="flex border-t border-gray-200 rounded-bl-lg rounded-br-lg">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-white bg-blue-500 hover:bg-blue-600 flex items-center justify-center py-2 rounded'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-white bg-red-500 hover:bg-red-600 w-full flex items-center justify-center py-2 rounded'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas
