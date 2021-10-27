
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Services.css';


const Services = () => {

    const [servicesData] = useServices();

    return (
        <div id="services">
            <div className='container py-2'>
                <div className="row">
                    {servicesData.map(service => <div key={service.id} className="col-md-6 col-lg-4 col-sm-12">
                        <div className="service p-3 m-3">
                            <div className="half">
                                <img className='img-fluid' src={service.image} alt="service" />
                                <h3 className="mt-4">{service.title}</h3>
                                <p className="mt-2">{service.details}</p>
                            </div>

                            <div className='d-flex justify-content-center'><Link to={`/getservices/${service.id}`}><Button className='button fs-5'>Get Service</Button></Link> </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;