import React from "react";

function Input(props) {
  return (
    <div className="row  justify-content-center">
      <div className="col-md-6 padding">
        <input
          type="text"
          className="form-control search"
          placeholder="Search..."
          onChange={props.onFilterChange}
        ></input>
      </div>
    </div>
  );
}

export default Input;
