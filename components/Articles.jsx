import React, { useEffect, useState } from "react";
import { Hind_Siliguri } from "next/font/google";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300"],
  display: "swap",
});

export default function Articles({ html }) {
  useEffect(() => {
    if (document.querySelectorAll("code")) {
      const code = document.querySelectorAll("code");
      code.forEach((p) => {
        p.innerHTML = `<div id="code-editor"><code>${p.innerText}</code></div>`;
      });
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={`[&>*]:m-1 
    [&>blockquote]:post-quote  ${hindSiliguri.className}`}
      id="articles"
    />
  );
}
