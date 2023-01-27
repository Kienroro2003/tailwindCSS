import React from "react";
import "./Blog.css";

function Blog({image, date, title}) {
  return (
    <>
      <li class="blog-item">
        <img src={image} alt="" class="blog-image" />
        <div class="body">
          <span class="date">{date}</span>
          <div class="line"></div>
          <h3 class="title">{title}</h3>
          <a href="#!" class="btn btn-blog">
            Read More
          </a>
        </div>
      </li>
    </>
  );
}

export default Blog;
