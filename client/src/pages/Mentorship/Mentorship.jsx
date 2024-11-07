import React from 'react';
import mentorship1 from '../../assets/images/mentorship1.jpg';
import mentorship2 from '../../assets/images/mentorship2.jpg';

const Mentorship = () => {
    return (
        <section className='mb-10'>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={mentorship1}
                        alt='Mentorship'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl font-semibold">Professional Mentorship in Journalism, Media, and Communication</h1>
                        <p className="py-6 text-secondary">
                            Enhance your skills with expert mentorship in journalism, media, and communication. As a lecturer with deep experience in this field, I offer personalized guidance on topics like storytelling, media ethics, digital journalism, and effective communication strategies. Whether you're an aspiring journalist, media professional, or communicator, I provide insights, hands-on learning, and feedback to help you navigate and succeed in today's dynamic media landscape.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl font-semibold">Professional Mentorship in Journalism, Media, and Communication</h1>
                        <p className="py-6 text-secondary">
                            Enhance your skills with expert mentorship in journalism, media, and communication. As a lecturer with deep experience in this field, I offer personalized guidance on topics like storytelling, media ethics, digital journalism, and effective communication strategies. Whether you're an aspiring journalist, media professional, or communicator, I provide insights, hands-on learning, and feedback to help you navigate and succeed in today's dynamic media landscape.
                        </p>
                    </div>
                    <img
                        src={mentorship2}
                        alt='Mentorship'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

export default Mentorship;