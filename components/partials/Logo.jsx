import Link from "next/link";
import React, { useState } from "react";
import { Bona_Nova, Inter, Stick_No_Bills } from "next/font/google";

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
        className={`text-4xl lg:ml-20 sm:ml-10 text-emerald-700 rounded-md  mb-2 max-[639px]:ml-7 ${font.className}`}
      >
        SOLITY
      </Link>
    </>
  );
}
