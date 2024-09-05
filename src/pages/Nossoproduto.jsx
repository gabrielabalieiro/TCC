import React, { useState } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import CProduto from './carrosel/CProduto';
import '../customSwiper.css';

import numeroUm from '../assets/iconsRedes/iconsNumero/iconUm.svg';
import numeroDois from '../assets/iconsRedes/iconsNumero/iconDois.svg';
import numeroTres from '../assets/iconsRedes/iconsNumero/iconTres.svg';
import numeroQuatro from '../assets/iconsRedes/iconsNumero/iconQuatro.svg';
import numeroCinco from '../assets/iconsRedes/iconsNumero/iconCinco.svg';

import lupaBranca from '../assets/iconsRedes/iconLupa/iconLupaBranca.svg';
import lupaRoxa from '../assets/iconsRedes/iconLupa/iconLupaRoxo.svg';

import imgPrimeiraFase from '../assets/iconsRedes/image_primeira_fase.svg';

export function Nossoproduto() {
  const [activePhase, setActivePhase] = useState('Primeira Fase');

  const handlePhaseClick = (phase) => {
    setActivePhase(phase);
  };

  return (
    <div>
      <Nav />
      <div className="min-h-screen flex justify-center items-center">
        <section className="p-8 rounded-lg max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className='text-purple text-2xl md:text-4xl text-center sm:text-start font-semibold font-titulo mb-10'>Robô Kids</h1>
              <p className="font-paragrafo text-justify mb-5 text-base sm:text-lg">
                O projeto consiste em um protótipo desenvolvido através da plataforma Arduíno, com comunicação via Wi-Fi e uma tela touch screen, a partir dela, a criança conseguirá interagir com o Robô Kids, que irá realizar perguntas sobre a matéria de matemática a partir da idade da criança, com isso conseguirá selecionar a resposta da pergunta realizada.
              </p>
              <p className="font-paragrafo text-justify mb-5 text-base sm:text-lg">
                Além disso, um aplicativo ligado ao robô, lista todos os acertos e erros conforme as perguntas realizadas pelo robô para aprendizagem, com o objetivo de ajudar e facilitar o uso aos pais para que possam acompanhar o desenvolvimento educativo de seu filho, podendo observar através de dados quais são as dificuldades que a criança apresenta na matéria de matemática. E o mais importante para que ajude as crianças a aprenderem e adquirirem mais conhecimentos.
              </p>
            </div>
            <div className="flex justify-center order-last">
              <CProduto />
            </div>  
          </div>

          <section className="py-20">
            <div className='flex items-center'>
              <h2 className='text-purple sm:text-3xl text-xl font-titulo my-14 font-normal whitespace-nowrap mr-12'>Funcionamento</h2>
              <hr className='sm:w-[850px] w-[400px] border-purple' />
            </div>

            <div className='sm:flex items-start mt-10'>
              <div className='flex justify-start sm:items-start'>
                <div className='mr-8'>
                  <p className='font-topico text-purple md:2xl lg:text-[30px] mb-5 mr-5'>Guia de utilização</p>
                </div>
              </div>
              <div className='ml-auto space-y-9 w-2/3 text-justify pr-8'>
                <div className='flex items-start space-x-4'>
                  <img src={numeroUm} alt="número 1" className='w-10 h-10' />
                  <div>
                    <p className='font-paragrafo text-lg sm:text-xl font-medium text-purple'>Passo 1</p>
                    <p className='text-grey-popup font-topico text-base sm:text-x1'>
                      Na tela inicial, escolha entre diferentes modos de aprendizado (por exemplo, “Números Básicos”, “Operações Simples”, etc.). O robô apresentará questões matemáticas adequadas à faixa etária da criança.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <img src={numeroDois} alt="número 2" className='w-10 h-10' />
                  <div>
                    <p className='font-paragrafo text-lg sm:text-xl font-medium text-purple'>Passo 2</p>
                    <p className='text-grey-popup font-topico'>
                      A criança pode tocar nos botões na tela para responder às perguntas. O robô fornecerá feedback imediato sobre cada resposta, incentivando o aprendizado e a correção de erros.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <img src={numeroTres} alt="número 3" className='w-10 h-10' />
                  <div>
                    <p className='font-paragrafo text-lg sm:text-xl font-medium text-purple'>Passo 3</p>
                    <p className='text-grey-popup font-topico'>
                      Baixe o aplicativo complementar no smartphone ou tablet. Use o código de sincronização exibido no robô para conectar o perfil da criança ao aplicativo. Isso permitirá que os pais acompanhem o desenvolvimento e as conquistas da criança em tempo real.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <img src={numeroQuatro} alt="número 4" className='w-10 h-10' />
                  <div>
                    <p className='font-paragrafo text-lg sm:text-xl font-medium text-purple'>Passo 4</p>
                    <p className='text-grey-popup font-topico'>
                      Para garantir um uso saudável do robô, os pais podem estabelecer limites de tempo diários ou semanais para as sessões de aprendizado.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <img src={numeroCinco} alt="número 5" className='w-10 h-10' />
                  <div>
                    <p className='font-paragrafo text-lg sm:text-xl font-medium text-purple'>Passo 5</p>
                    <p className='text-grey-popup font-topico'>
                      O robô também pode enviar relatórios semanais para o aplicativo dos pais, sugerindo atividades ou áreas para fortalecer o aprendizado da criança, baseado no desempenho observado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div>
                <div className='flex items-center'>
                  <h1 className='text-purple sm:text-3xl text-xl font-titulo my-14 font-normal mr-12'>Desenvolvimento</h1>
                  <hr className='w-[850px] border-purple' />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-5 gap-[100px]'> {}
                  <div className={`w-56 h-48 rounded-lg border-2 border-purple flex flex-col items-center justify-between p-4 ${activePhase === 'Primeira Fase' ? 'bg-purple text-white' : 'bg-white text-purple'} transition-opacity duration-300 hover:opacity-50 cursor-pointer`} onClick={() => handlePhaseClick('Primeira Fase')}>
                    <img className={`w-21 h-20 ${activePhase === 'Primeira Fase' ? 'opacity-100' : 'opacity-50'}`} src={activePhase === 'Primeira Fase' ? lupaBranca : lupaRoxa} alt="Lupa" />
                    <div className="text-xl sm:text-2xl font-normal font-titulo">Primeira Fase</div>
                  </div>

                  <div className={`w-56 h-48 rounded-lg border-2 border-purple flex flex-col items-center justify-between p-4 ${activePhase === 'Segunda Fase' ? 'bg-purple text-white' : 'bg-white text-purple'} transition-opacity duration-300 hover:opacity-50 cursor-pointer`} onClick={() => handlePhaseClick('Segunda Fase')}>
                    <img className={`w-21 h-20 ${activePhase === 'Segunda Fase' ? 'opacity-100' : 'opacity-50'}`} src={activePhase === 'Segunda Fase' ? lupaBranca : lupaRoxa} alt="Lupa" />
                    <div className="text-xl sm:text-2xl font-normal font-titulo">Segunda Fase</div>
                  </div>

                  <div className={`w-56 h-48 rounded-lg border-2 border-purple flex flex-col items-center justify-between p-4 ${activePhase === 'Terceira Fase' ? 'bg-purple text-white' : 'bg-white text-purple'} transition-opacity duration-300 hover:opacity-50 cursor-pointer`} onClick={() => handlePhaseClick('Terceira Fase')}>
                    <img className={`w-21 h-20 ${activePhase === 'Terceira Fase' ? 'opacity-100' : 'opacity-50'}`} src={activePhase === 'Terceira Fase' ? lupaBranca : lupaRoxa} alt="Lupa" />
                    <div className="text-xl sm:text-2xl font-normal font-titulo">Terceira Fase</div>
                  </div>

                  <div className={`w-56 h-48 rounded-lg border-2 border-purple flex flex-col items-center justify-between p-4 ${activePhase === 'Quarta Fase' ? 'bg-purple text-white' : 'bg-white text-purple'} transition-opacity duration-300 hover:opacity-50 cursor-pointer`} onClick={() => handlePhaseClick('Quarta Fase')}>
                    <img className={`w-21 h-20 ${activePhase === 'Quarta Fase' ? 'opacity-100' : 'opacity-50'}`} src={activePhase === 'Quarta Fase' ? lupaBranca : lupaRoxa} alt="Lupa" />
                    <div className="text-xl sm:text-2xl font-normal font-titulo">Quarta Fase</div>
                  </div>

                  <div className={`w-56 h-48 rounded-lg border-2 border-purple flex flex-col items-center justify-between p-4 ${activePhase === 'Fase Final' ? 'bg-purple text-white' : 'bg-white text-purple'} transition-opacity duration-300 hover:opacity-50 cursor-pointer`} onClick={() => handlePhaseClick('Fase Final')}>
                    <img className={`w-21 h-20 ${activePhase === 'Fase Final' ? 'opacity-100' : 'opacity-50'}`} src={activePhase === 'Fase Final' ? lupaBranca : lupaRoxa} alt="Lupa" />
                    <div className="text-xl sm:text-2xl font-normal font-titulo">Fase Final</div>
                  </div>
                </div>

                <div className='flex flex-col items-center sm:items-start mt-8'>
                  <div className='sm:flex sm:items-center'>
                    <p className='font-topico text-purple text-xl sm:text-2xl sm:mb-5 mb-10'>
                      {activePhase}
                    </p>
                  </div>
                  <div className='w-full max-w-[600px] flex flex-col items-center'>
                    <img src={imgPrimeiraFase} alt="arduino" className='sm:absolute sm:right-[120px] -translate-y-14 sm:w-72 sm:h-512 mt-4 w-72 h-auto ' />
                    <p className="font-paragrafo text-base sm:text-lg text-justify">
                      {activePhase === 'Primeira Fase' && 'Na primeira fase, focamos na seleção e aquisição das peças e componentes essenciais para a construção do robô. Isso inclui a escolha de microcontroladores, sensores, motores, e outros periféricos. Também envolvemos a criação de protótipos iniciais para validar a compatibilidade dos componentes e garantir que atendam aos requisitos de funcionalidade e desempenho. A fase inicial é crucial para definir a base do projeto e assegurar que todos os elementos estejam alinhados com o objetivo final.'}
                      {activePhase === 'Segunda Fase' && 'Durante a segunda fase, trabalhamos na programação inicial do robô, o que envolve a escrita e teste do código fundamental que controla o funcionamento do robô. Configuramos os sensores e atuadores para garantir que eles sejam corretamente calibrados e integrados ao sistema. Além disso, implementamos e testamos as primeiras funcionalidades do robô para assegurar que ele responde adequadamente aos comandos e interage de forma eficaz com o ambiente.'}
                      {activePhase === 'Terceira Fase' && 'Na terceira fase, focamos na integração completa entre o hardware e o software do robô. Isso inclui a combinação dos módulos de controle com os componentes físicos para garantir que tudo funcione de maneira sincronizada. Realizamos testes rigorosos para identificar e corrigir quaisquer problemas de compatibilidade ou desempenho. Também começamos a implementar funcionalidades avançadas, como a capacidade de o robô realizar tarefas específicas e interagir com o usuário de forma mais eficiente.'}
                      {activePhase === 'Quarta Fase' && 'Durante a quarta fase, realizamos uma série de testes de desempenho para avaliar a eficácia do robô em condições reais de operação. Isso inclui a execução de testes em diferentes cenários para verificar a robustez e a precisão das respostas do robô. Baseado nos resultados desses testes, fazemos ajustes finais para otimizar o desempenho, corrigir quaisquer problemas identificados e garantir que o robô esteja funcionando de acordo com as expectativas e especificações estabelecidas.'}
                      {activePhase === 'Fase Final' && 'A fase final envolve a entrega do robô ao cliente, após a conclusão de todos os testes e ajustes necessários. Nesta etapa, asseguramos que o robô está totalmente operacional e que todas as funcionalidades prometidas foram implementadas e verificadas. Fornecemos ao cliente documentação detalhada sobre o uso do robô, bem como treinamento, se necessário. Também oferecemos suporte pós-venda para resolver quaisquer questões que possam surgir após a entrega e garantir a plena satisfação do cliente.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

