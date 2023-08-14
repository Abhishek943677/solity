import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddTopic from "../../components/admin/AddTopic";
import AdminPanel from "../../components/admin/AdminPanel";
import { getSession } from "next-auth/react";
import Head from "next/head";
import axios from "axios";

const Index = () => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    document.getElementById("change_button").scrollIntoView();
  }, []);

  return (
    <div className="px-4 rounded-md py-6 bg-gray-400 z-50">
      <Head>
        <meta name="robots" content="noindex , nofollow" />
      </Head>

      <Button
        onClick={() => setEdit((pre) => !pre)}
        variant="contained"
        id="change_button"
      >
        {edit ? "add topics" : "edit previous topics"}
      </Button>

      {edit ? <AdminPanel /> : <AddTopic />}
    </div>
  );
};

//----------------------- server auth and admin authentication----------------------------
export async function getServerSideProps(context) {

   // this is user authentication
   const session = await getSession({ req: context.req });
   if (!session) {
     return {
       redirect: {
         destination: "/api/auth/signin",
         permanent: false,
       },
     };
   }
 
   // this is admin validation
   try {
     const { data } = await axios.post(`${process.env.APP_URL}/api/auth/admin`, {
       email: session.user.email,
     });
     if (!data) {
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
