import React from 'react';
import '../../assets/styles/Product.css';

export const Product = ({item, onAdd, onRemove, newProducts, showModal, openModal}) => {

    //Asign the correct format to price values
    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    
    const founded = newProducts.find(y => y.id === item.id);

    const itemAmount = founded.amount;

    return (
        <div className="ProductContainer">
            <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{item.nameProduct}</h3>
            </div>
            <div className='ProductImage' >
                <img src={item.imgPro} alt={item.nameProduct} className="CakeImage" />
            </div>    
            <div className="buttonsContainer">
                {/* <div className="divText Price">{formatter.format(item.price)}</div> */}
                <button className="buttonPrice Minus" onClick={() => onRemove(item)}>-</button>
                <div className="divText Amount">{itemAmount}</div>
                <button className="buttonPrice Plus" onClick={() => onAdd(item)}>+</button>
            </div>
            <button className="openModal" onClick={() => openModal()}>Ver detalles</button>
        </div>
    )
}

