import React from "react";
import Input from "./Input";
import VisiableTodoList from "./VisiableTodoList";
import Filter from "../components/Filter";

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
