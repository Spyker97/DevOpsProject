import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Accordion, Button } from "react-bootstrap";
import Scrollbar from "smooth-scrollbar";
import { connect } from "react-redux";
import { getDarkMode } from "../../../../store/mode";

//img
import logo from "../../../../../src/assets/images/logo.png";

function mapStateToProps(state) {
  return {
    darkMode: getDarkMode(state),
  };
}

const minisidbar = () => {
  document.body.classList.toggle("sidebar-main");
};

const SidebarStyle = (props) => {
  //location
  let location = useLocation();

  const urlParams = new URLSearchParams(window.location.search);
  const sidebar = urlParams.get("sidebar");
  var variant = "";
  if (sidebar !== null) {
    variant = "";
    switch (sidebar) {
      case "0":
        variant = "sidebar-dark";
        break;
      case "1":
        variant = "sidebar-light";
        break;
      default:
        variant = "";
        break;
    }
  }

  // Collapse state
  const [activeMenu, setActiveMenu] = useState(false);
  const [activesubMenu, setSubmenu] = useState(false);
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  });
  return (
    <>
      <div className={`iq-sidebar sidebar-default ${variant}`}>
        <div className="iq-sidebar-logo d-flex align-items-end justify-content-between">
          <Link to="/" className="header-logo">
            <img
              src={logo}
              className={`img-fluid rounded-normal light-logo ${
                props.darkMode ? "d-none" : ""
              }`}
              alt="logo"
            />
            <span>Datum</span>
          </Link>
          <div className="side-menu-bt-sidebar-1">
            <svg
              onClick={minisidbar}
              xmlns="http://www.w3.org/2000/svg"
              className="text-light wrapper-menu"
              width="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="data-scrollbar" data-scroll="1" id="my-scrollbar">
          <nav className="iq-sidebar-menu">
            <Accordion
              as="ul"
              id="iq-sidebar-toggle"
              className="side-menu"
              onSelect={(e) => setActiveMenu(e)}
            >
              <li
                className={`${
                  location.pathname === "/" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Dashboard</span>
                  <p className="mb-0 w-10 badge badge-pill badge-primary">6</p>
                </Link>
              </li>
              <li className="px-3 pt-3 pb-2 ">
                <span className="text-uppercase small font-weight-bold">
                  Application
                </span>
              </li>
             
              <li
                className={`${
                  location.pathname === "/commande" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/Commande" className="svg-icon ">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Commande</span>
                </Link>
              </li>



              <li
                className={`${
                  location.pathname === "/article" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/article" className="svg-icon ">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Article</span>
                </Link>
              </li>

              
                        <li className={`${location.pathname === '/Facture' ? 'active' :'' }  sidebar-layout`}>
                            <Link to="/Facture" className="svg-icon ">
                                <i className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </i>
                                <span className="ml-2">Facture</span>
                            </Link>
                        </li>
              <li
                className={`${
                  location.pathname === "/order" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/order" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </i>


                  <span className="ml-2">Order</span>
                </Link>
              </li>



              <li
                className={`${
                  location.pathname === "/fournisseur" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/fournisseur" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Fournisseur</span>
                </Link>
              </li>



              <li
                className={`${
                  location.pathname === "/product" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/product" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Product</span>
                </Link>
              </li>

              
              <li
                className={`${
                  location.pathname === "/calendar" ? "active" : ""
                }  sidebar-layout`}
              >
                <Link to="/calendar" className="svg-icon">
                  <i className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </i>
                  <span className="ml-2">Calendar</span>
                  <p className="mb-0 px-2 badge badge-pill badge-success">
                    New
                  </p>
                </Link>
              </li>
            </Accordion>
          </nav>
          <div className="pt-5 pb-5"></div>
        </div>
      </div>
    </>
  );
};

// export default SidebarStyle;
export default connect(mapStateToProps)(SidebarStyle);
