import React from "react";
import Blogpostcard from "./Blogpostcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";


export default function RecentBlogs({ recentPosts }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2.5,
    speed: 500,
  };

  return (
    <div className="px-4">
      <h1 className=" text-2xl text-center my-1">Recent Blogs</h1>
      <Slider {...settings} className="px-3 lg:mx-10 md:mx-6 sm:mx-2 max-[639px]:mx-2 ">
        {JSON.parse(recentPosts).map((post, index) => {
          return (
            <div key={index}>
              <Paper
                elevation={4}
                className="mx-2 p-1 justify-between flex flex-wrap flex-col make-com-dark min-h-[20rem] max-[639px]:w-full "
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
                    <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                  </div>
                  <p className=" w-fit mx-1 hover:opacity-50 text-base">
                    {post.title.slice(0, 100)} .....
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
                          url: `https://solity.fun/blog/post/${post.url}`,
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
    // </div>
  );
}
