// The React useCallback Hook returns a memoized callback function.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback Hook only runs when one of its dependencies update.

import { useState, useCallback } from "react";

const List = ({ items }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <ul className="container my-3">
      {items.map((item) => (
        <li key={item.id} className="my-3">
          {item} - {counter}
          <button className="mx-3 d-flex btn btn-outline-success" onClick={incrementCounter}>Increment</button>
        </li>
      ))}
    </ul>
  );
};

export default List;