import Lottie from 'lottie-react';
import React from 'react';
import Loader from './loader.json'

const LoaderSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Lottie animationData={Loader}></Lottie>
        </div>
    );
};

export default LoaderSpinner;