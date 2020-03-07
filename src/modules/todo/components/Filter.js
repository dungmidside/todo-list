import React from "react";
import { connect } from "react-redux";
import { ListFilterMode, filter } from "../actions";

const Filter = ({ changeMode }) => {
  return (
    <div className="filter">
      <div className="row justify-content-md-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => changeMode(ListFilterMode.ALL)}
        >
          ALL
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeMode(ListFilterMode.CHECK)}
        >
          CHECK
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => changeMode(ListFilterMode.UNCHECK)}
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
    changeMode: button => dispatch(filter(button))
  })
)(Filter);
