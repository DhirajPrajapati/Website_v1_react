import React from 'react';
import web from './images/web_developer.png';
import Component from './Component';

const Home = () =>{
    return(
        <>
        <Component title="Hey Everyone! My Name is" desc="I am a Web Developer" link="/service" btnName="Services" imgsrc={web} />
        </>
    )
};

export default Home;