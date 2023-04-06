import React from "react";

type Props = {
  name: string;
  isActive?: boolean;
};

function Button({ name, isActive }: Props) {
  return (
    <button className={`btn ${isActive ? "is-active" : "is-disable"}`}>
      {name}
    </button>
  );
}

export default Button;
