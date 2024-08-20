import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination } from 'swiper/modules'

export default function CProduto() {
    return (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zuPaaOjXNWaQ1GOvPlmx_R29RHfR5GEjbw&s" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zuPaaOjXNWaQ1GOvPlmx_R29RHfR5GEjbw&s" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zuPaaOjXNWaQ1GOvPlmx_R29RHfR5GEjbw&s" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
          </SwiperSlide>
          {/* Adicione mais slides conforme necessário */}
        </Swiper>
      )
}