import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import project1 from '../assets/live-project-1.png';
import project2 from '../assets/live-project-2.png';
import project3 from '../assets/live-project-3.png';
import project4 from '../assets/live-project-4.png';

const Projects = () => {
    const projects = [
        {
            img: project1,
            name: "Furniture World",
            github_link: "https://github.com/ehsan-info/furniture-world-client",
            live_link: "https://furnitureworld-bf169.web.app/",
        },
        {
            img: project2,
            name: "Coach Devs",
            github_link: "https://github.com/ehsan-info/coach-devs-client",
            live_link: "https://coach-devs.web.app/",
        },
        {
            img: project3,
            name: "Dentist Bhai",
            github_link: "https://github.com/ehsan-info/dentistbhai-client",
            live_link: "https://dentistbhai-client.web.app/",
        },
        {
            img: project4,
            name: "Quiz Hunter",
            github_link:
                "https://github.com/ehsan-info/quiz-hunter",
            live_link: "https://stunning-pasca-92afd5.netlify.app/quizes",
        },
    ];
    return (
        <section id="projects" className="py-28">
            <motion.div
                className='md:w-2/4 mx-auto text-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">Pro</span>jects
                    </p>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width="w-2/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                    My awesome works
                </p>
            </motion.div>

            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div
                    className="lg:block hidden  justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    BEAUTIFUL USER INTERFACES
                </div>
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {projects.map((project_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                    <img src={project_info.img} alt="" className="rounded-lg  max-h-[200px] sm:h-[200px]" />
                                    <h3 className="text-xl my-4">{project_info.name}</h3>
                                    <div className="flex gap-3">
                                        <a href={project_info.github_link}
                                            target="_blank"
                                            rel='noreferrer'
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                                            Github
                                        </a>

                                        <a href={project_info.live_link}
                                            target="_blank"
                                            rel='noreferrer'
                                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                                            Live Demo
                                        </a>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div
                    className="lg:block hidden  justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    SMOOTH USER EXPERIENCE
                </div>
            </div>
        </section>
    );
};

export default Projects;