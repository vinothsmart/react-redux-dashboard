import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleShowText":
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

// initial state
const intialValues = {
  count: 0,
  showText: true,
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(
    reducer, // reducer function
    intialValues // initial state
  );
  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "toggleShowText" });
  };
  return (
    <div>
      <center>
        <h1>{state.count}</h1>
        <button onClick={handleClick}>Click Here</button>
        {state.showText && <p>This is a text</p>}
      </center>
    </div>
  );
};

export default ReducerHook;
