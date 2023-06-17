import React from 'react';
import { DefaultPlayer } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import quickfitdemo from '../video/quickfit-demo.mp4';

const VideoPlayer = () => {
    return (
        <DefaultPlayer>
            <source src={quickfitdemo} type="video/webm" />
        </DefaultPlayer>
    );
};

export default VideoPlayer;