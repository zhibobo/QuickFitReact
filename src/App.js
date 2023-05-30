import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './pages/Home.jsx';
import BestSellers from './pages/BestSellers.jsx';
import MyAvatar from './pages/MyAvatar.jsx';
import NewArrivals from './pages/NewArrivals.jsx';
import Sale from './pages/Sale.jsx';


/*
function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "build/QuickFit2.loader.js",
    dataUrl: "build/QuickFit2.data",
    frameworkUrl: "build/QuickFit2.framework.js",
    codeUrl: "build/QuickFit2.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 1200, height: 650 }} />
  );
}
*/

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/home"element={<Home/>}/>
          <Route path="/newarrivals"element={<NewArrivals/>}/>
          <Route path="/bestsellers"element={<BestSellers/>}/>
          <Route path="/sale"element={<Sale/>}/>
          <Route path="/myavatar"element={<MyAvatar/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
