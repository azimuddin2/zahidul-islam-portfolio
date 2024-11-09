import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import project1 from '../../assets/images/project4.jpg';
import project2 from '../../assets/images/project5.jpg';
import './Projects.css';

const Projects = () => {

    return (
        <section className='max-w-screen-xl lg:mx-auto'>
            <div>
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img src={project1} alt='banner' className='w-full' />
                    </div>
                    <div>
                        <img src={project2} alt='banner' />
                    </div>
                </Carousel>
                <div className='my-10 lg:w-2/3 mx-auto px-5 lg:px-0'>
                    <h1 className='text-xl lg:text-3xl text-primary font-medium text-center border-b pb-5 font-family'>Light of the Sound: 'Human Library' for visually impaired students of Bangladesh</h1>
                    <p className='lg:mt-8 mt-5 text-secondary'>Always been passionate about working for the visually impaired people; here I am doing something for the very first time in Bangladesh to promote literature literacy for the visually impaired student to ensure SDG -4 under the concept of ' Human Library'.
                    </p>
                </div>
            </div>
            <div className='mb-10'>
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img src={project1} alt='banner' className='w-full' />
                    </div>
                    <div>
                        <img src={project2} alt='banner' />
                    </div>
                </Carousel>
                <div className='my-10 lg:w-2/3 mx-auto px-5 lg:px-0'>
                    <h1 className='text-xl lg:text-3xl text-primary font-medium text-center border-b pb-5 font-family'>Light of the Sound: 'Human Library' for visually impaired students of Bangladesh</h1>
                    <p className='lg:mt-8 mt-5 text-secondary'>Always been passionate about working for the visually impaired people; here I am doing something for the very first time in Bangladesh to promote literature literacy for the visually impaired student to ensure SDG -4 under the concept of ' Human Library'.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;