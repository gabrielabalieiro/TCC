import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import IconInsta from '../assets/iconsRedes/iconInstaDesenvolve.svg'
import fotoGabs from '../assets/fotosProgam/fotoGabsCentro.svg'
import fotoLee from '../assets/fotosProgam/fotoLeeCentro.svg'
import fotoBia from '../assets/fotosProgam/fotoBiaCentro.svg'
import fotoThigas from '../assets/fotosProgam/fotoThigasCentro.svg'
import imgSetaD from '../assets/iconsRedes/seta_carroselD.svg'
import imgSetaE from '../assets/iconsRedes/seta_carroselE.svg'
import { FaThemeco } from 'react-icons/fa';


export function Quemsomos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Nav/>
      <div className="py-8  mb-44 sm:px-44">
      <h1 className='text-2xl font-semibold text-purple mb-4 font-normal font-titulo text-center p-14 sm:text-4xl sm:py-14'>Desenvolvedores</h1>
      
      <div>
            <img src={imgSetaD} alt="" className='absolute right-20 transition-transform duration-300 ease-in-out hover:scale-110 translate-y-44'/>
            <img src={imgSetaE} alt="" className='absolute left-20 transition-transform duration-300 ease-in-out hover:scale-110 translate-y-44'/>
      </div>

      <div className='flex space-x-9 justify-center mb-8 py-9 '>
        <div className=' border-2 border-purple rounded-2xl p-2 text-center  overflow-hidden  flex flex-col items-center bg-violet shadow-2xl shadow-violet-500/50  '>
          <img src={fotoLee} alt="Leticia foto" className="rounded-full  mx-auto mb-8 border-2 border-purple "/>
          
          <p className='text-purple text-xl font-bold font-paragrafo'>Leticia Lopes</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex justify-center text-center mt-6 pr-4'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5'>
              <a href="https://www.instagram.com/lee.lopesz/">lee.lopesz</a>
            </button>
            
            
          </div>
        </div>
        <div className='hidden border-2 border-purple rounded-2xl p-2 text-center overflow-hidden  sm:flex flex flex-col items-center   bg-violet shadow-2xl shadow-violet-500/50 '>
          <img src={fotoGabs} alt="Gabriela foto" className="rounded-full mx-auto mb-8 border-2 border-purple" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Gabriela Balieiro</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex justify-center text-center mt-6 pr-4'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5'>
              <a href="https://www.instagram.com/gabzbali/">gabzbali</a>
            </button>
            
          </div>
        </div>
        <div className='hidden border-2  border-purple rounded-2xl p-2 text-center overflow-hidden   sm:flex flex-col items-center  bg-violet shadow-2xl shadow-violet-500/50 '>
          <img src={fotoBia} alt="Beatriz foto" className="rounded-full mx-auto mb-8 border-2 border-purple" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Beatriz Gonçalves</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex justify-center text-center mt-6 pr-4'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5'>
              <a href="https://www.instagram.com/biiah_gsouza/">biiah_gsouza</a>
            </button>
          </div>
        </div>
        <div className='hidden border-2 border-purple rounded-2xl p-2 text-center overflow-hidden sm:flex flex-col items-center  bg-violet shadow-2xl shadow-violet-500/50'>
          <img src={fotoThigas} alt="Thiago foto" className="rounded-full mx-auto mb-8 border-2 border-purple" />
          <p className='text-purple text-xl font-bold font-paragrafo '>Thiago Pinheiro</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex justify-center text-center mt-6 pr-4'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5 '>
              <a href="https://www.instagram.com/thii.lima_/">thii.lima_</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
