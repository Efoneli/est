import React from "react";

function HowWorks({ data }) {
  const { title, desc, photo } = data;
  return (
    <>
     
        <div className="flex flex-col justify-around items-center m-6">
          <img src={photo} alt="imag" height="50px" width="100px" />
          <h2 className="text-sm font-bold p-1">{title}</h2>
          <p className="text-xs text-gray-400 py-2">{desc} </p>
        </div>
     
    </>
  );
}

export default HowWorks;
