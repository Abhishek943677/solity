import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutme from "../components/aboutme";
import Products from "../components/Products";
import TypeIt from "typeit-react";
import { Box } from "@mui/system";
import { Button, Link, Paper } from "@mui/material";
import Image from "next/image";

const Page = () => {
  const slickSetting = {
    autoplay: true,
    dots: true,
    speed: 500,
  };
  return (
    <div className="p-4  ">
      <Head>
        <title>solity hai ye</title>
      </Head>
      <div className="flex w-[94vw] m-auto justify-center align-middle flex-wrap mx-auto">
        {/* one */}
        <Slider
          {...slickSetting}
          className="z-10 lg:w-[40rem] h-fit mb-4 flex-wrap w-full mx-auto max-[630px]:w-full my-4 "
        >
          {/*this will change slider setting also change clasname of image of slider*/}
          <div>
            <Image
              height={300}
              width={600}
              quality={30}
              alt="solity.fun image at home page"
              src="https://images.unsplash.com/photo-1496942299866-9e7ab403e614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80"
              className="rounded-md w-fit mx-auto"
            />
          </div>
          <div>
            <Image
              height={300}
              width={600}
              quality={30}
              alt="solity.fun image at home page"
              src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvYmxlbSUyMHNvbHZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&q=60"
              className="rounded-md w-fit mx-auto"
            />
          </div>

          <div>
            <Image
              height={300}
              width={600}
              quality={30}
              alt="solity.fun image at home page"
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&q=60"
              className="rounded-md w-fit mx-auto"
            />
          </div>
        </Slider>

        {/* two  website initial welcome modal*/}
        <Box
          elevation={1}
          className=" justify-center flex-col w-[25rem] mx-auto my-4 p-4  rounded-xl "
        >
          <p className="text-3xl px-1">Welcome to Solity</p>
          <div>
            <Link href="/blog/1" className="w-fit no-underline">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 my-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-lg no-underline">
                  Explore blogs
                </span>
              </button>
            </Link>
          </div>

          <TypeIt
            className="p-0 text-blue-600 dark:text-white text-lg"
            options={{
              strings: [
                "A captivating blog page brimming with daily thoughts. As you journey through the pages of Solity, you'll find a sanctuary for introspection and self-discovery. It is an educational website where we share our passion for many random knowledgeable topics.",
              ],
              speed: 100,
              waitUntilVisible: false,
            }}
          />
          <div />
        </Box>
      </div>
      <Aboutme />

      <Products />
    </div>
  );
};

export default Page;
