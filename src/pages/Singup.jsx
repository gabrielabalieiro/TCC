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
            <div className='flex'>
                <p className='text-light-grey mr-2'>Já tem uma conta?</p>
                <button className='text-purple text-sm font-semibold border-solid border-2 border-indigo-500 rounded px-5'>Login</button>
            </div>

            <img src={imgRobo} alt="Imagem de um robô" />

            <div>
                <div className='flex'>
                    <h1 className='font-titulo'>Bem vindo ao</h1>
                    <img src={logoSite} alt="Logo da marca Robô Kids"/>
                </div>

                <p className='text-light-grey'>Crie a sua conta</p>
                
                <div>
                    <label htmlFor="text">Nome:</label>
                    <input type="text" placeholder='Nome de usuário' className='placeholder:font-inter placeholder:text-xs placeholder:text-light-grey'/>
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" placeholder='ex:robokids@gmail.com'/>
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="text" placeholder='********' />
                </div>

                <div>
                    <button className='text-white bg-purple font-semibold border-solid border-2 border-indigo-500 rounded px-5'>Criar</button>
                </div>

                <div className='flex items-center'>
                    <p className='text-light-grey mr-6'>Crie uma conta com</p>
                    <img src={iconGoogle} alt="Logo do Google" className='mr-2' />
                    <img src={iconFace} alt="Logo do Facebook" className='mr-2' />
                    <img src={iconApple} alt="Logo da Apple" className=''/>
                </div>
            </div>
        </main>
    </body>
  )
}
