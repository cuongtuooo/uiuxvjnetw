import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './layouts/user/Login';
import SignUp from './layouts/user/SignUp';
import HomePage from './layouts/homepage/HomePage';
import Product from './layouts/product/Product';
import Cart from './layouts/cart/Cart';
import Acount from './layouts/acount/Acount';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/sanpham' element={<Product/>}></Route>
          <Route path='/giohang' element={<Cart/>}></Route>
          <Route path='/taikhoan' element={<Acount/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
