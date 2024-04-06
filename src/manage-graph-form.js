import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useCharContext } from "./context/ChartContext";
import LineChart from "./components/Chart/LineChart";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMinusCircle } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { useNavigate } from "react-router-dom";
Chart.register(
  ArcElement,
  LineElement,
  PieController,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  PointElement,
  BarElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale
);
const ManageGraphForm = () => {
  const [inputs, setInputs] = useState([{ price: "", date: "" }]);
  const [error, setError] = useState("");
  const [productone, setProductOne] = useState("");
  const [producttwo, setProductTwo] = useState("");
  const { setCharts, charts } = useCharContext();
  const navigate = useNavigate();
  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };
  const handleDeleteInput = () => {
    if (inputs.length > 1) {
      setInputs(inputs.slice(0, -1));
    }
  };
  const inputPriceHandler = (e, index) => {
    const fields = [...inputs];
    fields[index] = { ...fields[index], [e.target.name]: e.target.value };
    setInputs(fields);
  };

  const addChanges = () => {
    if (inputs.every((item) => item.date)) {
      const id = uuidv4();
      setCharts((prev) => [
        ...prev,
        { title: productone, des: producttwo, stats: inputs, id },
      ]);
      localStorage.setItem(
        "charts",
        JSON.stringify([
          ...charts,
          { title: productone, des: producttwo, stats: inputs, id },
        ])
      );
      setProductOne("");
      setProductTwo("");
      setInputs([{ price: "", date: "" }]);
      setError("");
    } else {
      setError("Please select date for all inputs.");
      return;
    }
  };
  const deleteItem = (id) => {
    setCharts(charts?.filter((item) => item?.id !== id));
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("charts");
    navigate("/login", { replace: true });
    setCharts([])
  };
  return (
    <div className="container py-3">
      <div className="d-flex justify-content-end my-3">
        <button className="add_btnn" onClick={logout}>
          LogOut
        </button>
      </div>

      <div className="login_card_wrapper">
        <div className="row">
          <div className="col-md-8">Merge Product Price Trends</div>
          <div className="col-md-4 text-end">
            <button className="add_btnn" onClick={addChanges}>
              Add Changes
            </button>
          </div>
        </div>
        <div className="border-bottom my-3"></div>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="w-100 merge_graph_input"
              onChange={(e) => setProductOne(e.target.value)}
              value={productone}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="w-100 merge_graph_input"
              onChange={(e) => setProductTwo(e.target.value)}
              value={producttwo}
            />
          </div>
        </div>
        <div className="border-bottom my-4"></div>
        {inputs?.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="number"
                      className=" merge_graph_input w-100"
                      value={item?.price}
                      onChange={(e) => inputPriceHandler(e, index)}
                      name="price"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="date"
                      className=" merge_graph_input w-100"
                      value={item?.date}
                      onChange={(e) => inputPriceHandler(e, index)}
                      name="date"
                    />
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                {!index && (
                  <button onClick={handleAddInput} className="add_btn">
                    +
                  </button>
                )}

                {!!index && (
                  <button onClick={handleDeleteInput} className="delete_btn">
                    -
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {error && <p className="text-danger">{error}</p>}
      </div>
      <div>
        <div className="row my-3 ">
          {charts.map((item, ind) => {
            return (
              <div className="col-md-6" key={ind}>
                <div className="cards_color ">
                  <div className="d-flex justify-content-end gap-2 mb-4">
                    <div>
                      <Link to={`/graph-detail-page/${item.id}`}>
                        <button className="add_btnnn">
                          <GoEye className="me-2" />
                          view
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button className="delete_btnnn">
                        <MdDeleteOutline
                          size={20}
                          onClick={() => deleteItem(item?.id)}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="text-blue">{item?.title}</h5>
                      <p className="text-gray">
                        {item?.title}|USD:MT|{item?.des}
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
                    title={item?.title}
                    des={item?.des}
                    yearlyData={item?.stats}
                  />
                  <p className=" text-center text-blue font-2">
                    --{item?.title}|USD:MT|{item?.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageGraphForm;
