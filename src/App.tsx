import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './layouts/user/Login';
import SignUp from './layouts/user/SignUp';
import HomePage from './layouts/homepage/HomePage';
import Product from './layouts/product/Product';
import Cart from './layouts/cart/Cart';
import Acount from './layouts/acount/Acount';
import Help from './layouts/help/Help';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path="*" element={<Login/>} />
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/sanpham' element={<Product/>}></Route>
          <Route path='/giohang' element={<Cart/>}></Route>
          <Route path='/taikhoan' element={<Acount/>}></Route>
          <Route path='/trogiup' element={<Help/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
