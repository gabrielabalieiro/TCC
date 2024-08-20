import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"
import logoSite from '../assets/logoSite.svg'
import iconApple from '../assets/iconsRedes/iconLogins/iconApple.svg'
import iconFace from '../assets/iconsRedes/iconLogins/iconFaceColorido.svg'
import iconGoogle from '../assets/iconsRedes/iconLogins/iconGoogle.svg'
import imgRobo from '../assets/roboImg.svg'

export function Login() {
  return (
    <body>
        <Nav/>
        <main className='font-inter'>
            <div className='flex justify-end p-6 gap-8'>
                <p className='text-gray '>Não tem uma conta?</p>
                <button className='text-purple text-sm font-semibold border-solid border-2 border-indigo-500 rounded px-5  hover:bg-purple hover:text-white hover:border-purple mr-[50px]'> <a href=""></a>Sing up</button>
            </div>

            <div className='text-center mb-6 pl-[150px]'>
            <img src={imgRobo} alt="Imagem de um robô " className='sm:w-[600px] w-[120px] h-[121px]transform transition ease-in-out duration-1000 float-effect' />
            </div>
          
        
                <div className='text-center -translate-y-[650px] pl-[70px]'>
                    <h1 className='font-singUp  mb-4 text-center text-2xl pr-[370px] '>Bem vindo ao</h1>
                    <img src={logoSite} alt="Logo da marca Robô Kids" className='flex justify-center mr-10 pl-[820px] -translate-y-14'/>
                    </div>
                <p className='text-gray  my-4 text-base pl-[727px] -translate-y-[700px] mb-5'>Insira suas informações de login:</p>
                
                <div className='max-w-sm mx-auto -translate-y-[700px] ml-[730px]'>
                
                

                <div>
                    <label htmlFor="email" className='block mt-4 mb-2'>E-mail:</label>
                    <input type="text" placeholder='ex:robokids@gmail.com' className='block w-full p-2 border-solid border-2 border-purple rounded'/>
                </div>

                <div>
                    <label htmlFor="password" className='block mt-4 mb-2 text-base'>Senha:</label>
                    <input type="text" placeholder='********' className='block w-full p-2 border-solid border-2 border-purple rounded ' />
                </div>
                

                <div className='w-full py-2px-4 pt-8'>
                    <button className='text-white bg-purple font-semibold border-solid border-2 border-indigo-500 rounded-lg px-7 hover:bg-white hover:text-purple hover:border-purple'>Criar</button>
                </div>

                <div className='flex justify-center space-x-6 mt-12 mr-16'>
                    <p className='text-gray '>Crie uma conta com</p>
                    <img src={iconGoogle} alt="Logo do Google" className='mr-2 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110' />
                    <img src={iconFace} alt="Logo do Facebook" className='mr-2 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110' />
                    <img src={iconApple} alt="Logo da Apple" className='mr-2 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </div>
            </div>
        </main>
        <Footer/>
    </body>
  )
}
