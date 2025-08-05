import React from 'react';
import errorAnimation from './json/error.json'
import Lottie from 'lottie-react';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <NavLink to='/'>
                <button className="btn btn-outline btn-success m-6"><span><FaRegArrowAltCircleLeft /></span> Return Home Page</button>
                </NavLink>
            </div>
            <div>
                <Lottie animationData={errorAnimation} className='h-[600px]'></Lottie>
            </div>
        </div>
    );
};

export default Error;