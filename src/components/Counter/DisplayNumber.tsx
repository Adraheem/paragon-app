import React, { FC } from "react";

interface IProps {
  count: number;
}
const DisplayNumber: FC<IProps> = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <p>It is {props.count % 2 === 0 ? "even" : "odd"}</p>
    </div>
  );
};

export default DisplayNumber;
