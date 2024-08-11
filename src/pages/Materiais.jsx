import React from 'react'

import imgRoboMateriais from '../assets/iconsRedes/robo_materiais.svg'
import imgCirculoMateriais from '../assets/iconsRedes/circulo_materiais.svg'

export default function Materiais() {
  return (
    <main>
        <section>
            <div>
                <h1>Materiais</h1>
            </div>
        </section>

        <section>
            <div>
                <h2 className='subtópicos'>Utilização</h2>
                <img src={imgRoboMateriais} alt="Robô da página de materiais" />
                <img src={imgCirculoMateriais} alt="Círculo de destaque do Display do robô" />
            </div>
        </section>

        <section>
            <div>
                <h2 className='subtópicos'>Valor final</h2>
                <p>O nosso projeto, além de ter um alto custo inicial, demanda um grande esforço de trabalho, por isso projetamos um valor inicial de 1.500,00 R$, levando em consideração todo o custo e desenvolvimento. Além disso, o projeto é altamente tecnológico e apresenta um diferencial significativo, incluindo um aplicativo que permite aos pais acompanhar a evolução da criança e um jogo divertido para a própria criança. Tudo isso é integrado com o robô, proporcionando um suporte completo ao cliente.
                </p>
            </div>
        </section>
    </main>
  )
}
