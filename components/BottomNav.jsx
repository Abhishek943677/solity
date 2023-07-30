import React from "react";
import main from "../config/bottonNav.json";
import Link from "next/link";
export default function BottomNav() {
  return (
    <div className="flex sm:justify-center md:justify-end lg:justify-end w-full mt-4 max-[639px]:justify-center align-middle">
      {main.menu.map((element, index) => {
        return (
            <p className="px-3 lg:mr-2" key={index}>
            <Link href={element.path}>{element.name}</Link>
            </p>
        );
      })}
    </div>
  );
}
