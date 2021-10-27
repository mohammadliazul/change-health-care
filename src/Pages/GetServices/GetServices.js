import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './GetServices.css';



const GetServices = () => {
    const { id } = useParams();
    const [servicesData] = useServices();
    const singleItem = servicesData?.find((services) => services.id === parseInt(id));

    return (
        <>
            <Container className='box-shadow my-5 font-name bg-white pb-5'>
                <div>
                    <h2 className='text-center pb-3 fw-bold'>{singleItem?.title}</h2>
                    <Row>
                        <Col md={6}>
                            <p className='fs-6 text-gray px-5'>{singleItem?.details}</p>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <Image src={singleItem?.image} fluid alt="details Image" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default GetServices;