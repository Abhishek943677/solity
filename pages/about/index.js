import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import about from "../../config/about.json"


const About = () => {
  return (
    <div>
      <main className='lg:w-8/12 sm:full sm:px-3 lg:mx-32 sm:mx-auto px-3'>
        <p className='text-4xl px-3'>ABOUT SOLITY</p>
        <Divider/>
        <section>
                {about.map((element, index) => {
                    return <div key={index}>
                        <h1 className='text-2xl my-1 py-3'>{element.heading}:</h1>
                        <p>{element.reply}</p>
                    </div>
                })}
            </section>
      </main>
    </div>
  );
};
export default About;
