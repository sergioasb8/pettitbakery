import React, { useState } from 'react';
import { AppRouter } from '../routers/AppRouter';
import { Context } from './context/Context';
import {infoProduct, categories} from '../data/infoPettit.json';

function App() {

  const [idcategory, setIdCategory] = useState(1);
  const [categoryName, setCategoryName] = useState("");

  let dataContext = {
    infoProduct, 
    categories,
    setIdCategory,
    setCategoryName,
    categoryName,
  }

  return (
    <Context.Provider value={dataContext}>
      <AppRouter />
    </Context.Provider>
  )
}

export default App;
