import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import LoaderSpinner from '../../Component/Spinner/LoaderSpinner';
import toast from 'react-hot-toast';

const FindTutors = () => {
    const { loading, setLoading } = use(AuthContext)
    const [allTutors, setAllTutors] = useState([])
    const [filterTutor, setFilterTutor] = useState([])

    const [search, setSearch] = useState("");

    // console.log(languages)

    useEffect(() => {
        setLoading(true)
        axios.get("https://language-club-orcin.vercel.app/addTutors")
            .then(res => {
                setAllTutors(res.data);
                setFilterTutor(res.data);
                setLoading(false);
            })

            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
                setLoading(false);
            })

    }, [setLoading])

    const handleSearch = () => {
        if (!search.trim()) {
            setFilterTutor(allTutors);
            return;
        }
        const matched = allTutors.filter(tutor =>
            tutor.language.toLowerCase().includes(search.toLowerCase()) ||
            tutor.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterTutor(matched);
    }

    return (
        <div className='pb-10 pt-32 min-h-[calc(100vh-80px-324px)]'>
            <h1 className='text-center text-xl md:text-3xl lg:text-4xl font-extrabold mx-6 md:mx-20'>Explore Best Online Tutors & Teacher for Learning a new Language</h1>
            <div className='py-5'>
                <fieldset className="fieldset bg-base-200 border-base-300 w-8/12 mx-auto rounded-box border p-4">
                    <div className="join w-full">

                        <input type="text" className="input join-item w-full" placeholder=" Search by Language" value={search} onChange={(e) => setSearch(e.target.value)} />

                        <button onClick={handleSearch} className="btn join-item hover:text-white hover:bg-info dark:hover:btn-info btn-primary">Search</button>
                    </div>
                </fieldset>
            </div>
            <div className='py-10 mx-6 md:mx-20'>
                {
                    loading ? (<LoaderSpinner></LoaderSpinner>) : filterTutor.length > 0 ? (
                        filterTutor.map((tutor, index) => (<div key={index} className="hero bg-base-200 rounded-3xl shadow-2xl w-full mx-auto my-10 py-10">
                            <div className="hero-content flex-col md:flex-row">
                                <div className='w-3/4 md:w-1/4'>
                                    <img
                                        src={tutor.photo}
                                        className="rounded-lg w-full h-60 md:w-60 shadow-2xl"
                                    />
                                </div>
                                <div className='w-3/4'>
                                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{tutor.name}</h1>
                                    <h3 className='flex items-center gap-2 text-2xl'>{tutor.review}<FaStar size={16} className='text-yellow-400' /></h3>
                                    <p>Language: {tutor.language}</p>
                                    <p className="py-6">
                                        {tutor.description}
                                    </p>
                                    <button className="btn btn-primary hover:btn-info"><NavLink to={`/tutorDetails/${tutor._id}`}>View Details</NavLink></button>
                                </div>
                            </div>
                        </div>))
                    ) : (
                        <div className="text-center py-16 text-gray-500">
                            <FaSearch className="mx-auto mb-4 text-6xl text-gray-400" />
                            <h2 className="text-2xl font-semibold">No Tutors Found</h2>
                            <p className="text-gray-400 mt-2">
                                Try adjusting your search or explore all tutors.
                            </p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default FindTutors;