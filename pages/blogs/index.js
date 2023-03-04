import { Paper } from "@mui/material";
import { getDocs } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Navbar from "../../components/Frontend/Navbar";
import { blogsCollectionRef } from "../../utils/Firebase/firebaseConfig";

const blogsPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  useEffect(() => {
    const blogsData = async () => {
      const getBlogs = await getDocs(blogsCollectionRef);
      setBlogs(getBlogs?.docs?.map((doc) => doc.data()));
    };
    blogsData();
  }, []);
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-transparent text-7xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center `}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          Blogs
        </h1>
        {blogs?.map((blog) => (
          <Link key={blog?.id} href={`/blogs/${blog.id}`}>
            <Paper
              elevation={3}
              className="py-3 px-2 my-2 mx-1 hover:[&>h2]:text-blue-600 cursor-pointer"
            >
              <h2 className="text-3xl font-semibold underline underline-offset-2 text-blue-700 mb-3">
                {blog?.title}
              </h2>
              <p className="font-light">{blog?.description}</p>
              {/* <p className=""></p> */}
            </Paper>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default blogsPage;
