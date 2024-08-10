import { useState } from 'react'


import imgRobo from '../assets/roboImg.svg'
import IconX from '../assets/iconsRedes/xIconPreto.svg'
import IconInsta from '../assets/iconsRedes/instaIconPreto.svg'
import IconFace from '../assets/iconsRedes/faceIconPreto.svg'

function Home() {
    const [count, setCount] = useState(0)
  
    return (
     <main>
            <img src={imgRobo} alt="Imagem de um Robô na cor branca" />

            <div>
                <h1>Robô Kids</h1>
                <p>Trata-se de um produto  destinado a ajudar crianças em sua jornada de aprendizado, com ênfase na disciplina de matemática. Por meio da integração da tecnologia, as crianças podem se divertir enquanto aprendem, ao passo que os pais têm a oportunidade de monitorar o progresso de seus filhos.</p>
                <button>
                    <a href="">Veja mais</a>
                </button>
                <div>
                    <button>
                        <img src={IconX} alt="Icone da rede social X" />
                    </button>
                    <button>
                        <img src={IconInsta} alt="Icone da rede social Instagram" />
                    </button>
                    <button>
                        <img src={IconFace} alt="Icone da rede social Facebook" />
                    </button>
                </div>
            </div>
     </main>
    )
  }

  export default Home