import React, { useContext } from 'react'
import '../../assets/styles/Home.css';
import { ProductContainer } from '../../containers/ProductContainer';
import { Footer } from '../pieces/Footer';
import { Header } from '../pieces/Header';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Categories } from '../../containers/Categories';
import { Context } from '../context/Context'
import { Product } from '../pieces/Product';

function Home () {

    const {idcategory,categoryName, infoProduct} = useContext(Context)

    let productRender =[];


    // Validamos que la primera pantalla solo muestre la categoria recomendados

    infoProduct.forEach(element => {

     if (idcategory === 1 && element.category === "brownie" )   {
        productRender.push(element);
     }  else    if(element.category === categoryName && element.category!== "brownie")  {
        productRender.push(element);
     }
    });

    console.log(idcategory);
    return (
        <div className='Home'>
            <Header />
            <div className='HomeContainer'>

                <Categories /> 
                <ProductContainer>
                {
                    productRender.map(({id, nameProduct})=>(
                        <Product
                            key = {id}
                            nameProduct = {nameProduct}
                        />
                    ))
                }
                </ProductContainer>
            </div>
            <Footer Icons={faShoppingCart} liknRoute="/auth/cart"/>
        </div>
    )
}

export default Home;

