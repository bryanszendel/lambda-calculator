import React, { useState } from "react";

const Display = (props) => {
  const [currentDisplay, setDisplay] = useState(0);
  return <div className="display-container">
            <p>{currentDisplay}</p>
         </div>;
};

export default Display;