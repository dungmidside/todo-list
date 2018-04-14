import React from "react";
import { connect } from "react-redux";
import { ListFilterMode, filter } from "../actions";

const Filter = ({ changebutton }) => {
  return (
    <div>
      <button onClick={() => changebutton(ListFilterMode.ALL)}>ALL</button>
      <button onClick={() => changebutton(ListFilterMode.CHECK)}>CHECK</button>
      <button onClick={() => changebutton(ListFilterMode.UNCHECK)}>UNCHECK</button>
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
