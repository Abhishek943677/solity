import { DefaultSeo, NextSeo } from "next-seo";
import React from "react";
import website_details from "../config/website_details.json"

const Seo = () => {
  return (
    <>
      <DefaultSeo
        title={`${website_details.name} | A Blog Page`}
        description={`Welcome to Solity, a captivating blog page brimming with daily thoughts. As you journey through the pages of Solity, you'll find a sanctuary for introspection and self-discovery. It is an educational website where we share our passion for many random knowledgeable topics. `}
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
          siteName: "Solity",
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
    </>
  );
};
export default Seo;
