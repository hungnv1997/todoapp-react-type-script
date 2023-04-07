import React, { MouseEventHandler } from "react";

type Props = {
  name: string;
  isActive?: boolean;
  handleClickBtn?: MouseEventHandler;
};

function Button({ name, isActive, handleClickBtn }: Props) {
  return (
    <button
      className={`btn ${isActive ? "is-active" : "is-disable"}`}
      onClick={handleClickBtn}
    >
      {name}
    </button>
  );
}

export default Button;
