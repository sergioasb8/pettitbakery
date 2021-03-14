import React from 'react'
import '../../assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = ( {Icons, liknRoute} ) => {
    return (
        <div className="mainFooter">
                <div className="rowFooter">
                    <div className="colIcons">
                        <a href='https://www.facebook.com/Pettitbakery' className='Ref'>
                            <FontAwesomeIcon icon={faFacebook} className="mediaIcon socialMedia"/>
                        </a>
                        <a href='https://www.instagram.com/pettitbakery/' className='Ref'>
                            <FontAwesomeIcon icon={faInstagram} className="mediaIcon socialMedia"/>
                        </a>
                    </div>
                    <div className="colTotal">
                        <p className="TextFooter">$ 77.000</p>
                    </div>
                    <Link to={liknRoute} className='LinkCart'>
                        <div className="colShop">
                            <FontAwesomeIcon icon={Icons} className="mediaIcon"/>
                        </div>
                    </Link>
                </div>
        </div>
    )
}


