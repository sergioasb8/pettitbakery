import React, { useContext } from 'react';
import { Context } from '../context/Context';
import '../../assets/styles/Modal.css';

export const ModalBrownie = ({twoFunctions}) => {

    //Asign the correct format to price values
    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    const {valueHandler, currentProduct, openModal, showModal} = useContext(Context);

    return (
        <div>
            {!showModal ? 
                null 
                :
                currentProduct.category === "brownie"?
                    <div className="modalContainerBrownie">
                        <button className="closeButton" onClick={openModal}>X</button>
                        <h1 className="modalNameBrownie">{currentProduct.nameProduct}</h1>
                        <div className='modalImage' >
                            <img src={currentProduct.imgPro} alt={currentProduct.nameProduct} className="BrownieImage" />
                        </div>
                        <div className="selectBrownieContainer">
                            <label className="SelectLabelBrownie">Selecciona el topping para cada brownie</label>
                            <select className="flavorBrownie" onChange={valueHandler}>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Azucar glass">Azucar glass</option>
                                <option value="Chispas de colores">Chispas de colores</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>
                                <option value="Chocolate negro">Chocolate negro</option>
                                <option value="Galleta oreo">Galleta oreo</option>
                            </select>
                            <select className="flavorBrownie" onChange={valueHandler}>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Azucar glass">Azucar glass</option>
                                <option value="Chispas de colores">Chispas de colores</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>
                                <option value="Chocolate negro">Chocolate negro</option>
                                <option value="Galleta oreo">Galleta oreo</option>
                            </select>
                            <select className="flavorBrownie" onChange={valueHandler}>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Azucar glass">Azucar glass</option>
                                <option value="Chispas de colores">Chispas de colores</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>
                                <option value="Chocolate negro">Chocolate negro</option>
                                <option value="Galleta oreo">Galleta oreo</option>
                            </select>
                            <select className="flavorBrownie" onChange={valueHandler}>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Azucar glass">Azucar glass</option>
                                <option value="Chispas de colores">Chispas de colores</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>
                                <option value="Chocolate negro">Chocolate negro</option>
                                <option value="Galleta oreo">Galleta oreo</option>
                            </select>
                            <select className="flavorBrownie" onChange={valueHandler}>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Azucar glass">Azucar glass</option>
                                <option value="Chispas de colores">Chispas de colores</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>
                                <option value="Chocolate negro">Chocolate negro</option>
                                <option value="Galleta oreo">Galleta oreo</option>
                            </select>
                            <select className="flavorBrownie" onChange={valueHandler}>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Azucar glass">Azucar glass</option>
                                <option value="Chispas de colores">Chispas de colores</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>
                                <option value="Chocolate negro">Chocolate negro</option>
                                <option value="Galleta oreo">Galleta oreo</option>
                            </select>
                            <label className="BrowniePriceText">Precio</label>
                            <label className="BrowniePriceLabel">{formatter.format(currentProduct.price)}</label>
                            <button className="BrownieButton" onClick={twoFunctions}>Agregar</button>
                        </div>
                    </div> 
                    : 
                null 
            }
        </div>
    )
}