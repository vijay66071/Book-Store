import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css';
import { EffectCards } from 'swiper/modules';

import book01 from "../assets/BannerCard/book1.jpg";
import book02 from "../assets/BannerCard/book2.jpg";
import book03 from "../assets/BannerCard/book3.jpg";
import book04 from "../assets/BannerCard/book4.jpg";
import book05 from "../assets/BannerCard/book5.jpg";
import book06 from "../assets/BannerCard/book6.jpg";
import book07 from "../assets/BannerCard/book7.jpg";
import book08 from "../assets/BannerCard/book8.jpg";

const BannerCard = () => {
  const lowerZIndexStyle = {
    zIndex: 0,
    position: 'relative' 
  };

  return (
    <div className='banner' style={lowerZIndexStyle}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={book01} alt="Book 1" /></SwiperSlide>
        <SwiperSlide><img src={book02} alt="Book 2" /></SwiperSlide>
        <SwiperSlide><img src={book03} alt="Book 3" /></SwiperSlide>
        <SwiperSlide><img src={book04} alt="Book 4" /></SwiperSlide>
        <SwiperSlide><img src={book05} alt="Book 5" /></SwiperSlide>
        <SwiperSlide><img src={book06} alt="Book 6" /></SwiperSlide>
        <SwiperSlide><img src={book07} alt="Book 7" /></SwiperSlide>
        <SwiperSlide><img src={book08} alt="Book 8" /></SwiperSlide>
        <SwiperSlide><img src={book05} alt="Book 5" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCard;
