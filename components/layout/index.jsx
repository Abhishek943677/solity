import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiAlignMiddle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Logo from "../partials/Logo";
import ComputerNav from "../partials/ComputerNav";
import MobileNav from "../partials/MobileNav";
import SearchResultDropdown from "../partials/SearchResultDropdown";
import { TextField } from "@mui/material";
import Footer from "../Footer";
import Scrolltotop from "../partials/Scrolltotop";
import DarkthemeSwitch from "../partials/DarkthemeSwitch";
import BottomNav from "../BottomNav";

const Layout = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [makeblur, setMakeblur] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResultModal, setShowSearchResultModal] = useState(false);
  const [serachParamFromTitle, setSearchParamFromTitle] = useState([]);
  const [serachParamFromHtml, setSearchParamFromHtml] = useState([]);
  const [dark, setDark] = useState(null);

  const toggleDarkMode = (checked) => {
    if (checked) {
      document.getElementsByTagName("html")[0].classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.getElementsByTagName("html")[0].classList.add("dark");
      setDark(false);
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      setDark(true);
    }

    // importBlogPostsWithContent().then((data) => {
    //   // console.log(data);
    //   setSearchData(data);
    // });

    //hidding dropdown menu of search
    // window.addEventListener("click", function (e) {
    //   if (
    //     document.getElementById("dropmenu") !== null &&
    //     !document.getElementById("dropdown").contains(e.target) &&
    //     !document.getElementById("searchTerm").contains(e.target)
    //   ) {
    //     setShowSearchResultModal(false);
    //   }
    //   if (
    //     document.getElementById("error-msg") !== null &&
    //     !document.getElementById("error-msg").contains(e.target) &&
    //     !document.getElementById("searchTerm").contains(e.target)
    //   ) {
    //     document.getElementById("error-msg").style.display = "none";
    //   }
    // });
    
    //hiding navbar on scroll
    window.addEventListener("scroll", () => {
      setShowNav(false);
    });
  }, [searchResult, showSearchResultModal, setShowSearchResultModal]);

  // // runsearch function
  // const runSearch = (value) => {
  //   if (value.length === 0) return false;
  //   var condition = new RegExp(String(value.trim()));

  //   setSearchParamFromTitle(
  //     searchData.filter((el) => condition.test(el.attributes.title))
  //   );

  //   if (serachParamFromTitle.length === 0) {
  //     setSearchParamFromHtml(
  //       searchData.filter((el) => condition.test(el.html))
  //     );
  //   }
  // };

  // // render search list
  // const renderSearchList = () => {
  //   if (serachParamFromTitle.length !== 0) {
  //     return (
  //       <SearchResultDropdown
  //         list={serachParamFromTitle.slice(0, 7)}
  //         setShowSearchResultModal={setShowSearchResultModal}
  //       />
  //     );
  //   }

  //   if (serachParamFromHtml.length !== 0) {
  //     return (
  //       <SearchResultDropdown
  //         list={serachParamFromHtml.slice(0, 7)}
  //         setShowSearchResultModal={setShowSearchResultModal}
  //       />
  //     );
  //   } else
  //     return (
  //       <div
  //         className="flex  m-auto flex-col  relative top-[7px] w-full h-14 z-50 align-middle text-center bg-red-500"
  //         id="error-msg"
  //       >
  //         <p>{`sorry data is not available`}</p>
  //       </div>
  //     );
  // };

  return (
    <div>
      <nav className=" flex flex-col justify-between flex-grow sticky top-3 h-12 my-12 shadow-md rounded-md z-50 lg:w-[98vw] sm:w-[100vw] max-[419px]:w-[27.5rem] text-black">
        <div className="flex justify-between flex-shrink">
          <Logo />
          <div className="sm:w-[400px] lg:w-fit" id="dropdown">
            {/* <TextField
              variant="standard"
              placeholder="please search"
              type="search"
              name="searchTerm"
              id="searchTerm"
              value={searchTerm}
              className=" rounded h-10 px-4 w-full mx-4 lg:w-[40rem] sm:w-fullf dark:placeholder:bg-white "
              onChange={(e) => {
                setSearchTerm(e.target.value.toLocaleLowerCase());
                runSearch(e.target.value);
                if (e.target.value.length === 0) {
                  setSearchParamFromHtml([]);
                  setSearchParamFromTitle([]);
                }
              }}
              onInput={() => {
                setShowSearchResultModal(true);
                function name() {
                  document.getElementById("error-msg").style.display = "";
                }
                document.getElementById("error-msg") !== null && name();
              }}
              onFocus={() => {
                setShowSearchResultModal(true);
                setMakeblur(true);
                function name() {
                  document.getElementById("error-msg").style.display = "";
                }
                document.getElementById("error-msg") !== null && name();
              }}
              onBlur={() => setMakeblur(false)}
            /> */}
            {/* search result modal */}
            {/* {showSearchResultModal &&
              searchTerm.length !== 0 &&
              renderSearchList()} */}
          </div>

          {/* <BiAlignMiddle
            className="h-fit p-1 w-10 lg:hidden sm:block md:block mx-4"
            onClick={() => setShowNav((prev) => !prev)}
          /> */}
          {!showNav ? (
            <BiAlignMiddle
              className="h-fit p-1 w-10 lg:hidden sm:block md:block mx-4"
              onClick={() => setShowNav((prev) => !prev)}
            />
          ) : (
            <CgClose
              className="h-fit p-1 w-10 lg:hidden sm:block md:block mx-4"
              onClick={() => setShowNav((prev) => !prev)}
            />
          )}
          <ComputerNav />
        </div>
        <div>
          {/* for mobile navigation */}
          {!showNav ? null : <MobileNav setShowNav={setShowNav} />}
          {/* {showNav ? <MobileNav /> : null} */}
        </div>
      </nav>

      {makeblur ? (
        <div className=" blur-xl flex flex-col scroll-smooth mx-auto max-[419px]:w-[27.5rem] ">
          {children}
        </div>
      ) : (
        <div className="flex flex-col scroll-smooth mx-auto max-[419px]:w-[27.5rem]">
          {children}
        </div>
      )}
      <div className=" fixed bottom-20 right-3 my-3 block z-50">
        <DarkthemeSwitch
          checked={!dark}
          onChange={(e) => {
            setDark((p) => !p);
            toggleDarkMode(e.target.checked);
          }}
        />
      </div>
      <Scrolltotop />
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Layout;
