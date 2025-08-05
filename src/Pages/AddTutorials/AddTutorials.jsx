import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const AddTutorials = () => {

    const { users } = use(AuthContext)


    const handleAddTutorial = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const createTutorial = Object.fromEntries(formData.entries())
        createTutorial.review = Number(createTutorial.review)
        // console.log(createTutorial)

        //send to data base via axios
        axios.post('https://language-club-orcin.vercel.app/addTutors', createTutorial)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your Data has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
            })

        form.reset()
    }


    return (
        <div className='py-10 min-h-[calc(100vh-80px-324px)]'>
            <h1 className='text-center w-8/12 mx-auto py-2 rounded-2xl bg-[#B0DB9C] dark:bg-gray-400'>Add a new Tutorial !!</h1>
            <div className='w-8/12 mx-auto'>
                <form onSubmit={handleAddTutorial}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>

                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">
                            <label className="label font-bold">User name</label>
                            <input type="text" name='name' className="input w-full" readOnly value={users?.displayName || ""} />
                        </fieldset>
                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">

                            <label className="label font-bold">Email</label>
                            <input type="text" name='email' className="input w-full" readOnly value={users?.email || ""} />
                        </fieldset>
                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">

                            <label className="label font-bold">Image</label>
                            <input type="text" name='photo' className="input w-full" placeholder="Enter the tutorial photo url" required/>
                        </fieldset>
                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">

                            <label className="label font-bold">Language</label>
                            <input type="text" name='language' className="input w-full" placeholder="Enter the language" required/>
                        </fieldset>
                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">

                            <label className="label font-bold">Price</label>
                            <input type="text" name='price' className="input w-full" placeholder="Enter the price" required/>
                        </fieldset>
                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">

                            <label className="label font-bold">Review</label>
                            <input type="number" name='review' className="input w-full" readOnly value="0" />
                        </fieldset>

                    </div>
                    <div>
                        <fieldset className="fieldset py-2 px-2 rounded-2xl bg-[#CAE8BD] dark:bg-gray-400">

                            <label className="label font-bold">Description</label>
                            <input type="text" name='description' className="input w-full" placeholder="Type description" required/>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <button type='submit' className="btn btn-info w-full mt-4">Submit</button>
                        </fieldset>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddTutorials;