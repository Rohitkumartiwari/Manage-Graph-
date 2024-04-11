import React from "react";
import ForgotPassword from "../forgot-password";
import Login from "../login";
import ManageGraphForm from "../manage-graph-form";
import GraphDetailPage from "../graphDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard";
import DashbaordCharts from "../dashboardCharts";
const Routee = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route element={<PrivateRoute />}>

          <Route element={<Dashboard />}>
            <Route index path="/" element={<DashbaordCharts/>} />
            <Route path="/add-graph-detail" element={<ManageGraphForm />} />
            <Route
              path="/graph-detail-page/:id"
              exact
              element={<GraphDetailPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routee;
