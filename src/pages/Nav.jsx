import React from 'react'
import { Link } from 'react-router-dom'
import logoSite from '../assets/logoSite.svg'

function Nav() {
  return (
    <header className="bg-white p-7 " >
        <div className= "max-w-8xl mx-auto "> 
        <div className="flex justify-between items-center" >   
        <img src={logoSite} alt="Logo do site escrito Robô Kids" className="h-6 w-auto  my-2 " />
       
     
            <ul className= "text-sm flex space-x-9 " >
                <li className="text-violet-500 font-semibold underline decoration-purple hover:text-purple "  >
                <a href="/">Home</a>
                </li>
                <li className="text-black-500 hover:text-purple no-underline hover:underline font-normal hover:font-semibold">
                    <a href="/produto">Produto</a>
                </li>
                <li className=" text-black-500 hover:text-purple no-underline hover:underline decoration-purple font-normal hover:font-semibold">
                    <a href="/materiais">Materiais</a>
                </li >
                <li className="text-black-500 hover:text-purple no-underline hover:underline  decoration-purple font-normal hover:font-semibold">
                    <a href="/bibliografias">Bibliografias</a>
                </li>
                <li className="text-black-500 hover:text-purple no-underline hover:underline  decoration-purple font-normal hover:font-semibold">
                    <a href="/quemsomos">Quem somos?</a>
                </li>
               
                <li className="text-violet-500 hover:text-purple no-underline hover:underline  decoration-purple font-normal hover:font-semibold border-solid border-2 border-indigo-500 rounded px-5">
                    <button>
                        <a href="#">Login</a>
                    </button>
                </li>
                <li className="text-white no-underline hover:underline  decoration-purple font-normal hover:font-semibold bg-purple border-solid border-indigo-500 rounded px-5 ">
                    <button>
                        <a href="#">Sing Up</a>
                    </button>
                </li>
            </ul>
            </div>
            <hr />
        </div>
    </header>
  )
}

export default Nav