import React from 'react';
import { AppRouter } from '../routers/AppRouter';
import { Context } from './context/Context';
import {infoProduct,categories} from '../data/infoPettit.json'

function App() {

  let dataContext = {
    infoProduct, 
    categories
  }

  return (
    <Context.Provider value={dataContext}>
      <AppRouter />
    </Context.Provider>
  )
}

export default App;
