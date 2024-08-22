import imgRobo from '../assets/roboImg.svg'
import IconX from '../assets/iconsRedes/xIconPreto.svg'
import IconInsta from '../assets/iconsRedes/instaIconPreto.svg'
import IconFace from '../assets/iconsRedes/faceIconPreto.svg'
import Nav from './Nav'
import Footer from "./Footer"
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col sm:flex-row items-center">
          <img 
            src={imgRobo} 
            alt="Imagem de um Robô na cor branca" 
            className="sm:w-[557px] sm:h-[666px] w-[133px] h-[172px] ml-12 sm:ml-32 mr-8 font-titulo transform transition ease-in-out duration-1000 float-effect" 
          />
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-semibold text-purple mb-1.5 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-titulo text-center sm:text-start typing-effect ">
              Robô Kids
            </h1>
            <p className="w-[90%] sm:w-[80%] lg:w-[70%] text-justify text-black text-base md:text-lg py-6 font-normal font-paragrafo">
              Trata-se de um produto destinado a ajudar crianças em sua jornada de aprendizado, com ênfase na disciplina de matemática. 
              Por meio da integração da tecnologia, as crianças podem se divertir enquanto aprendem, ao passo que os pais têm a oportunidade de monitorar o progresso de seus filhos.
            </p>
            <Link to="/produto">
              <button className="font-topico px-6 py-3 w-32 bg-purple text-white rounded-lg border border-transparent transition ease-in-out duration-150 hover:bg-white hover:text-purple hover:border-purple mb-8 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200">
                Veja mais
              </button>
            </Link>
            <div className="flex justify-center mt-8 sm:mt-16 space-x-4  sm:mb-0">
              <button>
                <img src={IconX} alt="Ícone da rede social X" className="w-6 h-6 transition-transform duration-200 ease-in-out transform hover:scale-110"/>                   
              </button>
              <button>
                <img src={IconInsta} alt="Ícone da rede social Instagram" className="w-6 h-6 transition-transform duration-200 ease-in-out transform hover:scale-110" />
              </button>
              <button>
                <img src={IconFace} alt="Ícone da rede social Facebook" className="w-6 h-6 transition-transform duration-200 ease-in-out transform hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
