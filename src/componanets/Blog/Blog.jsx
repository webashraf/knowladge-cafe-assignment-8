import React from "react";

const Blog = (props) => {
  console.log(props);
  const { cover_photo, title, user_pic, user_name, publish_date } = props.blog;
  return (
    <div>
      <div className="card w-[90%] mx-auto mt-8 bg-base-100 shadow-xl">
        <figure>
          <img src={cover_photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="user flex gap-3 items-center">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img className="w-full" src={user_pic} alt="" />
            </div>
            <div className="user-detils text-left">
              <span className="font-bold">{user_name}</span>
              <br />
              <span>
                <small className="font-bold text-gray-600">
                  {publish_date}
                </small>
              </span>
            </div>
          </div>

          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
