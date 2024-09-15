import React from 'react';
import Nav from './Nav';
import Carossel from './carrosel/CCards.jsx';
import Footer from './Footer';

export function Quemsomos() {
  return (
    <div>
      <Nav />
      <div className="mx-20 mt-16 mb-20">
        <h1 className="text-2xl md:text-4xl font-semibold text-purple mb-4  font-titulo text-center p-14">Desenvolvedores</h1>
        <Carossel />
      </div>
   <Footer />
   </div>
  );
}
