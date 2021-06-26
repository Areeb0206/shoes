import React from 'react';


import { useHistory } from "react-router-dom";




/*

import SwiperCore, { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
*//*
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
*/import './Section1.scss';

/*
SwiperCore.use([Navigation, Pagination]);*/




const Section1 = () => {

	let nike=useHistory();

	let puma=useHistory();
	let adidas=useHistory();


 return(
 <div className="section1">

   <div className="in-sec1">

     <div className="heading">Choose brands</div>






<div className="slide">
     <div className="nike">

    <button onClick={() =>{ nike.push('/Nike')}}>Nike</button>


    </div>




     



             <div className="puma">

    <button onClick={() =>{ puma.push('/Puma')}}>Puma</button>


    </div>




     



             <div className="nivia">

    <button onClick={() =>{ adidas.push('/Adidas')}}>Nivia</button>


    </div>





     
      

 

           

             <div className="adidas">

    <button onClick={() =>{ adidas.push('/Adidas')}}>Adidas</button>


    </div>

</div>
        
      
 
</div>
  

    
</div>
 	);


}
export default Section1;