// We use useRef when we are dealing with the values that are not for render.
// For the things that we have to render we use useState

// Syntax for useRef :
// const ref = useRef(0); --> useRef(0) it is initial value and const ref --> it is an object that has .current property in it so nothing will be re-rendered.]

// import {useRef,useState} from 'react'

// const Render = () => {
//     const [myData, setMyData] = useState("");

//     const inputElem = useRef("");

//     const changeStyle=()=>{
//         inputElem.current.style.backgroundColor = "#82E0AA";
//         inputElem.current.focus();
//     }

//   return (
//     <>
//     {/* <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)} />
//     <p>The number of times rendered : {count.current}</p> */}

//     <input type="text" ref={inputElem} value={myData} onChange={(e)=>setMyData(e.target.value)} />
// <br />
// <button onClick={changeStyle}>Submit</button>
//     </>
//   )
// }

import React, { useState, useRef } from "react";

const Render = () => {
  const [MyNum, setMyNum] = useState(0);
  const inputOne = useRef<HTMLInputElement>();
  const inputTwo = useRef<HTMLInputElement>();
  const getNumBox = () => {
    console.log(inputOne.current);
    inputOne.current?.style.setProperty('background-color', 'lime');
  };
  const getTextBox = () => {
    console.log(inputTwo.current);
    inputOne.current?.style.setProperty('background-color', 'lime');
  };
  return (
    <>
      <h2>This is an example of useRef hook</h2>
      <input
        type="number"
        value={MyNum}
        onChange={(e) => setMyNum(e.target.value)}
        ref={inputOne}
      />
      <input
        type="text"
        value={MyNum}
        onChange={(e) => setMyNum(e.target.value)}
        ref={inputTwo}
      />
      <h3>The value is : {MyNum}</h3>
      <button onClick={getNumBox}>Rupees</button>
      <button onClick={getTextBox}>Dollars</button>
    </>
  );
};

export default Render;
