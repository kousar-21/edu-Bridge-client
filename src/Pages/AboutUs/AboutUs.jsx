import React from "react";
import { FaChalkboardTeacher, FaUsers, FaGlobe, FaAward } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="mx-6 md:mx-20 text-gray-800 dark:text-gray-200 pt-28 pb-8 min-h-[calc(100vh-80px-324px)]">

            {/* Hero Section */}
            <section className="relative rounded-2xl bg-sky-300 dark:bg-gray-800 py-16 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduBridge</h1>
                <p className="max-w-2xl mx-auto text-lg">
                    Empowering learners with accessible, high-quality education anytime, anywhere.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="leading-relaxed">
                        At EduBridge, our mission is to bridge the gap between learners and opportunities.
                        We aim to provide flexible, affordable, and engaging courses designed to
                        help students, professionals, and enthusiasts excel in their chosen fields.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="leading-relaxed">
                        We envision a world where education knows no boundaries —
                        where every learner has access to resources, mentors, and a community that
                        inspires lifelong learning and professional growth.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white rounded-2xl dark:bg-gray-800 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-10">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 border rounded-lg">
                            <FaChalkboardTeacher className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Quality Learning</h3>
                            <p className="text-sm">
                                Courses designed by experts with a focus on practical, real-world skills.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <FaUsers className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Community First</h3>
                            <p className="text-sm">
                                Building a supportive learning network for collaboration and growth.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <FaGlobe className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Global Reach</h3>
                            <p className="text-sm">
                                Connecting learners and mentors from all over the world.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <FaAward className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Excellence</h3>
                            <p className="text-sm">
                                Striving for the highest standards in everything we deliver.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Section */}
            <section className="py-16 mt-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">Popular Courses</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg border">
                            <h3 className="font-semibold mb-2">Full-Stack Web Development</h3>
                            <p className="text-gray-600 text-sm">
                                Learn HTML, CSS, JavaScript, React, Node.js, and more.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg border">
                            <h3 className="font-semibold mb-2">Digital Marketing Mastery</h3>
                            <p className="text-gray-600 text-sm">
                                SEO, social media marketing, email campaigns, and growth hacking.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg border">
                            <h3 className="font-semibold mb-2">Data Science & AI</h3>
                            <p className="text-gray-600 text-sm">
                                Python, Machine Learning, Data Analysis, and AI projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Mentors Section */}
            <section className="py-16 mt-12 bg-sky-50 rounded-2xl">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet Our Mentors</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg border">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Mentor 1"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="font-semibold mb-1">Mr. Arif Rahman</h3>
                            <p className="text-gray-600 text-sm">Full-Stack Developer & Instructor</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg border">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Mentor 2"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="font-semibold mb-1">Ms. Sara Ahmed</h3>
                            <p className="text-gray-600 text-sm">Digital Marketing Specialist</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg border">
                            <img
                                src="https://randomuser.me/api/portraits/men/65.jpg"
                                alt="Mentor 3"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="font-semibold mb-1">Mr. Imran Hossain</h3>
                            <p className="text-gray-600 text-sm">Data Scientist & AI Mentor</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 mt-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">How EduBridge Works</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-white rounded-lg border">
                            <h3 className="font-semibold mb-2">1. Explore Courses</h3>
                            <p className="text-gray-600 text-sm">
                                Browse a wide variety of courses and choose the ones that fit your learning goals.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg border">
                            <h3 className="font-semibold mb-2">2. Learn & Engage</h3>
                            <p className="text-gray-600 text-sm">
                                Access lessons, join discussions, and complete assignments at your own pace.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg border">
                            <h3 className="font-semibold mb-2">3. Earn Certificate</h3>
                            <p className="text-gray-600 text-sm">
                                Complete courses successfully and earn certificates to showcase your skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
