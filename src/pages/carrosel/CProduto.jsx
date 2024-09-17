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
          <img src="https://files.oaiusercontent.com/file-gGQDvfekUlHZUitT3dExOB4P?se=2024-09-17T16%3A33%3A25Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3dbb3e49-a218-4eb1-9282-0dbd824a02e5.webp&sig=CP8pjb98JYadJ4DGRQGBIarlhHbBw1ZRZTEISjcLuRU%3D" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://www.japanhousesp.com.br/sites/japanhouse.com.saopaulo/files/2021-01/robo_1080_port.png" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/d7433267540ff8105982df385110cde1/thumb_1200_1698.png" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
          </SwiperSlide>
          {/* Adicione mais slides conforme necessário */}
        </Swiper>
      )
}