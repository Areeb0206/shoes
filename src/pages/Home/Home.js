import React from 'react';
import Section1 from './Section1/Section1';

import Nvbar from '../../Components/Navbar/Navbar';
import './Home.scss';


const Home = () => {

  return (
   <div className="section">
    <Nvbar />
    <Section1 />
   </div>
  );
}

export default Home;
