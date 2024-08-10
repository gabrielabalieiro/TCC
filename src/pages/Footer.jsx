import React from 'react'

import logo from '../assets/logoFooter.svg'
import IconEmail from '../assets/iconsRedes/emailIconAzul.svg'
import IconInsta from  '../assets/iconsRedes/instaIconAzul.svg'
import IconX from '../assets/iconsRedes/xIconAzul.svg'
import IconFace from '../assets/iconsRedes/faceIconAzul.svg'

function Footer() {
  return (
    <footer>
        <div>
            <img src={logo} alt="Logo do site escrito Robô Kids" />
            <hr />
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