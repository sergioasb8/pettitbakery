import React from 'react';
import '../../assets/styles/LoginScreen.css';
import { FooterLogin } from '../pieces/FooterLogin';

import VectorBg from '../../assets/img/vectorBg.jpg';
import LogoPettit from '../../assets/img/logoPettit.png';
import UnicornCake from '../../assets/img/products/UnicornCute.jpg';

const LoginScreen = () => {
    return (
        <div className='HomeContainer'>
            <div className='ImageContainer'>
                <img src={VectorBg} alt='Vector' className='VectorBgLogin'/>
            </div>
            <div className='Rectangle'>
                <div className='HalfCircle'>
                    <img src={LogoPettit} alt='Pettit' className='logoPettit'/>
                </div>
                <div className='UnicornContainer'>
                    <img src={UnicornCake} alt='TortasUnicornio' className='UnicornCake'/>
                </div>
            </div>
            <FooterLogin />
        </div>
    )
}

export default LoginScreen;