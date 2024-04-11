/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/imarc_group_logo.jpg"
import { MdOutlineDashboard } from "react-icons/md";
import { TfiUser } from "react-icons/tfi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbUserSearch } from "react-icons/tb";
import { PiTarget } from "react-icons/pi";
import { LuPieChart } from "react-icons/lu";
import {
  FaUser,
  FaUserCheck,
  FaUserTie,
  FaHandsHelping,
  FaSchool,
  FaList,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
const Sidebar = ({ toggle }) => {
  return (
    <Fragment>
      <nav className={`sidebar sidebar-sticky ${toggle}`}>
        <div className="sidebar-content  js-simplebar">
            <div className="d-flex justify-content-center">
            <Link className="sidebar-brand" to="/">
            <img src={img1} alt="Imarc" className="logo_wrapper" />
          </Link>
            </div>
         
          <ul className="sidebar-nav">
            <li className="sidebar-item sidebar-item_1">
              <Link
                to="/"
                className={`font-weight-bold sidebar-link  `}
              >
                <span className="logoicon">
                  <MdOutlineDashboard size={20} />
                </span>
                Dashboard
              </Link>
            </li>

            <li className="sidebar-item sidebar-item_1">
                <Link
                  to="/add-graph-detail"
                  className={`font-weight-bold sidebar-link  `}
                >
                  <span>
                    <HiOutlineUserCircle size={15} />
                  </span>
                  <span className="">Add Chart Data </span>
                </Link>
              </li>

           

            

          
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
