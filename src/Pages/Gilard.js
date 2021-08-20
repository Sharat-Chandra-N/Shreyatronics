import React from 'react';
import {Link} from 'react-router-dom'
import SinglePole from '../Images/SinglePole.png'
import DoublePole from '../Images/DoublePole.png'
import TriplePole from '../Images/TriplePole.png'
import FourPole from '../Images/FourPole.png'
import './Gilard.css';

const Gilard = () => {

    return ( 
        <>
            <div className="section">
                <div className = "main-heading"><h2>Toggle Switchs</h2></div>
                <div className="horiz-section">
                    <hr />
                </div>
                <div className="products-section">
                    <Link to={`/Shreyatronics/ToggleSwitch/Single Pole`}>
                        <div className="product">
                            <img className="product-image" src={SinglePole} alt="" />
                            <h4>Single Pole</h4>
                        </div>
                    </Link>
                    <Link to={`/Shreyatronics/ToggleSwitch/Double Pole`}>
                        <div className="product">
                            <img className="product-image" src={DoublePole} alt="" />
                            <h4>Double Pole</h4>
                        </div>
                    </Link>
                    <Link to={`/Shreyatronics/ToggleSwitch/Triple Pole`}>
                        <div className="product">
                            <img className="product-image" src={TriplePole} alt="" />
                            <h4>Triple Pole</h4>
                        </div>
                    </Link>
                    <Link to={`/Shreyatronics/ToggleSwitch/Four Pole`}>
                        <div className="product">
                            <img className="product-image" src={FourPole} alt="" />
                            <h4>Four Pole</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="section">
                <div className="main-heading">
                    <h2>Terminal Blocks</h2>
                </div>
                <div className="horiz-section">
                    <hr />
                </div>
                <div className="products-section">
                    <Link to={`/Shreyatronics/TerminalBlocks/7213`}>
                        <div className="product">
                            <img className="product-image" src={SinglePole} alt="" />
                            <h4>TS</h4>
                        </div>
                    </Link>
                    <Link to={`/Shreyatronics/TerminalBlocks/7513`}>
                        <div className="product">
                            <img className="product-image" src={SinglePole} alt="" />
                            <h4>T/B ASSY Conductor</h4>
                        </div>
                    </Link> 
                </div>
            </div>
        </>
     );
}
 
export default Gilard;