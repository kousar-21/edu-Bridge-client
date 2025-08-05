import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    const [banners, setBanners] = useState([])

    useEffect(()=>{
        fetch('/banner.json')
        .then(res=>res.json())
        .then(data=>setBanners(data))
    },[])


    return (
        <div className='relative overflow-visible z-0'>
            {banners.length>=1&&(
                <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{clickable: true}}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{delay:2000}}
            >
                {
                    banners.map(banner=>(<SwiperSlide key={banner.id}>
                        <div className='relative'>
                            <img className='h-[300px] lg:h-[500px] w-full' src={banner.image} alt="" />
                            <div className='absolute bottom-16 lg:bottom-40 left-12 lg:left-20 opacity-80'>
                                <p className='text-2xl text-blue-600 pb-5 font-bold'>{banner.text}</p>
                                <div className=' space-x-3'>
                                    <button className='btn btn-info'>{banner.button.label}</button>
                                    <button className='btn btn-info'>{banner.button.link}</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
            )}
        </div>
    );
};

export default Banner;