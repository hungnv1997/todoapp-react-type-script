import React from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}
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
