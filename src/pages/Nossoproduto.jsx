import React from 'react'

import numeroUm from '../assets/iconsRedes/iconsNumero/iconUm.svg'
import numeroDois from '../assets/iconsRedes/iconsNumero/iconDois.svg'
import numeroTres from '../assets/iconsRedes/iconsNumero/iconTres.svg'
import numeroQuatro from '../assets/iconsRedes/iconsNumero/iconQuatro.svg'
import numeroCinco from '../assets/iconsRedes/iconsNumero/iconCinco.svg'

import lupaBranca from '../assets/iconsRedes/iconLupa/iconLupaBranca.svg'
import lupaRoxa from '../assets/iconsRedes/iconLupa/iconLupaRoxo.svg'

export default function Nossoproduto() {
  return (
    <main className="min-h-screen flex justify-center items-center">
        <section className=" p-8 max-w-4xl w-full">
            <div className="text-center mb-8">
                <h1 className='text-purple text-4xl font-semibold font-titulo '>Robô Kids</h1>
                <p className="font-paragrafo text-justify mt-4">O projeto consiste em um protótipo desenvolvido através da plataforma Arduíno, com comunicação via Wi-Fi e uma tela touch screen, a partir dela, a criança conseguirá interagir com o Robô Kids, que irá realizar perguntas sobre a matéria de matemática a partir da idade da criança, com isso conseguirá selecionar a resposta da pergunta realizada.
                </p>
                <p className="font-paragrafo text-justify mt-4" > Além disso, um aplicativo ligado ao robô, lista todos os acertos e erros conforme as perguntas realizadas pelo robô para aprendizagem, com o objetivo de ajudar e facilitar o uso aos pais para que possam acompanhar o desenvolvimento educativo de seu filho, podendo observar através de dados quais são as dificuldades que a criança apresenta na matéria de matemática. E o mais importante para que ajude as crianças a aprenderem e adquirirem mais conhecimentos</p>
                <div className=" flex justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zuPaaOjXNWaQ1GOvPlmx_R29RHfR5GEjbw&s" alt="" className="rounded-lg" />
                </div>
            </div>
        
        <section className="mt-8">
            <div>
                <h2 className='text-purple text-2xl font-titulo'>Funcionamento</h2>
                <p className='font-topico text-purple text-lg'>Guia de utilização</p>
                <div>
                    <img src={numeroUm} alt="número 1" />
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 1</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                </div>
                <div>
                    <img src={numeroDois} alt="número 2" />
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 2</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                </div>
                <div>
                    <img src={numeroTres} alt="número 3" />
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 3</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                </div>
                <div>
                    <img src={numeroQuatro} alt="número 4" />
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 4</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                </div>
                <div>
                    <img src={numeroCinco} alt="número 5" />
                    <p className='font-paragrafo text-[35px]font-medium text-purple'>Passo 5</p>
                    <p className='text-grey-popup font-topico'>Lorem ipsum dolor sit amet. Est iure labore sed sunt inventore At dolor quod et sequi eius. Aut vero accusantium ut ducimus quia sed autem perspiciatis eos atque commodi?</p>
                </div>
            </div>
        </section>
        </section>


        <section>
            <div>
                <h2 className='text-purple text-3xl font-titulo'>Desenvolvimento</h2>
            </div>
        </section>
    </main>
  )
}
