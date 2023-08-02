import axios from "axios";
import { ObjectId } from "mongodb";
import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { mongoConnectBlogs } from "../../lib/mongoConnectBlogs";
import SuccessSnackBar from "../../components/partials/SuccessSnackBar";
import FailureSnackBar from "../../components/partials/FailureSnackBar";
import SunEditorPanel from "../../components/admin/SunEditorPanel";
import Spinner from "../../components/partials/Spinner";
import Articles from "../../components/Articles";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Edit({ topicData }) {
  //   console.log(JSON.parse(data));

  const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
  const [openFailureSnack, setOpenFailureSnack] = useState(false);
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const [editorContent, setEditorContent] = useState("");
  const [blog, setBlog] = useState({
    title: "",
    seo_description: "",
    seo_keywords: "",
    author: "",
    read_minutes: "",
    publish_date: "",
    thumbnail: "",
  });

  useEffect(() => {
    setBlog({
      title: JSON.parse(topicData).title,
      seo_description: JSON.parse(topicData).seo_description,
      seo_keywords: JSON.parse(topicData).seo_keywords,
      author: JSON.parse(topicData).author,
      read_minutes: JSON.parse(topicData).read_minutes,
      publish_date: JSON.parse(topicData).publish_date,
      thumbnail: JSON.parse(topicData).thumbnail,
    });
    setEditorContent(JSON.parse(topicData).editorContent);

    document.getElementById("change_button").scrollIntoView(); // scroll to some points for better view

  }, []);

  const handleSave = () => {
    axios
      .post("/api/blogs/editTopic", {
        title: blog.title,
        seo_description: blog.seo_description,
        seo_keywords: blog.seo_description,
        author: blog.author,
        read_minutes: blog.read_min,
        publish_date: blog.publish_date,
        thumbnail: blog.thumbnail,
        editorContent,
        id: router.query.id,
      })
      .then((p) => {
        setSent(false);
        // console.log(p.data);
        if (p.data.ok) {
          setMsg(p.data.ok);
          setOpenSuccessSnack(true);
        } else {
          setMsg(p.data.error);
          setOpenFailureSnack(true);
        }
      });
  };

  // Event handler to update input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleChangeContent = (content) => {
    setEditorContent(content);
  };

  return (
    <div className="px-4 bg-gray-400 rounded-md py-6 z-50">
      
      <NextSeo
        robotsProps={{
          noindex: true, // true to set noindex, false to allow indexing
          nofollow: true, // true to set nofollow, false to allow following links
          // other robots meta tag properties if needed
        }}
      />

      <SuccessSnackBar
        open={openSuccessSnack}
        setOpen={setOpenSuccessSnack}
        msg={msg}
      />
      <FailureSnackBar
        open={openFailureSnack}
        setOpen={setOpenFailureSnack}
        msg={msg}
      />

      <Link href="/admin?name=abhishek">
        <Button variant="contained" id="change_button">Add Topics</Button>
      </Link>

      {/* input section */}
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="write seo friendly title"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        name="title"
        onChange={handleInputChange}
        value={blog.title}
      />

      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="Author Name"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        name="author"
        onChange={handleInputChange}
        value={blog.author}
      />

      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="seo_description"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        name="seo_description"
        onChange={handleInputChange}
        value={blog.seo_description}
      />

      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="seo_keywords"
        name="seo_keywords"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        onChange={handleInputChange}
        value={blog.seo_keywords}
      />

      <TextField
        type="number"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="Read Minutes"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        onChange={handleInputChange}
        value={blog.read_minutes}
        name="read_minutes"
      />

      <TextField
        type="datetime-local"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="publish date"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        onChange={handleInputChange}
        value={blog.publish_date}
        name="publish_date"
      />

      <TextField
        type="url"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="thumbnail"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        onChange={handleInputChange}
        value={blog.thumbnail}
        name="thumbnail"
      />

      <p className="text-center">WRITE THE CONTENT</p>
      <div className="px-3">
        <SunEditorPanel
          handleChange={handleChangeContent}
          editorContent={editorContent}
        />
      </div>

      <div className="h-fit mx-auto my-2 w-full flex justify-center">
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="w-56 mx-auto my-5"
          disabled={sent}
          onClick={(e) => {
            setSent(() => true);
            e.preventDefault();
            handleSave();
          }}
        >
          {/* save question */}
          {sent ? <Spinner /> : "save blogs topic"}
        </Button>
      </div>
      <h1 className="text-2xl text-center text-[#008080] my-1">
        Your blog content looks like this on the webpage
      </h1>
      <div className=" pt-3 px-2 rounded-md make-com-dark">
        <Articles html={editorContent} />
      </div>
    </div>
  );
}

//---------------------- server side----------------------
export async function getServerSideProps(context) {
  // admin validation
  try {
    if (context.query.name !== "abhishek") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // actual server side stuffs
  // this is to get learObj from server
  try {
    const db = await mongoConnectBlogs(); // my function to connect with db
    const collection = db.collection("blogs"); // creating collection with name of trade

    const topicData = await collection
      .find({ _id: new ObjectId(context.query.id) })
      .toArray();
    // console.log(topicData);
    return {
      props: {
        topicData: JSON.stringify(topicData[0]),
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
