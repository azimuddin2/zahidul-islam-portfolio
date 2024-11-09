import React from 'react';
import zahidulIslamImg from '../../../assets/images/zahidul-islam.png';

const Banner = () => {
    return (
        <section>
            <div
                className="hero inline-block min-h-screen lg:pt-96 lg:pb-40 bg-fixed"
                style={{
                    backgroundImage: `url(${zahidulIslamImg})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover'
                }}
            >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content block text-neutral-content text-right">
                    <div className="text-neutral mt-20 lg:mt-96">
                        <h1 className="mb-5 text-4xl font-medium font-family mt-96 text-right">Zahidul Islam Jobair</h1>
                        <p className="mb-5 text-md font-normal">
                            Lecturer, Department of Journalism, Media and Communication <br />
                            Daffodil International University
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f7e8ec] p-3 w-full'></div>
            <div className='bg-[#fbf2f5] p-3 w-full'></div>
        </section>
    );
};

export default Banner;