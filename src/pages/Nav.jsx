import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import logoSite from '../assets/logoSite.svg'

export default function Nav(){
    const[napagina, setNapagina] = useState(false)
    const location = useLocation();

  return (
    <header className="bg-white p-7 " >
        <div className= "max-w-8xl mx-auto "> 
        <div className="flex justify-between items-center" >   
        <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto  my-2 " />
       
        <ul className= "text-sm flex space-x-9 " >
                <li className={location.pathname === "/" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button >
                        <Link to={"/"}>Home</Link>
                    </button>
                </li>
                <li className={location.pathname === "/produto" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button>
                        <Link to={"/produto"}>Produto</Link>
                    </button>
                </li>
                <li className={location.pathname === "/materiais" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button>
                        <Link to={"/materiais"}>Materias</Link>
                    </button>
                </li >
                <li className={location.pathname === "/bibliografias" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button >
                        <Link to={"/bibliografias"}>Bibliografias</Link>
                    </button>
                </li>
                <li className={location.pathname === "/quemsomos" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}>
                    <button>
                        <Link to={"/quemsomos"}>Quem somos?</Link>
                    </button>
                </li>

                <li className="text-purple-500 font-normal hover:font-semibold   border-solid border border-purple border-transparent transition ease-in-out duration-150 hover:bg-purple hover:text-white hover:border-purple  rounded px-5">
                    <button>
                       <Link to={"/login"}>Login</Link>
                    </button>
                </li>
                <li className="text-white  font-normal hover:font-semibold border-solid border-2 bg-purple border-purple transition ease-in-out duration-150 hover:bg-white hover:text-purple hover:border-purple  rounded px-5 ">
                    <button>
                        <Link to={"/singup"}>Sing Up</Link>
                    </button>
                </li>
            </ul> 
            
            </div>
            <hr className="border-1 border-purple-500"/>
        </div>
    </header>
    )
}
