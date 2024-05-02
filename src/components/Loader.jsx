import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center loader_style">
                <Spinner animation="grow" variant="info" />
            </div>
        </div>
    );
};

export default Loader;