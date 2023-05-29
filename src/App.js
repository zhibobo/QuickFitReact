import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import React from 'react';
//import Navbar from './components/Navbar';

function App() {
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/QuickFit2.loader.js",
    dataUrl: "build/QuickFit2.data",
    frameworkUrl: "build/QuickFit2.framework.js",
    codeUrl: "build/QuickFit2.wasm",
  });
  
  return (
    /*
    <div className='App'>
      <Navbar/>
    </div>
    */
    <Unity unityProvider={unityProvider} style={{ width: 1200, height: 650 }} />
  );
}

export default App;
