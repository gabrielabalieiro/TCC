import React from 'react';
import Nav from './Nav';
import Carossel from './carrosel/CCards.jsx';
import Footer from './Footer';

export function Quemsomos() {
  return (
    <div>
      <Nav />
      <div className=" justify-center mx-20 mt-5 mb-[150px]">
        <h1 className="text-2xl md:text-4xl font-semibold text-purple mb-4  font-titulo text-center p-14">Desenvolvedores</h1>
        <div className="max-w-7xl mx-auto">
          <Carossel />
        </div>
      </div>
   <Footer />
   </div>
  );
}
