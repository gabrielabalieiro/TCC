import React from 'react'

import logoSite from '../assets/logoSite.svg'

function Nav() {
  return (
    <header className="bg-white shadow-lg" >
        <div className= "max-w-8xl mx-auto px-4"> 
        <div className="flex justify-between items-center" >   
        <img src={logoSite} alt="Logo do site escrito Robô Kids" className="h-8 w-auto mt-7" />
        </div>
     
            <ul>
                <li>
                    <a href="">Home</a></li>
                <li>
                    <a href="">Nosso Produto</a>
                </li>
                <li>
                    <a href="">Materiais</a>
                </li>
                <li>
                    <a href="">Bibliografias</a>
                </li>
                <li>
                    <a href="">Quem somos?</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
                <li>
                    <button>
                        <a href="">Login</a>
                    </button>
                </li>
                <li>
                    <button>
                        <a href="">Sing Up</a>
                    </button>
                </li>
            </ul>
            <hr />

        </div>
    </header>
  )
}

export default Nav