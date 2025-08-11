import React, { useState } from 'react';
import CountUp from 'react-countup';
import { AuthContext } from '../../Context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';

const CountUpSection = ({tutorsData}) => {
    const totalData = tutorsData


    const allReview = totalData.reduce((sum,tutor)=>sum + (tutor.review||0),0)
    const languages = new Set(totalData.map(data=>data.language))


    const [totalUser, setTotalUser] = useState([])

    useEffect(()=>{
        axios.get('https://language-club-orcin.vercel.app/addEmail')
        .then(res=>{
            setTotalUser(res.data)
        })
        .catch(error=>{
            console.log(error.message)
        })
    },[])


    return (
        <div className='gap-5 py-10 mx-6 md:mx-20 grid grid-cols-4'>
            <div className='text-center'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-extrabold flex items-center  justify-center gap-2'><CountUp end={totalData?.length ||0} duration={8} /> +</h3>
                <h3>Total Tutor</h3>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-extrabold flex items-center justify-center gap-2'><CountUp end={allReview} duration={8} /> +</h3>
                <h3>Total Reviews</h3>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-extrabold flex items-center justify-center gap-2'><CountUp end={languages?.size ||0} duration={8} /> +</h3>
                <h3>Total Language</h3>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-extrabold flex items-center justify-center gap-2'><CountUp end={totalUser?.length ||0} duration={8} /> +</h3>
                <h3>Total User</h3>
            </div>
        </div>
    );
};

export default CountUpSection;