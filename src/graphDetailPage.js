import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCharContext } from "./context/ChartContext";
import LineChart from "./components/Chart/LineChart";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import {
  MdDeleteOutline,
  MdSearch,
  MdOutlineSpeakerNotes,
  MdOutlineFilterAlt,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMinusCircle } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { MdOutlineHome } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
const GraphDetailPage = () => {
  const { setCharts, charts } = useCharContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const data = charts.find((item) => item?.id == id);
  const calculateTotalPrice = (data) => {
    let totalPrice = 0;
    data.stats.forEach((item) => {
      totalPrice += parseInt(item.price);
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice(data);
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("charts");
    navigate("/login", { replace: true });
    setCharts([])
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end my-3">
        <button className="add_btnn" onClick={logout}>
          LogOut
        </button>
      </div>
      <div className="border-bottom my-3"></div>
      <div className="row">
        <div className="col-md-9">
          <div className="cards_color p-3">
            <div className="d-flex justify-content-between gap-2 mb-4">
              <div className="d-flex gap-1">
                <div className="view-graph-header-card ">
                  <MdOutlineHome color="white" />
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  1 Y
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  2 Y
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  3 Y
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  ALL
                </div>
              </div>

              <div className="d-flex gap-1">
                <div className="view-graph-header-card1 cursor-pointer">
                  Update
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  <FaRegBell />
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  <FiPlus />
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  <MdSearch />
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  <MdOutlineSpeakerNotes />
                </div>
                <div className="view-graph-header-card1 cursor-pointer">
                  <MdOutlineFilterAlt />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-blue">{data?.title}</h5>
                <p className="text-gray">
                  {data?.title}|USD/MT|{data?.des}
                </p>
              </div>
              <div className="col-md-6 text-end">
                <MdOutlineAddCircleOutline
                  size={20}
                  color="text-gray"
                  className="me-2 cursor-pointer"
                />
                <FiMinusCircle
                  size={20}
                  color="text-gray"
                  className="me-2 cursor-pointer"
                />
                <GiHamburgerMenu
                  size={20}
                  color="text-gray"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <LineChart
              title={data.title}
              des={data?.des}
              yearlyData={data.stats}
            />
            <p className=" font-2 text-blue">
              --{data?.title}(USD/MT {data?.des})
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="cards_colorr p-3 text-center">
            <div className="price-card mb-4">
              <h5 className="text-blue text-center">{totalPrice}</h5>
              <p className="mb-0">USD/MT</p>
              <p className="mb-0">{data?.des}</p>
            </div>
            <div className="price-card">
              <p className="mb-0">%W-o-W Change</p>
              <h5>N/A</h5>

              <div className="border-bottom my-3"></div>
              <p className="mb-0">%M-o-M Change</p>
              <h5>
                13.61%{" "}
                <span className="font-3">
                  <small>1470.00</small>
                </span>
              </h5>
              <div className="border-bottom my-3"></div>
              <p className="mb-0">%Q-o-Q Change</p>
              <h5>
                27.38%{" "}
                <span className="font-3">
                  <small>1310.00</small>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphDetailPage;
