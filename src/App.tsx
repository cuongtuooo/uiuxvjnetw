import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './layouts/user/Login';
import SignUp from './layouts/user/SignUp';
import HomePage from './layouts/homepage/HomePage';
import Product from './layouts/product/Product';
import Cart from './layouts/cart/Cart';
import Acount from './layouts/acount/Acount';
import Help from './layouts/help/Help';
import Admin from './layouts/Admin/Admin';
import { AuthProvider } from './Api/authContext';
import PrivateRoute from './Api/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path="*" element={<Login />} />

             {/* Sử dụng PrivateRoute để bảo vệ Admin */}
            <Route path="/admin/*" element={<PrivateRoute element={<Admin />} />} />
            <Route path='/homepage' element={<HomePage />}></Route>
            <Route path='/sanpham' element={<Product />}></Route>
            <Route path='/giohang' element={<Cart />}></Route>
            <Route path='/taikhoan' element={<Acount />}></Route>
            <Route path='/trogiup' element={<Help />}></Route>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
