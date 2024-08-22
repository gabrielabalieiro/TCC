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
        <main className='font-inter min-h-screen flex flex-col md:flex-row items-center justify-center p-6'>
          
          {/* Adjusting the position of "Já tem uma conta?" and Login button with extra space */}
          <div className='absolute top-20 right-8 mt-4 flex items-center space-x-2'>
            <p className='text-gray'>Já tem uma conta?</p>
            <button className='text-purple text-sm font-bold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'>
              <a href="/login">Login</a>
            </button>
          </div>
  
          {/* Main content area */}
          <div className='flex-shrink-0 mb-8 md:mb-0 md:mr-16'>
            <img
              src={imgRobo}
              alt="Imagem de um robô"
              className='md:w-[600px] w-[300px] transform transition ease-in-out duration-1000'
            />
          </div>

          <div className='md:ml-8 w-full md:w-auto px-4 md:px-0'>
            <h1 className='text-3xl md:text-5xl font-semibold text-center md:text-left font-singUp'>
              Bem vindo ao <span className='text-indigo-500'>Robô</span> kids
            </h1>
            <p className='text-gray-600 mt-4 mb-6 text-center md:text-left text-lg md:text-xl'>Crie a sua conta:</p>

            <div className='max-w-md mx-auto md:mx-0'>
              <form>
                <div className='mb-4'>
                  <label htmlFor="name" className='block text-sm mb-2'>Nome:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder='Nome de usuário'
                    className='block w-full p-3 border-2 border-purple rounded'
                  />
                </div>

                <div className='mb-4'>
                  <label htmlFor="email" className='block text-sm mb-2'>E-mail:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder='ex: robokids@gmail.com'
                    className='block w-full p-3 border-2 border-purple rounded'
                  />
                </div>

                <div className='mb-6'>
                  <label htmlFor="password" className='block text-sm mb-2'>Senha:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder='********'
                    className='block w-full p-3 border-2 border-purple rounded'
                  />
                </div>

                <button
                  type="submit"
                  className='w-full text-white bg-purple font-semibold border-2 border-purple rounded-lg py-3 hover:bg-white hover:text-purple hover:border-purple transition'> Criar
                </button>
              </form>

              {/* Social media login section */}
              <div className='flex justify-center items-center mt-10 space-x-4'>
                <p className='text-gray-600 text-lg'>Entre com</p>
                <img
                  src={iconGoogle}
                  alt="Logo do Google"
                  className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                />
                <img
                  src={iconFace}
                  alt="Logo do Facebook"
                  className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                />
                <img
                  src={iconApple}
                  alt="Logo da Apple"
                  className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                />
              </div>
            </div>
          </div>
          
        </main>
        <Footer />
      </>
    );
}

