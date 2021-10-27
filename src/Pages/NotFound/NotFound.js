import React from 'react';
import notfoundImage from '../../Images/404.jpg';
import './NonFound.css';
const NotFound = () => {
    return (
        <div className='not-found-div'>
            <img className='img' src={notfoundImage} alt="Not Found Page" />
        </div>
    );
};

export default NotFound;