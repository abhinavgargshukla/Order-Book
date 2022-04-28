import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Container} from '@mui/material';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders.js';
import Products from './components/Products/Products.js'

function App() {
  return (
   <BrowserRouter>
      <Container maxWidth>
       <Navbar/>
       <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/orders" exact element={<Orders/>}/>
         <Route path="/orders/products" exact element={<Products/>}/>
       </Routes>
    </Container>
   </BrowserRouter>

   
  );
};

export default App;
