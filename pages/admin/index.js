import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddTopic from "../../components/admin/AddTopic";
import AdminPanel from "../../components/admin/AdminPanel";
import Head from "next/head";

const Index = ({ data }) => {
  const [edit, setEdit] = useState(false);
  console.log(data);

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
// export async function getServerSideProps(context) {
//   console.log(context.query);

//   // admin validation
//   try {
//     if (context.query.name !== "abhishek") {
//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }
//   } catch (error) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       data: "he is admin",
//     },
//   };
// }

Index.getInitialProps = async (context) => {
  console.log(context.query);

  // admin validation
  try {
    if (context.query.name !== "abhishek") {
      context.res.writeHead(307, { Location: "/" });
      context.res.end();
    }
  } catch (error) {
    context.res.writeHead(307, { Location: "/" });
    context.res.end();
  }

  return { data: "he island" };
};

export default Index;
