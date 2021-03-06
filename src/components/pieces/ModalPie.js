import React, { useContext } from 'react';
import { Context } from '../context/Context';
import '../../assets/styles/Modal.css';

export const ModalPie = ({twoFunctions}) => {

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
                currentProduct.category === "pie"?
                    <div className="modalContainer">
                        <button className="closeButton" onClick={openModal}>X</button>
                        <h1 className="modalNamePie">{currentProduct.nameProduct}</h1>
                        <div className='modalImage' >
                            <img src={currentProduct.imgPro} alt={currentProduct.nameProduct} className="PieImage" />
                        </div>
                        <div className="selectPieContainer">
                            <label className="SelectLabelPie">Selecciona el sabor</label>
                            <select className="flavor" onChange={valueHandler}>
                                <option value="Durazno">Durazno</option>
                                <option value="Fresa">Fresa</option>
                                <option value="Mango">Mango</option>
                                <option value="Manzana">Manzana</option>
                                <option value="Piña">Piña</option>
                            </select>
                            <label className="PiePriceText">Precio</label>
                            <label className="PiePriceLabel">{formatter.format(currentProduct.price)}</label>
                            <button className="PieButton" onClick={twoFunctions}>Agregar</button>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}