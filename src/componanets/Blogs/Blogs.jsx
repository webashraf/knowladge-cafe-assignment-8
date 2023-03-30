import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
          const [blogs, setBlogs] = useState([]);
          useEffect(() =>{
                    fetch('fakeBlogData.json')
                    .then(res => res.json())
                    .then(data => setBlogs(data))
          }, [])
          // console.log(blogs);
          return (
                    <div>

                              {
                                        blogs.map(blog => <Blog blog={blog}></Blog>)
                              }
                              <Sidebar></Sidebar>
                    </div>
          );
};

export default Blogs;