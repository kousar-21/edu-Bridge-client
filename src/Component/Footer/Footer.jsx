import React from 'react';
import logo from '../../Images/logo.jpg'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#B0DB9C] dark:bg-gray-500'>
            <footer className="footer footer-horizontal footer-center text-primary-content p-10">
                <aside>
                    <img src={logo} className='size-20 rounded-xl' alt="" />
                    <p className="font-bold">
                        EduBridge Learning Hub Ltd.
                        <br />
                        Providing reliable Education since 2012
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <h1 className='underline'>Follow Us</h1>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://web.facebook.com/?_rdc=1&_rdr#' target="_blank"><FaFacebook size={20} /></a>
                        <a href="https://www.youtube.com/" target="_blank"><FaYoutube size={20} /></a>
                        <a href="https://x.com/" target="_blank"><FaTwitter size={20} /></a>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram size={20} /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;