import styled from "styled-components";

export const UserItem = styled.li`
  margin: 1rem;
  /* width: calc(45% - 2rem); */

  min-width: 17.5rem;
  .user-item_Link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    /* padding: 1rem; */
    color: white;
    background: #292929;
  }
  .user-item_Link:hover,
  .user-item_Link:active {
    background: #ffd900;
  }
`;

export const UserItemContent = styled.div`
  padding: 0;
`;

export const UserItemImg = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

export const UserItemInfo = styled.div`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;
  .user-item:hover h2,
  .user-item:active h2,
  .user-item:hover h3,
  .user-item:active h3 {
    color: #292929;
  }

  .user-item__info h3 {
    margin: 0;
  }
`;
