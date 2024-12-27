"use client"
import React from "react";

const Readmore = ({buttonName}) => {
  return (
    <a href="#" className="read-more" onClick={()=> alert('Hello')}>
      Read More about {buttonName}
    </a>
  );
};

export default Readmore;
