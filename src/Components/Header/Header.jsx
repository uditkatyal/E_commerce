import "./Header.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import React from "react";
import LoginModal from "../LoginModal/LoginModal";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Header = ({ totalItems }) => {
  const [isHovering, setIsHovering] = useState(""); // state for the hovering effect

  const HandleMouseOver = (category) => {
    setIsHovering(category);
  };
  const [isHovering2, setIsHovering2] = useState(""); // state for the hovering effect

  const HandleMouseOver2 = (category1) => {
    setIsHovering2(category1);
  };
  // LOGIN PAGE
  const [login, setLogin] = useState(false); // state for the login effect
  const BUTTON_WRAPPER_STYLES = {};
  // const HandleMouseOut = () => {
  //   setIsHovering("");
  // };
  const [value, setValue] = useState("USD");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  // Handling Toggle for Side Header
  const [sideHeader, setSideHeader] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const handleSideHeader = () => {
    setSideHeader(!sideHeader);
    setOverlay(!overlay);
  };
  // Overlay for the side header

  // Handling sideBar for Bigger Screens
  // const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  // const handleWidthScreen = () => {
  //   setWidthScreen(window.innerWidth);
  //   if (widthScreen > 1024) {
  //     setSideHeader(false);
  //   }
  // };
  // useEffect(() => {
  //   handleWidthScreen();
  // }, []);

  return (
    <>
      {overlay && <div className="overlay-sideHeader"></div> && sideHeader && (
        <div className="side-header">
          {/* <div> */}
          <div className="side-header-heading-div">
            <div className="side-header-heading">Urban Fashion Trend</div>
          </div>
          <div id="myHeader">
            <ul className="sideHeader-list">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <hr />
              <li>
                <Link
                  onMouseEnter={() => HandleMouseOver("women")}
                  onMouseLeave={() => HandleMouseOver("")}
                  to="/women"
                >
                  WOMEN
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/accessories">ACCESSORIES</Link>
              </li>
              <hr />
              <li>
                <a href="./#trends">TRENDS</a>
              </li>
              <hr />
              <li>
                <a href="#newIn">NEW IN</a>
              </li>
              <hr />
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <hr />
            </ul>
          </div>
          <div className="sidebar-image">
            <img
              src="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div>
            <ul className="sideHeader-list side-header-sublist">
              <li>
                <Link to="/wishlist">
                  <i class="fa fa-regular fa-heart"></i> Wish Lists
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i class="fa fa-solid fa-cart-shopping"></i> Your Cart
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i class="fa fa-thin fa-phone"></i> Contact Us : (+11)
                  222-333-444
                </Link>
              </li>
              <li className="side-header-social-media">
                <Link to="/">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="/">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="close-side-bar">
            <button onClick={handleSideHeader}>
              <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>
        </div>
      )}
      <Wrapper>
        <Headline>Free International Shipping</Headline>
        <HeaderMain>
          <HeaderLeft>
            <li>
              {/* <i class="fa-solid fa-caret-down"></i> */}
              <DropdownButton
                alignRight
                title={value}
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
                variant="Secondary"
              >
                <Dropdown.Item eventKey="€ EURO">
                  <i class="fa-solid fa-euro-sign"></i> EURO
                </Dropdown.Item>
                <Dropdown.Item eventKey="£ POUND">
                  <i class="fa-solid fa-sterling-sign"></i> POUND
                </Dropdown.Item>
                <Dropdown.Item eventKey="$ USD">
                  <i class="fa-solid fa-dollar-sign"></i> USD
                </Dropdown.Item>
              </DropdownButton>
            </li>
            <li>
              <a href="#account">ACCOUNT</a>
            </li>
            <li>
              <a
                onClick={() => {
                  setLogin(true);
                }}
                style={BUTTON_WRAPPER_STYLES}
                href="#login"
              >
                LOGIN <i class="fa-solid fa-caret-down"></i>
              </a>
              <LoginModal
                open={login}
                onClose={() => {
                  setLogin(false);
                }}
              >
                {/* Fancy Modal */}
                {/* <button
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  Login
                </button> */}
              </LoginModal>
            </li>
            <li>
              <a href="/register">REGISTER</a>
            </li>
          </HeaderLeft>
          <HeaderCenter>
            <p>
              Mid-Season Sale Up to 70% OFF. Use Code: “SALE70”.
              <a href="#" title="All Collections">
                Shop Now
              </a>
            </p>
          </HeaderCenter>
          <HeaderRight>
            <li>
              <form action="#" className="search-form">
                <input
                  className="search-bar-container"
                  type="text"
                  placeholder="Search..."
                />
                <i className="fa fa-search fa-search-position"></i>
              </form>
            </li>
            <li>
              <a href="/wishlist">WISH LISTS</a>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Link to="/cart">
                <div>
                  <IconButton
                    // className={classes.button}
                    aria-label="Show Cart Item"
                    color="inherit"
                  >
                    <Badge badgeContent={totalItems} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                </div>
              </Link>

              <Dropdown>
                <Dropdown.Toggle
                  // className="drop-down-style"
                  id="dropdown-basic"
                  variant="Secondary"
                ></Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                  <span style={{ padding: 10 }}>Cart is Empty</span>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </HeaderRight>
        </HeaderMain>
      </Wrapper>

      <CompanyTitle>
        <div>
          <IconButton onClick={handleSideHeader} className="menu-bar-icon">
            <MenuOpenIcon />
          </IconButton>
          {/* <i class="fa-solid fa-bars-staggered"></i> */}
        </div>
        <Link to="/">URBAN FASHION TRENDS</Link>
        <div>
          <IconButton>
            <PersonIcon className="responsive-icons" />
          </IconButton>
          {/* <IconButton>
            <Badge
              badgeContent={2}
              color="secondary"
              className="responsive-icons"
            >
              <LocalMallIcon className="responsive-icons" />
            </Badge>
          </IconButton> */}
        </div>
      </CompanyTitle>

      <Categories id="myHeader">
        <ul className="header-list">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => HandleMouseOver("women")}
              onMouseLeave={() => HandleMouseOver("")}
              to="/women"
            >
              WOMEN
            </Link>
          </li>
          <li>
            <Link
              // onMouseEnter={() => HandleMouseOver("accessories")}
              // onMouseLeave={() => HandleMouseOver("")}
              to="/accessories"
            >
              ACCESSORIES
            </Link>
          </li>
          <li>
            <a
              // onMouseEnter={() => HandleMouseOver("trends")}
              // onMouseLeave={() => HandleMouseOver("")}
              href="./#trends"
            >
              TRENDS
            </a>
          </li>
          <li>
            <a
              // onMouseEnter={() => HandleMouseOver("NewIn")}
              // onMouseLeave={() => HandleMouseOver("")}
              href="#newIn"
            >
              NEW IN
            </a>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          {/* <li>
            <a href="#sale">FAQS</a>
          </li> */}

          {/* <li>
            <a href="/contact">CONTACT US</a>
          </li> */}
          {/* <li>
            <a href="#sale">BRANDS</a>
          </li> */}
        </ul>
      </Categories>
      {isHovering === "women" && (
        <div
          className="sub-category women-category"
          onMouseEnter={() => HandleMouseOver2("womenCategory")}
          onMouseLeave={() => HandleMouseOver2("")}
        >
          <div className="accessories-content">
            <div className="accessories-image">
              <img
                className="women-head-image"
                src="https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg"
                alt=""
              />
            </div>
            <div className="accessories-list">
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Tops & T-shirts
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Shirts & Blouses
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Dresses
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories mg-1">
                <li className="list-head-category list-head-category-main">
                  Shorts & Skirts
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories mg-1">
                <li className="list-head-category list-head-category-main">
                  Jumpsuits & Trousers
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories mg-1">
                <li className="list-head-category list-head-category-main">
                  Knitwear
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isHovering2 === "womenCategory" && (
        <div
          className="sub-category women-category"
          onMouseEnter={() => HandleMouseOver2("womenCategory")}
          onMouseLeave={() => HandleMouseOver2("")}
        >
          <div className="accessories-content">
            <div className="accessories-image">
              <img
                className="women-head-image"
                src="https://urban-fashion-trends.s3.eu-west-2.amazonaws.com/products/images/5wtcb7ehoe0zvrry3tm4.jpg"
                alt=""
              />
            </div>
            <div className="accessories-list">
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Tops & T-shirts
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Shirts & Blouses
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Dresses
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories mg-1">
                <li className="list-head-category list-head-category-main">
                  Shorts & Skirts
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories mg-1">
                <li className="list-head-category list-head-category-main">
                  Jumpsuits & Trousers
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
              <ul className="accessories-list-categories mg-1">
                <li className="list-head-category list-head-category-main">
                  Knitwear
                </li>
                <li>
                  <img
                    className="categories-sub-image"
                    src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isHovering === "accessories" && (
        <div
          className="sub-category accessories-category"
          onMouseEnter={() => HandleMouseOver2("accessoriesCategory")}
          onMouseLeave={() => HandleMouseOver2("")}
        >
          <div className="accessories-content">
            <div className="accessories-image">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4cf81114822447.604f1f73abc18.jpg"
                alt=""
              />
            </div>
            <div className="accessories-list">
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isHovering2 === "accessoriesCategory" && (
        <div
          className="sub-category accessories-category"
          onMouseEnter={() => HandleMouseOver2("accessoriesCategory")}
          onMouseLeave={() => HandleMouseOver2("")}
        >
          <div className="accessories-content">
            <div className="accessories-image">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4cf81114822447.604f1f73abc18.jpg"
                alt=""
              />
            </div>
            <div className="accessories-list">
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isHovering === "accessories" && (
        <div
          className="sub-category accessories-category"
          onMouseEnter={() => HandleMouseOver2("accessoriesCategory")}
          onMouseLeave={() => HandleMouseOver2("")}
        >
          <div className="accessories-content">
            <div className="accessories-image">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4cf81114822447.604f1f73abc18.jpg"
                alt=""
              />
            </div>
            <div className="accessories-list">
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
              <ul className="accessories-list-categories">
                <li className="list-head-category list-head-category-main">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
                <li className="list-head-category list-head-category-sub">
                  Hello1
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isHovering === "trends" && (
        <div className="sub-category trends-category">
          <h1>hello3</h1>
        </div>
      )}
      {isHovering === "NewIn" && (
        <div className="sub-category NewIn-category">
          <h1>Hello4</h1>
        </div>
      )}
    </>
  );
};
export default Header;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const Headline = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--bg-color-mid);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  @media (max-width: 1024px) {
    // height: 80px;
    margin-bottom: 30px;
  }
`;
const HeaderMain = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom 1px solid #DADCE0;
  li {
    list-style: none;
    padding: 15px 20px;
    margin: 0;
    
  }
  li a {
    cursor: pointer;
    color : #2d2d2d;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }
  
  
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const HeaderCenter = styled.div`
  p {
    color: var(--bg-color-mid);
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 17px;
  }
  p a {
    color: var(--bg-color-mid);
  }

  @media (max-width: 1450px) {
    width: 100%;
    overflow: hidden;
    position: absolute;
    text-align: center;
    left: -5px;
    top: 13.5%;
    z-index: 1;
  }
  @media (max-width: 1024px) {
    top: 12%;
    p {
      padding: 0 20px;
    }
  }
  @media (max-width: 500px) {
    top: 11%;
    p {
      padding: 0 10px;
      font-size: 10px;
      font-weight: bold;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const CompanyTitle = styled.div`
  padding: 0 10px;
  // display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px auto;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
    font-weight: 600;
  }
  div {
    @media (min-width: 1024px) {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    background-color: #f7f8f9;
    position: relative;
    top: -50px;
  }
  @media (max-width: 600px) {
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 440px) {
    a {
      font-size: 1rem;
    }
  }
`;
const Categories = styled.div`
  position: sticky;
  // z-index: 10000000;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li {
    position: relative;
  }
  ul li a:hover {
    border-bottom: 2px solid var(--bg-color-mid);
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: 600;
  }
  li {
    list-style: none;
    padding: 0 40px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
