import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
    return (
        <section className='max-w-screen-lg mx-auto my-16 lg:my-20 px-5 lg:px-0'>
            <h1 className='text-center text-4xl font-family border-b-2 pb-6 text-primary'>About</h1>
            <div className='flex lg:items-center mt-10'>
                <Zoom>
                    <h2 className='text-6xl lg:text-9xl font-semibold font-family text-primary'>Z</h2>
                </Zoom>
                <Fade direction='up'>
                    <p className='ml-5 text-accent'>
                        ahidul Islam Jobair is a passionate academic and advocate based in Bangladesh, recognized for his commitment to journalism, mental health, and social issues. Currently serving as a Lecturer in the Department of Journalism, Media and Communication at Daffodil International University, brings a wealth of knowledge and experience to his teaching.
                    </p>
                </Fade>
            </div>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    He has developed and taught various undergraduate courses, including Introduction to Journalism, Interpersonal and Mass Communication, Economic Perspective and Issues, and Business and Economic Reporting. Through his focus on theoretical foundations and practical applications, Mr. Jobair prepares his students for successful careers in journalism and media.
                </p>
            </Fade>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    In addition to his teaching role, Mr. Jobair is actively engaged in research and has presented at various conferences. He recently co-authored a paper titled "Covering Disaster: Posttraumatic Stress Disorder and the Coping Mechanisms of the Journalists in a Global South Context," which was presented at the National Communication Association's 109th Annual Convention in Maryland, USA. He also explored the experiences of female photojournalists in Dhaka City at the 8th Annual Conference on Social Research in Bangladesh. His research interests span journalism, leadership and communication, occupational health and safety management, climate action, disaster management, mental health and well-being, and inclusive education.
                </p>
            </Fade>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    Mr. Jobair's commitment to social impact is evident in his work as a Country Ambassador and Mentor for Awareness 360, an organization focused on empowering youth through social action projects. Having received the Star Fellow Award in 2023, he now guides the new cohort of fellows in implementing projects related to the United Nations Sustainable Development Goals, particularly in areas such as good health, well-being, and climate action.
                </p>
            </Fade>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    Mr. Jobair is the founder of "Light of the Sound," an initiative aimed at enhancing literature literacy among visually impaired students in Bangladesh. This program establishes "Human Libraries," where volunteers share knowledge about literature, promoting inclusivity and quality education for those with visual impairments. His dedication to inclusive education and community service reflects his belief in the transformative power of knowledge.
                </p>
            </Fade>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    Mr. Jobair's professional experience extends beyond academia. He has served as a virtual intern for Bangla AI in New York, where he contributed to projects aimed at revolutionizing the Bengali media landscape using artificial intelligence. Additionally, he participated in the New Journalism Training Program with Newsreel Asia in India, gaining valuable skills in narrative video journalism and documentary filmmaking.
                </p>
            </Fade>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    Mr. Jobair is also actively involved in climate advocacy. He recently completed a residential course on Locally Led Adaptation and Local Loss and Damage at the International Centre for Climate Change & Development, where he deepened his understanding of climate change impacts and adaptation strategies. As a Young Climate Advocate with PCYCLE and the British Council Bangladesh, he has worked to raise awareness among youth about the impacts of climate change and the importance of advocacy.
                </p>
            </Fade>
            <Fade direction='up'>
                <p className='mt-6 text-accent'>
                    With a strong foundation in journalism and an unwavering commitment to social change, Zahidul Islam Jobair continues to inspire others through his work in education, advocacy, and research. His efforts not only elevate the field of journalism but also contribute significantly to the betterment of society, making him a notable figure in both academic and social spheres.
                </p>
            </Fade>
        </section>
    );
};

export default About;