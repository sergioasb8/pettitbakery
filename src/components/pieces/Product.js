import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { ModalPie } from './ModalPie';
import { ModalCupCake } from './ModalCupCake';
import { ModalCake } from './ModalCake';
import { ModalBrownie } from './ModalBrownie';
import '../../assets/styles/Product.css';

export const Product = ({item, onAdd, onRemove, newProducts}) => {

    const {identifyProduct, openModal} = useContext(Context);
    /** we create this function cause we cannot add two onClick on our button.
     * so we will call the two functions inside this functions and it will 
     * work as we want
     */
    const twoFunctions = () => {
        openModal();
        onAdd(item);
    }

    const founded = newProducts.find(y => y.id === item.id);

    const itemAmount = founded.amount;

    return (
        <div>
            <div className="ProductContainer">
                <div className='ProductNameContainer'>
                        <h3 className='ProductName'>{item.nameProduct}</h3>
                </div>
                <div className='ProductImage' >
                    <img src={item.imgPro} alt={item.nameProduct} className="CakeImage" />
                </div>    
                <div className="buttonsContainer">
                    <button className="buttonPrice Minus" onClick={() => onRemove(item)}>-</button>
                    <div className="divText Amount">{itemAmount}</div>
                    <button className="buttonPrice Plus" onClick={() => identifyProduct(item)}>+</button>
                </div>
                <button className="openModal" onClick={() => identifyProduct(item)}>Ver detalles</button>
            </div>
            <ModalPie twoFunctions={twoFunctions} />
            <ModalCupCake twoFunctions={twoFunctions} />
            <ModalCake twoFunctions={twoFunctions} />
            <ModalBrownie twoFunctions={twoFunctions} />
        </div>
        
    )
}

