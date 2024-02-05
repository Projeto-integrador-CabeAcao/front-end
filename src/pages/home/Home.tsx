import homeLogo from '../../assets/alunos.svg'
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-[#ffffff] flex justify-center">
          <div className='container grid grid-cols-2 text-[#F27A5E]'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-3xl font-bold'>Bem-vindo, onde a paixão pela educação se une à inovação digital para transformar vidas.</h2>
              
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='rounded bg-white text-[#F2BD1D] py-2 px-4'>Ver postagens</button>
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