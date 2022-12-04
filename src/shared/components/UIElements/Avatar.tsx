import React from "react";
import * as S from "./AvatarStyle";

const Avatar = (props: any) => {
  return (
    <S.Avatar className={`avatar ${props.className}`} style={props.style}>
      <S.AvatarImg
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </S.Avatar>
  );
};

export default Avatar;
