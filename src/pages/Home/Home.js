import React from 'react';

import Nvbar from '../../Components/Navbar/Navbar';
import section1 from './section1/section1';
import './Home.scss';


const Home = () => {

  return (
   <div className="section">
   <section1 />
   
    <Nvbar />
   
   </div>
  );
}

export default Home;
