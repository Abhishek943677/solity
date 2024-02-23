import React, { useEffect, useState } from "react";
import Layout from "../components/layout/index.jsx";
import "../styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import website_details from "../config/website_details.json"

// import Seo from "../lib/Seo.js";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

function App({ Component, pageProps }) {
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
      <>
        <DefaultSeo
          title={`${website_details.name} | A Blog Page`}
          description={`Welcome to ${website_details.name}, a captivating blog page brimming with daily thoughts. As you journey through the pages of Solity, you'll find a sanctuary for introspection and self-discovery. It is an educational website where we share our passion for many random knowledgeable topics. `}
          canonical={website_details.full_url}
          additionalMetaTags={[
            {
              name: "keywords",
              content: `Solity,Introspection,Thoughts,Self-discovery,Ideas,Guides,Articles,Blogs`,
            },
          ]}
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: website_details.full_url,
            siteName: website_details.name,
            images: [
              {
                url: "/android-chrome-192x192.png",
                width: 800,
                height: 600,
                alt: "Solity logo Image",
                type: "image/jpeg",
              },
            ],
          }}
          twitter={{
            type: "website",
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </>
    );
  }
}

export default App;
