import React from "react";

function TableHeader() {
  return (
    <>
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Value</th>
          <th scope="col">Total Volume</th>
          <th scope="col">Percentage</th>
          <th scope="col">Market Cap</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
