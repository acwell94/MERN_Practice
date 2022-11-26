import React from "react";
import UserList from "../components/userList/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "minyoung",

      places: 2,
    },
    {
      id: "u2",
      name: "minyoung2",

      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
