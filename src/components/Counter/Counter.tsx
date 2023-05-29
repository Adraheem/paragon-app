import React, { FC, useState } from "react";
import DisplayNumber from "./DisplayNumber";
import styles from "./styles.module.css";

interface IProps {}

const Counter: FC<IProps> = (props) => {
  const [count, setCount] = useState(8);

  return (
    <div className={styles.container}>
      <DisplayNumber count={count} />

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>{" "}
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
