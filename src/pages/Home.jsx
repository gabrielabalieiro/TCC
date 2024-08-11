import imgRobo from '../assets/roboImg.svg'
import IconX from '../assets/iconsRedes/xIconPreto.svg'
import IconInsta from '../assets/iconsRedes/instaIconPreto.svg'
import IconFace from '../assets/iconsRedes/faceIconPreto.svg'

import { Link } from 'react-router-dom'

function Home() {
  
    return (
     <main className=" flex items-center justify-center min-h-screen ">
        
        <div className=" flex items-center " >
            <img src={imgRobo} alt="Imagem de um Robô na cor branca" className="w-557 mr-8 " />
            

            <div>
                <h1 className= "text-6xl font-semibold text-purple mb-4 text-[64px] font-normal font-['RocknRollOne']">Robô Kids</h1>
                <p className="w-[565px] text-justify text-black text-2xl  py-4 font-normal font-['Halant']">Trata-se de um produto  destinado a ajudar crianças em sua jornada de aprendizado, com ênfase na disciplina de matemática. Por meio da integração da tecnologia, as crianças podem se divertir enquanto aprendem, ao passo que os pais têm a oportunidade de monitorar o progresso de seus filhos.</p>
                <button className="px-6 py-3 bg-purple text-white rounded-lg transition ease-in-out delay-150 bg-purple hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 ...mb-8">
                    <a href="/produto">Veja mais</a>
                </button>
                <div className="flex justify-center space-x-4">
                    <button>
                        <img src={IconX} alt="Icone da rede social X" className="w-6 h-6"/>
                    </button>
                    <button>
                        <img src={IconInsta} alt="Icone da rede social Instagram" className="w-6 h-6" />
                    </button>
                    <button>
                        <img src={IconFace} alt="Icone da rede social Facebook" className="w-6 h-6" />
                    </button>
                    </div>
                </div>
            </div>
     </main>
    )
  }
  export default Home