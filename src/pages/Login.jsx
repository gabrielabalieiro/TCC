import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import logoSite from '../assets/logoSite.svg';
import iconApple from '../assets/iconsRedes/iconLogins/iconApple.svg';
import iconFace from '../assets/iconsRedes/iconLogins/iconFaceColorido.svg';
import iconGoogle from '../assets/iconsRedes/iconLogins/iconGoogle.svg';
import imgRobo from '../assets/roboImg.svg';

export function Login() {
    return (
      <>
        <Nav />
        <main className='font-inter'>
          <div className='flex justify-end p-6 gap-8'>
            <p className='text-gray hidden md:block'>Não tem uma conta?</p>
            <button className='text-purple text-sm font-semibold border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'>
              <a href="#">Sign up</a>
            </button>
          </div>
  
          <div className='flex flex-col-reverse md:flex-row justify-center items-center md:gap-12'>
            <div className='flex-shrink-0'>
              <img
                src={imgRobo}
                alt="Imagem de um robô"
                className='sm:w-[500px] w-[120px] h-[121px] transform transition ease-in-out duration-1000 float-effect'
              />
            </div>
  
            <div className='text-center md:text-left'>
              <h1 className='font-singUp mb-4 text-2xl'>Bem vindo ao</h1>
              <img
                src={logoSite}
                alt="Logo da marca Robô Kids"
                className='mx-auto md:mx-0'
              />
              <p className='text-gray my-4 text-base mb-5'>Insira suas informações de login:</p>
  
              <div className='max-w-sm mx-auto md:mx-0'>
                <div>
                  <label htmlFor="email" className='block mt-4 mb-2'>E-mail:</label>
                  <input
                    type="text"
                    id="email"
                    placeholder='ex: robokids@gmail.com'
                    className='block w-full p-2 border-2 border-purple rounded'
                  />
                </div>
  
                <div>
                  <label htmlFor="password" className='block mt-4 mb-2 text-base'>Senha:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder='********'
                    className='block w-full p-2 border-2 border-purple rounded'
                  />
                </div>
  
                <div className='w-full py-2 px-4 pt-8'>
                  <button className='text-white bg-purple font-semibold border-2 border-indigo-500 rounded-lg px-7 hover:bg-white hover:text-purple hover:border-purple'>
                    Criar
                  </button>
                </div>
  
                <div className='flex justify-center space-x-4 mt-4'>
                  <img
                    src={iconGoogle}
                    alt="Logo do Google"
                    className='cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110'
                  />
                  <img
                    src={iconFace}
                    alt="Logo do Facebook"
                    className='cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110'
                  />
                  <img
                    src={iconApple}
                    alt="Logo da Apple"
                    className='cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110'
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  