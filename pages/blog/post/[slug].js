import Image from "next/image";
import React from "react";
import Articles from "../../../components/Articles";
import { mongoConnectBlogs } from "../../../lib/mongoConnectBlogs";
import { NextSeo } from "next-seo";
import SocialShare from "../../../components/partials/SocialShare";

export default function Post({ blogpost }) {
  if (!blogpost) return <div>not found</div>;

  return (
    <div>
      {/* seo */}
      <NextSeo
        title={JSON.parse(blogpost)?.title || `solity.fun`}
        description={
          JSON.parse(blogpost)?.seo_description ||
          `Welcome to Solity, a captivating blog page brimming with daily thoughts. As you journey through the pages of Solity, you'll find a sanctuary for introspection and self-discovery. It is an educational website where we share our passion for many random knowledgeable topics. `
        }
        canonical={`https://solity.fun/blog/post/${JSON.parse(blogpost)?.url}}`}
      />
      {/* seo */}

      <h1 className="text-center font-normal text-3xl m-2 text-[#008080] lg:w-2/3 sm:w-5/6 max-[639px]:px-4 mx-auto">
        {JSON.parse(blogpost)?.title}
      </h1>

      <article className="flex justify-center flex-col lg:w-2/3 sm:w-5/6 max-[639px]:px-4 mx-auto">
        <div className="flex justify-between top-0">

          <div className="flex">

            <p className="mx-3">
              {JSON.parse(blogpost)?.author || `From Solity`}
            </p>

            <p className="mx-3 text-emerald-700">{JSON.parse(blogpost)?.publish_date}</p>
          </div>

          <div>
            <p className="mx-3">{`${
              blogpost?.read_minutes || `2`
            } min read`}</p>
          </div>
        </div>

        <Image
          loading="eager"
          width={500}
          height={500}
          quality={60}
          src={JSON.parse(blogpost)?.thumbnail}
          className="rounded-md w-full m-auto my-2 max-h-[30rem]"
        />

        <SocialShare
          url={JSON.parse(blogpost).url}
          title={JSON.parse(blogpost).title}
          description={
            JSON.parse(blogpost)?.seo_description ||
            `Welcome to Solity, a captivating blog page brimming with daily thoughts. As you journey through the pages of Solity, you'll find a sanctuary for introspection and self-discovery. It is an educational website where we share our passion for many random knowledgeable topics. `
          }        />

        <Articles html={JSON.parse(blogpost)?.editorContent} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const db = await mongoConnectBlogs(); // my function to connect with db
  const collectionName = "blogs";
  const collection = db.collection(collectionName); // creating collection with name of trade  // console.log(postsList)
  const fileNames = await collection
    .find({})
    .project({ url: 1, _id: 0 })
    .toArray();

  // console.log(fileNames);
  const path = fileNames.map(({ url }) => {
    return {
      params: { slug: String(url) },
    };
  });

  console.log(path[0].params);

  return {
    paths: path,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  try {
    const db = await mongoConnectBlogs(); // my function to connect with db
    const collectionName = "blogs";
    const collection = db.collection(collectionName); // creating collection with name of trade  // console.log(postsList)
    const blogpost = await collection
      .find({ url: context.params.slug })
      .toArray();

    // console.log(blogpost); // console
    return {
      props: {
        blogpost: JSON.stringify(blogpost[0]),
      },
      revalidate: 600,
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/blog/1",
        permanent: true,
      },
    };
  }
}
