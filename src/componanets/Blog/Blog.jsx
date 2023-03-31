import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormat from "dateformat";
import React from "react";

const Blog = (props) => {
  // console.log(props);
  const { cover_photo, title, user_pic, user_name, publish_date, tags, date } =
    props.blog;
  const handleBookmark = props.handleBookmark;

  return (
    <div>
      <div className="card w-[90%] mx-auto mt-8 bg-base-100 shadow-xl">
        <figure>
          <img src={cover_photo} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <div className="user flex gap-3 justify-between">
            <div className=" flex gap-3 items-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img className="w-full" src={user_pic} alt="" />
              </div>
              <div className="user-detils ">
                <span className="font-bold">{user_name}</span>
                <br />
                <span>
                  <small className="font-bold text-gray-600">
                    {dateFormat(date, "dS mmmm, yyyy")}
                  </small>
                </span>
              </div>
            </div>
            <div>
              <span>
                05 min read{" "}
                <FontAwesomeIcon
                  onClick={() => handleBookmark(title)}
                  icon={faBookmark}
                />
              </span>
            </div>
          </div>

          <h2 className="card-title">{title}</h2>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span className="text-gray-500 underline">#{tag}</span>
            ))}
          </div>
          <div className="card-actions justify-start">
            <a className="link link-primary">Mark as read</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
