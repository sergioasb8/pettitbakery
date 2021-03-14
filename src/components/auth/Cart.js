import React, { useContext } from 'react'
import '../../assets/styles/Cart.css';
import { ProductContainer } from '../../containers/ProductContainer';
import { Footer } from '../pieces/Footer';
import { Header } from '../pieces/Header';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../context/Context'
import { ProductCart } from '../pieces/ProductCart';

function Cart () {

    const { onAdd, carItems, newProducts, onRemove} = useContext(Context)

    return (
        <div className='Cart'>
            <Header />
            <div className='CartContainer'>
                <h1 className="OrderTitle">Orden</h1>
                <ProductContainer>
                    {
                        carItems.map((item)=>(
                            <ProductCart
                                key = {item.id}
                                item = {item}
                                onAdd = {onAdd}
                                onRemove = {onRemove}
                                newProducts = {newProducts}
                            />
                        ))
                    }
                </ProductContainer>
            </div>
            <Footer Icons={faArrowAltCircleLeft} liknRoute="/auth/home" carItems={carItems}/>
        </div>
    )
}

export default Cart;