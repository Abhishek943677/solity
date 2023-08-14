import React, { useEffect, useState } from "react";
import { BiAlignMiddle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Logo from "../partials/Logo";
import ComputerNav from "../partials/ComputerNav";
import MobileNav from "../partials/MobileNav";
import Footer from "../Footer";
import Scrolltotop from "../partials/Scrolltotop";
import DarkthemeSwitch from "../partials/DarkthemeSwitch";
import BottomNav from "../BottomNav";
import { useRouter } from "next/router";
import { Avatar, Button, Divider, LinearProgress, Paper } from "@mui/material";
import LoginModal from "../login/LoginModal";
import { signOut, useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  const [showNav, setShowNav] = useState(false);
  const [dark, setDark] = useState(null);
  const [urlChange, setUrlChange] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // change in url indication
    setUrlChange(false);
    router.events.on("routeChangeStart", () => {
      setUrlChange(true);
    });
    router.events.on("routeChangeComplete", () => {
      setUrlChange(false);
    });

    // dark mode logic for initial page loading
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

    //hiding navbar on scroll
    window.addEventListener("scroll", () => {
      setShowNav(false);
    });
  }, []);

  // toggle button for dark mode
  const toggleDarkMode = (checked) => {
    if (checked) {
      document.getElementsByTagName("html")[0].classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <div>
      {/* change in url indicator */}
      {urlChange ? (
        <div className=" border-0 rounded-md fixed top-0 w-full bg-[#01c3dd] z-50">
          <LinearProgress color="inherit" sx={{ height: "5px" }} />
        </div>
      ) : (
        ""
      )}

      {/* main layout */}
      <nav className=" flex flex-col justify-between flex-grow sticky top-3 h-12 my-12 shadow-md rounded-md z-50 lg:w-[98vw] sm:w-[100vw] max-[419px]:w-[27.5rem] text-black">
        <div className="flex flex-shrink justify-between">
          <Logo />

          <div className="flex justify-center my-auto ">

            {/* login and signIn things */}
            {session ? (
              <div id="avatar-div">
                <div className="flex cursor-pointer mb-3 my-auto  ">
                  <Avatar className="w-fit" />
                </div>

                {/* profile modal */}
                <div className="relative">
                  <Paper
                    elevation={3}
                    id="profileModal"
                    className={` list-none absolute top-[-10px] right-4 w-52 p-4 rounded make-com-dark`}
                    // className={` list-none absolute md:top-[2.6rem] lg:top-[2.6rem] sm:top-[1.6rem] max-[640px]:top-[1.6rem] right-[11.4rem] p-4 rounded make-com-dark`}
                  >
                    <li>
                      <p>{session.user.name}</p>
                      <Divider />
                    </li>
                    <li>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => signOut()}
                      >
                        log out
                      </Button>
                    </li>
                  </Paper>
                </div>
              </div>
            ) : (
              <div>
                <LoginModal />
              </div>
            )}



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
        </div>

        <div>
          {/* for mobile navigation */}
          {!showNav ? null : <MobileNav setShowNav={setShowNav} />}
        </div>
      </nav>

      <div className="flex flex-col scroll-smooth mx-auto max-[419px]:w-[27.5rem]">
        {children}
      </div>

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
