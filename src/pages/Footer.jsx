import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../assets/logoFooter.svg'
import IconEmail from '../assets/iconsRedes/emailIconAzul.svg'
import IconInsta from  '../assets/iconsRedes/instaIconAzul.svg'
import IconX from '../assets/iconsRedes/xIconAzul.svg'
import IconFace from '../assets/iconsRedes/faceIconAzul.svg'

function Footer() {
  return (
    <footer className="bg-purple items-center sm:flex mx-auto">
        <div className="container mx-auto ml-20 ">
            <div className="mb-4 md:mb-3.5">
                <img src={logo} alt="Logo do site escrito Robô Kids" />
            </div>
            <div className='w-[223px] border border-white'></div>
            <div className='flex items-center gap-5 mt-5'>
                <a href="">
                    <img src={IconEmail} alt="Icone do Email" className='transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </a>
                <a href="">
                    <img src={IconInsta} alt="Icone do Instagram" className='transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </a>
                <a href="">
                    <img src={IconX} alt="Icone do X" className='transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </a>
                <a href="">
                    <img src={IconFace} alt="Icone do Facebook" className='transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </a>
            </div>

        </div>

        <div className='flex flex-col gap-8 sm:flex sm:flex-row sm:gap-16 ml-28'>
            <div className='mt-8'> 
                <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
                    <Link to={"/produto"}>Produto</Link>
                </button>
            
                <div className='font-topico font-normal text-white text-lg sm:text-xl'>
                    <p>O que é?</p>
                    <p>Funcionamento</p>
                    <p>Desenvolvimento</p>
                </div>
            
            </div>
            <div className='sm:mt-8'> 
                <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
                    <Link to={"/materiais"}>Materiais</Link>
                </button>
            
                <div className='font-topico font-normal text-white text-lg sm:text-xl'>
                    <p>Componentes</p>
                    <p>Utilização</p>
                    <p>Valor final do projeto</p>
                </div>
            
            </div>
            <div className='sm:mt-8'>
                <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
                    <Link to={"/bibliografias"}>Bibliografia</Link>
                </button>
            
                <div className='font-topico font-normal text-white text-lg sm:text-xl'>
                    <p>Descrição</p>
                    <p>Artigos</p>
                </div>
            
            </div>
            <div className='sm:mt-8 mr-16'>
                <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
                    <Link to={"/quemsomos"}>Somos</Link>
                </button>
            
                <div className='font-topico font-normal text-white text-lg sm:text-xl'>
                    <p>Desenvolvedores</p>
                </div>
            
            </div>
        </div>
        
    </footer>
  )
}

export default Footer