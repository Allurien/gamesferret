import React from 'react';
import loadingFerret from '../assets/images/loadingFerret.png';

export default () => {
    return (
        <div className="loaderContainer">
            <div className="loadingImage">
                <img className="spinner"src={loadingFerret} alt="Loading Images" />
            </div>
        </div>
    )
}