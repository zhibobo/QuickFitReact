import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const MyAvatar = () => {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "build/QuickFit2.loader.js",
    dataUrl: "build/QuickFit2.data",
    frameworkUrl: "build/QuickFit2.framework.js",
    codeUrl: "build/QuickFit2.wasm",
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