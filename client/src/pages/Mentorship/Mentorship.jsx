import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import lifeCoachingImg from '../../assets/images/Life-Coaching.jpg';
import careerGoalSetupImg from '../../assets/images/Career-Goal-Setup.jpg';
import selfHelpImg from '../../assets/images/Self-Help.jpg';

const Mentorship = () => {
    return (
        <section className='mb-10'>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={lifeCoachingImg}
                        alt='Mentorship'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-xl lg:text-3xl font-semibold">Life Coaching</h1>
                        <p className="py-6 text-secondary">
                            Rediscover the beauty of imperfection and embrace the journey of self-love. Whether you’re navigating relationships or prioritizing mental health, we’re here to provide compassionate guidance every step of the way.
                        </p>
                        <ul>
                            <li className='text-secondary flex'>
                                <IoMdCheckmarkCircleOutline className='text-2xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Relationship Counseling:</span> Build stronger connections and resolve conflicts with empathy and understanding.
                                </span>
                            </li>
                            <li className='text-secondary flex mt-3'>
                                <IoMdCheckmarkCircleOutline className='text-xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Mental Health Support:</span> Prioritize your emotional well-being and cultivate resilience.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={careerGoalSetupImg}
                        alt='Mentorship'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-xl lg:text-3xl font-semibold">Career Goal Setup</h1>
                        <p className="py-6 text-secondary">
                            Achieve clarity and focus in your professional journey. From academic growth to pursuing higher studies, we offer insights and strategies to help you thrive.
                        </p>
                        <ul>
                            <li className='text-secondary flex'>
                                <IoMdCheckmarkCircleOutline className='text-2xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Academic & Professional Growth:</span> Set actionable goals and achieve milestones in your career or education.
                                </span>
                            </li>
                            <li className='text-secondary flex mt-3'>
                                <IoMdCheckmarkCircleOutline className='text-xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Higher Study Counseling:</span> Find the right path and resources for advancing your education.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={selfHelpImg}
                        alt='Mentorship'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-xl lg:text-3xl font-semibold">Self Help</h1>
                        <p className="py-6 text-secondary">
                            Inspiration is everywhere—sometimes in a book, a movie, or even a beloved character. Let us guide you through curated recommendations and transformative insights that encourage self-discovery and personal growth.
                        </p>
                        <ul>
                            <li className='text-secondary flex'>
                                <IoMdCheckmarkCircleOutline className='text-xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Books:</span>Explore life-changing reads that inspire and empower.
                                </span>
                            </li>
                            <li className='text-secondary flex mt-3'>
                                <IoMdCheckmarkCircleOutline className='text-xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Movies:</span> Learn valuable life lessons from impactful storytelling.
                                </span>
                            </li>
                            <li className='text-secondary flex mt-3'>
                                <IoMdCheckmarkCircleOutline className='text-xl text-primary mr-2' />
                                <span>
                                    <span className='text-primary'>Characters:</span>Discover wisdom in the stories of remarkable fictional and real-life figures.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mentorship;