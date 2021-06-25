import React from 'react';


import { useHistory } from "react-router-dom";


import './Section1.scss';



import SwiperCore, { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import 'swiper/components/effect-fade/effect-fade.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);




const Section1 = () => {

	let nike=useHistory();

	let puma=useHistory();
	let adidas=useHistory();


 return(
 <div className="section1">

   <div className="in-sec1">

     <div className="heading">Choose brands</div>




     <Swiper className="swiper"
     
      spaceBetween={20}
      slidesPerView={2}
      centeredSlides={true}

      pagination={{ "dynamicBullets":true}}
      loop={true}

     
    >
      <SwiperSlide className="slide slide1">



             <div className="nike">

    <button onClick={() =>{ nike.push('/Nike')}}>Nike</button>


    </div>




      </SwiperSlide>
      <SwiperSlide className="slide slide2">



             <div className="puma">

    <button onClick={() =>{ puma.push('/Puma')}}>Puma</button>


    </div>




      </SwiperSlide>
      <SwiperSlide className="slide slide3">



             <div className="nivia">

    <button onClick={() =>{ adidas.push('/Adidas')}}>Nivia</button>


    </div>





      </SwiperSlide>
      <SwiperSlide className="slide slide4">

 

           

             <div className="adidas">

    <button onClick={() =>{ adidas.push('/Adidas')}}>Adidas</button>


    </div>


         </SwiperSlide>
      
    </Swiper>


</div>
  

    
</div>
 	);


}
export default Section1;