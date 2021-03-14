import React from 'react';
import '../../assets/styles/Product.css';

export const Product = ({item, onAdd}) => {

    //Asign the correct format to price values
    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return (
        <div className="ProductContainer">
            <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{item.nameProduct}</h3>
            </div>
            <div className='ProductImage' >
                <img src={item.imgPro} alt={item.nameProduct} className="CakeImage" />
            </div>    
            <div className="buttonsContainer">
                <div className="divText Price">{formatter.format(item.price)}</div>
                <button className="buttonPrice Minus">-</button>
                <div className="divText Amount">0</div>
                <button className="buttonPrice Plus" onClick={() => onAdd(item)}>+</button>
            </div>            
        </div>
    )
}