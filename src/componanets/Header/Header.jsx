import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="logo">Programming Art</h2>
        <div className="header-menu">
          <ul className="flex gap-5 items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <span className="w-[40px] rounded-full overflow-hidden">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/10311994/pexels-photo-10311994.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </a>
            </span>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
