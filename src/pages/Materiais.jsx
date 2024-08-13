import {Swiper, SwiperSlide} from 'swiper/react'


import React from 'react'

import imgRoboMateriais from '../assets/iconsRedes/robo_materiais.svg'
import imgCirculoMateriais from '../assets/iconsRedes/circulo_materiais.svg'
import imgSensor from '../assets/iconsRedes/sensor.svg'
import imgMotor from '../assets/iconsRedes/motor.svg'
import imgArduino from '../assets/iconsRedes/arduino.svg'
import imgSetaD from '../assets/iconsRedes/seta_carroselD.svg'
import imgSetaE from '../assets/iconsRedes/seta_carroselE.svg'

export default function Materiais() {
  return (
    <main>
        <section>
            <div>
                <h1 className="text-5xl font-semibold text-purple mb-4 font-normal font-titulo text-center p-14">Materiais</h1>
        </div>
        <div>
            <img src={imgSetaD} alt="" className='absolute right-0 top-1/2 transform -translate-y-1/2'/>
            <img src={imgSetaE} alt="" />
        </div>
            <div className='flex justify-center px-44 mb-8 gap-14 '>
            <div class="w-[272px] h-[352px] relative rounded-[10px] border-2 border-[#5c6898]">
                <img class="w-[201px] h-[153px] left-[35.50px] top-[42px] absolute" src={imgSensor} />
                <div class="w-[222px] left-[25px] top-[202px] absolute text-center text-[#5c6898] text-2xl font-semibold font-['Halant']">Sensor</div>
                <div class="w-[222px] left-[25px] top-[247px] absolute text-center text-black text-lg font-normal font-['Halant']">Captar movimento</div>
                <div class="w-[222px] left-[25px] top-[282px] absolute text-center text-[#5b5a5a] text-lg font-medium font-['Halant']">R$ 11,00 </div>
                <div class="w-[118px] h-[118px] left-[82px] top-[42px] absolute"></div>
            </div>
            <div class="w-[271px] h-[352px] relative rounded-[10px] border-2 border-[#5c6898]">
                <div class="w-[238px] left-[17px] top-[240px] absolute text-center text-black text-lg font-normal font-['Halant']">desenvolvimento de projetos eletrônicos</div>
                <div class="left-[92px] top-[202px] absolute text-justify text-[#5c6898] text-2xl font-semibold font-['Halant']">Arduino</div>
                <div class="w-[222px] left-[25px] top-[301px] absolute text-center text-[#5b5a5a] text-lg font-medium font-['Halant']">R$ 48,00 </div>
                <img class="w-[201px] h-[153px] left-[35px] top-[23px] absolute" src={imgArduino} />
            </div>
            <div class="w-[272px] h-[352px] relative rounded-[10px] border-2 border-[#5c6898]">
                <div class="w-[228px] left-[22px] top-[239px] absolute text-center text-black text-lg font-normal font-['Halant']">Execulta movimentos progamados</div>
                <div class="left-[93px] top-[201px] absolute text-justify text-[#5c6898] text-2xl font-semibold font-['Halant']"> Motor</div>
                <div class="w-[222px] left-[23px] top-[301px] absolute text-center text-[#5b5a5a] text-lg font-medium font-['Halant']">R$ 12,00 </div>
                <img class="w-[201px] h-[153px] left-[35px] top-[23px] absolute" src={imgMotor} />
            </div>
        </div>

        </section>

        <section>
            <div className='mb-4'>
                <div className='flex items-center'>
                    <h2 className='text-purple font-titulo text-3xl px-44 pr-12 '>Utilização</h2>
                    <hr className='w-[1000px] border-purple' />
                </div>

                <div>
                    <img src={imgCirculoMateriais} alt="Círculo de destaque do Display do robô" className=' mx-auto' />
                    <img src={imgRoboMateriais} alt="Robô da página de materiais" className="w-428 h-512 mx-auto"/>
                </div>
                
            </div>
            
        </section>

        <section>
            <div>
                <div className='flex items-center'>
                    <h2 className='text-purple font-titulo text-3xl px-44 pr-12 '>Valor final</h2>
                    <hr className='w-[1000px] border-purple' />
                </div>
                <p className='text-justify font-paragrafo px-44 py-6 mb-6'>O nosso projeto, além de ter um alto custo inicial, demanda um grande esforço de trabalho, por isso projetamos um valor inicial de 1.500,00 R$, levando em consideração todo o custo e desenvolvimento. Além disso, o projeto é altamente tecnológico e apresenta um diferencial significativo, incluindo um aplicativo que permite aos pais acompanhar a evolução da criança e um jogo divertido para a própria criança. Tudo isso é integrado com o robô, proporcionando um suporte completo ao cliente.
                </p>
            </div>
        </section>
    </main>
  )
}
