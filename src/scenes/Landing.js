import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';
import CV from '../assets/cv.pdf';
const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
            <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
                {
                    isAboveMediumScreens ?
                        (
                            <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue 
                            before:z-[-1]'>
                                <img alt='profile' src='assets/my-profile-image.jpg' className='hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]'></img>
                            </div>
                        )
                        :
                        (
                            <img alt='profile' src='assets/my-profile-image.jpg' className='hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]'></img>
                        )
                }
            </div>
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Ehsan {""}
                        <span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:left-[0] before:scale-x-[1.3] before:scale-y-[1] before:-top-[70px] before:z-[-1]'>
                            Rahman
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        Reusability is key in reducing bugs and coding quickly. The more I use a piece of code, the more confident and familiar I become with it, which in turn significantly speeds up my development time
                    </p>
                </motion.div>

                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <AnchorLink
                        className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                        hover:bg-blue hover:text-white transition duration-500'
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <a
                        className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                        href={CV}
                        download
                    >
                        <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
                            Download CV
                        </div>
                    </a>
                </motion.div>

                <motion.div
                    className='flex mt-5 justify-center md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <SocialMediaIcons></SocialMediaIcons>
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;