import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
    {
        name: "Sarah K.",
        role: "Student",
        text: "EduBridge helped me find the perfect tutor to improve my English. The process was simple and effective!",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "David L.",
        role: "Parent",
        text: "My son loves his math tutor here. The tutors are professional and caring.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Priya M.",
        role: "Student",
        text: "Flexible scheduling made it easy for me to learn despite my busy routine.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
];

const ExtraSections = () => {
    return (
        <div className="text-gray-800 pt-6 pb-16 dark:text-gray-200">

            {/* 1. Why Choose EduBridge */}
            <section className="mx-6 md:mx-20 pb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Why EduBridge Stands Out?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3 text-gray-700">Expert Tutors</h3>
                        <p>All our tutors are vetted professionals with extensive subject knowledge.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3 text-gray-700">Flexible Scheduling</h3>
                        <p>Book sessions anytime, anywhere, at your convenience with easy rescheduling.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3 text-gray-700">Personalized Learning</h3>
                        <p>Customized lessons tailored to your goals and learning pace for maximum success.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3 text-gray-700">Secure & Private</h3>
                        <p>Your data and sessions are protected with industry-standard security practices.</p>
                    </div>
                </div>
            </section>

            {/* 2. Our Learning Process */}
            <section className=" dark:bg-gray-900 py-16 mx-6 md:mx-20 rounded-2xl text-gray-900 dark:text-gray-100">
                <h2 className="text-3xl font-bold text-center mb-12">How EduBridge Works</h2>
                <ol className="max-w-4xl mx-auto space-y-12 list-decimal list-inside text-lg text-center">
                    <li>
                        <strong>Explore Tutors:</strong> Browse profiles with detailed reviews and ratings.
                    </li>
                    <li>
                        <strong>Book Sessions:</strong> Choose your preferred tutor and booked your lessons easily.
                    </li>
                    <li>
                        <strong>Learn & Grow:</strong> Enjoy personalized tutoring with interactive tools.
                    </li>
                    <li>
                        <strong>Provide Feedback:</strong> Rate your experience and help us improve quality.
                    </li>
                </ol>
            </section>

            {/* 3. Testimonials Carousel */}
            <section className="max-w-5xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">What Our Users Say</h2>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="max-w-xl mx-auto"
                >
                    {testimonials.map(({ name, role, text, avatar }, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow text-center">
                                <img
                                    src={avatar}
                                    alt={`${name} avatar`}
                                    className="mx-auto w-20 h-20 rounded-full mb-6 object-cover"
                                />
                                <p className="mb-4 italic">"{text}"</p>
                                <h4 className="font-semibold">{name}</h4>
                                <p className="text-sm text-blue-600">{role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* 4. Join Our Community */}
            <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-20 px-6 text-center rounded-lg mx-6 md:mx-20">
                <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-lg">
                    Join thousands of students worldwide who are advancing their skills with EduBridge.
                    Find your tutor and book your first lesson today.
                </p>
                <a
                    href="/register"
                    className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition"
                >
                    Get Started
                </a>
            </section>

        </div>
    );
};

export default ExtraSections;
