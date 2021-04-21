import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        className="form-control search"
        placeholder="Search..."
        onChange={props.onFilterChange}
      ></input>
    </div>
  );
}

export default Input;
