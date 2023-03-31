import React from 'react';

const Blog = (props) => {
          console.log(props);
          const {cover_photo} = props.blog
          return (
             <div>
               <div className="card w-[90%] mx-auto mt-8 bg-base-100 shadow-xl">
              <figure><img src={cover_photo} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">Shoes</h2>
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