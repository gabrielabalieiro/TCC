import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Fotobia from '../../assets/fotosProgam/fotoBiaCentro.svg';
import Fotothigas from '../../assets/fotosProgam/fotoThigasCentro.svg';
import Fotole from '../../assets/fotosProgam/fotoLeeCentro.svg';
import Fotogabi from '../../assets/fotosProgam/fotoGabsCentro.svg';

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
        <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img 
            src={Fotobia} 
            alt="Imagem 1" 
            className="w-64 h-64 object-cover rounded-full mb-4" 
          />
          <h2 className="text-xl font-bold mb-2 text-center">Beatriz Gonçalves</h2>
          <p className="text-gray-700 mb-4 text-center">O que fez...</p>
          <a 
            href="https://www.instagram.com/biiah_gsouza/" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Saiba mais
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img 
            src={Fotole} 
            alt="Imagem 2" 
            className="w-64 h-64 object-cover rounded-full mb-4" 
          />
          <h2 className="text-xl font-bold mb-2 text-center">Letícia Lopes</h2>
          <p className="text-gray-700 mb-4 text-center">O que fez...</p>
          <a 
            href="https://www.instagram.com/lee.lopesz/" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Saiba mais
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img 
            src={Fotogabi} 
            alt="Imagem 3" 
            className="w-64 h-64 object-cover rounded-full mb-4" 
          />
          <h2 className="text-xl font-bold mb-2 text-center">Gabriela Balieiro</h2>
          <p className="text-gray-700 mb-4 text-center">O que fez...</p>
          <a 
            href="https://www.instagram.com/gabzbali/" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Saiba mais
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-purple-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
          <img 
            src={Fotothigas} 
            alt="Imagem 4" 
            className="w-64 h-64 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center">Thiago Lima</h2>
          <p className="text-gray-700 mb-4 text-center">O que fez...</p>
          <a 
            href="https://www.instagram.com/thii.lima_/" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Saiba mais
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CCards;
