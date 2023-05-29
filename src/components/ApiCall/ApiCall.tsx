import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../types/user.types";
import User from "../User/User";

interface IProps {}
const ApiCall: FC<IProps> = (props) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <div>
        {users.map((user, index) => {
          return <User key={index} data={user} />;
        })}
      </div>
    </div>
  );
};

export default ApiCall;
