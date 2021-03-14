import React, { useContext } from 'react'
import '../../assets/styles/Home.css';
import { ProductContainer } from '../../containers/ProductContainer';
import { Footer } from '../pieces/Footer';
import { Header } from '../pieces/Header';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../context/Context'

function Cart () {

    const {carItems} = useContext(Context)

    return (
        <div className='Cart'>
            <Header />
            <div className='CartContainer'>
                <ProductContainer>

                </ProductContainer>
            </div>
            <Footer Icons={faArrowAltCircleLeft} liknRoute="/auth/home" carItems={carItems}/>
        </div>
    )
}

export default Cart;