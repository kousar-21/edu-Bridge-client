import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import LoaderSpinner from '../Spinner/LoaderSpinner';
import toast from 'react-hot-toast';

const Update = () => {
    const { users, loading } = use(AuthContext)
    const myTutorsData = useLoaderData()
    // console.log(myTutorsData)
    const { _id, language, price, review, photo, description } = myTutorsData


    const handleUpdateTutorial = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateTutorial = Object.fromEntries(formData.entries())
        // console.log(updateTutorial)

        //send to update  data to base via axios
        axios.put(`https://language-club-orcin.vercel.app/addTutors/${_id}`, updateTutorial)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your Data has been Updated",
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
        <div className='pb-10 pt-32'>
            <h1 className='text-center mx-6 md:mx-20 py-2 rounded-2xl bg-[#B0DB9C] dark:bg-gray-500'>Update Your Tutorial !!</h1>
            {
                loading ? (<LoaderSpinner></LoaderSpinner>) : users && (
                    <div className='mx-6 md:mx-20'>
                        <form onSubmit={handleUpdateTutorial}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>

                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">
                                    <label className="label font-bold">User name</label>
                                    <input type="text" name='name' className="input w-full" readOnly value={users?.displayName || ""} />
                                </fieldset>
                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">

                                    <label className="label font-bold">Email</label>
                                    <input type="text" name='email' className="input w-full" readOnly value={users?.email || ""} />
                                </fieldset>
                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">

                                    <label className="label font-bold">Image</label>
                                    <input type="text" name='photo' className="input w-full" defaultValue={photo} />
                                </fieldset>
                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">

                                    <label className="label font-bold">Language</label>
                                    <input type="text" name='language' className="input w-full" defaultValue={language} />
                                </fieldset>
                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">

                                    <label className="label font-bold">Price</label>
                                    <input type="text" name='price' className="input w-full" defaultValue={price} />
                                </fieldset>
                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">

                                    <label className="label font-bold">Review</label>
                                    <input type="text" name='review' className="input w-full" readOnly value={review} />
                                </fieldset>

                            </div>
                            <div>
                                <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-500">

                                    <label className="label font-bold">Description</label>
                                    <input type="text" name='description' className="input w-full" defaultValue={description} />
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="fieldset">
                                    <button type='submit' className="btn btn-info w-full mt-4">Update</button>
                                </fieldset>
                            </div>
                        </form>

                    </div>
                )
            }

        </div>
    );
};

export default Update;