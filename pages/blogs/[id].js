import Head from "next/head";
import React from "react";
import Navbar from "../../components/Frontend/Navbar";
import { useState, useEffect } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { blogsCollectionRef } from "../../utils/Firebase/firebaseConfig";
/*
   ! &>h1 -> heading 1
   ! &>h2 -> heading 2
   ! &>h3 -> heading 3
   ! &>h4 -> heading 4
   ! &>h5 -> heading 5
   ! &>h6 -> heading 6
   ! &>p -> paragraph
   ! &>p>a -> anchor
   ! &>p>strong ->bold
   ! &>p>em -> italic
   ! &>p>u -> underline
   ! &>p>strong>em -> bold italic
   ! &>p>strong>em>u -> bold italic underline
   ! &>p>em>u -> italic underline
   ! &>ol>li -> ordered list
   ! &>ul>li -> unordered list
   ! &>iframe -> video
   */
const Blog = ({ blogId }) => {
  const [blog, setBlog] = useState({});
  const q = query(blogsCollectionRef, where("id", "==", blogId));
  const [blogsSnapshot] = useCollection(q);
  useEffect(() => {
    if (blogsSnapshot) {
      setBlog(blogsSnapshot?.docs[0]?.data());
    }
  }, [blogsSnapshot]);
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-center break-words font-semibold p-4 ">
          {blog.title}
        </h2>
        <div
          className="p-2 break-words mb-10
               [&>p>img]:w-[100%] [&>p>img]:mx-auto [&>p>img]:mb-3 [&>p>img]:mt-5
               [&>h1]:text-3xl [&>h1]:font-semibold  [&>h1]:mb-3 [&>h1]:mt-4
               [&>h2]:text-2xl  [&>h2]:mb-2 [&>h2]:mt-4
               [&>h2]:font-medium 
               [&>h3]:text-lg 
               [&>h4]:text-base 
               [&>h5]:text-sm 
               [&>h6]:text-xs 
               [&>.ql-size-small]:text-red-600 [&>p>a]:text-indigo-700 [&>p>a]:underline  hover:[&>p>a]:text-blue-400
               "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <hr />
      </div>
    </div>
  );
};

export default Blog;

export const getServerSideProps = ({ params }) => {
  return {
    props: {
      blogId: params.id,
    },
    // revalidate: 10,
  };
};
// export const getStaticPaths = async () => {
//   const getBlogs = await getDocs(blogsCollectionRef);
//   const paths = getBlogs?.docs?.map((blogsArray) => ({
//     params: { id: blogsArray.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
