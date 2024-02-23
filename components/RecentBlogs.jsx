import React from "react";
import Blogpostcard from "./Blogpostcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";
import { useState, useEffect } from 'react';
import website_details from "../config/website_details.json"

export default function RecentBlogs({ recentPosts }) {
  const [slidesToShow, setSlidesToShow] = useState(2.5); // Default value for slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2.5);
      } else if (window.innerWidth >= 600) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to set initial number of slides
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures that this effect runs only once on component mount


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow,
    // speed: 500,
  };

  return (
    <div className="px-1 lg:min-h-[32rem] md:min-h-[32rem] sm:min-h-[32rem] max-[639px]:h-[29rem]  w-full">
      <h1 className=" text-2xl text-center my-2">Recent Blogs</h1>
      <Slider {...settings} className="px-3 lg:mx-10 md:mx-6 sm:mx-1 max-[639px]:mx-2">
        {JSON.parse(recentPosts).map((post, index) => {
          return (
            <div key={index} className="">
              <Paper
              key={index}
                elevation={4}
                className="lg:min-h-[30rem] md:min-h-[30rem] sm:min-h-[30rem] max-[639px]:h-[24rem]  flex justify-between flex-col make-com-dark mx-1 p-2"
              >
                <Link
                  href={`/blog/post/${post.url}`}
                  key={post.title}
                  className="text-red-700 text-lg"
                >
                  <div className="group flex text-center relative overflow-hidden rounded-md cursor-pointer">
                    <Image
                      width={600}
                      height={600}
                      src={post.thumbnail}
                      quality={50}
                      alt="An image"
                      className="rounded-md ease-in-out duration-500 group-hover:rotate-4 group-hover:scale-125 w-full aspect-square "
                    />
                    <div className="absolute bg-black w-full h-fit opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                  </div>
                  <p className=" w-fit mx-1 hover:opacity-50 text-base">
                    {post.title.slice(0, 100)}.......
                  </p>
                </Link>
                <div className="flex justify-between ">
                  <p className="text-sm my-auto mr-2 text-[#439285]">
                    {post?.publish_date || ""}
                  </p>

                  {/* this is custom share button with navigator api */}
                  {navigator.canShare && (
                    <Button
                      className="mx-1"
                      onClick={async () => {
                        const shareData = {
                          title: `${post.title}`,
                          text: `${post.title}`,
                          url: `${website_details.full_url}/blog/post/${post.url}`,
                        };
                        try {
                          await navigator.share(shareData);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    >
                      <ShareIcon className="h-8 w-8" />
                    </Button>
                  )}
                </div>
              </Paper>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
