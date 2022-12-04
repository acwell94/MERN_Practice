import React from "react";
import Card from "../../../shared/components/UIElements/Card";
import UserItem from "../userItem/UserItem";
import * as S from "./UserListStyles";

const UserList = (props: any) => {
  if (props.items.length === 0) {
    return (
      <S.Center>
        <Card>
          <h2>No Users, found.</h2>
        </Card>
      </S.Center>
    );
  }

  return (
    <S.UserList>
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
    </S.UserList>
  );
};

export default UserList;
