// The React useState Hook allows us to track state in a function component.
// useState returns a pair : the current state value and a function that lets you update it.

import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    count <= 0 ? 0 : setCount(count - 1);
  };
  return (
    <>
      <div>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#000",
            margin:"0"
          }}
        >
          This is Counter App using useState Hook
        </h2>
        <div className={styles.Counterdiv}>
          <button
            type="button"
            className={styles.glow_on_hover}
            onClick={handleDec}
          >
            Decrement -{" "}
          </button>
          <div
            style={{
              color: "white",
              border: "2px solid #2e2b4f",
              padding: "10px",
            }}
          >
            Count is : {count}
          </div>
          <button
            type="button"
            className={styles.glow_on_hover}
            onClick={handleInc}
          >
            Increment +{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
