import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import googleMap from '../../Images/googleMap.jpg'
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <Container className='box-shadow my-5  font-name bg-white pb-5'>
                <h3 className='text-center py-3'>Contact Us</h3>
                <h2 className='text-center pb-3 fw-bold'>Get In Touch With Us</h2>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Control placeholder="Name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Phone" />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Control placeholder="Email" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Subject" />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Group>
                                        <Form.Control as="textarea" placeholder="Message" rows={5} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button href='/home' className='btn btn-primary mb-3' type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Image src={googleMap} fluid alt="About Us Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;