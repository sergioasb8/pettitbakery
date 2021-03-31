import React, { useContext } from 'react';
import { Context } from '../context/Context';
import '../../assets/styles/Modal.css';

export const ModalCake = ({twoFunctions}) => {

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
                        currentProduct.category === "cake" ?
                        <div className="modalContainerCake">
                            <button className="closeButton" onClick={openModal}>X</button>
                            <h1 className="modalNameCake">{currentProduct.nameProduct}</h1>
                            <div className='modalImage' >
                                <img src={currentProduct.imgPro} alt={currentProduct.nameProduct} className="CakeImageModal" />
                            </div>

                            <div className="selectCakeContainer">
                                <label className="SelectLabelCake">Selecciona el tamaño</label>
                                <select className="selecCake" onChange={valueHandler}>
                                    <option value="Pequeño">Pequeño</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Grande">Grande</option>
                                </select>

                                <label className="SelectLabelCake">Selecciona el relleno</label>
                                <select className="selecCake" onChange={valueHandler}>
                                    <option value="Crema chantily">Crema chantilly</option>
                                    <option value="Arequipe">Arequipe</option>
                                    <option value="Crema de chocolate">Crema de chocolate</option>
                                </select>

                                <label className="SelectLabelCake">Selecciona el sabor</label>
                                <select className="selecCake" onChange={valueHandler}>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Naranja">Naranja</option>
                                    <option value="Vainilla">Vainilla</option>
                                    <option value="Zanahoria">Zanahoria</option>
                                </select>

                                <label className="CakePriceText">Precio</label>
                                <label className="CakePriceLabel">{formatter.format(currentProduct.price)}</label>
                                <button className="CakeButton" onClick={twoFunctions}>Agregar</button>
                            </div>
                        </div> 
                            :
                                null}
        </div>
    )
}