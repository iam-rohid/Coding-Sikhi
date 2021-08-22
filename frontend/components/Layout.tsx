import React from "react";
import NavBar from "./NavBar";

const Layout = (props: { children: JSX.Element }) => {
  const { children } = props;
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
