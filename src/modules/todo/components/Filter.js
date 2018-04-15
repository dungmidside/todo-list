import React from "react";
import { connect } from "react-redux";
import { ListFilterMode, filter } from "../actions";

const Filter = ({ changebutton }) => {
  return (
    <div className="filter">
      <div className="row justify-content-md-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => changebutton(ListFilterMode.ALL)}
        >
          ALL
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changebutton(ListFilterMode.CHECK)}
        >
          CHECK
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changebutton(ListFilterMode.UNCHECK)}
        >
          UNCHECK
        </button>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    currentbutton: state.button
  }),
  dispatch => ({
    changebutton: button => dispatch(filter(button))
  })
)(Filter);
