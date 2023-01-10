import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/md-ehsanur-rahman/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            {/* <a
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/ehsan_nfo"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter-link" src="../assets/twitter.png" />
            </a> */}
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/rahman.ehsan789"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="facebook-link" src="../assets/facebook.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500 text-3xl"
                href="https://api.whatsapp.com/send?phone=+37253616844"
                target="_blank"
                rel="noreferrer"
            >
                <BsWhatsapp />
            </a>
        </div>
    );
};

export default SocialMediaIcons;