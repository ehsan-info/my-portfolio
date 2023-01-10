import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from "framer-motion";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fuvs5xh', 'template_j1mke7p', form.current, 'a6tLjMSApqrkSRXtB')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Sent Successfully');
            }, (error) => {
                console.log(error.text);
                toast.error(error.text);
            });
        e.target.reset();
    };
    return (
        <section id="contact" className="contact py-28">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-center md:justify-end w-full"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 flex justify-center"
                >
                    <img src="../assets/contact-image.jpeg" alt="contact" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NAME"
                            name='name'
                            required
                        />

                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            name='email'
                            required
                        />

                        <textarea
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            name="message"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            required
                        />

                        <button
                            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                            type="submit"
                        >
                            SEND ME A MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;