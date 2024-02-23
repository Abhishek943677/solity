import { Button, Divider, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import SuccessSnackBar from "../../components/partials/SuccessSnackBar"
import FailureSnackBar from "../../components/partials/FailureSnackBar"
import Spinner from "../../components/partials/Spinner"

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [barmsg, setBarMsg] = useState("");
  const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
  const [openFailureSnack, setOpenFailureSnack] = useState(false);

  const handleSend = async () => {
    axios.post("/api/sendmail", { senderEmail, senderName, msg }).then(({ data }) => {
      setSent(false);
      console.log(data)
      if (data.ok) {
        setBarMsg(data.ok)
        setOpenSuccessSnack(true);
      } else {
        setBarMsg(data.error)
        setOpenFailureSnack(true);
      }
    });
  };

  return (
    <main >
      <SuccessSnackBar open={openSuccessSnack} setOpen={setOpenSuccessSnack} msg={barmsg} />
      <FailureSnackBar open={openFailureSnack} setOpen={setOpenFailureSnack} msg={barmsg} />
      <section>

        <div className="flex flex-col lg:w-2/4 sm:w-full sm:p-3 lg:ml-20">
          <h1 className="text-4xl m-4">Contact Us</h1>
          <Divider />

          <p className="text-base m-4  text-red-700">{`Please send messages from Real Emails otherwise it will be marked as spams.`}</p>
          <div className="m-4">
            <TextField
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              label="Name"
              className="w-96 p-3"
              variant="outlined"
              autoFocus
            />
          </div>
          <div className="m-4">
            <TextField
              label="Email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className="w-96 p-3"
              variant="outlined"
            />
          </div>
          <div className="m-4">
            <TextField
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              label="Message"
              multiline="true"
              rows="7"
              className="w-full p-3"
              variant="outlined"
            />
          </div>
          <div className="m-4">
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="w-full p-3"
              disabled={sent}
              onClick={(e) => {
                setSent(() => true);
                e.preventDefault();
                handleSend();
              }}
            >
              {/* save question */}
              {sent ? <Spinner /> : "send message"}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Contact