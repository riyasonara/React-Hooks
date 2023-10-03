import React, { useReducer } from "react";

//Creating an object
const initialState = { text: "", isUpperCase: false };

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "setText":
      return { ...state, text: action.text };

    case "toogleUpperCase":
      return { ...state, text: state.text.toUpperCase() };

    case "lowerCase":
      return { ...state, text: state.text.toLowerCase() };

    default: {
      return state;
    }
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const handleToggleUpperCase = () => {
    dispatch({ type: "toogleUpperCase" });
  };

  const handleToggleLowerCase = () => {
    dispatch({ type: "lowerCase" });
  };

  return (
    <>
      <div className="container mt-5 d-flex">
        <input
          type="text"
          value={state.text}
          onChange={(e) => dispatch({ type: "setText", text: e.target.value })}
        />
        <button
          className="btn btn-outline-primary mx-3 btn-sm"
          onClick={handleToggleUpperCase}
        >
          TOGGLE UPPERCASE
        </button>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={handleToggleLowerCase}
        >
          Toggle lowerCase
        </button>
      </div>
      <div className="container my-2">
        <p className="mx-1 fs-2">{state.text}</p>
      </div>
    </>
  );
};

export default Reducer;
