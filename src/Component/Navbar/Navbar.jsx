import React, { use } from 'react';
import logo from '../../Images/logo.jpg'
import { NavLink } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { FaCircleArrowDown } from "react-icons/fa6";
import Theme from '../../Theme/Theme';

const Navbar = () => {

    const { users, logout } = use(AuthContext);
    // console.log(users.photoURL)

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "You successfully logout from EduBridge",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className='bg-[#CAE8BD]  dark:bg-gray-500 px-6 md:px-20 fixed top-0 z-10 w-full'>
            <div className="flex justify-between py-2">
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/findTutors'>Find Tutors</NavLink></li>
                            <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                            {
                                users && <>
                                    <li><NavLink to='/addTutorials'>Add Tutorials</NavLink></li>
                                    <li><NavLink to='/myTutorials'>My Tutorials</NavLink></li>
                                    <li><NavLink to='/bookedTutors'>My booked tutors</NavLink></li>
                                </>
                            }

                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div>
                            <img src={logo} className='size-8 md:size-16 rounded-2xl' alt="" />
                        </div>
                        <div>
                            <p className=" hidden lg:block lg:text-xl lg:font-bold">EduBridge</p>
                        </div>
                        <div>
                            <Theme></Theme>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/findTutors'>Find Tutors</NavLink></li>
                            <li><NavLink to='/aboutUs'>About Us</NavLink></li>
                            {
                                users && <>
                                    <li><NavLink to='/addTutorials'>Add Tutorials</NavLink></li>
                                    <li><NavLink to='/myTutorials'>My Tutorials</NavLink></li>
                                    <li><NavLink to='/bookedTutors'>My booked tutors</NavLink></li>
                                </>
                            }

                        </ul>
                    </div>
                    <div>
                        {
                            users && (<div className='relative z-50'>
                                <div id='clickable'><img className='size-14 rounded-full' src={users.photoURL} alt="" /></div>
                                <Tooltip anchorSelect='#clickable' clickable>
                                    <div className='flex gap-1'>
                                        <div><p>{users.displayName}</p></div>
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="m-1"><FaCircleArrowDown size={16} /></div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-black dark:text-white rounded-box z-1 w-52 p-2 shadow-sm">
                                                <li><a>My Profile</a></li>
                                                <li><a>Setting</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </Tooltip>
                            </div>)
                        }
                    </div>
                    <div>

                        <div>
                            {
                                users ? <button onClick={handleLogout} className='btn btn-error hover:btn-primary'>Logout</button> : <NavLink to='/login'><button className='btn btn-info hover:btn-primary mr-5'>Login</button></NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;