import './App.css'
import React from'react'
import Routing from './Router'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/Products/Product'


function App() {
  return <Routing/>;
    <div>
      <Header/>
      <Carousel/>
      <Category/>
      <Product/>
      
    </div>
  
}

export default App;
