import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import {heroBag, one, three, two } from '../../../assets';




const About = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={heroBag} alt="slide one" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={one} alt="slide two" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="slide three" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={three} alt="slide four" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default About;