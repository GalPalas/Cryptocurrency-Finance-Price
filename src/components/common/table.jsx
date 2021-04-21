import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

function Table({ data }) {
  return (
    <table className="table">
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
}

export default Table;
