import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeBlogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs.map((blog) => blog.id));

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (title) => {
    console.log(title);
    const newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  };
  console.log(bookmarks);
  return (
    <div className="blogs-parent">
      <div>
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.index}
            handleBookmark={handleBookmark}
          ></Blog>
        ))}
      </div>
      <div>
        <h1 className="text-xl text-purple-500 font-semibold border border-purple-600 bg-purple-200 bg-opacity-60 rounded-md p-5">
          Spent time on read : 177 min
        </h1>
        <div className="mt-5 bg-gray-300 p-5">
          <h2 className="font-bold">Bookmarked Blogs : 8</h2>
        </div>
        {bookmarks.map((bookmark) => (
          <Sidebar bookmark={bookmark}></Sidebar>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
