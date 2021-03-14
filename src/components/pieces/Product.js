import React from 'react';
import '../../assets/styles/Product.css';

export const Product = ({nameProduct}) => {

    return (
        <div className="ProductContainer">
            <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{nameProduct}</h3>
            </div>
            <div className='ProductImage' >
                
            </div>                
        </div>
    )
}