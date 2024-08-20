import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import logoSite from '../assets/logoSite.svg'
import tresLinhas from '../assets/tresLinhas.svg'

export default function Nav(){
    const[napagina, setNapagina] = useState(false)
    const location = useLocation();

  return (
    <div>
        {/*header computador */}
        <div className="bg-white p-7 " >
            <div className= "max-w-8xl mx-auto lg:block hidden"> 
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
        </div>

        <div className='md:hidden '>
            <div className='flex space-x-44'>
                <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto  my-2 " />
                <ul className='group'>
                    <button className='flex'>
                        <img src={tresLinhas} alt=""/>
                        <div className='hidden group-hover:block w-fit list-none rounded absolute'>
                            <ul>
                                <img src="" alt="" />
                                <li className={location.pathname === "/" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}><Link to={"/"}>Home</Link></li>
                                <li className={location.pathname === "/" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}><Link to={"/produto"}>Produto</Link></li>
                                <li className={location.pathname === "/" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}><Link to={"/materiais"}>Materiais</Link></li>
                                <li className={location.pathname === "/" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}><Link to={"/bibliografias"}>Bibliografias</Link></li>
                                <li className={location.pathname === "/" ? 'text-purple font-bold underline decoration-purple' : 'text-black-500 no-underline font-normal hover:text-purple hover:underline hover:font-semibold'}><Link to={"/quemsomos"}>Quem somos?</Link></li>
                                <button><Link to={"/login"}>Login</Link></button>
                                <button><Link to={"/singup"}>Sing Up</Link></button>
                            </ul>
                        </div>
                    </button>
                </ul>
            </div>
        </div>
    </div>
    )
}
