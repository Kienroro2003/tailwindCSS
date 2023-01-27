import React from "react";
import Blog from "./Blog";
import "./BlogList.css"

function BlogList(props) {
  return (
    <ul className="blog-list">
      <Blog
        image="./asserts/images/building.jpg"
        date="21 November 2021"
        title="  How to become a pro web designer in 2022 and get remot job?"
      ></Blog>
      <Blog
        image="./asserts/images/building.jpg"
        date="21 November 2021"
        title="  How to become a pro web designer in 2022 and get remot job?"
      ></Blog>
      <Blog
        image="./asserts/images/building.jpg"
        date="21 November 2021"
        title="  How to become a pro web designer in 2022 and get remot job?"
      ></Blog>
    </ul>
  );
}

export default BlogList;
