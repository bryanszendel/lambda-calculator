import React from "react";

const SpecialButton = (props) => {
  console.log(props)
  return (
    <button className="button" id="specials">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <p>{props.type}</p>
    </button>
  );
};

export default SpecialButton;