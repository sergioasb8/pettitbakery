import React, { useState } from 'react';
import { AppRouter } from '../routers/AppRouter';
import { Context } from './context/Context';
import {infoProduct, categories} from '../data/infoPettit.json';

function App() {

    const [idcategory, setIdCategory] = useState(1);
    const [categoryName, setCategoryName] = useState("");
    const products = infoProduct; 
    // creating a const where we will update the list of selected products (shopping car)
    const [carItems, setCarItems] = useState([]);
    // Creating a copy of produts in an useState so we can manipulate it
    const [newProducts, setNewProducts] = useState(products);

    // creating a function to add products to our shopping car
    const onAdd = (product) => {

        // once we click on a product we will get the info from the product, then we will look
        // for the product inside the array with all the products, then go and modify the 
        // amount adding one and left the other products unmodify
        const category = newProducts.find(y => y.id === product.id);

        setNewProducts(newProducts.map(y => y.id === product.id?
                {...category, amount: category.amount +1} : y))
        
        // once we click we will try to find the product inside the list of our shopping car
        // if we find it inside the array we will add one to the quantity but if we do not
        // find it inside the list of our shopping car  we will create the product inside 
        // our shopping list and then add one to the quantity
        const exist = carItems.find(x => x.id === product.id);

        if(exist) {
            setCarItems(carItems.map(x => x.id === product.id ? 
                {...exist, amount: exist.amount +1} : x))
        } else {
            setCarItems([...carItems, {...product, amount: product.amount + 1}]);
        }
    }

  // creating a function to add products to our shopping car
  const onRemove = (product) => {

      const category = newProducts.find(y => y.id === product.id);

      if(category.amount > 0) {
          setNewProducts(newProducts.map(y => y.id === product.id?
              {...category, amount: category.amount -1} : y))
      }
      
      const exist = carItems.find((x) => x.id === product.id);
      if (exist) {
          if(exist.amount === 1) {
              setCarItems(carItems.filter((x) => x.id !== product.id));
          } else {
              setCarItems(carItems.map(x => x.id === product.id ? 
              {...exist, amount: exist.amount - 1} : x));
          }
      }
        
    }

    let dataContext = {
      infoProduct, 
      categories,
      idcategory,
      setIdCategory,
      setCategoryName,
      categoryName,
      newProducts,
      carItems
    }
     
  return (
    <Context.Provider value={dataContext}>
      <AppRouter />
    </Context.Provider>
  )
}

export default App;
