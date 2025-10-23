import React from 'react';
import { FaArrowRight, FaWineBottle } from "react-icons/fa";
import { GiByzantinTemple, GiFishingBoat, GiGreekTemple, GiJapaneseBridge, GiPisaTower, GiSpartanHelmet, GiTowerBridge } from "react-icons/gi";
import { PiMosqueBold } from "react-icons/pi";
import { Navigate, useNavigate } from 'react-router';



const CategoryLanguage = ({ tutorsData }) => {
    // const languagesData = tutorsData
    const navigate = useNavigate()
    // const datas = languagesData.filter(data => data.language.toLowerCase() === "english")
    // console.log(datas)

    const handleLanguage = (vasa) => {
        navigate(`/findTutors?lang=${vasa}`)
    }


    return (
        <div className='pt-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div onClick={() => handleLanguage("english")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiTowerBridge size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">English Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("spanish")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiSpartanHelmet size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">Spanish Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("french")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><FaWineBottle size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">French Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("german")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiGreekTemple size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">German Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("portuguese")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiFishingBoat size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">Portuguese Tutors </h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("bangla")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><PiMosqueBold size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">Bangla Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("italian")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiPisaTower size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">Italian Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("japanese")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiJapaneseBridge size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">Japanese Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleLanguage("chinese")}>
                <div className="hero bg-base-200 border border-gray-300 rounded-3xl w-full hover:text-white hover:bg-violet-400">
                    <div className="w-full hero-content flex-row">
                        {/* image */}
                        <div className='w-1/3 flex justify-center'><GiByzantinTemple size={24} /></div>

                        <div className='w-2/3 flex justify-between items-center'>
                            <div>
                                <h1 className="text-2xl font-bold">Chinese Tutors</h1>
                            </div>
                            <div>
                                <h1><FaArrowRight /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryLanguage;