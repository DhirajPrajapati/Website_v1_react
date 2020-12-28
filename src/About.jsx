import React from 'react';
import Component from './Component';
import profile from './images/profile.png';

const About = () =>{
    return(
        <>
            <Component title="Get To Know More About" desc="Want to get in touch? Here's how you can reach me..." link="/contact" btnName="Contact" imgsrc={profile} />
        </>
    )
};

export default About;