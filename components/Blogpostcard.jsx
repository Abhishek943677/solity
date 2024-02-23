import { Button, Card, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import website_details from "../config/website_details.json"


export default function Blogpostcard({ post }) {
  return (
    <Paper
      elevation={4}
      // variant='outlined'
      className="lg:w-1/3 md:w-1/2 sm:w-1/2 m-2  p-4 justify-between flex flex-col make-com-dark h-fit max-[639px]:w-full "
      // data-aos="zoom-in-up"
      // data-aos-duration="500"
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
            className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-4 group-hover:scale-125 w-full max-h-64"
          />
          <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
        </div>
        <p className=" w-fit mx-1 hover:opacity-50">
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
  );
}
