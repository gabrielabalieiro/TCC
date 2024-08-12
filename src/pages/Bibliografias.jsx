import React from 'react'

import iconLivro from '../assets/iconsRedes/iconLivro.svg'

export default function Bibliografias() {
  return (
    <main>
        <section>
            <div>
                <h1 className="text-purple text-4xl px-44 py-8 font-semibold font-titulo">Bibliografias</h1>
                <p className="font-paragrafo text-justify px-44 py-38">A ciência tem mostrado o quão é importante a utilização de meios que modifiquem o ensino e a aprendizagem através do uso da tecnologia, instiguem e criem situações provocantes, possam cativar a atenção das crianças, tornando o processo de aprendizagem mais envolvente e interessante partindo desse princípio, surgiu a ideia do protótipo do Robô Kids.
                <br/><br/>
                A tecnologia é um meio de aprendizagem inovador e eficaz, na qual a criança,  além se de se divertir, está aprendendo e progredindo os seus conhecimentos.
                <br/><br/>
                Estudos indicam, que novas tecnologias são um modo eficaz de aprender. E vem como uma ferramenta criativa, não substituindo o professor, mas sim, ajudando a chamar a atenção do aluno através de jogos educativos, que tornam o aprendizado mais divertido e envolvente  isso pode aumentar a motivação para aprender de maneira interativa e prática, e então, melhorar significativamente a qualidade e a eficácia da educação</p>
            </div>
            

           <div className='flex'>
                <h2 className="text-justify text-purple px-44 py-8 text-3xl font-titulo">Fontes - Artigos científicos</h2>
                <div>
                <div className='w-[736px] border border-purple'></div>
                </div>
           </div>
           
           <div className='flex justify-between px-44 mb-8'>
              <div className="w-[282px] h-[379px] relative rounded-[10px] border-2 border-purple">
                <img className="w-[118px] h-[118px] left-[82px] top-[42px] absolute" src={iconLivro} />
                <p className="w-[222px] left-[32px] top-[209px] absolute text-center text-black text-lg font-normal font-paragrafo">Linguagem Visual para Arduino na Educação Básica como Possibilidade Metodológica</p>
                <p class="left-[102px] top-[171px] absolute text-justify text-purple text-2xl font-semibold font-paragrafo">Artigo 1</p>
              </div>

              <div className="w-[281px] h-[379px] relative rounded-[10px] border-2 border-purple">
               <img className="w-[118px] h-[118px] left-[82px] top-[42px] absolute" src={iconLivro} />
               <p className="w-[238px] left-[24px] top-[211px] absolute text-center text-black text-lg font-normal font-paragrafo">A robótica como facilitadora do processo ensino-aprendizagem de matemática no ensino fundamental</p>
               <p className="left-[100px] top-[173px] absolute text-justify text-purple text-2xl font-semibold font-paragrafo">Artigo 2</p>
              </div>

              <div className="w-[281px] h-[379px] relative rounded-[10px] border-2 border-purple">
                <img className="w-[118px] h-[118px] left-[82px] top-[40px] absolute" src={iconLivro} />
                <p className="w-[228px] left-[27px] top-[209px] absolute text-center text-black text-lg font-normal font-paragrafo">O Uso da Robótica Educacional no Ensino Fundamenntal: Um estudo de caso prelimiar</p>
                <p className="left-[99px] top-[171px] absolute text-justify text-purple text-2xl font-semibold font-paragrafo">Artigo 3</p>
             </div>

              <div className="w-[282px] h-[379px] relative rounded-[10px] border-2 border-purple">
               <img className="w-[118px] h-[118px] left-[82px] top-[36px] absolute" src={iconLivro} />
              <p className="w-[222px] left-[37px] top-[211px] absolute text-center text-black text-lg font-normal font-paragrafo">Linguagem Visual para Arduino na Educação Básica com Possibilidade Metodológica</p>
              <p className="left-[98px] top-[171px] absolute text-justify text-purple text-2xl font-semibold font-paragrafo">Artigo 4</p>
              </div>
           </div>
          

        </section>
    </main>
  )
}
