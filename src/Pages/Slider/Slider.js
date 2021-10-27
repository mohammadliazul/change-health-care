
import React from 'react';
import slider1 from '../../Images/slider1.jpg'
import slider2 from '../../Images/slider2.jpg'
import slider3 from '../../Images/slider3.jpg'
import { Carousel, CarouselItem, Image } from 'react-bootstrap';
import './Slider.css';


const Slider = () => {
    return (
        <Carousel>
            <CarouselItem>
                <div className='banner '>
                    <Image src={slider1}></Image>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='banner2 '>
                    <Image src={slider2}></Image>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='banner3'>
                    <Image src={slider3}></Image>
                </div>
            </CarouselItem>
        </Carousel>
    );
};

export default Slider;