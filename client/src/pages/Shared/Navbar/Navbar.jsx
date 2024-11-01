import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {

    const navOptions = <>
        <li>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/projects'>Projects</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
            <CustomLink to='/mentorship'>Mentorship</CustomLink>
            <CustomLink to='/behind'>Behind The Scene</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
        </li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 px-5 lg:px-20">
                <div className="navbar-start">
                    <Link to='/' className='flex justify-items-center items-center'>
                        <img className='w-6 md:w-9' src={logo} alt="logo" />
                        <p className=' font-semibold lg:text-xl text-primary'>Zahidul Islam</p>
                    </Link>
                </div>
                <div className='navbar-end hidden lg:flex items-center'>
                    <ul className="menu-horizontal p-0 font-medium">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="responsive-navbar menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 w-64 right-6 font-medium"
                        >
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;