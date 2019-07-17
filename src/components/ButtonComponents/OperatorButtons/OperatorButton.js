import React from "react";

const OperatorButton = (props) => {
  console.log(props)
  return (
    <button className="button" id="operators">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <p>{props.operator}</p>
    </button>
  );
};

export default OperatorButton;