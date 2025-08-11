import React from "react";
import { FaChalkboardTeacher, FaUsers, FaGlobe, FaAward } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="mx-20 text-gray-800 dark:text-gray-200 pt-28 pb-8 min-h-[calc(100vh-80px-324px)]">
            {/* Hero Section */}
            <section className="relative rounded-2xl dark:bg-gray-800 bg-sky-300 py-16 px-6 text-center shadow-lg">
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
            <section className="bg-white rounded-2xl dark:bg-gray-800 py-12 shadow-lg">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-10">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
                            <FaChalkboardTeacher className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Quality Learning</h3>
                            <p className="text-sm">
                                Courses designed by experts with a focus on practical, real-world skills.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
                            <FaUsers className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Community First</h3>
                            <p className="text-sm">
                                Building a supportive learning network for collaboration and growth.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
                            <FaGlobe className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Global Reach</h3>
                            <p className="text-sm">
                                Connecting learners and mentors from all over the world.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
                            <FaAward className="text-4xl mx-auto text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Excellence</h3>
                            <p className="text-sm">
                                Striving for the highest standards in everything we deliver.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & CTA */}
            <section className="bg-sky-300 rounded-2xl dark:bg-gray-800 text-Black py-12 mt-8 px-6 text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6">
                    Have questions or want to collaborate? We’d love to hear from you!
                </p>
                <div className="max-w-md mx-auto space-y-3 text-lg">
                    <p>
                        📧 Email: <a href="mailto:support@edubridge.com" className="underline hover:text-gray-200">support@edubridge.com</a>
                    </p>
                    <p>
                        📞 Phone: <a href="tel:+1234567890" className="underline hover:text-gray-200">+1 (234) 567-890</a>
                    </p>
                    <p>
                        📍 Address: 123 EduBridge Lane, Learning City, Education State
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
