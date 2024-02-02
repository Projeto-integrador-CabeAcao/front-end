import homeLogo from '../../assets/alunos.svg'
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-[#0488AB] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-3xl font-bold'>Feliz por ter você aqui.</h2>
              <p className='text-xl'>Sinta-se em casa</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-end">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      
      </>
    );
}

export default Home;