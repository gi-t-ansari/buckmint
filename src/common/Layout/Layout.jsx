import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="flex w-[100vw]">
        <Sidebar />
        <div className="lg:w-[85%] md:w-[90%] w-[100%]">
          <Header />
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
