import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const MyAvatar = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "build2/QuickFitUnityApp.loader.js",
    dataUrl: "build2/QuickFitUnityApp.data",
    frameworkUrl: "build2/QuickFitUnityApp.framework.js",
    codeUrl: "build2/QuickFitUnityApp.wasm",
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  return (
    <div className="unity-container">
      <Unity
        className="unity-app"
        style={{ width: "1200px", height: "650px" }}
        unityProvider={unityProvider}
      />
    </div>
  );
};

export default MyAvatar;