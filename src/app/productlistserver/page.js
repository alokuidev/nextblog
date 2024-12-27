import React from "react";
import Readmore from "./Readmore";

async function productserverList() {
  try {
    let res = await fetch("https://dummyjson.com/posts");
    let data = await res.json();
    return data.posts;
  } catch (error) {

  }
}

const productlistsever = async () => {
  let posts = await productserverList();
  console.log(posts)  
  return (
    <main className="blog-container">
          {posts.map((elem, index) => {
            return (
              <div className="blog-card" key={index}>
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Blog Image"
                  className="blog-image"
                />
                <div className="blog-content">
                  <h2>{elem.title}</h2>
                  <p>{elem.body}</p>
                  <Readmore buttonName={elem.title}/>
                </div>
              </div>
            );
          })}
        </main>
  );
};

export default productlistsever;
