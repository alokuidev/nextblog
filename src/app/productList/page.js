/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from "react"

export default function page(){
    const [apidata, setApiData] = useState([]);
    const [loading, setloading] = useState(false)
    
    const getData = async () =>{
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setApiData(data.products);
        setloading(true);
        console.log(data)
    }
    useEffect(() =>{
        getData();
    },[])
    if(loading === true)  
    return(
        <>
          
   <main className="blog-container">
    {apidata.map((elem, index) =>{

    return(
    <div className="blog-card" key={index}>
      <img src="https://via.placeholder.com/300x200" alt="Blog Image" className="blog-image"/>
      <div className="blog-content">
        <h2>{elem.title}</h2>
        <p>{elem.description}</p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>
    )
    })}
  </main> 
        </>
    )
}