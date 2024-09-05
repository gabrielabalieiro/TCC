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
          <h2 className="text-xl font-bold mb-2">Beatriz Gonçalves</h2>
          <p className="text-gray-700 mb-4">O que fez...</p>
          <a href="https://www.instagram.com/biiah_gsouza/" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Letícia Lopes</h2>
          <p className="text-gray-700 mb-4">O que fez...</p>
          <a href="https://www.instagram.com/lee.lopesz/" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Gabriela Balieiro</h2>
          <p className="text-gray-700 mb-4">O que fez...</p>
          <a href="https://www.instagram.com/gabzbali/" className="text-blue-500 hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/400" alt="Imagem 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold mb-2">Thiago Lima</h2>
          <p className="text-gray-700 mb-4">O que fez...</p>
          <a href="https://www.instagram.com/thii.lima_/" className="text-blue-500 hover hover:underline">Saiba mais</a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CCards