import React from "react";

function Button({ next, prev }) {
  return (
    <div className="buttons">
      <div className="buttonWrapper">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
export default Button;
