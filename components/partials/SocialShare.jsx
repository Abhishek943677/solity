import { Link, ShareRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { ShareSocial } from "react-share-social";
import website_details from "../../config/website_details.json"

export default function SocialShare({ url, title, description }) {
  const [linkCopied, setLinkCopied] = useState(false);

  const shareData = {
    title: title || "Solity | A Blog Page",
    text: description || "Solity | A Blog Page",
    url: `${website_details.full_url}/blog/post/${url}`,
  };

  return (
    <div className=" flex flex-row h-fit flex-wrap justify-end">
      {/* share social main component */}
      <ShareSocial
        url={`${website_details.full_url}/blog/post/${url}`}
        socialTypes={[
          "facebook",
          "whatsapp",
          "twitter",
          "linkedin",
          "telegram",
          "reddit",
        ]}
        style={{
          root: {
            background: "none",
            display: "flex",
            flexWrap: "wrap",
            border: 0,
            color: "white",
            padding: 0,
            margin: 0,
          },
          copyContainer: {
            display: "none",
          },
        }}
        onSocialButtonClicked={() => {}}
      />

      {/* getlink button */}
      <div className={`my-auto mx-1 cursor-pointer hover:z-50 relative `}>
        {linkCopied && <p className="absolute bottom-10">Copied</p>}

        {/* icon button div */}
        <div
          className="bg-red-700 rounded-full p-[0.15rem]"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(
                `${website_details.full_url}/blog/post/${url}`
              );
              setLinkCopied(true);
              setTimeout(() => {
                setLinkCopied(false);
              }, 2000);
            } catch (err) {}
          }}
        >
          <Link fontSize="large" color="inherit" />
        </div>
      </div>

      {/* this is custom share button with navigator api */}
      {navigator.canShare && (
        <div
          className={`my-auto mx-1 cursor-pointer hover:z-50 bg-lime-700 rounded-full p-[0.5rem]`}
          onClick={async () => {
            try {
              await navigator.share(shareData);
            } catch (err) {}
          }}
        >
          <ShareRounded fontSize="medium" color="inherit" />
        </div>
      )}
    </div>
  );
}
