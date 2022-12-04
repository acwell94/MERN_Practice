import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../shared/components/UIElements/Avatar";
import Card from "../../../shared/components/UIElements/Card";

import * as S from "./UserItemStyles";
const UserItem = (props: any) => {
  return (
    <S.UserItem className="user-item">
      {/* <S.UserItemContent className="user-item__content"> */}
      <Card className="user-item__content">
        <Link className="user-item_Link" to={`/${props.id}/places`}>
          <S.UserItemImg className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </S.UserItemImg>
          <S.UserItemInfo className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </S.UserItemInfo>
        </Link>
      </Card>
      {/* </S.UserItemContent> */}
    </S.UserItem>
  );
};

export default UserItem;
