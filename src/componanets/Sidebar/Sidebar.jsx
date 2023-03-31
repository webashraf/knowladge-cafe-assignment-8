import React from "react";

const Sidebar = (props) => {
  return (
    <div className="bg-white p-5 w-[80%] mx-auto rounded-lg mb-4 shadow-lg">
      <p className="font-semibold">{props.bookmark}</p>
    </div>
  );
};

export default Sidebar;
