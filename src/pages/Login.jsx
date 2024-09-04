import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import iconApple from '../assets/iconsRedes/iconLogins/iconApple.svg';
import iconFace from '../assets/iconsRedes/iconLogins/iconFaceColorido.svg';
import iconGoogle from '../assets/iconsRedes/iconLogins/iconGoogle.svg';
import imgRobo from '../assets/roboImg.svg';
import confetti from 'canvas-confetti';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarMensagemSucesso, setMostrarMensagemSucesso] = useState(false);
    const [popupAtivo, setPopupAtivo] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && senha) {
            setLoading(true);
            setMostrarMensagemSucesso(true);

            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    angle: 90,
                    spread: 360,
                    origin: { y: 0.6 },
                });
            }, 500);

            setTimeout(() => {
                setLoading(false);
                setMostrarMensagemSucesso(false);
                navigate('/home');
            }, 3000);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    const abrirPopup = (tipo) => {
        setPopupAtivo(tipo);
    };

    const fecharPopup = () => {
        setPopupAtivo(null);
    };

    return (
        <>
            <Nav />
            <main className='font-inter min-h-screen mt-14 mb-12 sm:mt-1 sm:mb-1 flex flex-col md:flex-row items-center justify-center p-6'>
                <div className='absolute top-20 right-2 sm:right-8 mt-8 sm:mt-4 flex items-center space-x-2'>
                    <p className='text-gray'>Não tem uma conta? </p>
                    <button className='text-purple text-sm font-bold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'>
                        <Link to="/signup">Sign Up</Link>
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
                    <p className='text-gray mt-4 mb-12 text-center md:text-left text-lg md:text-xl'>
                        Insira as suas informações de login:
                    </p>

                    <div className='max-w-md mx-auto md:mx-0'>
                        <form onSubmit={handleLogin}>
                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-sm sm:text-xl mb-2'>E-mail ou User:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='ex: robokids@gmail.com'
                                    className='block w-full p-3 border-2 border-purple rounded'
                                />
                            </div>

                            <div className='mb-6'>
                                <label htmlFor="senha" className='block text-sm sm:text-xl mb-2'>Senha:</label>
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    id="senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
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
                                Login
                            </button>
                        </form>

                        <div className='mt-10'>
                            <div className='flex items-center justify-center sm:justify-normal space-x-6'>
                                <p className='text-gray text-lg'>Entre com</p>
                                <div className='flex space-x-4'>
                                    <img
                                        src={iconGoogle}
                                        alt="Logo do Google"
                                        className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                                        onClick={() => abrirPopup('google')}
                                    />
                                    <img
                                        src={iconFace}
                                        alt="Logo do Facebook"
                                        className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                                        onClick={() => abrirPopup('facebook')}
                                    />
                                    <img
                                        src={iconApple}
                                        alt="Logo da Apple"
                                        className='cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out transform hover:scale-110'
                                        onClick={() => abrirPopup('apple')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {mostrarMensagemSucesso && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                        <div className='bg-white p-12 rounded-lg text-center max-w-lg w-full'>
                            <h2 className='text-5xl font-bold text-purple mb-6'>Login realizado com sucesso!</h2>
                            <p className='text-2xl text-gray-700 mb-4'>Você será redirecionado em breve...</p>
                            {loading && (
                                <div className='flex flex-col items-center'>
                                    <div className='spinner'></div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {popupAtivo && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                        <div className={`bg-white p-6 rounded-lg max-w-md w-full border-4 ${
                            popupAtivo === 'google' ? 'border-red-500' :
                            popupAtivo === 'facebook' ? 'border-blue-600' : 'border-gray-900'
                            }`}>
                            <div className='text-center mb-4'>
                                <h2 className='text-2xl font-semibold'>Selecione sua conta</h2>
                                <p className='text-lg text-gray-700'>Escolha sua conta</p>
                            </div>

                            <div className='text-center mb-4'>
                                <button
                                    className='bg-gray-200 text-black rounded-lg py-3 px-6 flex items-center justify-center w-full mb-4'>
                                    <img src={iconGoogle} alt="Google Icon" className='w-5 h-5 mr-2' />
                                    Continuar com Google
                                </button>

                                <div className='flex items-center justify-center text-gray-500 mb-4'>
                                    <hr className='w-1/4' />
                                    <span className='mx-2'>ou</span>
                                    <hr className='w-1/4' />
                                </div>

                                <div className='mb-4'>
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        className='block w-full p-3 border-2 border-gray-300 rounded mb-4'
                                    />
                                    <input
                                        type="password"
                                        placeholder='Senha'
                                        className='block w-full p-3 border-2 border-gray-300 rounded'
                                    />
                                </div>

                                <button className='bg-blue-500 text-white rounded-lg py-3 px-6 w-full'>
                                    Logar com Email
                                </button>
                            </div>

                            <button onClick={fecharPopup} className='text-red-500 mt-4'>Fechar</button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
