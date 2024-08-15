import React from 'react'
import logoSite from '../assets/logoSite.svg'
import iconApple from '../assets/iconsRedes/iconLogins/iconApple.svg'
import iconFace from '../assets/iconsRedes/iconLogins/iconFaceColorido.svg'
import iconGoogle from '../assets/iconsRedes/iconLogins/iconGoogle.svg'
import imgRobo from '../assets/roboImg.svg'

export default function Singup() {
  return (
    <body>
        <main className='font-inter'>
            <div className='flex justify-end p-6'>
                <p className='text-light-grey mr-2'>Já tem uma conta?</p>
                <button className='text-purple text-sm font-semibold border-solid border-2 border-indigo-500 rounded px-5'>Login</button>
            </div>

            <div className='text-center mb-6'>
            <img src={imgRobo} alt="Imagem de um robô" />
            </div>
          
        
                <div className='text-center'>
                    <h1 className='font-titulo  mb-4 text-center'>Bem vindo ao</h1>
                    <img src={logoSite} alt="Logo da marca Robô Kids" className='flex justify-center mr-10'/>
                    </div>
                <p className='text--grey text-center my-4 text-base '>Crie a sua conta:</p>
                
                <div className='max-w-sm mx-auto '>
                    <label htmlFor="text" className='block mb-2'>Nome:</label>
                    <input type="text" placeholder='Nome de usuário' className='placeholder:font-inter placeholder:text-sm placeholder:text-grey block w-full p-2 border border-purple-300 rounded '/>
                

                <div>
                    <label htmlFor="email" className='block mt-4 mb-2'>E-mail:</label>
                    <input type="text" placeholder='ex:robokids@gmail.com' className='block w-full p-2 border-2 border-purple-300 rounded'/>
                </div>

                <div>
                    <label htmlFor="password" className='block mt-4 mb-2 '>Senha:</label>
                    <input type="text" placeholder='********' className='block w-full p-2 border-solid border-2 border-purple rounded' />
                </div>
                

                <div className='flex justify-center mt-8 pl-6'>
                    <button className='text-white bg-purple font-semibold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-white hover:text-purple hover:border-purple'>Criar</button>
                </div>

                <div className='flex justify-center space-x-6 mt-10'>
                    <p className='text-gray mr-2 mb-10 p-3'>Crie uma conta com</p>
                    <img src={iconGoogle} alt="Logo do Google" className='mr-2 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110' />
                    <img src={iconFace} alt="Logo do Facebook" className='mr-2 mb-10 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110' />
                    <img src={iconApple} alt="Logo da Apple" className='mr-2 mb-11 cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110'/>
                </div>
            </div>
        </main>
    </body>
  )
}
