import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../config/products.json"
 

export default function Products() {
 
  return (
    <div className="">
      <p className="m-auto text-center text-2xl">Our Other Products</p>
      <Box className="flex flex-row flex-wrap lg:w-3/4 sm:w-fit sm:m-0 lg:mx-auto justify-center">
        {products.map((p, i) => (
          <div
            className="flex justify-center flex-col mx-auto sm:m-auto "
            data-aos="zoom-in-up"
            data-aos-duration="500"
            key={i}
          >
            <div className="block rounded-lg bg-white shadow-lg dark:bg-slate-800 my-4 mx-3 w-96 h-fit min-h-[26rem] p-1">
                <Image
                  width={500}
                  height={500}
                  quality={30}
                  className="rounded-t-lg m-auto sm:mx-auto h-[13rem] "
                  src={p.image}
                  alt={p.title}
                />
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight hover:opacity-50 text-red-800 dark:text-red-800">
                  <Link href={p.urlToWebsite}>{p.title}</Link>
                </h5>
                <p className="mb-4 text-base text-neutral-800 dark:text-neutral-200">
                  {`${p.description}`}
                </p>
                <div className="">
                  <Button
                    type="button"
                    variant="outlined"
                    className=" dark:text-white"
                    onClick={async () => {
                      const shareData = {
                        title: `${p.title}`,
                        text: `${p.description}`,
                        url: `${p.urlToWebsite}`,
                      };
                      try {
                        await navigator.share(shareData);
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <ShareIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
}
