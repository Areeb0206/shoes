import React from 'react';
import { useHistory } from "react-router-dom";
import './Nike.scss';
import Nike1 from '../../../../images/nike-1.png';
import Nike2 from '../../../../images/nike-2.png';
import Nike3 from '../../../../images/nike-3.png';
import Nike4 from '../../../../images/nike-4.png';
import Nike6 from '../../../../images/nike-6.png';
import Nike7 from '../../../../images/nike-7.png';
import Nike8 from '../../../../images/nike-8.png';

import Logo from '../../../../images/nikeshop.svg';

const Nike = () => {

  const data=[
  {
  	logo:Logo,
  	img:Nike1,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  },
  {
  	logo:Logo,
  	img:Nike2,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
     
  },
  {
  	logo:Logo,
  	img:Nike3,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
     
  },
  {
  	logo:Logo,
  	img:Nike4,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
     
  },
  {
  	logo:Logo,
  	img:Nike1,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
     
  },
  {
  	logo:Logo,
  	img:Nike6,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
     
  },
   {
  		logo:Logo,
  	img:Nike7,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }, {
  		logo:Logo,
  	img:Nike8,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }, {
  		logo:Logo,
  	img:Nike1,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }, {
  		logo:Logo,
  	img:Nike2,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }, {
  		logo:Logo,
  	img:Nike3,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }, {
  		logo:Logo,
  	img:Nike4,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }, {
  		logo:Logo,
  	img:Nike7,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  },
  {
  		logo:Logo,
  	img:Nike6,
  	info:"Ultra shoes",
  	type:"Mens Running",
  	amount:"$300"
     
  }
  


  ]
  	


let nike=useHistory();

const Back=() =>{

		nike.push('/shoes');

	}

 return(

    <div className="nike">

			        <div className="header">

				      <div className="back"><button onClick={Back}></button></div>

				      <div className="logo"></div>

				      <div className="cart"></div>

			      </div>




			      <div className="products">

			              <div className="product-heading">Products</div>
			              <div className="product-text">Check new  products on fair prices on <span> 7 SEAS </span></div>
			            
			              <div className="all-products">


			            {data.map(user =>(  

			                    <div className="product-box" >

                                  <div className="products">
                                         
                                         <div className="product-logo"><img src={user.logo} alt="nike" /></div>
                                         <div className="products-images"><img src={user.img} alt="nike" /></div>
                                         <div className="products-info">

                                          <div className="left">

                                            <h3 className="info">{user.info}</h3>
                                            <h3 className="type">{user.type}</h3>
                                            <h3 className="amount">{user.amount}</h3>

                                          </div>
                                         
                                               <button>View</button>

                                         
                                         </div>
				                      

				                  </div>

			                    </div>

			                 
                        ))}


			              </div>


			             

			      </div>

  


    </div>


 	);


}
export default Nike;