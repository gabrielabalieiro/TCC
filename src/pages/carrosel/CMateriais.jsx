import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

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
          slidesPerView={2} 
          navigation={true} 
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper max-w-screen-lg mx-auto relative"
        >
          <SwiperSlide>
            <img src={Bateria} alt="Bateria" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AltoFalante} alt="Alto-Falante" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Amplificador} alt="Amplificador" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Conector} alt="Conector" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DisplayIPS} alt="Display IPS" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DisplayLCD} alt="Display LCD" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Jumperers} alt="Jumperers" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Leonardo} alt="Leonardo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Mineprotoboard} alt="Mineprotoboard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Modulo} alt="Módulo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Protoboard} alt="Protoboard" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sensor} alt="Sensor" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Servo} alt="Servo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Uno} alt="Uno" />
          </SwiperSlide>
        </Swiper>
      )
}
