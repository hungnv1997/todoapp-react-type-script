import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { addTodo } from "../store/reducers/todoSlices";
import { v4 as uuidv4 } from "uuid";
import ListItem from "../components/todo/ListItem";
type Props = {};

function Dashboard({}: Props) {
  const dispatch = useDispatch();
  const todoReducer = useSelector((state: any) => state.todoReducer);
  let { todos } = todoReducer;
  console.log(todos);

  const ref = useRef<HTMLInputElement>();
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        content: ref!.current!.value,
        isCompleted: false,
      })
    );
    ref!.current!.value = "";
  };
  return (
    <div className="c-app">
      <h1>Tasks</h1>
      <div className="c-app__input">
        <Input ref={ref} />
        <Button name="Add task" isActive handleClickBtn={handleAddTodo} />
      </div>
      <ListItem todosList={todos} />
    </div>
  );
}

export default Dashboard;
