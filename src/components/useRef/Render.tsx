// We use useRef when we are dealing with the values that are not for render.
// For the things that we have to render we use useState

// Syntax for useRef :
// const ref = useRef(0); --> useRef(0) it is initial value and const ref --> it is an object that has .current property in it so nothing will be re-rendered.]

// To fix the error, you should pass null as an initial value to the useRef hook. You don't need to add | undefined:

// React.useRef<HTMLInputElement>(null)
// The error message says that the useRef function expects either an HTMLInputElement or null, but if you pass in nothing, it evaluates to undefined and that's why get the error message:

import { useState, useRef } from "react";

const Render = () => {
  const [MyNum1, setMyNum1] = useState<number | string>(0);
  const [MyNum2, setMyNum2] = useState<string>("");
  const inputOne = useRef<HTMLInputElement>(null);
  const inputTwo = useRef<HTMLInputElement>(null);
  const getNumBox = () => {
    console.log(inputOne.current);
    inputOne.current?.style.setProperty("background-color", "#adb6f7");
  };
  const getTextBox = () => {
    console.log(inputTwo.current);
    inputTwo.current?.style.setProperty("background-color", "#f7adc7");
  };
  return (
    <>
      <h2>This is an example of useRef hook</h2>
      <div className="container">
        <input
          type="number"
          value={MyNum1}
          onChange={(e) => setMyNum1(e.target.value)}
          ref={inputOne}
        />
        <input
          type="text"
          value={MyNum2}
          onChange={(e) => setMyNum2(e.target.value)}
          ref={inputTwo}
        />
        <h3>The value is : {MyNum1}</h3>
        <h3>The value is : {MyNum2}</h3>
        <button onClick={getNumBox}>Number or Text</button>
        <button onClick={getTextBox}>Text</button>
      </div>
    </>
  );
};

export default Render;
