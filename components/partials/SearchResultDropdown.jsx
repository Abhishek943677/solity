import Link from "next/link";
import React from "react";

const SearchResultDropdown = ({ list ,setShowSearchResultModal}) => {
    return (
      <div
        className="flex  m-auto flex-col h-fit relative top-[7px] lg:w-[40rem] sm:w-full md:w-80 bg-slate-200 align-middle text-center"
        id="dropmenu"
      >
        {list.map(({ attributes, slug }) => {
          if (window.location.pathname.includes("blog/post/")) {
            return (
              <div className="static" key={attributes.date}>
                <Link href={`${slug}`} key={attributes.title} onClick={()=>setShowSearchResultModal(false)}>
                  <p className=" p-2 shadow-slate-400 m-1 bg-white rounded" >{attributes.title.slice(0,60)}</p>
                </Link>
              </div>
            );
          } else if(window.location.pathname.includes("blog/")){
            return (
              <div className="static" key={attributes.date}>
                <Link href={`post/${slug}`} key={attributes.title}  onClick={()=>setShowSearchResultModal(false)}>
                  <p className=" p-2 m-1 shadow-slate-400 rounded bg-white">{attributes.title.slice(0,60)}</p>
                </Link>
              </div>
            );
          }else{
            return (
              <div className="static" key={attributes.date}>
                <Link href={`blog/post/${slug}`} key={attributes.title}  onClick={()=>setShowSearchResultModal(false)}>
                  <p className=" p-2 m-1 shadow-slate-400 rounded bg-white">{attributes.title.slice(0,60)}</p>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  };
  
  export default SearchResultDropdown;