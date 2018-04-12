import React from 'react';
import FilterMode from '../components/FilterMode';
import { connect } from 'react-redux';
import * as todoAction from '../actions';

export default connect((state, ownProps) => {
  active: ownProps.filterMode === state.filterMode
}
)((dispatch, ownProps) => {
  onClick: () => dispatch(todoAction.filter(ownProps.filterMode))
})
  (FilterMode)