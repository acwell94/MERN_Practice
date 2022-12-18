import React from "react";

import { createPortal } from "react-dom";
import "./SideDrawerCss.css";
const SideDrawer = (props: any) => {
  const content = (
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>
  );
  const portalId =
    typeof window !== "undefined" && document.getElementById("drawer-hook");
  return portalId && props.children ? createPortal(content, portalId) : null;
};

export default SideDrawer;
