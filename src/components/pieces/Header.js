import React from 'react';
import '../../assets/styles/Header.css';
import vectorBg from '../../assets/img/vectorBg.jpg';
import logoPettit from '../../assets/img/logoPettit.png';

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="vectorContainer">
                <img src={vectorBg} alt="Postres" className="vectorBg" />
            </div>
            <div className="logoContainer">
                <img src={logoPettit} alt="Pettit Bakery" className="logoPettit" />
            </div>
        </div>
    )
}