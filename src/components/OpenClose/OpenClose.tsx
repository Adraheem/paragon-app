import React, { FC, useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

interface IProps {}
const OpenClose: FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);

  const statusText = useMemo(() => {
    if (open) {
      return "Opened";
    } else {
      return "Closed";
    }
  }, [open]);

  useEffect(() => {
    console.log("Open is", open);
  }, [open]);

  useEffect(() => {
    console.log("Initial rendering");
  }, [open]);

  return (
    <div className={styles.container}>
      <h1 className={`${styles.status} ${open ? styles.open : styles.close}`}>
        {statusText}
      </h1>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Close" : "Open"}
      </button>
    </div>
  );
};

export default OpenClose;
