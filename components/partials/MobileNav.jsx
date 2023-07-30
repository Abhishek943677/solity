import Link from "next/link";
import React from "react";
import main from "../../config/navbarmenu.json"
export default function MobileNav({setShowNav}) {
 
  return (
    <div className={` flex flex-col bg-white justify-center w-full text-center relative top-[0px] z-50 shadow-xl border border-b-slate-800`} id="mobileNav">
      {main.menu.map((p,i)=>
      <Link href={`${p.path}`} className="px-3 py-2 border odd:bg-slate-200" key={i} onClick={()=>setShowNav(false)}>
      {p.name}
      </Link>)}
    </div>
  );
}
