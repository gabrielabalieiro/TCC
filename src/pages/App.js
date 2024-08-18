import { data } from 'autoprefixer';
import React from 'react';
import React, { useState } from 'react'
import Quemsomos from 'react'

import { Link } from 'react-router-dom'
import logoSite from '../assets/logoSite.svg'




function App() {
    return (
        <div className="w-3/4 m-auto">
         <div className="mt-20">
            {data.map((d) => (
                <div className="bg-white h-[450px] text-black rounded-xl">
                  <div className="h-56 rounded-t-xl bg-purple-300 flex justify-center items-center ">
                    <img src={d.img} alt= "" className= "h-44 w-44 rounded-full"/>
                  </div>

                    <div className="flex flex-coljustify-center items-center gap-4 p-4">
                        <p className="font-titulo text-xl font-semibold">{d.nome}</p>
                        <p>{d.revisao}</p>
                        <button className="bg-purple-400 text-white text-lg px-6 py-1 rounded-xl">Leia mais</button>
                     </div>
                    </div>
            ))}

         </div>

        </div>
        
    );
}