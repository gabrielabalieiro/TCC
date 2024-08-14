import React from 'react'

import iconLivro from '../assets/iconsRedes/iconLivro.svg'

export default function Bibliografias() {
  return (
    <main>
        <section className='p-8 '>
            <div>
                <h1 className="text-purple text-5xl px-44 py-8 font-semibold font-titulo">Bibliografias</h1>
                <p className="font-paragrafo text-justify px-44 py-38">A ciência tem mostrado o quão é importante a utilização de meios que modifiquem o ensino e a aprendizagem através do uso da tecnologia, instiguem e criem situações provocantes, possam cativar a atenção das crianças, tornando o processo de aprendizagem mais envolvente e interessante partindo desse princípio, surgiu a ideia do protótipo do Robô Kids.
                <br/><br/>
                A tecnologia é um meio de aprendizagem inovador e eficaz, na qual a criança,  além se de se divertir, está aprendendo e progredindo os seus conhecimentos.
                <br/><br/>
                Estudos indicam, que novas tecnologias são um modo eficaz de aprender. E vem como uma ferramenta criativa, não substituindo o professor, mas sim, ajudando a chamar a atenção do aluno através de jogos educativos, que tornam o aprendizado mais divertido e envolvente  isso pode aumentar a motivação para aprender de maneira interativa e prática, e então, melhorar significativamente a qualidade e a eficácia da educação</p>
            </div>
            

            <div className='flex items-center mt-12 mb-6'>
                    <h2 className='text-purple font-titulo text-3xl px-44 pr-12'>Fontes - artigos científicos</h2>
                    <hr className='w-[555px] border-purple' />
            </div>
           
           <div className='flex justify-center px-44 mb-8 gap-4'>
              <div className="w-72 h-96 rounded-lg border-2 border-purple p-4 flex flex-col items-center">
                <img className="w-28 h-32 mb-8 translate-y-6" src={iconLivro} alt="Ícone do Livro"/>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 1</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">Linguagem Visual para Arduino na Educação Básica como Possibilidade Metodológica</p>
              </div>

              <div className="w-72 h-96 rounded-lg border-2 border-purple p-4 flex flex-col items-center">
                <img className="w-28 h-32 mb-8 translate-y-6" src={iconLivro} alt="Ícone do Livro"/>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 2</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">A robótica como facilitadora do processo ensino-aprendizagem de matemática no ensino fundamental</p>
              </div>


              <div className="w-72 h-96 rounded-lg border-2 border-purple p-4 flex flex-col items-center">
                <img className="w-28 h-32 mb-8 translate-y-6" src={iconLivro} alt="Ícone do Livro"/>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 3</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">O Uso da Robótica Educacional no Ensino Fundamenntal: Um estudo de caso prelimiar</p>
              </div>

              <div className="w-72 h-96 rounded-lg border-2 border-purple p-4 flex flex-col items-center">
                <img className="w-28 h-32 mb-8 translate-y-6" src={iconLivro} alt="Ícone do Livro"/>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2 ">Artigo 4</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">Linguagem Visual para Arduino na Educação Básica como Possibilidade Metodológica</p>
              </div>
           </div>
          

        </section>
    </main>
  )
}
