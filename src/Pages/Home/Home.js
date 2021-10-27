import React from 'react';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;