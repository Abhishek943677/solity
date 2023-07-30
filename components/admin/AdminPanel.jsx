import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Spinner from "../partials/Spinner";

export default function AdminPanel() {
  const [listData, setListData] = useState([]);
  const [sent, setSent] = useState(false);
  const [sentGetMore, setSentGetMore] = useState(false);
  const [count, setCount] = useState(1);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [toBeDeleted, setTobeDeleted] = useState("");
  const totalTopicsPerPage =10;

  // to get topics on click
  const handleApi = () => {
    setCount(1);
    axios
      .post("/api/blogs/topicsByAdmin", {
        count: 1,
      })
      .then(({ data }) => {
        setSent(false);
        if (data.list.length < totalTopicsPerPage) {
          console.log("less than given totalTopicsPerPage");
          setCount(1);
        }

        if (data.ok) {
          setListData(data.list);
          if (data.list.length < totalTopicsPerPage) {
            setCount(1);
          } else {
            setCount(2);
          }
        } else {
          setListData([]);
        }
      })
      .catch((error) => {
        setSent(true);
      });
  };

  const handleLoadMore = (count) => {
    setSentGetMore(true);
    axios
      .post("/api/blogs/topicsByAdmin", {
        count,
      })
      .then(({ data }) => {
        setSentGetMore(false);

        if (data.ok) {
          data.list.map((item) => listData.push(item));
          if (data.list.length < totalTopicsPerPage) {
            setCount(1);
          } else {
            setCount(count + 1);
          }
        } else {
          setListData([]);
        }
      });
  };

  // to delete the item from the list
  const handleDelete = () => {
    console.log(toBeDeleted);
    axios.post("/api/blogs/deleteTopic", { id:toBeDeleted }).then(({ data }) => {
      const filteredList = listData.filter((item) => item._id !== toBeDeleted);
      setListData(filteredList);
    });
  };

  // delete alert dialog
  const handleClickOpenDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleClose = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <div>
      {/* delete dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"confirmation for deletion of topic"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you want to delete this topic. This will not be
            recovered if deleted once.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button
            onClick={() => {
              handleDelete();
              handleClose();
            }}
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
      {/* ------------------------------- */}

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
            handleApi();
          }}
        >
          {/* get topics */}
          {sent ? <Spinner /> : "get blog posts"}
        </Button>
      </div>

      {/* this section shows all the topics for editing purpose */}
      <main>
        {listData &&
          listData.length > 0 &&
          listData.map((item, index) => {
            return (
              <div className="px-2 make-com-dark my-1 rounded" key={index}>
                <div className="flex justify-between">
                  <Link
                    className=" hover:opacity-50"
                    href={`/blog/${item.url}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.title}
                  </Link>

                  <div className="flex my-auto">
                    <Button size="small">
                      <DeleteIcon
                        fontSize="large"
                        color="error"
                        className="cursor-pointer mx-2 "
                        onClick={(e) => {
                          setTobeDeleted(item._id);
                          handleClickOpenDialog();
                          e.target.classList.add("deleted");
                        }}
                      />
                    </Button>
                    <Link
                      href={`/admin/edit?id=${item._id}&name=abhishek`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button>
                        <EditIcon
                          fontSize="large"
                          color="primary"
                          className="cursor-pointer ml-2"
                        />
                      </Button>
                    </Link>
                    <p className="text-center my-auto p-1">{index + 1}</p>
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
      </main>

      {/* this is the button to get topics */}
      <div className="flex justify-center w-full">
        {count !== 1 && (
          <div className="mx-auto flex justify-center">
            <Button
              variant="contained"
              className="w-52"
              disabled={sentGetMore}
              onClick={() => {
                handleLoadMore(count);
              }}
            >
              {sentGetMore ? <Spinner /> : "Load more..."}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
