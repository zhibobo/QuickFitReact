import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './pages/Home.jsx';
import BestSellers from './pages/BestSellers.jsx';
import MyAvatar from './pages/MyAvatar.jsx';
import NewArrivals from './pages/NewArrivals.jsx';
import Sale from './pages/Sale.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyProfile from './pages/MyProfile.jsx';
import MerchantLogin from './pages/MerchantLogin.jsx';
import MerchantRegister from './pages/MerchantRegister.jsx';
import LoveBonito from './pages/LoveBonito.jsx';
import Cart from './pages/Cart.jsx';
import MyMeasurement from './pages/MyMeasurement.jsx';
import MyPurchase from './pages/MyPurchase.jsx';
import Topbar from './components/Topbar.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/bestsellers" element={<BestSellers />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/myavatar" element={<MyAvatar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/merchantlogin" element={<MerchantLogin />} />
            <Route path="/merchantregister" element={<MerchantRegister />} />
            <Route path="/lovebonito" element={<LoveBonito />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mymeasurements" element={<MyMeasurement />} />
            <Route path="/mypurchase" element={<MyPurchase />} />
          </Routes>
        </Sidebar>
        </Topbar>
      </BrowserRouter>
    </>
  );
};

export default App;
