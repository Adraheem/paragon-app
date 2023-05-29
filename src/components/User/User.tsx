import React, { FC } from "react";
import { IUser } from "../../types/user.types";
import styles from "./styles.module.css";

interface IProps {
  data: IUser;
}
const User: FC<IProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/user-profile-pic.svg" alt=" " className={styles.userImg} />
      </div>
      <div>
        <h4>
          {data.name} <span>@{data.username}</span>
        </h4>
        <p>
          {data.address.suite}, {data.address.street}, {data.address.city},{" "}
          {data.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default User;
