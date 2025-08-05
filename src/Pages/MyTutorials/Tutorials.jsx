import axios from 'axios';
import React, { use, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import NoData from '../../Component/NoData/NoData';

const Tutorials = ({ myTutorialPromise }) => {
    const { users } = use(AuthContext)
    const myTutorialsData = use(myTutorialPromise);


    const allMyTutorials = myTutorialsData.filter(data => data.email === users.email)

    const [allMyTutorial, setAllMyTutorial] = useState(allMyTutorials)

    const handleTutorDelete = (id) => {
        // console.log(id)
        const remainingTutor = allMyTutorial.filter(tutor => tutor._id !== id)
        // console.log(remainingTutor)

        //delete from database
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {
                axios.delete(`https://language-club-orcin.vercel.app/addTutors/${id}`)
                    .then((result) => {
                        // console.log("After delete from firebase",result.data)
                        if (result.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tutor file has been deleted.",
                                icon: "success"
                            });
                            setAllMyTutorial(remainingTutor)
                        }
                    })
                    .catch(error => {
                        toast.error(error.message)
                    })

            }
        });
    }

    console.log(allMyTutorial)
    return (
        <div>
            {
                allMyTutorial.length === 0 ? (<NoData></NoData>) : (
                    <div className="overflow-x-auto bg-[#ECFAE5] dark:bg-gray-500 w-11/12 md:w-10/12 mx-auto shadow-2xl rounded-2xl">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th></th>
                                    <th>Language</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Review</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    allMyTutorial.map((tutor, index) => <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={tutor.photo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{tutor.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{tutor.language}</span>
                                        </td>
                                        <td> <span className='text-orange-700 dark:text-white'>${tutor.price}</span> </td>
                                        <td><abbr title={tutor.description}>{tutor.description.slice(0, 5)}</abbr>...</td>
                                        <td>{tutor.review}</td>
                                        <th>
                                            <div className='gap-2 flex flex-col md:flex-row'>
                                                <div><NavLink to={`/updateTutor/${tutor._id}`}><button className="btn btn-primary hover:btn-info btn-xs">Update</button></NavLink></div>
                                                <div><button onClick={() => handleTutorDelete(tutor._id)} className="btn btn-error hover:btn-info btn-xs">Delete </button></div>
                                            </div>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                )
            }

        </div>
    );
};

export default Tutorials;