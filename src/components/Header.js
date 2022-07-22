import React, { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import {NavLink} from "react-router-dom";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import "./style.css";
import {DELETE} from "../redux/actions/action";
import { useDispatch } from "react-redux";


const Header = () => {

  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DELETE(id));
  }

  const total = () =>{
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  },[total])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand mx-4"
            to="#"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Add to Cart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink active"
                  aria-current="page"
                  to="#"
                  style={{ cursor: "pointer", textDecoration: "none", color:"white" }}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="badge mx-5">
            <Badge
              badgeContent={getData.length}
              color="warning"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                className="fa-solid fa-cart-shopping text-light"
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              ></i>
            </Badge>
          </div>
        </div>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: "10px"}}
            >
              <table>
                <thead>
                  <tr style={{textAlign:"center"}}>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
  
                <tbody>
                  {
                    getData.map((e) => {
                      return(
                        <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img src={e.imgdata} alt="" style={{height:"5rem", width:"5rem", margin:"1rem 0.5rem"}}/>  
                            </NavLink>
                          </td>
                          <td style={{paddingLeft:"3rem"}}>
                            <p></p>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>Quantity :  {e.qnty}</p>
                            <p style={{color:"red", fontSize:"20px", cursor:"pointer"}} onClick={() => dlt(e.id)}>
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td className="mt-5" style={{color:"red", fontSize:"20px", cursor:"pointer"}} onClick={() => dlt(e.id)}>
                          <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                        </>
                      )
                    })
                  }
                  <p className="text-center">Total : ₹ {price}</p>
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: "10px", position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "20px",
                  fontSize: "23px",
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: "22px" }}>Your Cart is Empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: "10px" }}
              />
            </div>
          )}
        </Menu>
      </nav>
    </>
  );
};

export default Header;
