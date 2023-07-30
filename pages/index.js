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

export default function Home() {
  // console.log(attributes.products)
  const slickSetting = {
    autoplay: true,
    dots: true,
    speed: 500,
  };
  return (
    <div className="p-0 ">
      <div className="flex w-[100vw] m-auto justify-center align-middle flex-wrap mx-auto">
        {/* one */}
        <Slider
          {...slickSetting}
          className="z-10 lg:w-[40rem] h-fit mb-4 flex-wrap w-full mx-auto max-[630px]:w-full my-4"
        >
          {" "}
          {/*this will change slider setting also change clasname of image of slider*/}
          <div>
            <Image
              height={300}
              width={600}
              src="https://plus.unsplash.com/premium_photo-1666184891921-2be4f78ce4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              className="rounded-md w-fit mx-auto"
            />
          </div>
          <div>
            <Image
              height={300}
              width={600}
              src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvYmxlbSUyMHNvbHZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              className="rounded-md w-fit mx-auto"
            />
          </div>
          <div>
            <Image
              height={300}
              width={600}
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              className="rounded-md w-fit mx-auto"
            />
          </div>
        </Slider>
        {/* two */}
        <Box
          elevation={1}
          className=" justify-center flex-col w-[25rem] mx-auto my-4 p-4 make-body-dark rounded-xl"
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
                "We help people learn new and smart things easily, By providing clear, practical advice and examples to become more effective problem solvers.",
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
}
