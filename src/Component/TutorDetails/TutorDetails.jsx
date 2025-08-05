import axios from 'axios';
import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const TutorDetails = () => {
    const {users} = use(AuthContext)
    // console.log(users.email)
    const tutorPages = useLoaderData();
    tutorPages.review = Number(tutorPages.review)
    // console.log(tutorPages)


    const handleBookedTutor = () => {
        const bookingInfo = {
            ...tutorPages,
            tutorId: tutorPages?._id,
            tutorEmail: tutorPages?.email,
            email:  users?.email
            
        }
        axios.post(`https://language-club-orcin.vercel.app/bookedTutors/`, bookingInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "You have successfully booked your Tutor!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
            })
    }

    return (
        <div className='py-10 min-h-[calc(100vh-80px-324px)]'>
            <div className="hero bg-base-200 rounded-3xl shadow-2xl w-10/12 mx-auto py-10">
                <div className="hero-content flex-col md:flex-row">
                    <div className='w-3/4 md:w-1/4'>
                        <img
                            src={tutorPages.photo}
                            className="rounded-lg w-full h-60 md:w-60 shadow-2xl"
                        />
                    </div>
                    <div className='w-3/4'>
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{tutorPages.name}</h1>
                        <h3 className='flex items-center gap-2 text-2xl'>{tutorPages.review}<FaStar size={16} className='text-yellow-400' /></h3>
                        <p>Language: {tutorPages.language}</p>
                        <p>Price: <span className='text-orange-700'>${tutorPages.price}</span></p>
                        <p className="py-6">
                            {tutorPages.description}
                        </p>
                        <button onClick={() => handleBookedTutor(tutorPages._id)} className="btn btn-primary hover:btn-info w-full">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;