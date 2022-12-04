import React from "react";
import * as S from "./CardStyles";

const Card = (props: any) => {
  console.log(props);
  return (
    <S.Card className={`card ${props.className}`} style={props.style}>
      {props.children}
    </S.Card>
  );
};

export default Card;
