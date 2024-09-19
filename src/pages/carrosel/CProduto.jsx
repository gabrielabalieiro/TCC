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
          <img src="https://s2-redeglobo.glbimg.com/F3QNY5MHcKKry3bzLWFx71pBh8Y=/0x0:1600x2162/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2020/C/6/uPZBtBTTKTWAM1Rc8IFQ/infografico-robotica-e-educacao.png" alt="" className=" flex items-center w-[220px]  h-[300px]  sm:w-[340px] sm:h-[450px] rounded-lg shadow-2xl sm:ml-24 ml-28" />
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