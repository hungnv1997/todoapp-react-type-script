import React, { useState, forwardRef } from "react";

type Props = {};

function Input({}: Props, ref: any) {
  const [newTodo, setNewTodo] = useState("");
  console.log("re-render");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return <input value={newTodo} onChange={handleChange} ref={ref} />;
}

export default forwardRef(Input);
