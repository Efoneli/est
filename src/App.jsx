import "./App.css";
// import React, { useState, useEffect } from "react";
import Layout from "./layout/Layout";

function App() {
  
//   const [data, setData] = useState([])

// // get api implement
//   useEffect(() =>{
//     const apiUrl = "https://jsonplaceholder.typicode.com/comments";
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(json => {
//       console.log('jsoonn', json)
//       setData(json)
//     })
//     .catch((err) => {
//       console.log("err", err);
//     })
//   }, [])

//   // post and put api implement
//   const postPutEvent = () => {

//     const data = {
//       name: 'Efoneli',
//       mobile: '2302902932',
//       designation: 'developer',
//       pin: 2323
//     }

//     const apiUrl = "https://jsonplaceholder.typicode.com/comments";
//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Access-Control: 
//       }
//       body: JSON.stringify(data)
//     }) 
//      .then(response => response.json())
//       .then(json => {
//         console.log('jsoonn', json)
//         setData(json)
//       })
//       .catch((err) => {
//         console.log("err", err);
//       })
//   }

  return (
    <>
      {/* <div>
        <h2>Welcome</h2>
        {data.map(item => {
          return <p> {item.email} </p>
        })}
        <button type="submit"  onClick={postPutEvent}>Submit</button>
      </div> */}

      <Layout />
    </>
  );
}

export default App;
