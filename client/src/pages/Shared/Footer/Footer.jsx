import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-primary text-white rounded p-10">
            <nav className="grid lg:grid-flow-col grid-flow-row gap-4">
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/' className="link link-hover">Projects</Link>
                <Link to='/' className="link link-hover">Mentorship</Link>
                <Link to='/' className="link link-hover">Behind The Scene</Link>
                <Link to='/' className="link link-hover">Contact</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='#'>
                        <FaFacebook className='text-2xl hover:text-[#E58517]'></FaFacebook>
                    </a>
                    <a href='#'>
                        <FaInstagram className='text-2xl hover:text-[#E58517]'></FaInstagram>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-2xl hover:text-[#E58517]'></FaLinkedin>
                    </a>
                    <a href='#'>
                        <FaWhatsapp className='text-2xl hover:text-[#E58517]'></FaWhatsapp>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Zahidul Islam</p>
            </aside>
            <ScrollToTop
                smooth
                className="animate-bounce flex justify-center items-center"
                color="#121314"
                width="18"
                height="18"
                top="400"
            />
        </footer>
    );
};

export default Footer;