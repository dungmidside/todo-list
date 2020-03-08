import React from "react";
import { FilterMode } from "../actions";

export default ({ onFilter }) => {
  return (
    <div className="filter">
      <div className="row justify-content-md-center">
        <button className="btn btn-outline-primary" onClick={() => onFilter(FilterMode.ALL)} >
          ALL
        </button>
        <button className="btn btn-outline-primary" onClick={() => onFilter(FilterMode.CHECK)}>
          CHECK
        </button>
        <button className="btn btn-outline-primary" onClick={() => onFilter(FilterMode.UNCHECK)}>
          UNCHECK
        </button>
      </div>
    </div>
  );
};