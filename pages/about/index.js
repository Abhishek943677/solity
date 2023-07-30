import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Articles from '../../components/Articles';

import content from '../../content/about.md';

const About = () => {
  const { attributes, html } = content;
  return (
    <div>
      <main className='lg:w-8/12 sm:full sm:px-3 lg:mx-32 sm:mx-auto px-3'>
        <p className='text-4xl px-3'>ABOUT SOLITY</p>
        <Divider/>
      <Articles html={html} />
      </main>
    </div>
  );
};
export default About;
