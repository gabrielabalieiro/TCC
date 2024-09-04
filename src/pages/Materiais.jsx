import {Swiper, SwiperSlide} from 'swiper/react'



import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"
import Carossel from './carrosel/CMateriais'

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
        <section className='mb-20'>
            <div>
                <h1 className="text-2xl md:text-4xl font-semibold text-purple mb-4  font-titulo text-center p-14">Materiais</h1>
        </div>
        
        <div className='flex justify-center items-center'>
            <Carossel/>
        </div>
       
        
            

        </section>

        <section>
            <div className='sm:mb-44 mb-20 '>
                <div className='flex items-center'>
                    <h2 className='text-purple font-titulo sm:text-3xl sm:px-44 sm:pr-12 text-xl pr-10 pl-10'>Utilização</h2>
                    <hr className='w-[980px] border-purple' />
                </div>

                <div className=' mt-12 sm:mt-24 transform transition ease-in-out duration-1000 float-effect'>
                    <p className='font-paragrafo text-right pr-80 translate-y-16 hidden sm:block hidden text-xl'>Display LCD Led</p>
                    <img src={imgSetaL} alt="" className='mx-auto translate-y-11 pl-72 hidden sm:block hidden' />
                    <img src={imgRoboMateriais} alt="Robô da página de materiais" className="sm:w-[428px] sm:h-[512px] w-[153px]  h-[215px] mx-auto"/>
                </div>
                
            </div>
            
        </section>

        <section>
            <div>
                <div className='flex items-center'>
                    <h2 className='text-purple font-titulo text-xl sm:text-3xl  sm:px-44 sm:pr-12 pr-4 pl-10  '>Valor final</h2>
                    <hr className='sm:w-[1000px] w-[500px] border-purple' />
                </div>
                <p className='sm:px-44 sm:py-6 sm:mb-6 font-paragrafo text-justify mb-5  sm:text-lg text-base px-10 py-4'>O nosso projeto, além de ter um alto custo inicial, demanda um grande esforço de trabalho, por isso projetamos um valor inicial de 1.500,00 R$, levando em consideração todo o custo e desenvolvimento. Além disso, o projeto é altamente tecnológico e apresenta um diferencial significativo, incluindo um aplicativo que permite aos pais acompanhar a evolução da criança e um jogo divertido para a própria criança. Tudo isso é integrado com o robô, proporcionando um suporte completo ao cliente.
                </p>
            </div>
        </section>
        
    </div>
    <Footer/>
    </div>
  )
}
