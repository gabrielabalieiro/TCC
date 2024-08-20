import {Swiper, SwiperSlide} from 'swiper/react'


import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"

import imgRoboMateriais from '../assets/iconsRedes/robo_materiais.svg'
import imgCirculoMateriais from '../assets/iconsRedes/circulo_materiais.svg'
import imgSensor from '../assets/iconsRedes/sensor.svg'
import imgMotor from '../assets/iconsRedes/motor.svg'
import imgArduino from '../assets/iconsRedes/arduino.svg'
import imgSetaD from '../assets/iconsRedes/seta_carroselD.svg'
import imgSetaE from '../assets/iconsRedes/seta_carroselE.svg'
import imgSetaL from '../assets/iconsRedes/setalcd.svg'
import imgBols from '../assets/iconsRedes/bols_material.svg'
import imgBols2 from '../assets/iconsRedes/bols_branca.svg'

export function Materiais() {
  return (
    <div>
        <Nav/>
        <div>
        <section>
            <div>
                <h1 className="text-5xl font-semibold text-purple mb-4  font-titulo text-center p-14">Materiais</h1>
        </div>
        <div>
            <img src={imgSetaD} alt="" className='absolute right-20 transition-transform duration-300 ease-in-out hover:scale-110 translate-y-36'/>
            <img src={imgSetaE} alt="" className='absolute left-20 transition-transform duration-300 ease-in-out hover:scale-110 translate-y-36'/>
        </div>

        <div className='flex justify-center px-44 mb-44 gap-14 '>
            <div className="w-68 h-88 rounded-lg border-2 border-purple font-sans p-4 flex flex-col items-center ">
                <img className="w-50 h-38 mb-4" src={imgSensor} alt="Sensor" />
                <div className="w-56 text-center text-purple text-2xl font-semibold font-titulo mb-2">Sensor</div>
                <div className="w-56 text-center text-black text-lg font-paragrafo mb-2">Captar movimento</div>
                <div className="w-56 text-center text-gray text-lg font-paragrafo translate-y-8">R$ 11,00</div>
                <div className="w-30 h-30 bg-gray-300 mt-4"></div>
            </div>

            <div className="w-68 h-88 rounded-lg border-2 border-purple font-sans p-4 flex flex-col items-center">
                <img className="w-50 h-38 mb-4" src={imgArduino} alt="Arduino" />
                <div className="w-56 text-center text-purple text-2xl font-semibold font-titulo mb-2">Arduino</div>
                <div className="w-56 text-center text-black text-lg font-paragrafo mb-2">Desenvolvimento de projetos eletrônicos</div>
                <div className="w-56 text-center text-gray text-lg font-paragrafo">R$ 48,00</div>
                <div className="w-30 h-30 bg-gray-300 mt-4"></div>
            </div>

            <div className="w-68 h-88 rounded-lg border-2 border-purple font-sans p-4 flex flex-col items-center">
                <img className="w-50 h-38 mb-4" src={imgMotor} alt="Motor" />
                <div className="w-56 text-center text-purple text-2xl font-semibold font-titulo mb-2">Motor</div>
                <div className="w-56 text-center text-black text-lg font-paragrafo mb-2">Execulta movimentos progamados</div>
                <div className="w-56 text-center text-gray text-lg font-paragrafo">R$ 12,00</div>
                <div className="w-30 h-30 bg-gray-300 mt-4"></div>
            </div>

        </div>
        
            <div className='mb-24 flex justify-center gap-3 -translate-y-12'>
                <img src={imgBols} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>
                <img src={imgBols2} alt="" className='hover:scale-110 '/>

            </div>

        </section>

        <section>
            <div className='mb-44 '>
                <div className='flex items-center'>
                    <h2 className='text-purple font-titulo text-3xl px-44 pr-12 '>Utilização</h2>
                    <hr className='w-[816px] border-purple' />
                </div>

                <div className=' mt-24 transform transition ease-in-out duration-1000 float-effect'>
                    <p className='font-paragrafo text-right pr-80 translate-y-16 '>Display LCD Led</p>
                        <img src={imgSetaL} alt="" className='mx-auto translate-y-11 pl-72' />
                    <img src={imgCirculoMateriais} alt="Círculo de destaque do Display do robô" className=' absolute left-24 right-24  w-64 h-512 mx-auto' />
                    <img src={imgRoboMateriais} alt="Robô da página de materiais" className="w-428 h-512 mx-auto "/>
                </div>
                
            </div>
            
        </section>

        <section>
            <div>
                <div className='flex items-center'>
                    <h2 className='text-purple font-titulo text-3xl px-44 pr-12 '>Valor final</h2>
                    <hr className='w-[816px] border-purple' />
                </div>
                <p className='text-justify font-paragrafo px-44 py-6 mb-6'>O nosso projeto, além de ter um alto custo inicial, demanda um grande esforço de trabalho, por isso projetamos um valor inicial de 1.500,00 R$, levando em consideração todo o custo e desenvolvimento. Além disso, o projeto é altamente tecnológico e apresenta um diferencial significativo, incluindo um aplicativo que permite aos pais acompanhar a evolução da criança e um jogo divertido para a própria criança. Tudo isso é integrado com o robô, proporcionando um suporte completo ao cliente.
                </p>
            </div>
        </section>
        
    </div>
    <Footer/>
    </div>
  )
}
