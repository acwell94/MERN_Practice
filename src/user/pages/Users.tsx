import React from "react";
import UserList from "../components/userList/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "minyoung",
      image:
        "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
      places: 2,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
