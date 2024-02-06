import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import checkedIcon from '../../../assets/img/png/check.png'
import crossIcon from '../../../assets/img/png/cross.png'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({ post }: CardPostagemProps) {

    let dataDoBanco = new Date(post.data);
    dataDoBanco.setHours(dataDoBanco.getHours() - 3);

    let dataLocal = new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium',
    }).format(dataDoBanco)
    console.log(post.data)

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-auto overflow-auto">
      <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <div className="flex items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 w-12 rounded-full object-cover' alt="" />
          <h3 className='text-lg font-bold text-gray-900 break-words'>{post.usuario?.nome}</h3>          
        </div>

        {
          post.disponivel === true ?
            (<img src={checkedIcon} alt="Imagem de um check verde" className='size-5' />
            ) :
            (
              <img src={crossIcon} alt="Imagem de um x vermelho" className='size-5' />
            )
        }



      </div>
      <div className="p-6 bg-white mb-4">
        <h4 className='text-lg font-semibold text-gray-900 break-words'>Titulo: {post.titulo}</h4>
        <p className='text-base text-gray-700 break-words'>Descrição: {post.texto}</p>
        <p className='text-sm text-gray-500'>Tema: {post.tema?.descricao}</p>
        <p className='text-sm text-gray-500'>Materia: {post.materia}</p>
        {/* <p className='text-sm text-gray-500'>Midia: {post.midia}</p> */}
        <img src={post.midia} alt="" className=''/>
        <p>Data: {dataLocal}</p>
      </div>
      <div className="mt-auto flex justify-between border-t border-gray-200 rounded-bl-lg rounded-br-lg ">
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-[#3ab7ff] hover:bg-[#1e88e5] flex items-center justify-center py-2 rounded'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-[#e55835] hover:bg-[#e54435] w-full flex items-center justify-center py-2 rounded'>
          <button>Deletar</button>
        </Link>
      </div>

    </div>
  )
}

export default CardPostagem
