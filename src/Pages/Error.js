import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return ( 
        <>
            <div className="error-section">
                <h4 className="error-heading">Error Page</h4>
                <Link to="/">
                    <button className="error-button">Back to Home</button>
                </Link>
            </div>
        </>
     );
}
 
export default Error;