import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"

import iconLivro from '../assets/iconsRedes/iconLivro.svg'

export function Bibliografias() {
  return (
    <div>
      <Nav/>
      <div>
      <section className='p-4 '>
            <div>
                <h1 className="text-purple text-2xl px-44 py-8 font-semibold text-center sm:text-start font-titulo md:text-4xl  mb-10">Bibliografias</h1>
                <p className="font-paragrafo text-justify text-sm sm:px-44 sm:py-38 sm:text-lg mb-5">A ciência tem mostrado o quão é importante a utilização de meios que modifiquem o ensino e a aprendizagem através do uso da tecnologia, instiguem e criem situações provocantes, possam cativar a atenção das crianças, tornando o processo de aprendizagem mais envolvente e interessante partindo desse princípio, surgiu a ideia do protótipo do Robô Kids.
                <br/><br/>
                A tecnologia é um meio de aprendizagem inovador e eficaz, na qual a criança,  além se de se divertir, está aprendendo e progredindo os seus conhecimentos.
                <br/><br/>
                Estudos indicam, que novas tecnologias são um modo eficaz de aprender. E vem como uma ferramenta criativa, não substituindo o professor, mas sim, ajudando a chamar a atenção do aluno através de jogos educativos, que tornam o aprendizado mais divertido e envolvente  isso pode aumentar a motivação para aprender de maneira interativa e prática, e então, melhorar significativamente a qualidade e a eficácia da educação</p>
            </div>
            

            <div className='flex items-center mt-12 mb-6'>
                    <h2 className='text-purple text-xl sm:text-2xl  font-titulo my-14 font-normal whitespace-nowrap sm:ml-[160px] ml-0'>Fontes -artigos científicos</h2>
                    <hr className='w-[100px] border-purple  sm:w-[1000px] pr-[100-px] ml-12' />
            </div>
           
           <div className='flex flex-col items-center px-44 mb-24 gap-4  sm:flex-row pl-[330px] '>
              <div className="w-72 h-96 rounded-lg border-2 border-purple p-2 flex-col items-center flex">
                <a href="https://sol.sbc.org.br/index.php/ctrle/article/view/25805" target="_blank" rel=" noopener noreferrer">
                <img className="w-28 h-32 mb-8 translate-y-6 overflow-hidden flex flex-col items-center justify-between bg-white transition-opacity duration-300 hover:opacity-50" src={iconLivro} alt="Ícone do Livro"/>
                </a>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 1</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">Linguagem Visual para Arduino na Educação Básica como Possibilidade Metodológica</p>
              </div>
              <div className="w-72 h-96 rounded-lg border-2 border-purple p-2  flex-col items-center hidden sm:flex">
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cadernosuninter.com%2Findex.php%2Fintersaberes%2Farticle%2Fview%2F2962%2F2146&psig=AOvVaw3keRduVTb3qC1OISksDNct&ust=1723739952377000&source=images&cd=vfe&opi=89978449&ved=0CAYQrpoMahcKEwiY2fbt9fSHAxUAAAAAHQAAAAAQBA" target="_blank" rel=" noopener noreferrer">
                <img className="w-28 h-32 mb-8 translate-y-6 overflow-hidden flex flex-col items-center justify-between bg-white transition-opacity duration-300 hover:opacity-50" src={iconLivro} alt="Ícone do Livro"/>
                </a>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 2</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">A robótica como facilitadora do processo ensino-aprendizagem de matemática no ensino fundamental</p>
              </div>
              <div className="w-72 h-96 rounded-lg border-2 border-purple p-2  flex-col items-center hidden sm:flex">
              <a href="https://escolaweb.educacao.al.gov.br/odas/o-uso-da-robotica-educacional-no-ensino-fundamental-um-estudo-de-caso-preliminar-47033" target="_blank" rel=" noopener noreferrer">
                <img className="w-28 h-32 mb-8 translate-y-6 overflow-hidden flex flex-col items-center justify-between bg-white transition-opacity duration-300 hover:opacity-50" src={iconLivro} alt="Ícone do Livro"/>
                </a>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 3</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">O Uso da Robótica Educacional no Ensino Fundamenntal: Um estudo de caso prelimiar</p>
              </div>
              <div className="w-72 h-96 rounded-lg border-2 border-purple p-2  flex-col items-center hidden sm:flex">
              <a href="https://virtualtechdicas.com.br/robotica-na-educacao-infantil-educacao-tecnologica-para-criancas/" target="_blank" rel=" noopener noreferrer">
                <img className="w-28 h-32 mb-8 translate-y-6 overflow-hidden flex flex-col items-center justify-between bg-white transition-opacity duration-300 hover:opacity-50" src={iconLivro} alt="Ícone do Livro"/>
                </a>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 4</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">Linguagem Visual para Arduino na Educação Básica como Possibilidade Metodológica</p>
              </div>
           </div>
          <Footer/>

        </section>
      </div>
      
    </div>
  )
}
