import React, { useState, useEffect } from "react";
import { Button, Input, MenuItem, Select, TextField } from "@mui/material";
import SunEditorPanel from "./SunEditorPanel";
import SuccessSnackBar from "../partials/SuccessSnackBar";
import FailureSnackBar from "../partials/FailureSnackBar";
import axios from "axios";
import Spinner from "../partials/Spinner";
import Articles from "../Articles";

export default function AddTopic() {
  const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
  const [openFailureSnack, setOpenFailureSnack] = useState(false);
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  const [editorContent, setEditorContent] = useState("");
  const [blog, setBlog] = useState({
    title: "",
    seo_description: "",
    seo_keywords: "",
    author: "Akshay",
    read_minutes: "3",
    publish_date: "",
    thumbnail:""
  });

  const handleSave = () => {
    axios
      .post("/api/blogs/save", {
        title: blog.title,
        seo_description: blog.seo_description,
        seo_keywords: blog.seo_keywords,
        author: blog.author,
        url: blog.title.replaceAll(" ", "-") + "-" + Date.now(),
        read_minutes: blog.read_minutes,
        publish_date: blog.publish_date,
        thumbnail: blog.thumbnail,
        editorContent,
      })
      .then((p) => {
        setSent(false);
        console.log(p.data);
        if (p.data.ok) {
          setMsg(p.data.ok);
          setOpenSuccessSnack(true);
        } else {
          setMsg(p.data.error);
          setOpenFailureSnack(true);
        }
      });
  };

  // Event handler to update editor content
  const handleChangeContent = (content) => {
    setEditorContent(content);
  };

  // Event handler to update input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  return (
    <div className="text-white ">
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
      {/* change course */}

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
        color="success"
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

      <input
        type="number"
        className="bg-slate-500 px-4 py-2 m-3 text-white rounded-md w-fit"
        onChange={handleInputChange}
        value={blog.read_minutes}
        name="read_minutes"
      />

      <input
        className="bg-slate-500 p-2 m-3 text-white"
        type="date"
        onChange={handleInputChange}
        value={blog.publish_date}
        name="publish_date"
      />

      <TextField
        type="url"
        variant="outlined"
        margin="normal"
        multiline="true"
        label="Thumbnail Image"
        required="true"
        size="medium"
        color="primary"
        className="p-2 w-full"
        onChange={handleInputChange}
        value={blog.thumbnail}
        name="thumbnail"
      />

      <p className="text-center">WRITE THE CONTENT</p>
      <SunEditorPanel
        handleChange={handleChangeContent}
        editorContent={editorContent}
      />

      <div className="h-fit mx-auto my-2 w-full flex justify-center">
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="w-40 mx-auto my-5"
          disabled={sent}
          onClick={(e) => {
            setSent(() => true);
            e.preventDefault();
            handleSave();
          }}
        >
          {/* save question */}
          {sent ? <Spinner /> : "save blog"}
        </Button>
      </div>
      <h1 className="text-2xl text-center text-[#008080] my-1">
        Your blog content looks like this on the webpage</h1>
      <div className="border border-green-500 pt-3 px-2 rounded-md make-com-dark">
        <Articles html={editorContent} />
      </div>
    </div>
  );
}
