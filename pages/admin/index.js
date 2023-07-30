import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddTopic from "../../components/admin/AddTopic";
import AdminPanel from "../../components/admin/AdminPanel";

const Index = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="px-4 bg-gray-400 rounded-md py-6">
      <Button onClick={() => setEdit((pre) => !pre)} variant="contained">
        {edit ? "add topics" : "edit previous topics"}
      </Button>

      {edit ? <AdminPanel  /> : <AddTopic  />}
    </div>
  );
};

//----------------------- server auth and admin authentication----------------------------
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


    return {
      props: {
        data: "he is admin",
      },
    };
}

export default Index;
