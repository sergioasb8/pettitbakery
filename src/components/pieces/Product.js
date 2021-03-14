import React from 'react';
import '../../assets/styles/Product.css';

export const Product = ({item}) => {

    let showPrice = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(item.price));
    return (
        <div className="ProductContainer">
            <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{item.nameProduct}</h3>
            </div>
            <div className='ProductImage' >
                {/* <img src={item.imgPro} alt='Personaliza tu torta' className='CakeImage'/> */}
            </div>                
            
            <div className='ProductPriceContainer' >
                <div className='ContainerPrice'>
                    <p className='ProductPrice'>{showPrice}</p>
                    <div className='ContainerCounter'>
                        <button className='PlusCounter'>+</button>
                        <div className='CircleCounter'>
                            <p className='NumberCounter'>
                                {item.amount}
                            </p>
                        </div>
                        <button className='MinusCounter'>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}