import React from "react";
interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}
type Props = {
  todoItem: Todo;
};

function TodoItem({ todoItem }: Props) {
  return <div>{todoItem?.content}</div>;
}

export default TodoItem;
