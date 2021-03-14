import React from 'react';
import '../../assets/styles/Product.css';

export const Product = ({nameProduct, price, amount}) => {

    const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency", 
        currency: "COP", 
        maximumFractionDigits: 0});
    return (
        <div className="ProductContainer">
            <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{nameProduct}</h3>
            </div>
            <div className='ProductImage' >
                
            </div>                
            
            <div className='ProductPriceContainer' >
                <div className='ContainerPrice'>
                    <p className='ProductPrice'>{formatter.format(price)}</p>
                    <div className='ContainerCounter'>
                        <button className='PlusCounter'>+</button>
                        <div className='CircleCounter'>
                            <p className='NumberCounter'>
                                {amount}
                            </p>
                        </div>
                        <button className='MinusCounter'>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}