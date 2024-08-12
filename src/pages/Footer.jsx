import React from 'react'

import logo from '../assets/logoFooter.svg'
import IconEmail from '../assets/iconsRedes/emailIconAzul.svg'
import IconInsta from  '../assets/iconsRedes/instaIconAzul.svg'
import IconX from '../assets/iconsRedes/xIconAzul.svg'
import IconFace from '../assets/iconsRedes/faceIconAzul.svg'

function Footer() {
  return (
    <footer className="bg-purple py-8 flex items-center">
        <div className="container mx-auto ml-28">
            <div className="mb-4 md:mb-3.5">
                <img src={logo} alt="Logo do site escrito Robô Kids" />
            </div>
            <div className='w-[223px] border border-white'></div>
            <div className='flex items-center gap-5 mt-5'>
                <a href="">
                    <img src={IconEmail} alt="Icone do Email" />
                </a>
                <a href="">
                    <img src={IconInsta} alt="Icone do Instagram" />
                </a>
                <a href="">
                    <img src={IconX} alt="Icone do X" />
                </a>
                <a href="">
                    <img src={IconFace} alt="Icone do Facebook" />
                </a>
            </div>

        </div>

        <div className='flex gap-16 '>
            <div className='mt-8'> 
                <button className='font-paragrafo font-bold text-light-blue text-2xl no-underline hover:text-grey hover:underline'>
                    <a href="/produto">Produto</a>
                </button>
            
                <div className='font-topico font-normal text-white text-xl'>
                    <p>O que é?</p>
                    <p>Funcionamento</p>
                    <p>Desenvolvimento</p>
                </div>
            
            </div>
            <div className='mt-8'> 
                <button className='font-paragrafo font-bold text-light-blue text-2xl no-underline hover:text-grey hover:underline'>
                    <a href="/materiais">Materiais</a>
                </button>
            
                <div className='font-topico font-normal text-white text-xl'>
                    <p>Componentes</p>
                    <p>Utilização</p>
                    <p>Valor final do projeto</p>
                </div>
            
            </div>
            <div className='mt-8'>
                <button className='font-paragrafo font-bold text-light-blue text-2xl no-underline hover:text-grey hover:underline'>
                    <a href="/bibliografias">Bibliografia</a>
                </button>
            
                <div className='font-topico font-normal text-white text-xl'>
                    <p>Descrição</p>
                    <p>Artigos</p>
                </div>
            
            </div>
            <div className='mt-8 mr-16'>
                <button className='font-paragrafo font-bold text-light-blue text-2xl no-underline hover:text-grey hover:underline'>
                    <a href="/quemsomos">Somos?</a>
                </button>
            
                <div className='font-topico font-normal text-white text-xl'>
                    <p>Desenvolvedores</p>
                </div>
            
            </div>
        </div>
        
    </footer>
  )
}

export default Footer