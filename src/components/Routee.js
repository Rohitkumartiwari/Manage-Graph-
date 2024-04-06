import React from 'react'
import ForgotPassword from "../forgot-password";
import Login from '../login';
import ManageGraphForm from '../manage-graph-form';
import GraphDetailPage from '../graphDetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
const Routee = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        < Route element={<PrivateRoute/>}>

        <Route path="/" element={
        <ManageGraphForm/>}/>
        <Route path="/graph-detail-page/:id" exact element={<GraphDetailPage/>} />
        </Route >
      </Routes>
    </BrowserRouter>
 
  )
}

export default Routee