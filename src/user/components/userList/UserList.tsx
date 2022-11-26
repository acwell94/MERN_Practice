import React from "react";
import UserItem from "../userItem/UserItem";
import * as S from "./UserListStyles";

const UserList = (props: any) => {
  console.log(props);
  // const { test } = item;
  // if (items.length === 0) {
  //   return (
  //     <S.Center>
  //       <h2>No Users, found.</h2>
  //     </S.Center>
  //   );
  // }

  return (
    <>
      {props.items.map((el: any) => (
        <div key={el.id}>
          <UserItem
            key={el.id}
            id={el.id}
            image={el.image}
            name={el.name}
            placeCount={el.places}
          />
        </div>
      ))}
      {/* <div>{items.id}</div> */}
    </>
  );
};

export default UserList;
