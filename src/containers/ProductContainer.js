import React from 'react';
import '../assets/styles/ProductContainer.css';

export const ProductContainer = ({children}) => {
    return (
        <section className="productSection" id="productSection">
            {children}
        </section>
    )
}