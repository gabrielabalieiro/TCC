import React from 'react';
import Nav from './Nav';
import Carossel from './carrosel/CCards.jsx';
import Footer from './Footer';

export function Quemsomos() {
  return (
    <div>
      <Nav />
      <div className="mx-20 mt-16 mb-20">
        <h1 className="font-titulo text-4xl font-semibold text-purple-700 mb-12 text-center">Desenvolvedores</h1>
        <Carossel />
      </div>
   <Footer />
   </div>
  );
}
