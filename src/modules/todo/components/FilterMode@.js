import React from 'react';
import { connect } from 'react-redux';

const FilterMode = ({ active, onClick, filterMode }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={active}
      >
        {filterMode}
      </button>
    </div>
  )
}

// export default connect(state => {
//   active: ownProps.
// } )(FilterMode)

