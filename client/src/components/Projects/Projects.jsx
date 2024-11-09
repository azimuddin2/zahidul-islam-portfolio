import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.png';
import Project from './Project';
import './projects.css';

const Projects = () => {

    const projects = [
        {
            id: 1,
            image: project1
        },
        {
            id: 2,
            image: project2
        },
        {
            id: 3,
            image: project3
        },
        {
            id: 4,
            image: project1
        },
    ];

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-10 lg:my-20'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-family'>Latest Behind The Scene</h1>
            </div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "18px",
                }}
                className="mySwiper"
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,

                    },
                }}
                modules={[A11y, Navigation, Autoplay]}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
            >
                <div>
                    {
                        projects?.map(project => <SwiperSlide className='lg:px-2' key={project.id}>
                            <Project project={project}></Project>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
            <div className='mt-8 text-center'>
                <Link to={'/projects'}>
                    <button className="btn btn-outline btn-warning rounded-sm hover:text-neutral">View All Projects</button>
                </Link>
            </div>
        </section>
    );
};

export default Projects;