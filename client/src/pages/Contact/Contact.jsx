import React from 'react';
import { FaLinkSlash } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = form.service.value;
        const message = form.message.value;

        const contactInfo = {
            name,
            email,
            service,
            message
        };
        console.log(contactInfo);
        form.reset();
        toast.success('Form submitted successfully.');
    };

    return (
        <section className="max-w-screen-xl lg:mx-auto mx-5 my-8 lg:my-20">
            <div className="text-center mb-5 lg:mb-8">
                <h2 className="text-lg lg:text-xl text-primary font-medium">Contact Us</h2>
                <h1 className="text-2xl font-medium text-secondary capitalize">Stay connected with us</h1>
            </div>
            <div className="lg:flex justify-between items-center">
                <div className="flex-1">
                    <h1 className='text-2xl font-medium mb-5'>Zahidul Islam Jobair</h1>
                    <p className="lg:w-3/4 capitalize text-secondary text-sm lg:text-base">Lecturer | Department of Journalism, Media and Communication | Daffodil International University (DIU), Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216, Bangladesh.
                    </p>
                    <Link
                        target={"_blank"}
                        to={'https://daffodilvarsity.edu.bd/'}
                        className='flex items-center mt-2 text-green-600 underline'
                    >
                        <FaLinkSlash className='text-lg mr-2' />
                        <span>https://daffodilvarsity.edu.bd</span>
                    </Link>

                    <div className='my-10 text-secondary'>
                        <p>
                            Country Ambassador & Mentor | Awareness 360 |
                            105 Jalan Ampang, Kuala Lumpur, Malaysia
                        </p>

                        <Link
                            target={"_blank"}
                            to={'https://www.awareness360.org.my/'}
                            className='flex items-center mt-2 text-green-600 underline'
                        >
                            <FaLinkSlash className='text-lg mr-2' />
                            <span>https://www.awareness360.org.my</span>
                        </Link>
                    </div>

                    <div className='mt-5'>
                        <p className='text-secondary'>
                            General Member  | Sustainable Journalism Partnership
                        </p>

                        <Link
                            target={"_blank"}
                            to={'https://sustainablejournalism.net/'}
                            className='flex items-center mt-2 text-green-600 underline'
                        >
                            <FaLinkSlash className='text-lg mr-2' />
                            <span>https://sustainablejournalism.net</span>
                        </Link>

                    </div>

                    <div className="mt-5 lg:mt-10">
                        <p className="flex items-center mb-2 text-accent">
                            <FiPhoneCall className="text-lg text-warning mr-2" />
                            <span>(+880) 1774506981</span>
                        </p>
                        <p className="flex items-center mb-2 text-accent">
                            <HiOutlineMail className="text-lg text-warning mr-2" />
                            <span>zahidul.jmc0038.c@diu.edu.bd</span>
                        </p>
                        <p className="flex items-center text-accent">
                            <GrLocation className="text-lg text-warning mr-2" />
                            <span>Dhaka-Bangladesh</span>
                        </p>
                    </div>
                </div>
                <div className="flex-1 shadow p-5 lg:p-10 rounded-lg mt-5 lg:mt-0">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-3">
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter Your Name"
                                className="input bg-neutral text-secondary border-secondary input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-3">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="input bg-neutral text-secondary border-secondary input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-3">
                            <select
                                name="service"
                                className="select bg-neutral text-secondary border-secondary select-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option disabled selected className="text-accent">Select Your Service</option>
                                <option>Department of Lecturer</option>
                                <option>Department of Journalism </option>
                                <option>Department of Media</option>
                                <option>Department of Communication</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <textarea
                                name="message"
                                rows='4'
                                placeholder="Write Your Message Here..."
                                className="textarea bg-neutral text-secondary border-secondary input-bordered rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            ></textarea>
                        </div>
                        <button className="btn btn-primary text-white w-full mt-5">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;