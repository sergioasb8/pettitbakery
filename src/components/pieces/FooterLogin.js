import React from 'react'
import '../../assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export const FooterLogin = ( {Icons, liknRoute} ) => {
    return (
        <div className="mainFooter">
                <div className="rowFooter">
                    <div className="colIcons">
                        <FontAwesomeIcon icon={faFacebook} className="mediaIcon socialMedia"/>
                        <FontAwesomeIcon icon={faInstagram} className="mediaIcon socialMedia"/>
                    </div>
                    
                    <Link to="/auth/home" className='LinkHome'>
                        <div className="colLoginShop">
                            <p className="TextLogin">Explorar</p>
                            <FontAwesomeIcon icon={faStore} className="mediaIcon"/>
                        </div>
                    </Link>
                </div>
        </div>
    )
}
