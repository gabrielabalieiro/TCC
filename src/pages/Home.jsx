import imgRobo from '../assets/roboImg.svg';
import IconInsta from '../assets/iconsRedes/instaIconPreto.svg';
import IconFace from '../assets/iconsRedes/faceIconPreto.svg';
import IconThreads from '../assets/iconsRedes/iconLogins/iconThreads.svg';
import Nav from './Nav';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full flex flex-col sm:flex-row items-center mx-4">
          <img 
            src={imgRobo} 
            alt="Imagem de um Robô na cor branca" 
            className="sm:w-[557px] sm:h-[666px] w-[143px] h-[172px] sm:ml-16 mr-0 sm:mr-4 font-titulo transform transition ease-in-out duration-1000 float-effect" 
          />
          <div className="flex flex-col items-center sm:items-start sm:ml-16">
            <h1 className="font-semibold text-purple mb-1.5 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-titulo text-center sm:text-start typing-effect">
              Robô Kids
            </h1>
            <p className="w-full sm:w-[80%] lg:w-[50%] text-justify text-black text-base md:text-lg py-6 font-normal font-paragrafo">
              Trata-se de um produto destinado a ajudar crianças em sua jornada de aprendizado, com ênfase na disciplina de matemática. 
              Por meio da integração da tecnologia, as crianças podem se divertir enquanto aprendem, ao passo que os pais têm a oportunidade de monitorar o progresso de seus filhos.
            </p>
            <Link to="/produto">
              <button className="font-topico px-6 py-3 w-32 bg-purple text-white rounded-lg border border-transparent transition ease-in-out duration-150 hover:bg-white hover:text-purple hover:border-purple mb-8">
                Veja mais
              </button>
            </Link>
            <div className="flex justify-center mt-8 sm:mt-16 space-x-4 sm:mb-0">
              <a href="https://www.threads.net/@robokids.tcc?xmt=AQGzPkcJ2U2CTwo69k4b4YNCFv9boH0X4e5DcFtUbQzNjlw"> 
                <img src={IconThreads} alt="Ícone da rede social Threads" className="w-10 h-10 transition-transform duration-200 ease-in-out transform hover:scale-110" />                   
              </a>
              <a href="https://www.instagram.com/robokids.tcc?igsh=ejhjY2p2a2preGN3&utm_source=qr"> 
                <img src={IconInsta} alt="Ícone da rede social Instagram" className="w-8 h-9 transition-transform duration-200 ease-in-out transform hover:scale-110" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565793206934"> 
                <img src={IconFace} alt="Ícone da rede social Facebook" className="w-8 h-9 transition-transform duration-200 ease-in-out transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
