import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"

import logoSite from '../assets/logoSite.svg'
import iconApple from '../assets/iconsRedes/iconLogins/iconApple.svg'
import iconFace from '../assets/iconsRedes/iconLogins/iconFaceColorido.svg'
import iconGoogle from '../assets/iconsRedes/iconLogins/iconGoogle.svg'
import imgRobo from '../assets/roboImg.svg'

export function Singup() {
  return (
    <body>
        <Nav/>
        <main className='font-inter'>
            <div className='flex justify-end p-6'>
                <p className='text-gray mr-2'>Já tem uma conta?</p>
                <button className='text-purple text-sm font-semibold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'> <a href="/login">Login</a></button>
            </div>

            <div className='text-center mb-6 pl-[150px]'>
            <img src={imgRobo} alt="Imagem de um robô " className='w-[600px] transform transition ease-in-out duration-1000 hover:translate-x-3' />
            </div>
          
        
                <div className='text-center -translate-y-[650px] pl-[150px]'>
                    <h1 className='font-singUp  mb-4 text-center text-2xl pl-[107px] '>Bem vindo ao</h1>
                    <img src={logoSite} alt="Logo da marca Robô Kids" className='flex justify-center mr-10 pl-[740px] -translate-y-14'/>
                    </div>
                <p className='text-gray  my-4 text-base pl-[730px] -translate-y-[720px] mt-8'>Insira as suas informações de login:</p>
                
                <div className='max-w-sm mx-auto -translate-y-[700px] ml-[730px]'>
                
                
                  
                

                <div>
                    <label htmlFor="email" className='block mt-4 mb-2'>E-mail ou User:</label>
                    <input type="text" placeholder='ex:robokids@gmail.com' className='block w-full p-2 border-solid border-2 border-purple rounded'/>
                </div>

                <div>
                    <label htmlFor="password" className='block mt-4 mb-2 text-base'>Senha:</label>
                    <input type="text" placeholder='********' className='block w-full p-2 border-solid border-2 border-purple rounded ' />
                </div>
                

                <div className='w-full py-2px-4 pt-8'>
                    <button className='text-white bg-purple font-semibold border-solid border-2 border-indigo-500 rounded-lg px-7 hover:bg-white hover:text-purple hover:border-purple'>Login</button>
                </div>

                <div className='flex justify-center space-x-6 mt-10 mr-[130px] '>
                    <p className='text-gray mb-10 p-3 px-0 '>Entre com</p>
                    <img src={iconGoogle} alt="Logo do Google" className='mr-4 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110' />
                    <img src={iconFace} alt="Logo do Facebook" className='mr-4 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110' />
                    <img src={iconApple} alt="Logo da Apple" className='mr-4 mb-12 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </div>
            </div>
        </main>
        <Footer/>
    </body>
  )
}
