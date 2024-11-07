import React from 'react';
import person from '../../assets/images/person.png';

const Behind = () => {
    return (
        <section className='lg:my-20 my-10'>
            <div className="hero block">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={person}
                        alt='Person'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-2xl font-bold">Razibur Rahman</h1>
                        <h4>28th October</h4>
                        <p className="py-6 text-secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={person}
                        alt='Person'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-2xl font-bold">Razibur Rahman</h1>
                        <h4>28th October</h4>
                        <p className="py-6 text-secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Behind;