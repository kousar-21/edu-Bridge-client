import React from 'react';
import NotFound from './Nodata/nodata.json'
import Lottie from 'lottie-react';

const NoData = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <Lottie animationData={NotFound} />
        </div>
    );
};

export default NoData;