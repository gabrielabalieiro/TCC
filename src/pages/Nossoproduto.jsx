import React from 'react'

import numeroUm from '../assets/iconsRedes/iconsNumero/iconUm.svg'
import numeroDois from '../assets/iconsRedes/iconsNumero/iconDois.svg'
import numeroTres from '../assets/iconsRedes/iconsNumero/iconTres.svg'
import numeroQuatro from '../assets/iconsRedes/iconsNumero/iconQuatro.svg'
import numeroCinco from '../assets/iconsRedes/iconsNumero/iconCinco.svg'

import lupaBranca from '../assets/iconsRedes/iconLupa/iconLupaBranca.svg'
import lupaRoxa from '../assets/iconsRedes/iconLupa/iconLupaRoxo.svg'

import imgPrimeiraFase from '../assets/iconsRedes/image_primeira_fase.svg'

export default function Nossoproduto() {
  return (
    <main className="min-h-screen flex justify-center items-center">
        <section className=" p-8 rounded-lg  max-w-6xl w-full">
            <div className=" grid grid-cols-2 gap-8 items-center ">
            <div>
                <h1 className='text-purple text-5xl font-semibold font-titulo mb-10 '>Robô Kids</h1>
                <p className="font-paragrafo text-justify mb-5 text-lg">O projeto consiste em um protótipo desenvolvido através da plataforma Arduíno, com comunicação via Wi-Fi e uma tela touch screen, a partir dela, a criança conseguirá interagir com o Robô Kids, que irá realizar perguntas sobre a matéria de matemática a partir da idade da criança, com isso conseguirá selecionar a resposta da pergunta realizada.
                </p>
                <p className="font-paragrafo text-justify mb-5 text-lg" > Além disso, um aplicativo ligado ao robô, lista todos os acertos e erros conforme as perguntas realizadas pelo robô para aprendizagem, com o objetivo de ajudar e facilitar o uso aos pais para que possam acompanhar o desenvolvimento educativo de seu filho, podendo observar através de dados quais são as dificuldades que a criança apresenta na matéria de matemática. E o mais importante para que ajude as crianças a aprenderem e adquirirem mais conhecimentos</p>
                </div>
                <div className=" flex justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zuPaaOjXNWaQ1GOvPlmx_R29RHfR5GEjbw&s" alt="" className=" flex items-center w-80  h-130 rounded-lg shadow-2xl ml-20 " />
                </div>  
            </div>
        
        <section className="py-20">
                <div className='flex items-center'>
                    <h2 className='text-purple text-3xl font-titulo my-14 font-normal whitespace-nowrap mr-12'>Funcionamento</h2>
                    <hr className='w-[800px] border-purple' />
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
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                    </div>
                </div>

                <div className='flex items-start space-x-4'>
                    <img src={numeroDois} alt="número 2" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 2</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                    </div>
                    </div>

                <div className='flex items-start space-x-4'>
                    <img src={numeroTres} alt="número 3" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 3</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                    </div>
                    </div>

               
                <div className='flex items-start space-x-4'>
                    <img src={numeroQuatro} alt="número 4" className='w-10 h-10' />
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 4</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                    </div>
                    
                   
                </div>
                <div className='flex items-start space-x-4'>
                    <img src={numeroCinco} alt="número 5" className='w-10 h-10'/>
                    <div>
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 5</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cumque adipisci est ipsum facere quidem odio repudiandae fugiat explicabo, modi voluptatibus dolores alias excepturi nobis. At doloremque perspiciatis officia dolorem?</p>
                    </div>
                </div>
        
                 </div>
                
                 </div>
                 <section>
                    <div>
                        <h1 className='text-purple text-3xl font-titulo my-14 font-normal mr-1'>Desenvolvimento</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-5 gap-4'>
                    </div>
                    </div>
                    <div className='flex justify-center px-0 mb-8 gap-4 '>   
                        <div class="w-[230px] h-[222px] relative rounded-[10px] border-2 border-[#5c6898] object-cover transition-opacity duration-300 hover:opacity-70">
                            <div class="w-[118px] h-[118px] left-[82px] top-[42px] absolute"></div>
                            <img class="w-[88px] h-[85px] left-[56px] top-[42px] absolute" src={lupaRoxa} />
                            <div class="left-[30px] top-[158px] absolute text-[#5c6898] text-2xl font-normal font-['RocknRoll One']">Primeira Fase</div>
                        </div>

                        <div class="w-[230px] h-[222px] relative rounded-[10px] border-2 border-[#5c6898] object-cover transition-opacity duration-300 hover:opacity-50">
                            <div class="w-[118px] h-[118px] left-[82px] top-[42px] absolute"></div>
                            <img class="w-[88px] h-[85px] left-[56px] top-[42px] absolute" src={lupaRoxa} />
                            <div class="left-[29px] top-[158px] absolute text-[#5c6898] text-2xl font-normal font-['RocknRoll One']">Segunda Fase</div>
                        </div>

                        <div class="w-[230px] h-[222px] relative rounded-[10px] border-2 border-[#5c6898] object-cover transition-opacity duration-300 hover:opacity-70">
                            <div class="w-[118px] h-[118px] left-[82px] top-[42px] absolute"></div>
                            <img class="w-[88px] h-[85px] left-[56px] top-[42px] absolute" src={lupaRoxa} />
                            <div class="left-[36px] top-[158px] absolute text-[#5c6898] text-2xl font-normal font-['RocknRoll One']">Terceira Fase</div>
                        </div>

                        <div class="w-[230px] h-[222px] relative rounded-[10px] border-2 border-[#5c6898] object-cover transition-opacity duration-300 hover:opacity-70">
                            <div class="w-[118px] h-[118px] left-[82px] top-[42px] absolute"></div>
                            <img class="w-[88px] h-[85px] left-[56px] top-[42px] absolute" src={lupaRoxa} />
                            <div class="left-[36px] top-[158px] absolute text-[#5c6898] text-2xl font-normal font-['RocknRoll One']">Quarta Fase</div>
                        </div>

                        <div class="w-[230px] h-[222px] relative rounded-[10px] border-2 border-[#5c6898] object-cover transition-opacity duration-300 hover:opacity-70">
                            <div class="w-[118px] h-[118px] left-[82px] top-[42px] absolute"></div>
                            <img class="w-[88px] h-[85px] left-[56px] top-[42px] absolute" src={lupaRoxa} />
                            <div class="left-[50px] top-[158px] absolute text-[#5c6898] text-2xl font-normal font-['RocknRoll One']">Fase Final</div>
                        </div>

                        </div>  

                        <div className='flex items-start'>
                            <div className='mr-8'>
                            <p className='font-topico text-purple text-2xl  mb-5  mr-5'>Primeira Fase</p>
                            </div>
                        </div>

                        <div>
                            <img src={imgPrimeiraFase} alt="arduino"className='absolute right-44 -translate-y-14 w-72 h-512' />
                            <p className="font-paragrafo text-lg ">Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod <br />et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis <br /> eos atque commodi?
                            </p>
                        </div>
                 </section>
        </section>
        </section>
    </main>
  )
}
