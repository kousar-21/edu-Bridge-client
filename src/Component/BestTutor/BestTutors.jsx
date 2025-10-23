import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BestTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://language-club-orcin.vercel.app/addTutors")
            .then((res) => setTutors(res.data))
            .catch((error) => toast.error(error.message));
    }, []);

    return (
        <div className="py-10 px-4 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-base-content dark:text-white">
                Best Tutors
            </h2>

            <Swiper
                spaceBetween={16}
                slidesPerView={5}
                loop={true}
                centeredSlides={false}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {tutors.map((tutor, index) => (
                    <SwiperSlide
                        key={tutor._id}
                        className="w-[270px]" // fixed width for autoplay to work
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative rounded-xl bg-base-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 flex flex-col items-center transition-all duration-300">
                            {/* Blurred content on hover */}
                            <div
                                className={`flex flex-col items-center transition-all duration-300 ${hoveredIndex === index ? "blur-sm" : ""
                                    }`}
                            >
                                <img
                                    src={tutor.photo}
                                    alt={tutor.name}
                                    className="w-32 h-32 rounded-2xl object-cover mb-4"
                                />
                                <h3 className="text-lg md:text-xl font-semibold text-center text-base-content dark:text-white mb-1">
                                    {tutor.name}
                                </h3>
                                <p className="text-sm text-base-content/80 dark:text-gray-300 mb-2">
                                    Language: {tutor.language}
                                </p>
                                <div className="flex items-center gap-1 mb-2">
                                    <FaStar className="text-yellow-400" />
                                    <span className="text-sm font-medium text-base-content dark:text-white">
                                        {tutor.review || 0}
                                    </span>
                                </div>
                                <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold">
                                    ${tutor.price}
                                </p>
                            </div>

                            {/* Details button stays visible above blur */}
                            {hoveredIndex === index && (
                                <button
                                    onClick={() => navigate(`/tutorDetails/${tutor._id}`)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-6 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-full text-sm md:text-base hover:bg-blue-700 dark:hover:bg-blue-600 transition-all z-20"
                                >
                                    Details
                                </button>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BestTutors;
