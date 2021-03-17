import React from "react"
import './Loader.scss'

function Loader() {
    return (
        <div className='loadingBlock'>
            <h2 className='loadingText'>
                Loading
            </h2>
            <div className="spinner">
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
                <div className="spinner-item"></div>
            </div>
        </div>
    );
}

export default Loader;
