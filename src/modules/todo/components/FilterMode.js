import React from 'react';

const FilterMode = ({ active, onClick, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={active}
      >
        {children}
      </button>
    </div>
  )
}

export default FilterMode;

