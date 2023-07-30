import React, { useEffect, useState } from "react";
import Layout from "../components/layout/index.jsx";
import "../styles/globals.css";
//animate on scroll library
import Aos from "aos";
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    Aos.init();
  }, []);
  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Layout>
          <Component {...pageProps}  />
      </Layout>
    );
  }
}

export default MyApp;
