import React from 'react';
import person from '../../assets/images/person.png';
import person1 from '../../assets/images/person1.jpg';
import Projects from '../../components/Projects/Projects';

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
                        <h4>28th October 2024</h4>
                        <p className="py-6 text-secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero block mt-10">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <img
                        src={person1}
                        alt='Person'
                        className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-2xl font-bold">Dr. Ashikur Rahman</h1>
                        <h4>1st January 2025</h4>
                        <p className="py-6 text-secondary">
                            For the past few months, I have been thinking of writing about someone who has inspired me a lot, about a person who first became my colleague, then a brother, and then one of my closest friends. From my perspective a person who deserves the Nobel Prize in the category of ‘Most Inspirational Person’. But, it’s a matter of sorrow for me that I can’t nominate him until I become an associate professor or full professor of Social Sciences according to the rules of the Nobel Prize Committee, which will take almost 10 years from now, a very long way to go. In that regard, I have decided to write down all the attenuate characteristics of this person that may motivate thousands of people.
                            In the realm of academia and personal life, few master the art of balance as seamlessly as Dr. Ashikur Rahman. A Senior Lecturer in the Department of Information, Technology and Management (ITM) at Daffodil International University here in the capital of Bangladesh. A man of exceptional dedication and focus, Dr. Rahman exemplifies what it means to be truly versatile and committed in every aspect of life. His interactions with his family are marked by a deep sense of presence and engagement, ensuring that his home is filled with love and attention. When at home, Dr. Rahman fully embodies the role of a family man, like a devoted father to his little princess, Yusayrah, and a loving husband to his supportive and caring wife.  Dr. Rahman’s family life is a cornerstone of his identity. His roles within his family are performed with the same dedication and commitment that he brings to his professional life.
                            In the office, Dr. Rahman's focus shifts to his research work and academic achievements including taking classes. His concentration and dedication in this sphere are unparalleled, making significant contributions to his field and earning respect and admiration from his peers and students. Among his colleagues, Dr. Rahman is the apple of the eye. His approachable nature, combined with his professional excellence, makes him a cherished and respected member of any team. His ability to connect and collaborate with others is a testament to his interpersonal skills and genuine care for those around him. Even during his commutes, Dr. Rahman remains productive, dedicating his time to exploring fruitful research work. His commitment to continuous learning and development is evident, as he utilizes every available moment to advance his knowledge and contribute to his field.
                            Dr. Rahman’s ability to balance work and personal life is remarkable. He understands the importance of maintaining harmony between these spheres and excels in doing so. His life is a testament to the fact that with the right approach, one can achieve excellence in both professional and personal domains.
                            This writing is a tribute to Dr. Ashikur Rahman, a man whose life and work serve as an inspiration to many. Through these pages, we delve into the principles, practices, and philosophies that have guided him on his journey, offering insights into how one can strive for and achieve a balanced and fulfilling life including maintaining a good friendship with me.
                        </p>
                    </div>
                </div>
            </div>
            <Projects></Projects>
        </section>
    );
};

export default Behind;