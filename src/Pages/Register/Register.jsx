import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import registerJson from './json/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const { createUsers, googleUsers, setUsers, userProfile } = use(AuthContext)
    const navigate = useNavigate();


    const handleEmailRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)

        if (password.length < 6) {
            toast.error('Password length must be at least 6 characters long !!')
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.')
            return;
        }

        //firebase create users
        createUsers(email, password)
            .then(result => {
                const usersData = result.user
                // console.log(usersData)
                userProfile(name, photo)
                    .then(() => {

                        //send email data to backend
                        axios.post('https://language-club-orcin.vercel.app/addEmail', { email: usersData.email })
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch(error => {
                                // console.log(error.message)
                                toast.error(error.message)
                            })


                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Your Register has been Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                        setUsers({ ...usersData, displayName: name, photoURL: photo })
                    })

            })
            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
            })

        form.reset()
    }

    //google sign in
    const handleGoogleSignIn = () => {

        googleUsers()
            .then(result => {

                const users = result.user
                // console.log(users)

                //send email data to backend
                axios.post('https://language-club-orcin.vercel.app/addEmail', { email: users.email })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        // console.log(error.message)
                        toast.error(error.message)
                    })

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your Register has been Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
            })
    }




    return (
        <div className='py-10'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <Lottie animationData={registerJson} className='h-[500px]'></Lottie>
                        </div>
                    </div>

                    <div className="card bg-[#DDF6D2] dark:bg-gray-500 w-full mx-auto  max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Please Register!</h1>
                            <div className='pt-3'>
                                {/* Google */}
                                <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>
                                <div className="divider">OR</div>
                            </div>
                            <form onSubmit={handleEmailRegister}>
                                <fieldset className="fieldset pb-1">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Your Name" required />
                                    <label className="label">Photo</label>
                                    <input type="text" name='photo' className="input" placeholder="Your Photo" required />
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" required />

                                    <input type="submit" className='btn btn-neutral mt-4 w-full' value="Register" />
                                </fieldset>
                                <p>Already have an account? Please <NavLink to='/login'><span className='text-blue-400 font-medium'>Login</span></NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;