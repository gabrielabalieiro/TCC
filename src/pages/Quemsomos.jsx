import React from 'react'

import IconInsta from '../assets/iconsRedes/iconInstaDesenvolve.svg'
import fotoGabs from '../assets/fotosProgam/fotoGabsCentro.svg'
import fotoLee from '../assets/fotosProgam/fotoLeeCentro.svg'
import fotoBia from '../assets/fotosProgam/fotoBiaCentro.svg'
import fotoThigas from '../assets/fotosProgam/fotoThigasCentro.svg'


export default function Quemsomos() {
  return (
    <main>
      <h1 className='text-purple text-4xl font-semibold font-titulo'>Desenvolvedores</h1>
      <div>
        <div>
          <img src={fotoLee} alt="Leticia foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Leticia Lopes</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex '>
            <img src={IconInsta} alt="Icone do instagram" />
            <p className='text-purple font-light font-paragrafo ml-1.5'>lee.lopesz</p>
          </div>
        </div>
        <div>
          <img src={fotoGabs} alt="Gabriela foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Gabriela Balieiro</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex'>
            <img src={IconInsta} alt="Icone do instagram" />
            <p className='text-purple font-light font-paragrafo ml-1.5'>gabzbali</p>
          </div>
        </div>
        <div>
          <img src={fotoBia} alt="Beatriz foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Beatriz Gonçalves</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex'>
            <img src={IconInsta} alt="Icone do instagram" />
            <p className='text-purple font-light font-paragrafo ml-1.5'>biiah_gsouza</p>
          </div>
        </div>
        <div>
          <img src={fotoThigas} alt="Thiago foto" />
          <p className='text-purple text-xl font-bold font-paragrafo'>Thiago Pinheiro</p>
          <p className='text-black font-light font-paragrafo'>O que fez...</p>
          <div className='flex'>
            <img src={IconInsta} alt="Icone do instagram" />
            <p className='text-purple font-light font-paragrafo ml-1.5'>thii.lima_</p>
          </div>
        </div>
      </div>
    </main>
  )
}
