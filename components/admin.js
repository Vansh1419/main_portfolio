import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { blogsCollectionRef } from "../../../utils/Firebase/firebaseConfig";
import style from "react-quill/dist/quill.snow.css";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlog = async () => {
      const getBlogs = await getDocs(blogsCollectionRef);
      //   console.log(getBlogs);
      setBlogs(
        getBlogs?.docs?.map((blogsArray) => ({
          ...blogsArray?.data(),
          id: blogsArray.id,
        }))
      );
    };
    getBlog();
    console.log(blogs);
  }, []);
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
  return (
    <div>
      <div>
        {blogs?.map((blog, index) => (
          <div key={index} className="max-w-4xl mx-auto">
            <h1 className="text-4xl text-center break-words font-semibold p-4 ">
              {blog.title}
            </h1>
            <hr />
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
               [&>.ql-size-small]:text-red-600 [&>p>a]:text-indigo-700 [&>p>a]:underline 
               "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <hr />
            <p className="text-xl font-medium text-center my-10">
              Thanks for reading the blog. Hope u like it.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdmin;
