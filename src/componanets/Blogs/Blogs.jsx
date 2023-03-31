import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import './Blogs.css';

const Blogs = () => {
          const [blogs, setBlogs] = useState([]);
          useEffect(() =>{
                    fetch('fakeBlogData.json')
                    .then(res => res.json())
                    .then(data => setBlogs(data))
          }, [])
          // console.log(blogs);
          return (
                    <div className="blogs-parent">
                     <div>
                    {
                              blogs.map(blog => <Blog blog={blog}></Blog>)
                    }
                     </div>
                              <Sidebar></Sidebar>
                    </div>
          );
};

export default Blogs;