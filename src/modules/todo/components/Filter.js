import React from 'react';
import ContainerFilterMode from '../container/ContainerFilterMode';
import { ListFilterMode } from '../actions';

const Filter = () => {
  return (
    <div>
      <ContainerFilterMode filterMode={ListFilterMode.ALL}>
        ALL
      </ContainerFilterMode>
      <ContainerFilterMode filterMode={ListFilterMode.CHECK}>
        CHECK
      </ContainerFilterMode>
      <ContainerFilterMode filterMode={ListFilterMode.UNCHECK}>
        UNCHECK
      </ContainerFilterMode>
    </div>
  )
}

export default Filter;