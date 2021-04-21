import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

function Table({ data }) {
  return (
    <div className="table-responsive">
      <div className="row padding">
        <div className="col-12 tby">
          <table className="table">
            <TableHeader />
            <TableBody data={data} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
