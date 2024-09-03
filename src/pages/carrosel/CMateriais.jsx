import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination } from 'swiper/modules'

import Bateria from '../../assets/carossselMateriais/CardBateria.svg'
import AltoFalante from '../../assets/carossselMateriais/CardAltofalante.svg'
import Amplificador from '../../assets/carossselMateriais/CardAmplificador.svg'
import Conector from '../../assets/carossselMateriais/CardConector.svg'
import DisplayIPS from '../../assets/carossselMateriais/CardDisplayIPS.svg'
import DisplayLCD from '../../assets/carossselMateriais/CardDisplayLCD.svg'
import Jumperers from '../../assets/carossselMateriais/CardJumpers.svg'
import Leonardo from '../../assets/carossselMateriais/CardLeonardo.svg'
import Mineprotoboard from '../../assets/carossselMateriais/CardMineprotoboard.svg'
import Modulo from '../../assets/carossselMateriais/CardModulo.svg'
import Protoboard from '../../assets/carossselMateriais/CardProtoboard.svg'
import Sensor from '../../assets/carossselMateriais/CardSensor.svg'
import Servo from '../../assets/carossselMateriais/CardServo.svg'
import Uno from '../../assets/carossselMateriais/CardUno.svg'

export default function CMateriais() {
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
            <img src={Bateria} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AltoFalante} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Amplificador} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Conector} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DisplayIPS} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DisplayLCD} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Jumperers} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Leonardo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mineprotoboard} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Modulo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Protoboard} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sensor} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Servo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Uno} alt="" />
          </SwiperSlide>
        </Swiper>
      )
}