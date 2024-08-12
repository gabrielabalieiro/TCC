import React from 'react'

import logo from '../assets/logoFooter.svg'
import IconEmail from '../assets/iconsRedes/emailIconAzul.svg'
import IconInsta from  '../assets/iconsRedes/instaIconAzul.svg'
import IconX from '../assets/iconsRedes/xIconAzul.svg'
import IconFace from '../assets/iconsRedes/faceIconAzul.svg'

function Footer() {
  return (
    <footer className="bg-purple-700 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo do site escrito Robô Kids" className="h-6 w-6" />
            </div>
            <a href="">
                <img src={IconEmail} alt="Icone do Email" className="h-6 w-6" />
            </a>
            <a href="">
                <img src={IconInsta} alt="Icone do Instagram" className="h-6 w-6" />
            </a>
            <a href="">
                <img src={IconX} alt="Icone do X" className="h-6 w-6" />
            </a>
            <a href="">
                <img src={IconFace} alt="Icone do Facebook" className="h6 w-6" />
            </a>

        </div>
        <div>
            <a href="">Nosso Produto</a>
            <p>O que é?</p>
            <p>Funcionamento</p>
            <p>Desenvolvimento</p>
        </div>
        <div>
            <a href="">Materiais</a>
            <p>Componentes</p>
            <p>Utilização</p>
            <p>Valor final do projeto</p>
        </div>
        <div>
            <a href="">Bibliografia</a>
            <p>Descrição</p>
            <p>Artigos</p>
        </div>
        <div>
            <a href="">Quem somos?</a>
            <p>Desenvolvedores</p>
        </div>
    </footer>
  )
}

export default Footer