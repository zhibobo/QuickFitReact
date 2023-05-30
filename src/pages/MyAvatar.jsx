import React, { Fragment } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";


const MyAvatar = () => {

    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "build/QuickFit2.loader.js",
        dataUrl: "build/QuickFit2.data",
        frameworkUrl: "build/QuickFit2.framework.js",
        codeUrl: "build/QuickFit2.wasm",
      });
    
    async function handleClickBack() {
        await unload();
        // Ready to navigate to another page.
    }
    return (
        <Fragment>
            <Unity unityProvider={unityProvider} style={{ width: 1200, height: 650 }} />
            <button onClick={handleClickBack}>Press To Stop</button>        
        </Fragment>
    );
};

/*
function MyAvatar() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/QuickFit2.loader.js",
        dataUrl: "build/QuickFit2.data",
        frameworkUrl: "build/QuickFit2.framework.js",
        codeUrl: "build/QuickFit2.wasm",
      });    
    useEffect(function () {
        Unity.on("quitted", function () {});
    }, []);

    return <Unity unityProvider={unityProvider} />;
}
*/
export default MyAvatar;