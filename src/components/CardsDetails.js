import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./style.css";
import { useSelector } from "react-redux";
import {DELETE, ADD, REMOVE} from "../redux/actions/action";
import { useDispatch } from "react-redux";

const CardsDetails = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
    
  const [data, setData] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData)

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  //add data
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  //remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  }

  const dlt = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-5">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      src={ele.imgdata}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant :</strong> {ele.rname}
                          </p>
                          <p>
                            <strong>Price :</strong> ₹ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes :</strong> {ele.address}
                          </p>
                          <p>
                            <strong>Total :</strong> ₹ {ele.price * ele.qnty}
                          </p>
                          <div className="mt-5 d-flex justify-content-between align-items-center" style={{borderRadius:"5px", width:"80px", cursor:"pointer", backgroundColor:"#ddd", color:"#111"}}>
                                <span style={{fontSize:"24px"}} onClick={ele.qnty <= 1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                                <span style={{fontSize:"22px"}}>{ele.qnty}</span>
                                <span style={{fontSize:"24px"}} onClick={()=>send(ele)}>+</span>
                          </div>
                        </td>

                        <td>
                          <p>
                            <strong>Rating :</strong>
                            <span
                              style={{
                                backgroundColor: "green",
                                color: "white",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >

                              {ele.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong> {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove :</strong>

                            <i
                              className="fas fa-trash"
                              onClick={() => dlt(ele.id)}
                              style={{
                                color: "red",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
