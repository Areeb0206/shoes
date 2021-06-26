import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from "react-router-dom";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';





import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './Section1.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);







const Section1 = () => {

	let nike=useHistory();

	let puma =useHistory();

	let adidas=useHistory();




 return(
 <div className="section1">

   <div className="in-sec1">

     <div className="heading">Choose brands</div>


    <Swiper className="swiper"
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      centeredSlides={true}
   
   
    >
      <SwiperSlide className="slide">

        <div className="nike">

    <button onClick={() =>{ nike.push('/Nike')}}>Nike</button>


    </div>

    </SwiperSlide>
          <SwiperSlide className="slide">

        <div className="puma">

    <button onClick={() =>{ puma.push('/puma')}}>puma</button>


    </div>

    </SwiperSlide>      <SwiperSlide className="slide">

        <div className="adidas">

    <button onClick={() =>{ adidas.push('/adidas')}}>adidas</button>


    </div>

    </SwiperSlide>      <SwiperSlide className="slide">

        <div className="nivia">

    <button onClick={() =>{ adidas.push('/adidas')}}>adidas</button>


    </div>

    </SwiperSlide>
    </Swiper>



        
      
 
</div>
  

    
</div>
 	);


}
export default Section1;