import React from 'react';
import learn from './images/learn.jpg'
import connect from './images/connect.jpg'
import grow from './images/grow.jpg'
import { motion } from "motion/react"

const ExtraPart1 = () => {
    return (
        <div className='w-10/12 py-10 mx-auto'>
            <div className='space-y-5 py-10'>
                <h1 className='text-3xl font-extrabold'>The EduBridge Advantage</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <motion.div animate={{y: [0,70,0]}} transition={{duration: 8, repeat: Infinity}} className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Learn</h2>
                            <p>Gain access to expert tutors across languages. Our platform makes learning personalized, engaging, and effective. Whether you're a beginner or advanced learner, structured lessons and custom tutorials help you grow with confidence—anytime, anywhere.</p>
                        </div>
                        <figure>
                            <img
                                src={learn}
                                className='h-64 w-full'
                                alt="learn" />
                        </figure>
                    </motion.div>
                    <motion.div animate={{y: [0,70,0]}} transition={{duration: 12, repeat: Infinity}}>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">Connect</h2>
                                <p>Find the right tutor for your learning style and goals. Connect with professionals worldwide through live sessions, chat, and feedback. Our platform fosters a friendly, interactive space where students and tutors build meaningful, long-term learning relationships.</p>
                            </div>
                            <figure>
                                <img
                                    src={connect}
                                    className='h-64 w-full'
                                    alt="connect" />
                            </figure>
                        </div>
                    </motion.div>
                    <motion.div animate={{y: [0,70,0]}} transition={{duration: 8, repeat: Infinity}}>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title"> Grow</h2>
                                <p>Track your progress, receive constructive feedback, and unlock new skills. EduBridge supports your journey from beginner to fluent speaker or subject expert. Every session is a step forward, helping you grow academically, personally, and professionally.</p>
                            </div>
                            <figure>
                                <img
                                    src={grow}
                                    className='h-64 w-full'
                                    alt="grow" />
                            </figure>
                        </div>
                    </motion.div>
                </div>

            </div>
            <div className='space-y-5 pt-10'>
                <h1 className='text-3xl font-extrabold'>Why Learners and Tutors Love EduBridge</h1>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">Seamless Tutor Discovery</div>
                    <div className="collapse-content text-sm">Users can easily explore tutors by language, subject, experience, or rating. The intuitive search and category filters help learners find the perfect match without confusion, saving time and enhancing satisfaction.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Interactive Tutor Profiles</div>
                    <div className="collapse-content text-sm">Each tutor has a dedicated profile showcasing their expertise, availability, reviews, and personal intro videos. This transparency builds trust and helps learners make informed decisions based on both qualifications and teaching style.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Flexible Booking System</div>
                    <div className="collapse-content text-sm">Learners can view available slots and book sessions in just a few clicks. Calendar integration, reminders, and timezone adjustments ensure a smooth scheduling experience, especially for international users.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Tutorial & Resource Management</div>
                    <div className="collapse-content text-sm">Tutors can upload custom tutorials, learning materials, or assignments, allowing them to personalize sessions. Learners benefit from structured content that supports learning beyond live sessions.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Community-Driven Feedback</div>
                    <div className="collapse-content text-sm">Users can leave reviews and ratings after each session. This feedback loop encourages quality, helps tutors grow, and ensures the platform remains trustworthy and learner-focused.

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraPart1;