import * as React from "react";
import { useState } from "react";
interface Props {
  children: React.ReactNode;
}
const AuthLayout: React.FunctionComponent<Props> = (props: Props) => {
  const [first, setfirst] = useState("aaaaa");
  return (
    <>
      <div className="c-wrapper">{props.children}</div>
    </>
  );
};
export default AuthLayout;
