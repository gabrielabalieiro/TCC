import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Importar o CSS base do Swiper
import 'swiper/css/pagination' // Importar o CSS de paginação
import 'swiper/css/navigation' // Importar o CSS de navegação
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

function CCards() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={15}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 1" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Título do Card 1</h2>
          <p className="text-gray-700 mb-4">Texto do card 1. Descrição ou detalhes adicionais.</p>
          <a href="#link1" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Título do Card 2</h2>
          <p className="text-gray-700 mb-4">Texto do card 2. Descrição ou detalhes adicionais.</p>
          <a href="#link2" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Título do Card 2</h2>
          <p className="text-gray-700 mb-4">Texto do card 2. Descrição ou detalhes adicionais.</p>
          <a href="#link2" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Título do Card 2</h2>
          <p className="text-gray-700 mb-4">Texto do card 2. Descrição ou detalhes adicionais.</p>
          <a href="#link2" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      {/* Adicione mais SwiperSlide conforme necessário */}
    </Swiper>
  );
};

export default CCards