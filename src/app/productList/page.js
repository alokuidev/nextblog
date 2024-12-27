/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { Allura } from "next/font/google";

export default function page() {
  const [apidata, setApiData] = useState([]);
  const [loading, setloading] = useState(false);

  const getData = async () => {
    try {
      
    const res  = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    setApiData(data.posts);
    setloading(true); 
    } catch (error) {
      console.log(`We have encountered error: ${error}`)
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading === false) return <h1 className='loading' style={{color:'#000'}}>Loading...</h1>
    return (
      <>
        <main className="blog-container">
          {apidata.map((elem, index) => {
            return (
              <div className="blog-card" key={index}>
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Blog Image"
                  className="blog-image"
                />
                <div className="blog-content">
                  <h2 style={{fontFamily:'Allura'}}>{elem.title}</h2>
                  <p style={{fontFamily:'Allura'}}>{elem.body}</p>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </main>
      </>
    );
}
