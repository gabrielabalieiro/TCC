import {Swiper, SwiperSlide} from 'swiper/react'


import React from 'react'

import imgRoboMateriais from '../assets/iconsRedes/robo_materiais.svg'
import imgCirculoMateriais from '../assets/iconsRedes/circulo_materiais.svg'

export default function Materiais() {
  return (
    <main>
        <section>
            <div>
                <h1 className="text-4xl font-semibold text-purple mb-4 font-normal font-titulo text-center p-14">Materiais</h1>
            </div>
        </section>

        <section>
            <div>
                <h2 className="text-justify text-purple text-3xl font-normal font-titulo">Utilização</h2>
                <img src={imgRoboMateriais} alt="Robô da página de materiais" className="w-428 h-512 mx-auto"/>
                <img src={imgCirculoMateriais} alt="Círculo de destaque do Display do robô" className=' mx-auto' />
            </div>
            
        </section>

        <section>
            <div>
                <h2 className='text-purple font-titulo text-3xl px-44'>Valor final</h2>
                <p className='text-justify font-paragrafo px-44 py-8'>O nosso projeto, além de ter um alto custo inicial, demanda um grande esforço de trabalho, por isso projetamos um valor inicial de 1.500,00 R$, levando em consideração todo o custo e desenvolvimento. Além disso, o projeto é altamente tecnológico e apresenta um diferencial significativo, incluindo um aplicativo que permite aos pais acompanhar a evolução da criança e um jogo divertido para a própria criança. Tudo isso é integrado com o robô, proporcionando um suporte completo ao cliente.
                </p>
            </div>
        </section>
    </main>
  )
}
