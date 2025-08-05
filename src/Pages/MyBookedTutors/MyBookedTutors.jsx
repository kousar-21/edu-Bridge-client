import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useLoaderData } from 'react-router';
import { FaStar } from 'react-icons/fa';
import NoData from '../../Component/NoData/NoData';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const MyBookedTutors = () => {
    const { users } = use(AuthContext)
    const initialBookedData = useLoaderData();
    const [booked, setBooked] = useState([])

    useEffect(() => {
        const initial = initialBookedData.filter(data => data.email === users.email)
        setBooked(initial)
    }, [initialBookedData, users.email])

    // console.log(booked)

    const handleReviewTutor = (id,mail) => {
        console.log(id,mail)
        axios.patch(`https://language-club-orcin.vercel.app/bookedTutors/${id}?email=${mail}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.addTutors.modifiedCount || res.data.bookedTutors.modifiedCount) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Thanks for your review !!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                const updated = booked.map(book => {
                    if (book._id === id) {
                        return { ...book, review: (book.review || 0) + 1 }
                    }
                    return book
                })
                setBooked(updated)
            })
            .catch(error => {
                // console.log(error)
                toast.error(error.message)
            })
    }

    return (
        <div className='py-10 space-y-10 min-h-[calc(100vh-80px-324px)]'>
            {
                booked.length === 0 ? (<NoData></NoData>) : (
                    booked.map((book, index) => (
                        <div key={index} className="hero bg-base-200 rounded-3xl shadow-2xl w-10/12 mx-auto py-10">
                            <div className="hero-content flex-col md:flex-row">
                                <div className='w-3/4 md:w-1/4'>
                                    <img
                                        src={book.photo}
                                        className="rounded-lg w-full h-60 md:w-60 shadow-2xl"
                                    />
                                </div>
                                <div className='w-3/4'>
                                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{book.name}</h1>
                                    <h3 className='flex items-center gap-2 text-2xl'>{book.review}<FaStar size={16} className='text-yellow-400' /></h3>
                                    <p>Language: {book.language}</p>
                                    <p>Price: <span className='text-orange-700'>${book.price}</span> </p>
                                    <p className="py-6">
                                        {book.description}
                                    </p>
                                    <button onClick={() => handleReviewTutor(book._id, book.email)} className="btn btn-primary hover:btn-info w-full">Review</button>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }


        </div>
    );
};

export default MyBookedTutors;