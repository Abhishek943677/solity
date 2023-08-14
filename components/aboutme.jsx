import { Bona_Nova } from '@next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';

const bona_nova =Bona_Nova({
  subsets:['greek'],
  display:'swap',
  weight:['400']
});

const Aboutme = () => {
  const [font,setFont] =useState(bona_nova)
  
  return (
    <React.Fragment>
     <div className="flex justify-center ">
    <div className="max-w-5xl ">
      <div
        className="m-4 block rounded-lg bg-white p-6 shadow-xl make-com-dark ">
        <div className="md:flex md:flex-row ">
          <div
            className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
            <Image
            quality={10}
            width={500} 
            height={500}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._7jjxcm6qd1eqnVxNFQLygHaGN%26pid%3DApi&f=1&ipt=cda8baffa3b28765a69fb374e2624c95dd0be86643fcd8c7d112adaf30aaec2c&ipo=images"
              className="rounded-full shadow-md dark:shadow-black/30"
              alt="man avatar" />
          </div>
          <div className={`md:ml-6 ${font.className} `}>
            <p
              className="mb-6 ">
              {`In my role as website manager, I am responsible for ensuring that websites are up-to-date and
               in compliance with industry standards and best practices. `}
            </p>
            <p
              className="mb-6 ">
              {`I am committed to staying abreast of
              the latest trends and technologies in website design and management, ensuring that the websites 
              under my management remain innovative and competitive.`}
            </p>
            
            <p
              className="mb-0 font-semibold ">
              Website manager
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </React.Fragment>
  );
};
export default Aboutme;