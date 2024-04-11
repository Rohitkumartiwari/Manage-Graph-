import React, { useState } from "react";

import {
  FaUser,
  FaUserCheck,
  FaPhoneAlt,
  FaSadCry,
  FaMailBulk,
} from "react-icons/fa";
import { MdDateRange, MdCallEnd } from "react-icons/md";
import { useCharContext } from "./context/ChartContext";
import PolarChart from "./components/Chart/PolarChart";
import BarChart from "./components/Chart/BarChart";
import LineChart from "./components/Chart/LineChart";
import DoughnutChart from "./components/Chart/Doughnut";
const chartComps = {
  1: <BarChart />,
  2:<DoughnutChart/>,
  3:<PolarChart/>,
  4:<LineChart/>
};
const DashbaordCharts = () => {
  const { setCharts, charts } = useCharContext();
  const [selectChart, setSelectChart] = useState(1);

  return (
    <div className="py-4">
      <div className="row mx-0">
        {/* <div className="col-md-3">
          <div className="card flex-fill common-card round-border box-darked">
            <div className="card-body py-4">
              <div className="row align-items-center ">
                <div className="col-4">
                  <div className="square-box blue">
                    <FaUser color="white" size={18} />
                  </div>
                </div>

                <div className="col-8">
                  <h3 className="mb-0 font-commom">1</h3>
                  <div className="mb-0 font-commom-2">Today Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card flex-fill common-card round-border box-green">
            <div className="card-body py-4">
              <a href="/tata-play-list">
                <div className="row align-items-center">
                  <div className="col-4">
                    <div className="square-box skyblue">
                      <FaUserCheck color="white" size={18} />
                    </div>
                  </div>
                  <div className="col-8">
                    <h3 className="mb-0 font-commom">1</h3>
                    <div className="mb-0 font-commom-2">Total Lead</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card flex-fill common-card round-border box-darkblue">
            <div className="card-body py-4">
              <a href={`/tata-play-list?dispositiontype=Connected`}>
                <div className="row align-items-center">
                  <div className="col-4">
                    <div className="square-box orange">
                      <FaPhoneAlt color="white" size={18} />
                    </div>
                  </div>
                  <div className="col-8">
                    <h3 className="mb-0 font-commom">1</h3>
                    <div className="mb-0 font-commom-2">Total Connected</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card flex-fill common-card round-border box-orange">
            <div className="card-body py-4">
              <a href={`/tata-play-list?dispositiontype=Not_Connected`}>
                <div className="row align-items-center">
                  <div className="col-4">
                    <div className="square-box pink">
                      <MdCallEnd color="white" size={18} />
                    </div>
                  </div>
                  <div className="col-8">
                    <h3 className="mb-0 font-commom">1</h3>
                    <div className="mb-0 font-commom-2">
                      Total Not Connected
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
        <div className="col-md-3 my-2">
        <select
          name=""
          onChange={(e) => setSelectChart(e.target.value)}
          value={selectChart}
          id=""
          className="form-select cursor-pointer"
        >
          <option value="1">Bar Chart</option>
          <option value="2">Doughnut Chart</option>
          <option value="3">Polar Chart</option>
          <option value="4">Line Chart</option>
        </select>
        </div>
       
      </div>
      <div className="row mx-0">
        {charts.map((item) => {
          return (
            <div className="col-md-6">
              <div className="card flex-fill common-card round-border ">
                <div className="card-body py-4">
                  {/* <DoughnutChart
                  title={item.title}
                  des={item?.des}
                  yearlyData={item?.stats}
                /> */}
                  {React.cloneElement(chartComps[selectChart], {
                    title: item.title,
                    des: item?.des,
                    yearlyData: item?.stats,
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashbaordCharts;
