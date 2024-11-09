import React from 'react';

const Project = ({project}) => {
    return (
        <div className='h-80'>
            <img src={project.image} alt="project" className='w-full h-full'/>
        </div>
    );
};

export default Project;