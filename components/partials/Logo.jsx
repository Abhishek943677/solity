import Link from "next/link";
import React, { useState } from "react";
import { Stick_No_Bills } from "@next/font/google";
import Image from "next/image";
import website_details from "../../config/website_details.json"

const stick_No_Bills = Stick_No_Bills({
  subsets: ["sinhala"],
  weight: ["800"],
  display: "swap",
});
export default function Logo() {
  const [font, setFont] = useState(stick_No_Bills);
  return (
    <>
      <Link
        href="/"
        className={`text-4xl lg:ml-20 sm:ml-10 text-[#01c3dd] rounded-md  mb-4 max-[639px]:ml-7 ${font.className} flex flex-wrap justify-center`}
      >
        {website_details.name}
        <div className="mx-2">
        <Image height={40} width={40} src="/android-chrome-192x192.png" alt="solityw website logo"></Image>

        </div>
      </Link>
    </>
  );
}
