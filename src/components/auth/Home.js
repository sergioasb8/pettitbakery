import React, { useContext } from 'react'
import '../../assets/styles/Home.css';
import { ProductContainer } from '../../containers/ProductContainer';
import { Footer } from '../pieces/Footer';
import { Header } from '../pieces/Header';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Categories } from '../../containers/Categories';
import { Context } from '../context/Context'
import { Product } from '../pieces/Product';
import { CakeCategories } from '../../containers/CakeCategories';

function Home () {

    const {idcategory,categoryName, infoProduct, onAdd, carItems, newProducts, onRemove} = useContext(Context)

    // array to save the products of each category to show
    let productRender =[];

    // adding elements to the array productRender
    infoProduct.forEach(element => {
        if (idcategory === 1 && element.category === "brownie" )   {
            productRender.push(element);
        }  else    if(element.category === categoryName && element.category!== "brownie")  {
            productRender.push(element);
        }
    });

    console.log(idcategory);
    console.log(carItems);
    console.log(newProducts);
    return (
        <div className='Home'>
            <Header />
            <div className='HomeContainer'>

                <Categories /> 
                <CakeCategories />
                <ProductContainer>
                {
                    productRender.map((item)=>(
                        <Product
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
            <Footer Icons={faShoppingCart} liknRoute="/auth/cart" carItems={carItems}/>
        </div>
    )
}

export default Home;

