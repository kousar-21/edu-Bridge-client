import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        fetch('/banner.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])


    return (
        <div className='relative overflow-hidden pt-28 pb-10 z-0 mx-6 md:mx-20'>
            {banners.length >= 1 && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    // navigation, h-[300px] lg:h-[500px]
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    className='w-full'
                >
                    {
                        banners.map(banner => (<SwiperSlide key={banner.id}>
                            <div className='w-full aspect-[1361/500] rounded-sm relative overflow-hidden'>
                                <img className='w-full h-full object-cover block' src={banner.image} alt="" />
                                <div className='absolute bottom-8 lg:bottom-16 left-6 lg:left-12 bg-black/40 w-10/12 md:w-11/12 mx-auto p-4 rounded text-white hidden md:block'>
                                    <p className='lg:text-2xl md:text-lg text-sm pb-5 md:pr-10 font-bold'>{banner.text}</p>
                                    <div className='space-x-3'>
                                        <button className='btn btn-info text-sm text-white'>{banner.button.label}</button>
                                        <button className='btn btn-outline text-sm btn-info'>{banner.button.link}</button>
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