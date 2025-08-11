import React from 'react';
import Banner from '../../Component/Banner/Banner';
import ExtraPart1 from '../../Component/ExtraPart/ExtraPart1';
import CountUpSection from '../../Component/CountUp/CountUpSection';
import { useLoaderData } from 'react-router';
import CategoryLanguage from '../../Component/Category/CategoryLanguage';


const Home = () => {
    const tutorsData = useLoaderData();
    // console.log(tutorsData.length)


    return (
        <div>
            <Banner></Banner>
            <CountUpSection tutorsData={tutorsData}></CountUpSection>
            <div className='mx-20 py-10'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>Discover the Perfect Tutor for your learning journey</h1>
                <CategoryLanguage tutorsData={tutorsData}></CategoryLanguage>
            </div>
            <ExtraPart1></ExtraPart1>
        </div>
    );
};

export default Home;