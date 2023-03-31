import React from "react";

const Sidebar = (props) => {
  return (
    <div className="border border-red-100">
      <p>{props.bookmark}</p>
    </div>
  );
};

export default Sidebar;
