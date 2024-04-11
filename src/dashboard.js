import React from "react";
import Sidebar from "./layout/Sidebar/index";
import { Outlet } from "react-router-dom";
const dashboard = () => {
  return (
    <div className="container-fluid">

    <div className="row">
    <div className="col-md-3">
        <Sidebar/>
    </div>
    <div className="col-md-9">
        <Outlet/>
    </div>
</div>
    </div>
  );
};

export default dashboard;
