import React from "react";
import { Todo } from "../../utils/types";

type Props = {
  todoItem: Todo;
};

function TodoItem({ todoItem }: Props) {
  return <div>{todoItem?.content}</div>;
}

export default TodoItem;
