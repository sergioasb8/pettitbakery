import React from 'react';
import '../../assets/styles/Product.css';

export const Product = ({nameProduct, imgPro}) => {

    return (
        <div className="ProductContainer">
            <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{nameProduct}</h3>
            </div>
            <div className='ProductImage' >
                <img src={imgPro} alt={nameProduct} className="CakeImage" />
            </div>    
            <div className="buttonsContainer">
                <div className="divText Price">30000</div>
                <button className="buttonPrice Minus">-</button>
                <div className="divText Amount">0</div>
                <button className="buttonPrice Plus">+</button>
            </div>            
        </div>
    )
}