import { Facebook, Google, Instagram, Pinterest, YouTube } from "@mui/icons-material";
import { Paper, Box, Tooltip } from "@mui/material";
import React from "react";
import website_details from "../config/website_details.json"

export default function Footer() {
  return (
    <Box
      elevation={3}
      class="text-center text-white rounded-md drop-shadow-2xl w-full  max-[419px]:w-[27.5rem] sm:w-full sm:mx-autoz"
    >
      <div class="container pt-9 mx-auto sm:mx-auto sm:w-full max-[419px]:w-[27.5rem]">
        <div class="mb-9 flex justify-center ">
          <a href="#!" class="mr-9 text-neutral-800 dark:text-white">
            <Tooltip title="Google">
              <Google />
            </Tooltip>
          </a>
          <a href="https://in.pinterest.com/solity_fun/" class="mr-9 text-neutral-800 dark:text-white" target="_blank">
            <Tooltip title="Pinterest">
              <Pinterest />
            </Tooltip>
          </a>
          <a href="https://www.instagram.com/solity.fun/" class="mr-9 text-neutral-800 dark:text-white" target="_blank">
            <Tooltip title="Instagram">
              <Instagram />
            </Tooltip>
          </a>
          <a href="#!" class="mr-9 text-neutral-800 dark:text-white">
            <Tooltip title="YouTube">
              <YouTube />
            </Tooltip>
          </a>
          <a href="#!" class=" text-neutral-800 dark:text-white">
            <Tooltip title="Facebook">
              <Facebook />
            </Tooltip>
          </a>
        </div>
      </div>

      <div class="py-4 text-center max-[419px]:w-[27.5rem] make-com-dark">
        © 2023 Copyright :
        <a class="text-[#01c3dd]" href={`${website_details.full_url}`}>
          {" "}
          {`${website_details.short_url}`}
          
        </a>
      </div>
    </Box>
  );
}
