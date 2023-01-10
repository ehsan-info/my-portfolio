import React from 'react';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className='md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Since beginning my journey I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ?
                        (
                            <div
                                className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                            >
                                <img
                                    alt="skills"
                                    className="z-10"
                                    src="assets/skills-image.png"
                                />
                            </div>
                        ) :
                        (
                            <img alt="skills" className="z-10" src="assets/skills-image.png" />
                        )
                    }
                </div>
            </div>

            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Front-end Developer
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                    </p>
                    <div className='mt-3'>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2">HTML</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">CSS</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">JS</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Bootstrap</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Tailwind</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Daisy UI</p>
                    </div>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Backend Developer
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I can Develop a fullstack fully functional website from backend to client end.No doubt!
                    </p>
                    <div className='mt-3'>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2">NODE JS</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">MONGODB</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">EXPRESS</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Firebase</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Vercel</p>
                    </div>
                </motion.div>
                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Design
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I value simple content structure, clean design patterns, and thoughtful interactions.
                    </p>
                    <div className='mt-3'>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2">NODE JS</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">UX</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">UI</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Mobile</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">WEB</p>
                        <p className="badge badge-lg badge-outline text-white text-lg mt-2 ml-2">Figma</p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default MySkills;