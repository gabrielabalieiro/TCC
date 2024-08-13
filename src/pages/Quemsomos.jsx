import React from 'react'

import IconInsta from '../assets/iconsRedes/iconInstaDesenvolve.svg'
import fotoGabs from '../assets/fotosProgam/fotoGabsCentro.svg'
import fotoLee from '../assets/fotosProgam/fotoLeeCentro.svg'
import fotoBia from '../assets/fotosProgam/fotoBiaCentro.svg'
import fotoThigas from '../assets/fotosProgam/fotoThigasCentro.svg'


export default function Quemsomos() {
  return (
    <main>
      <h1 className='text-5xl font-semibold text-purple mb-4 font-normal font-titulo text-center p-14'>Desenvolvedores</h1>
      <div className='flex py-8'>
        <div>
          <img src={fotoLee} alt="Leticia foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Leticia Lopes</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex '>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5'>
              <a href="https://www.instagram.com/lee.lopesz/">lee.lopesz</a>
            </button>
            
          </div>
        </div>
        <div>
          <img src={fotoGabs} alt="Gabriela foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Gabriela Balieiro</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5'>
              <a href="https://www.instagram.com/gabzbali/">gabzbali</a>
            </button>
            
          </div>
        </div>
        <div>
          <img src={fotoBia} alt="Beatriz foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Beatriz Gonçalves</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5'>
              <a href="https://www.instagram.com/biiah_gsouza/">biiah_gsouza</a>
            </button>
          </div>
        </div>
        <div>
          <img src={fotoThigas} alt="Thiago foto" />
          <p className='text-purple text-xl font-bold font-paragrafo '>Thiago Pinheiro</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex'>
            <img src={IconInsta} alt="Icone do instagram" />
            <button className='text-purple font-light font-paragrafo ml-1.5 '>
              <a href="https://www.instagram.com/thii.lima_/">thii.lima_</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
