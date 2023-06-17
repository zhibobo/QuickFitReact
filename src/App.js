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
import SellerCentre from './pages/SellerCentre.jsx';
import SellerMarketingCentre from './pages/SellerMarketingCentre.jsx';
import SellerProduct from './pages/SellerProduct.jsx';
import SellerOrder from './pages/SellerOrder.jsx';
import VideoPlayer from './pages/VideoPlayer.jsx';
import WishList from './pages/WishList.jsx';
import Checkout from './pages/Checkout.jsx';
import Checkout2 from './pages/Checkout2.jsx';
import Checkout3 from './pages/Checkout3.jsx';


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
            <Route path="/sellercentre" element={<SellerCentre />} />
            <Route path="/sellermarketing" element={<SellerMarketingCentre />} />
            <Route path="/sellerproduct" element={<SellerProduct />} />
            <Route path="/sellerOrder" element={<SellerOrder />} />
            <Route path="/videoplayer" element={<VideoPlayer />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout2" element={<Checkout2 />} />
            <Route path="/checkout3" element={<Checkout3 />} />
          </Routes>
        </Sidebar>
        </Topbar>
      </BrowserRouter>
    </>
  );
};

export default App;
