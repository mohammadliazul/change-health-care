import React from 'react';
import aboutUsImg from '../../Images/about.png';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id="about">
            <Container className='box-shadow my-5 font-name bg-white pb-5'>
                <h3 className='text-center py-3'>About Us</h3>
                <h2 className='text-center pb-3 fw-bold'>To Take Care Of Your Health</h2>
                <Row>
                    <Col md={6}>
                        <p className='fs-6'><span className='text-primary'>CHANGE HEALTH CARE</span> is a top-notch licensed nursing service agency in Bangladesh. We hold the expertise of seven years in nursing services. Our ultimate goal is to support our clients with hassle-free lifestyles. To drive our clients towards a healthy life is our motto. That is why we have got all the home services that will make your life more comfortable. Our services include home nursing, baby care, elder care, physiotherapy support, oxygen supply and even house maid support. Each of our staff holds expertise in their respective domain. They use their knowledge and experience to serve you at their best. Each of our nurses has undergone strict background checking and rigorous training. Our training are designed to handle intense cases. Our management team is always there to monitor and supervise the activities for higher productivity. We care for our patients, and we ensure to follow up with our patients post service. We take pride in our quality service, and our care services have satisfied our clients.</p>
                    </Col>
                    <Col md={6}>
                        <Image src={aboutUsImg} fluid alt="About Us Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;