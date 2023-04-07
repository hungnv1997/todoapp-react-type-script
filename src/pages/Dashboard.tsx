import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { addTodo } from "../store/reducers/todoSlices";
type Props = {};

function Dashboard({}: Props) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>();
  console.log(ref);
  const handleAddTodo = () => {
    dispatch(addTodo(ref!.current!.value));
    ref!.current!.value = "";
  };
  return (
    <div>
      <Input ref={ref} />
      <Button name="Add task" isActive handleClickBtn={handleAddTodo} />
    </div>
  );
}

export default Dashboard;
