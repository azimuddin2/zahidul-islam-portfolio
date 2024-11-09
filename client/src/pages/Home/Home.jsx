import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Projects from '../../components/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;