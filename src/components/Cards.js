import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Cardsdata from "./CardsData";
import './style.css';
import { ADD } from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center mt-3">Add to Cart Projects</h2>
        <div className="row d-flex justify-content-center align-item-center">
          {data.map((element, id) => {
            return(
            <>
              <div className="card mx-4 mt-4 card_style" style={{ width: "22rem", border:"none" }}>
                <img src={element.imgdata} className="card-img-top mt-4" alt="..." style={{height:"16rem"}}/>
                <div className="card-body">
                  <h5 className="card-title">{element.rname}</h5>
                  <p className="card-text">
                    Price: ₹ {element.price}
                  </p>
                  <div className="button_div d-flex justify-content-center">
                  <NavLink to="#" className="btn btn-primary col-lg-12" onClick={() => send(element)}>
                    Add to Cart
                  </NavLink>
                  </div>
                </div>
              </div>
            </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
