import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../utils/types";

type Props = {
  todosList: Array<Todo>;
};

function ListItem({ todosList }: Props) {
  return (
    <div>
      {todosList.map((todos) => (
        <TodoItem key={todos.id} todoItem={todos} />
      ))}
    </div>
  );
}

export default ListItem;
