import React from "react";
import { Todo } from "../../utils/types";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";

type Props = {
  todoItem: Todo;
};

function TodoItem({ todoItem }: Props) {
  const handleDelete = () => {};
  return (
    <div className="c-box__border d-flex">
      <Checkbox />
      <div>{todoItem?.content}</div>
      <Button name="Delete" isActive handleClickBtn={handleDelete} />
    </div>
  );
}

export default TodoItem;
