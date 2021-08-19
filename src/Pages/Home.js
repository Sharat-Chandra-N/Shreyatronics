import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css';

const Home = () => {
    return ( 
        <>  
            <div className = "main-section">
                <h1 className = "header">Welcome to Shreyatronics!</h1>
                <h4 className = "small-header">We are dealers in Gilard and Sonya products</h4>
                <div className = "companies-section">
                <Link to = "/Gilard">
                    <div className = "company">
                        <h3 className = "company-heading">View Gilard Products</h3>
                    </div>
                </Link>
                <Link to = "/Gilard">
                    <div className = "company">
                        <h3 className = "company-heading">View Sonya Products</h3>
                    </div>
                </Link>
                </div>
            </div>
        </>
     );
}
 
export default Home;