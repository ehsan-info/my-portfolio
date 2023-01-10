import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import person1 from '../assets/person-comment-1.jpg';
import person2 from '../assets/person-comment-2.jpg';
import person3 from '../assets/person-comment-3.jpg';
import person4 from '../assets/person-comment-4.jpg';
const Testimonials = () => {
    const testimonials = [
        {
            img: person1,
            name: "Md Taibur Rahman",
            position: "Technical Support Engineer",
            company_name: "TUUM",
            comment: "I patronized Taibur and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers on time."
        },
        {
            img: person4,
            name: "Md Younus Ali",
            position: "Sevice Desk Engineer",
            company_name: "TUUM",
            comment: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy"
        },
        {
            img: person2,
            name: "Muhammed Jasim",
            position: "Team Lead, CS",
            company_name: "Wise",
            comment: "When he delivered my job, my head spinned, it was so nice and he implemented every functionality i requested for. Thank you."
        },
        {
            img: person3,
            name: "Jahid Akber",
            position: "Remote Assistance Shift Lead",
            company_name: "Starship Technology",
            comment: "I found him very sincere about his tasks and deadline which really impressed me. He is passionate about what he is doing and developing himself everyday."
        },
    ];
    return (
        <section id="testimonials" className="pt-28 pb-16">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl text-red">
                        Testimonials
                    </p>
                    <div className='flex justify-center md:justify-start mt-5'>
                        <LineGradient width="w-2/4" />
                    </div>
                </div>
                <p className="mt-6">
                    Here's What People are Saying About Me & My Work.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-center gap-8 mt-20 mb-12">
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
                            delay: 6000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {testimonials.map((testimonial_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">

                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={testimonial_info.img} alt="" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl">{testimonial_info.name}</h3>
                                    <h4 className="text-sm">{testimonial_info.position}</h4>
                                    <p className="text-sm">{testimonial_info.company_name}</p>
                                    <p className="font-playfair text-6xl">“</p>
                                    <p className="text-xl max-h-[200px] sm:h-[200px]">
                                        {testimonial_info.comment}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;