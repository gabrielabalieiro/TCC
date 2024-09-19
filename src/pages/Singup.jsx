import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import iconApple from '../assets/iconsRedes/iconLogins/iconApple.svg';
import iconFace from '../assets/iconsRedes/iconLogins/iconFaceColorido.svg';
import iconGoogle from '../assets/iconsRedes/iconLogins/iconGoogle.svg';
import imgRobo from '../assets/roboImg.svg';
import confetti from 'canvas-confetti'; 
import Autenticacao from './Autenticacao';

export function Singup() {
  const [popupType, setPopupType] = useState(null); 
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const [loading, setLoading] = useState(false); 
  const [mostrarMensagemSucesso, setMostrarMensagemSucesso] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMostrarMensagemSucesso(true);

    
    setTimeout(() => {
      confetti({
        particleCount: 150,
        angle: 90,
        spread: 360,
        origin: { y: 0.6 }
      });
    }, 500);

  
    setTimeout(() => {
      setLoading(false);
      setMostrarMensagemSucesso(false);
      navigate('/'); 
    }, 3000);
  };

  const openPopup = (type) => {
    setPopupType(type);
    document.body.style.overflow = 'hidden'; 
  };

  const closePopup = () => {
    setPopupType(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <>
      <Nav />
      <main className='font-inter min-h-screen mt-14 mb-12 sm:mt-1 sm:mb-1 flex flex-col md:flex-row items-center justify-center p-6'>
        
        <div className='absolute top-20 right-2 sm:right-8 mt-8 sm:mt-4 flex items-center space-x-2'>
          <p className='text-gray'>Já tem uma conta?</p>
          <button className='text-purple text-sm font-bold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'>
            <Link to="/login">Login</Link>
          </button>
        </div>

        <div className='flex-shrink-0 mb-8 md:mb-0 md:mr-16'>
          <img
            src={imgRobo}
            alt="Imagem de um robô"
            className='md:w-[600px] w-[300px] transform transition-transform duration-1000 animate-flutter'
          />
        </div>

        <div className='md:ml-8 w-full md:w-auto px-4 md:px-0'>
          <h1 className='text-3xl text-black md:text-4xl text-center md:text-left font-singUp'>
            Bem-vindo ao Robô <span className='text-purple font-titulo'>Kids</span>
          </h1>
          <p className='text-gray mt-4 mb-12 text-center md:text-left text-lg md:text-xl'>Crie a sua conta:</p>

          <div className='max-w-md mx-auto md:mx-0'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm sm:text-xl mb-2'>Nome:</label>
                <input
                  type="name"
                  id="name"
                  placeholder='ex: Nome de usuário'
                  className='block w-full p-3 border-2 border-purple rounded'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm sm:text-xl mb-2'>E-mail:</label>
                <input
                  type="email"
                  id="email"
                  placeholder='ex: robokids@gmail.com'
                  className='block w-full p-3 border-2 border-purple rounded'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor="password" className='block text-sm sm:text-xl mb-2'>Senha:</label>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="password"
                  placeholder='********'
                  className='block w-full p-3 border-2 border-purple rounded'
                />
                <div className='mt-2 flex items-center'>
                  <input
                    type="checkbox"
                    id="mostrarSenha"
                    checked={mostrarSenha}
                    onChange={() => setMostrarSenha(!mostrarSenha)}
                    className='form-checkbox border-2 border-pink-500'
                  />
                  <label htmlFor="mostrarSenha" className='ml-2 text-sm text-pink-500'>
                    Mostrar senha
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className='text-white bg-purple font-semibold border-2 border-purple rounded-lg py-3 hover:bg-white hover:text-purple hover:border-purple transition px-6 w-32'>
                Criar
              </button>
            </form>

            <div className='mt-10'>
              <div className='flex items-center justify-center sm:justify-normal space-x-6'>
                <p className='text-gray text-lg'>Crie uma conta com</p>
                <div className='flex space-x-4'>
                  <img
                    src={iconGoogle}
                    alt="Logo do Google"
                    className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                    onClick={() => openPopup('google')}
                  />
                  <img
                    src={iconFace}
                    alt="Logo do Facebook"
                    className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                    onClick={() => openPopup('facebook')}
                  />
                  <img
                    src={iconApple}
                    alt="Logo da Apple"
                    className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                    onClick={() => openPopup('apple')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {mostrarMensagemSucesso && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-12 rounded-lg text-center max-w-lg w-full'>
              <h2 className='text-5xl font-bold text-purple mb-6'>Conta criada com sucesso!</h2>
              <p className='text-2xl text-gray-700 mb-4'>Você será redirecionado em breve...</p>
              {loading && (
                <div className='flex flex-col items-center'>
                  <div className='spinner'></div>
                </div>
              )}
            </div>
          </div>
        )}

        {popupType && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className={`relative bg-white p-6 md:p-12 rounded-lg text-center max-w-lg w-full border-2 border-${popupType}`}>
              <button
                onClick={closePopup}
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className='text-2xl font-bold mb-4'>
                Crie com...
              </h2>
              <div className='flex flex-col space-y-4'>
              <Autenticacao/>
                <p className='text-gray-500'>ou</p>
                <form className='space-y-4'>
                  <input
                    type="email"
                    placeholder='E-mail'
                    className='w-full p-3 border-2 border-gray-300 rounded'
                  />
                  <input
                    type="password"
                    placeholder='Senha'
                    className='w-full p-3 border-2 border-gray-300 rounded'
                  />
                  <button type="submit" className='hover:underline bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded w-full'>
                    Criar
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
