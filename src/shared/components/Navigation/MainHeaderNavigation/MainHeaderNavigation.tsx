import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../UIElements/Backdrop";
import "./MainHeaderNavigationCss.css";

const MainHeaderNavigation = (props: any) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {drawerIsOpen && (
        <SideDrawer onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainHeaderNavigation;
