import React from "react";

function HowWorks({ data }) {
  const { title, desc, photo } = data;
  return (
    <>
     
        <div>
          <img src={photo} alt="imag" height="50px" width="100px" />
          <h2 className="text-sm font-bold p-1">{title}</h2>
          <p className="text-xs">{desc} </p>
        </div>
     
    </>
  );
}

export default HowWorks;
