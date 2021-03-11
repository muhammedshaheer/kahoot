import React from 'react';
import { getAsset } from '../../../config/Utils';

const Home = () => {
    return (
        <div>
            Home Page
            <img src={getAsset("logo.png", "img")} alt="Logo" />
        </div>
    );
};

export default Home;