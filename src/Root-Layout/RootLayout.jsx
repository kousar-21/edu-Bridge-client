import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Spinner from '../Component/Spinner/Spinner';

const RootLayout = () => {

    const navigation = useNavigation();
    // console.log(navigation)

    return (
        <div className='' id='root-theme'>
            <Navbar></Navbar>
            <div className='bg-green-50 dark:bg-gray-700 text-base-content'>
                {navigation.state === "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;