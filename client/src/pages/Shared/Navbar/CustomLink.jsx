import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className='lg:mr-1 mb-1 lg:mb-0 hover:bg-gray-100'
            style={{
                color: match ? '#121314' : '#7B848B',
                fontWeight: match ? 'bold' : 'normal',
                borderRadius: '5px',
                padding: '8px 16px',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;