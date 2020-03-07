import React from "react";
import VisiableTodoList from "./VisiableTodoList";
import Filter from "../components/Filter";
import Input from './Input';

const Todo = () => {
  return (
    <div>
      <Input />
      <Filter />
      <VisiableTodoList />
    </div>
  );
};

export default Todo;
