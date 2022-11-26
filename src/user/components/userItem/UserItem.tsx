import React from "react";
import * as S from "./UserItemStyles";
const UserItem = (props: any) => {
  console.log(props, "1");
  return <div>{props.id}</div>;
};

export default UserItem;
