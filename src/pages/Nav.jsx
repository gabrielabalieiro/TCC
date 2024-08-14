import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import logoSite from '../assets/logoSite.svg'

export default function Nav(){
    const[napagina, setNapagina] = useState(false)

    function handleNapagina(){
        setNapagina(true)
    }

  return (
    <header className="bg-white p-7 " >
        <div className= "max-w-8xl mx-auto "> 
        <div className="flex justify-between items-center" >   
        <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto  my-2 " />
       
        <ul className= "text-sm flex space-x-9 " >
                <li className={napagina==true? 'text-purple font-bold underline decoration-purple':'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button onClick={handleNapagina} >
                        <a href="/" >Home</a>
                    </button>
                </li>
                <li className={napagina==true? 'text-purple font-bold underline decoration-purple':'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button onClick={handleNapagina}>
                        <a href="/produto">Produto</a>
                    </button>
                </li>
                <li className={napagina==true? 'text-purple font-bold underline decoration-purple':'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button onClick={handleNapagina}>
                        <a href="/materiais">Materiais</a>
                    </button>
                </li >
                <li className={napagina==true? 'text-purple font-bold underline decoration-purple':'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button onClick={handleNapagina}>
                        <a href="/bibliografias">Bibliografias</a>
                    </button>
                </li>
                <li className={napagina==true? 'text-purple font-bold underline decoration-purple':'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button onClick={handleNapagina}>
                        <a href="/quemsomos">Quem somos?</a>
                    </button>
                </li>

                <li className="text-purple-500 font-normal hover:font-semibold   border-solid border-2 border-purple-600 border-transparent transition ease-in-out duration-150 hover:bg-purple hover:text-white hover:border-purple  rounded px-5">
                    <button>
                        <a href="/login">Login</a>
                    </button>
                </li>
                <li className="text-white  font-normal hover:font-semibold border-solid border-2 bg-purple border-purple transition ease-in-out duration-150 hover:bg-white hover:text-purple hover:border-purple  rounded px-5 ">
                    <button>
                        <a href="/singup">Sing Up</a>
                    </button>
                </li>
            </ul> 
            
            </div>
            <hr />
        </div>
    </header>
    )
}
