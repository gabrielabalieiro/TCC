import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"
import CProduto from './carrosel/CProduto'

import numeroUm from '../assets/iconsRedes/iconsNumero/iconUm.svg'
import numeroDois from '../assets/iconsRedes/iconsNumero/iconDois.svg'
import numeroTres from '../assets/iconsRedes/iconsNumero/iconTres.svg'
import numeroQuatro from '../assets/iconsRedes/iconsNumero/iconQuatro.svg'
import numeroCinco from '../assets/iconsRedes/iconsNumero/iconCinco.svg'

import lupaBranca from '../assets/iconsRedes/iconLupa/iconLupaBranca.svg'
import lupaRoxa from '../assets/iconsRedes/iconLupa/iconLupaRoxo.svg'

import imgPrimeiraFase from '../assets/iconsRedes/image_primeira_fase.svg'

export function Nossoproduto() {
  return (
    <div>
        <Nav/>
            <div className="min-h-screen flex justify-center items-center">
        <section className=" p-8 rounded-lg  max-w-6xl w-full">
            <div className=" grid grid-cols-2 gap-8 items-center ">
            <div>
                <h1 className='text-purple text-5xl font-semibold font-titulo mb-10 '>Robô Kids</h1>
                <p className="font-paragrafo text-justify mb-5 text-lg">O projeto consiste em um protótipo desenvolvido através da plataforma Arduíno, com comunicação via Wi-Fi e uma tela touch screen, a partir dela, a criança conseguirá interagir com o Robô Kids, que irá realizar perguntas sobre a matéria de matemática a partir da idade da criança, com isso conseguirá selecionar a resposta da pergunta realizada.
                </p>
                <p className="font-paragrafo text-justify mb-5 text-lg" > Além disso, um aplicativo ligado ao robô, lista todos os acertos e erros conforme as perguntas realizadas pelo robô para aprendizagem, com o objetivo de ajudar e facilitar o uso aos pais para que possam acompanhar o desenvolvimento educativo de seu filho, podendo observar através de dados quais são as dificuldades que a criança apresenta na matéria de matemática. E o mais importante para que ajude as crianças a aprenderem e adquirirem mais conhecimentos</p>
                </div>
                <div className=" flex justify-center">
                <CProduto/>
                </div>  
            </div>
        
        <section className="py-20">
                <div className='flex items-center'>
                    <h2 className='text-purple text-3xl font-titulo my-14 font-normal whitespace-nowrap mr-12'>Funcionamento</h2>
                    <hr className='w-[850px] border-purple' />
                </div>
                
                <div className='flex items-start mt-10'>
                

                <div className='flex items-start'>
                <div className='mr-8'>
                <p className='font-topico text-purple text-2xl  mb-5  mr-5'>Guia de utilização</p>
                </div>
                </div>
                
                
                <div className='ml-auto space-y-9 w-2/3 text-justify pr-8 '>
                <div className='flex items-start space-x-4'>
                    <img src={numeroUm} alt="número 1" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 1</p>
                    <p className='text-grey-popup font-topico'>Na tela inicial, escolha entre diferentes modos de aprendizado (por exemplo, “Números Básicos”, “Operações Simples”, etc.). O robô apresentará questões matemáticas adequadas à faixa etária da criança.</p>
                    </div>
                </div>

                <div className='flex items-start space-x-4'>
                    <img src={numeroDois} alt="número 2" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 2</p>
                    <p className='text-grey-popup font-topico'>A criança pode tocar nos botões na tela para responder às perguntas. O robô fornecerá feedback imediato sobre cada resposta, incentivando o aprendizado e a correção de erros.</p>
                    </div>
                    </div>

                <div className='flex items-start space-x-4'>
                    <img src={numeroTres} alt="número 3" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 3</p>
                    <p className='text-grey-popup font-topico'>Baixe o aplicativo complementar no smartphone ou tablet. Use o código de sincronização exibido no robô para conectar o perfil da criança ao aplicativo. Isso permitirá que os pais acompanhem o desenvolvimento e as conquistas da criança em tempo real.</p>
                    </div>
                    </div>

               
                <div className='flex items-start space-x-4'>
                    <img src={numeroQuatro} alt="número 4" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 4</p>
                    <p className='text-grey-popup font-topico'>Para garantir um uso saudável do robô, os pais podem estabelecer limites de tempo diários ou semanais para as sessões de aprendizado.</p>
                    </div>
                    
                   
                </div>
                <div className='flex items-start space-x-4'>
                    <img src={numeroCinco} alt="número 5" className='w-10 h-10'/>
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 5</p>
                    <p className='text-grey-popup font-topico'>O robô também pode enviar relatórios semanais para o aplicativo dos pais, sugerindo atividades ou áreas para fortalecer o aprendizado da criança, baseado no desempenho observado.</p>
                    </div>
                </div>
        
                 </div>
                
                 </div>
                 <section>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='text-purple text-3xl font-titulo my-14 font-normal mr-12'>Desenvolvimento</h1>
                            <hr className='w-[850px] border-purple' />
                        </div>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-5 gap-4'>
                            
                    </div>
                    </div>

                    <div className='flex justify-center px-0 mb-8 gap-4 '>       
                            <div className="w-56 h-48 rounded-lg border-2 border-purple overflow-hidden flex flex-col items-center justify-between p-4 bg-white transition-opacity duration-300 hover:opacity-50">
                            <div className="flex flex-grow justify-center items-center">
                            <img className="w-22 h-21" src={lupaRoxa} alt="Lupa Roxa"/></div>
                            <div className="text-purple text-2xl font-normal font-titulo">Primeira Fase</div>
                        </div>

                        <div className="w-56 h-48 rounded-lg border-2 border-purple overflow-hidden flex flex-col items-center justify-between p-4 bg-white transition-opacity duration-300 hover:opacity-50">
                            <div className="flex flex-grow justify-center items-center">
                            <img className="w-22 h-21" src={lupaRoxa} alt="Lupa Roxa"/></div>
                            <div className="text-purple text-2xl font-normal font-titulo">Segunda Fase</div>
                        </div>


                        <div className="w-56 h-48 rounded-lg border-2 border-purple overflow-hidden flex flex-col items-center justify-between p-4 bg-white transition-opacity duration-300 hover:opacity-50">
                            <div className="flex flex-grow justify-center items-center">
                            <img className="w-22 h-21" src={lupaRoxa} alt="Lupa Roxa"/></div>
                            <div className="text-purple text-2xl font-normal font-titulo">Terceira Fase</div>
                        </div>


                        <div className="w-56 h-48 rounded-lg border-2 border-purple overflow-hidden flex flex-col items-center justify-between p-4 bg-white transition-opacity duration-300 hover:opacity-50">
                            <div className="flex flex-grow justify-center items-center">
                            <img className="w-22 h-21" src={lupaRoxa} alt="Lupa Roxa"/></div>
                            <div className="text-purple text-2xl font-normal font-titulo">Quarta Fase</div>
                        </div>


                        <div className="w-56 h-48 rounded-lg border-2 border-purple overflow-hidden flex flex-col items-center justify-between p-4 bg-white transition-opacity duration-300 hover:opacity-50">
                            <div className="flex flex-grow justify-center items-center">
                            <img className="w-22 h-21" src={lupaRoxa} alt="Lupa Roxa"/></div>
                            <div className="text-purple text-2xl font-normal font-titulo">Fase Final</div>
                        </div>
                    </div>

                        <div className='flex items-start'>
                            <div className='mr-8'>
                            <p className='font-topico text-purple text-2xl  mb-5  mr-5'>Primeira Fase</p>
                            </div>
                        </div>

                        <div className='w-full max-w-[600px]'>
                            <img src={imgPrimeiraFase} alt="arduino"className='absolute right-44 -translate-y-14 w-72 h-512' />
                            <p className="font-paragrafo text-lg text-center text-justify"> A primeira fase na produção do robô é a decisão das peças e componentes que serão utilizados. Essa etapa é crucial para definir a base do projeto, garantindo que todos os componentes escolhidos sejam compatíveis entre si e atendam aos requisitos do robô.
                            </p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
        <Footer/>
    </div>
  )
}
