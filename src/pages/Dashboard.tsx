import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
type Props = {};

function Dashboard({}: Props) {
  return (
    <div>
      <Input />
      <Button name="Add task" isActive />
    </div>
  );
}

export default Dashboard;
